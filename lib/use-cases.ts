export type Category = "Inside Sales" | "Outside Sales";

export interface UseCase {
  id: string;
  title: string;
  description: string;
  category: Category;
  prompts: string[];
  featureNote?: string;
}

export const USE_CASES: UseCase[] = [
  // Inside Sales
  {
    id: "part-number-formatting",
    title: "Part Number Formatting for Web Quotes",
    description:
      "Customer sends part numbers and quantities in a messy format. Use AI to instantly reformat them with proper spacing so they're ready to paste into the Proax quoting system.",
    category: "Inside Sales",
    prompts: [
      "Clean up these part numbers and quantities into two columns with consistent spacing — Part Number | Qty — ready to paste into our quoting system: [paste raw text]",
      "The customer sent this list. Reformat each line so part number and quantity are separated with a tab or consistent space: [paste list]",
    ],
  },
  {
    id: "competitor-cross-reference",
    title: "Competitor Part Number Cross-Reference",
    description:
      "Customer sends competitor part numbers. Use AI to identify equivalent or superior alternatives from Proax-represented manufacturers.",
    category: "Inside Sales",
    prompts: [
      "Customer sent these competitor part numbers. Cross-reference to Proax-represented manufacturers and suggest equivalent or superior alternatives: Keyence IV2-G500CA, Festo SY5120-5LZ",
      "Map these OEM part numbers to the closest equivalents in our represented lines. Note any spec differences: [paste list]",
    ],
    featureNote: "Requires the Activation Search feature to be enabled for best results.",
  },
  {
    id: "customer-clarification-email",
    title: "Customer Clarification Email",
    description:
      "Request missing technical details before proceeding with a quote — professional and efficient.",
    category: "Inside Sales",
    prompts: [
      "Draft a professional email requesting operating voltage, IP rating, and environmental conditions before we proceed with quoting.",
      "Write a short clarification email asking the customer to confirm mounting orientation and cable length requirements for their sensor order.",
    ],
  },
  {
    id: "backorder-notification-email",
    title: "Backorder Notification Email",
    description:
      "Communicate extended lead times clearly while keeping the customer relationship intact and offering alternatives.",
    category: "Inside Sales",
    prompts: [
      "Write a customer-friendly email explaining extended lead times on their order and offering alternative solutions.",
      "Draft a backorder email for a customer waiting on a Festo pneumatic valve. Lead time is 8 weeks. Suggest we review alternatives or partial ship what's available.",
    ],
  },
  {
    id: "quote-follow-up-email",
    title: "Quote Follow-Up Email",
    description:
      "Reconnect with a customer after sending a quote — consultative tone, not pushy.",
    category: "Inside Sales",
    prompts: [
      "Draft a consultative follow-up email for a quote sent 7 days ago. We haven't heard back. Keep it brief and offer to answer questions or adjust the spec.",
      "Write a follow-up email for a large automation quote. The customer mentioned budget pressure. Position our value-add services as part of the response.",
    ],
  },

  // Outside Sales
  {
    id: "strategic-account-positioning",
    title: "Strategic Account Line Positioning",
    description:
      "Identify which Proax manufacturer lines to push into an account based on what they're currently buying and their industry profile.",
    category: "Outside Sales",
    prompts: [
      "Customer: Tier 1 automotive stamping plant. Current purchases: basic photoeyes and inductive sensors. Identify 5 Proax-represented lines we should strategically position next and explain why.",
      "Analyze this customer profile (food processing, high washdown environment). Recommend which Proax lines are most aligned with their needs.",
      "Identify cross-sell opportunities based on a customer currently buying only safety scanners.",
    ],
  },
  {
    id: "competitive-positioning",
    title: "Competitive Positioning & Objection Handling",
    description:
      "Prepare talking points to defend Proax's value and position our lines against competitors in the field.",
    category: "Outside Sales",
    prompts: [
      "Generate talking points to position Wenglor vision solutions against Keyence.",
      "How do we position Proax as a value-added distributor versus buying direct from an OEM?",
      "Customer says Brand X is cheaper. Generate positioning language to defend our offering without discounting.",
      "List differentiators between our safety portfolio and Rockwell-integrated solutions.",
    ],
  },
  {
    id: "pre-meeting-preparation",
    title: "Pre-Meeting Preparation Brief",
    description:
      "Walk into any customer meeting more prepared than your competitors. Generate a full briefing including industry context, pain points, relevant lines, and likely objections.",
    category: "Outside Sales",
    prompts: [
      "Prepare a pre-meeting brief for a pharmaceutical manufacturer exploring robotic palletizing. Include: industry challenges, likely automation pain points, relevant Proax lines, and potential objections.",
      "I'm visiting a Tier 2 automotive supplier next week. They run mostly manual assembly. Build a pre-call brief including what automation questions to ask and which lines to introduce.",
      "Create a pre-meeting summary for a food & beverage plant that recently had a safety audit. What should I lead with?",
    ],
  },
  {
    id: "executive-level-communication",
    title: "Executive-Level Communication",
    description:
      "Communicating with plant managers, VPs, and directors requires a different tone and framing. Use AI to draft polished, concise executive-facing messages that lead with business value.",
    category: "Outside Sales",
    prompts: [
      "Draft a concise executive email summarizing the benefits of implementing a machine vision inspection system.",
      "Write a follow-up email after a plant tour highlighting key improvement opportunities.",
    ],
  },
  {
    id: "objection-handling",
    title: "Objection Handling",
    description:
      "Live support before or after difficult meetings. Generate strategic responses to the most common customer objections so you walk in — or recover — with confidence.",
    category: "Outside Sales",
    prompts: [
      "Customer says they don't have budget this year. Generate 3 strategic responses.",
      "Customer says they prefer to standardize on Brand X. Suggest positioning to introduce our line.",
      "Generate questions to uncover hidden pain points when customer says 'everything is working fine.'",
    ],
  },
];

export const CATEGORIES: Category[] = ["Inside Sales", "Outside Sales"];
