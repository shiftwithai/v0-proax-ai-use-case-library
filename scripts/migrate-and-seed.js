import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS use_cases (
      id           TEXT PRIMARY KEY,
      title        TEXT NOT NULL,
      description  TEXT NOT NULL,
      category     TEXT NOT NULL,
      prompts      TEXT[] NOT NULL DEFAULT '{}',
      feature_note TEXT,
      is_seed      BOOLEAN NOT NULL DEFAULT FALSE,
      created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  console.log("Table created.");

  const seedData = [
    {
      id: "part-number-formatting",
      title: "Part Number Formatting for Web Quotes",
      description: "Customer sends part numbers and quantities in a messy format. Use AI to instantly reformat them with proper spacing so they're ready to paste into the Proax quoting system.",
      category: "Inside Sales",
      prompts: [
        "Clean up these part numbers and quantities into two columns with consistent spacing — Part Number | Qty — ready to paste into our quoting system: [paste raw text]",
        "The customer sent this list. Reformat each line so part number and quantity are separated with a tab or consistent space: [paste list]",
      ],
      feature_note: null,
    },
    {
      id: "competitor-cross-reference",
      title: "Competitor Part Number Cross-Reference",
      description: "Customer sends competitor part numbers. Use AI to identify equivalent or superior alternatives from Proax-represented manufacturers.",
      category: "Inside Sales",
      prompts: [
        "Customer sent these competitor part numbers. Cross-reference to Proax-represented manufacturers and suggest equivalent or superior alternatives: Keyence IV2-G500CA, Festo SY5120-5LZ",
        "Map these OEM part numbers to the closest equivalents in our represented lines. Note any spec differences: [paste list]",
      ],
      feature_note: "Requires the Activation Search feature to be enabled for best results.",
    },
    {
      id: "customer-clarification-email",
      title: "Customer Clarification Email",
      description: "Request missing technical details before proceeding with a quote — professional and efficient.",
      category: "Inside Sales",
      prompts: [
        "Draft a professional email requesting operating voltage, IP rating, and environmental conditions before we proceed with quoting.",
        "Write a short clarification email asking the customer to confirm mounting orientation and cable length requirements for their sensor order.",
      ],
      feature_note: null,
    },
    {
      id: "backorder-notification-email",
      title: "Backorder Notification Email",
      description: "Communicate extended lead times clearly while keeping the customer relationship intact and offering alternatives.",
      category: "Inside Sales",
      prompts: [
        "Write a customer-friendly email explaining extended lead times on their order and offering alternative solutions.",
        "Draft a backorder email for a customer waiting on a Festo pneumatic valve. Lead time is 8 weeks. Suggest we review alternatives or partial ship what's available.",
      ],
      feature_note: null,
    },
    {
      id: "quote-follow-up-email",
      title: "Quote Follow-Up Email",
      description: "Reconnect with a customer after sending a quote — consultative tone, not pushy.",
      category: "Inside Sales",
      prompts: [
        "Draft a consultative follow-up email for a quote sent 7 days ago. We haven't heard back. Keep it brief and offer to answer questions or adjust the spec.",
        "Write a follow-up email for a large automation quote. The customer mentioned budget pressure. Position our value-add services as part of the response.",
      ],
      feature_note: null,
    },
    {
      id: "strategic-account-positioning",
      title: "Strategic Account Line Positioning",
      description: "Identify which Proax manufacturer lines to push into an account based on what they're currently buying and their industry profile.",
      category: "Outside Sales",
      prompts: [
        "Customer: Tier 1 automotive stamping plant. Current purchases: basic photoeyes and inductive sensors. Identify 5 Proax-represented lines we should strategically position next and explain why.",
        "Analyze this customer profile (food processing, high washdown environment). Recommend which Proax lines are most aligned with their needs.",
        "Identify cross-sell opportunities based on a customer currently buying only safety scanners.",
      ],
      feature_note: null,
    },
    {
      id: "competitive-positioning",
      title: "Competitive Positioning & Objection Handling",
      description: "Prepare talking points to defend Proax's value, position our lines against competitors, and handle tough objections in the field — before or after difficult meetings.",
      category: "Outside Sales",
      prompts: [
        "Generate talking points to position Wenglor vision solutions against Keyence.",
        "How do we position Proax as a value-added distributor versus buying direct from an OEM?",
        "Customer says Brand X is cheaper. Generate positioning language to defend our offering without discounting.",
        "List differentiators between our safety portfolio and Rockwell-integrated solutions.",
        "Customer says they don't have budget this year. Generate 3 strategic responses.",
        "Customer says they prefer to standardize on Brand X. Suggest positioning to introduce our line.",
        "Generate questions to uncover hidden pain points when customer says 'everything is working fine.'",
      ],
      feature_note: null,
    },
    {
      id: "pre-meeting-preparation",
      title: "Pre-Meeting Preparation Brief",
      description: "Walk into any customer meeting more prepared than your competitors. Generate a full briefing including industry context, pain points, relevant lines, and likely objections.",
      category: "Outside Sales",
      prompts: [
        "Prepare a pre-meeting brief for a pharmaceutical manufacturer exploring robotic palletizing. Include: industry challenges, likely automation pain points, relevant Proax lines, and potential objections.",
        "I'm visiting a Tier 2 automotive supplier next week. They run mostly manual assembly. Build a pre-call brief including what automation questions to ask and which lines to introduce.",
        "Create a pre-meeting summary for a food & beverage plant that recently had a safety audit. What should I lead with?",
      ],
      feature_note: null,
    },
    {
      id: "executive-level-communication",
      title: "Executive-Level Communication",
      description: "Communicating with plant managers, VPs, and directors requires a different tone and framing. Use AI to draft polished, concise executive-facing messages that lead with business value.",
      category: "Outside Sales",
      prompts: [
        "Draft a concise executive email summarizing the benefits of implementing a machine vision inspection system.",
        "Write a follow-up email after a plant tour highlighting key improvement opportunities.",
      ],
      feature_note: null,
    },
    {
      id: "automation-architecture",
      title: "Automation Architecture Recommendation",
      description: "Generate a complete automation architecture for complex projects using Proax lines only — covering sensors, safety, IO, HMI, and connectivity in one structured output.",
      category: "Project & Engineering",
      prompts: [
        "Recommend a complete automation architecture for a robotic palletizing cell including: Sensors, Safety, IO, HMI, Connectivity. Use Proax lines only.",
        "Design an automation architecture for a conveyor-based inspection system in a food & beverage plant. Include all layers from field devices to data connectivity.",
      ],
      feature_note: null,
    },
    {
      id: "compatibility-integration-risk",
      title: "Compatibility & Integration Risk Checks",
      description: "Prevent technical mismatches before quoting or ordering. Flag communication conflicts, protocol gaps, and integration risks across multi-brand configurations.",
      category: "Project & Engineering",
      prompts: [
        "Identify potential compatibility risks between: Turck IO-Link masters, Banner safety controllers, and a third-party PLC.",
        "Review this proposed multi-brand configuration and flag possible integration or communication issues.",
        "Identify risks of mixing Brand A safety scanner with Brand B safety relay.",
      ],
      feature_note: null,
    },
    {
      id: "application-feasibility",
      title: "Application Feasibility Assessment",
      description: "Quickly determine if a proposed solution is technically realistic before committing engineering hours or quoting a customer.",
      category: "Project & Engineering",
      prompts: [
        "Evaluate feasibility of using 2D vision for detecting hairline cracks in aluminum wheels.",
        "What technical limitations should we consider for high-speed conveyor inspection at 1 m/s?",
        "Identify environmental risks for using standard photoelectric sensors in a washdown meat processing plant.",
      ],
      feature_note: null,
    },
    {
      id: "technical-documentation",
      title: "Technical Documentation Acceleration",
      description: "Reduce time spent writing structured engineering documents. Convert raw notes, emails, and specs into polished deliverables in minutes.",
      category: "Project & Engineering",
      prompts: [
        "Convert these raw engineering notes into a structured Functional Design Specification.",
        "Create a FAT checklist for a conveyor-based inspection system.",
        "Draft a control narrative for a robotic loading cell.",
        "Summarize this technical email thread into a clean internal engineering update.",
      ],
      feature_note: null,
    },
    {
      id: "change-order-scope-control",
      title: "Change Order & Scope Control",
      description: "Protect project margin by documenting scope changes clearly and professionally — before they become disputed extras.",
      category: "Project & Engineering",
      prompts: [
        "Draft a change order summary explaining added safety guarding requirements.",
        "Summarize scope creep risks in this revised customer specification.",
        "Create a professional explanation of why additional engineering hours are required.",
      ],
      feature_note: null,
    },
    {
      id: "technical-to-sales-translation",
      title: "Technical-to-Sales Translation",
      description: "Bridge the gap between engineering detail and business language. Help Sales explain technical decisions to non-technical stakeholders with confidence.",
      category: "Project & Engineering",
      prompts: [
        "Translate this technical explanation into customer-friendly language.",
        "Explain why this higher-end sensor is justified versus a basic alternative.",
        "Summarize this technical architecture in executive-level language.",
      ],
      feature_note: null,
    },
    {
      id: "knowledge-capture",
      title: "Knowledge Capture & Standardization",
      description: "Reduce dependency on tribal knowledge by converting project experience into reusable, structured documentation for the team.",
      category: "Project & Engineering",
      prompts: [
        "Convert this project debrief into a structured lessons-learned document.",
        "Create a reusable application guide for aluminum wheel inspection.",
        "Summarize best practices for integrating IO-Link devices.",
      ],
      feature_note: null,
    },
  ];

  for (const item of seedData) {
    await sql`
      INSERT INTO use_cases (id, title, description, category, prompts, feature_note, is_seed)
      VALUES (
        ${item.id},
        ${item.title},
        ${item.description},
        ${item.category},
        ${item.prompts},
        ${item.feature_note},
        TRUE
      )
      ON CONFLICT (id) DO NOTHING
    `;
  }

  console.log("Seeded " + seedData.length + " use cases.");
}

main().catch((err) => { console.error(err); process.exit(1); });
