import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const sql = neon(process.env.DATABASE_URL!);

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await sql`DELETE FROM use_cases WHERE id = ${id} AND is_seed = false`;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[v0] DELETE /api/use-cases error:", err);
    return NextResponse.json({ error: "Failed to delete use case" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { title, description, category, prompts, featureNote, ss, thumbnail, title_fr, description_fr, category_fr, prompts_fr } = body;
    const [row] = await sql`
      UPDATE use_cases
      SET title = ${title},
          description = ${description},
          category = ${category},
          prompts = ${JSON.stringify(prompts)},
          feature_note = ${featureNote || null},
          ss = ${ss ?? false},
          thumbnail = ${thumbnail || null},
          title_fr = ${title_fr || null},
          description_fr = ${description_fr || null},
          category_fr = ${category_fr || null},
          prompts_fr = ${prompts_fr?.length ? JSON.stringify(prompts_fr) : null},
          updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;
    return NextResponse.json(row);
  } catch (err) {
    console.error("[v0] PUT /api/use-cases error:", err);
    return NextResponse.json({ error: "Failed to update use case" }, { status: 500 });
  }
}
