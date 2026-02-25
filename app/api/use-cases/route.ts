import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const sql = neon(process.env.DATABASE_URL!);

export async function GET() {
  try {
    const rows = await sql`SELECT * FROM use_cases ORDER BY created_at ASC`;
    return NextResponse.json(rows);
  } catch (err) {
    console.error("[v0] GET /api/use-cases error:", err);
    return NextResponse.json({ error: "Failed to fetch use cases" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, title, description, category, prompts, featureNote, ss } = body;
    const [row] = await sql`
      INSERT INTO use_cases (id, title, description, category, prompts, is_seed, feature_note, ss, updated_at)
      VALUES (${id}, ${title}, ${description}, ${category}, ${JSON.stringify(prompts)}, false, ${featureNote || null}, ${ss ?? false}, NOW())
      ON CONFLICT (id) DO UPDATE
        SET title = EXCLUDED.title,
            description = EXCLUDED.description,
            category = EXCLUDED.category,
            prompts = EXCLUDED.prompts,
            feature_note = EXCLUDED.feature_note,
            ss = EXCLUDED.ss,
            updated_at = NOW()
      RETURNING *
    `;
    return NextResponse.json(row, { status: 201 });
  } catch (err) {
    console.error("[v0] POST /api/use-cases error:", err);
    return NextResponse.json({ error: "Failed to save use case" }, { status: 500 });
  }
}
