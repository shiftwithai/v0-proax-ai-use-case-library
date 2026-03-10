import { type Category } from "./use-cases";

export interface UseCaseData {
  id: string;
  title: string;
  description: string;
  category: Category;
  prompts: string[];
  featureNote?: string | null;
  ss: boolean;
  thumbnail?: string | null;
  title_fr?: string | null;
  description_fr?: string | null;
  category_fr?: string | null;
  prompts_fr?: string[] | null;
}

export const USE_CASES_DATA: UseCaseData[] = [
  {
    id: "a1b7f2c0-1c3d-4e7b-9f01-6a4d9f9a1001",
    title: "AR Follow-Up Email",
    description: "Draft a professional and consistent email to follow up on overdue invoices while maintaining strong customer relationships.",
    category: "Accounting",
    prompts: [
      "Write a professional follow-up email to [Customer Name] regarding invoice [Invoice Number] dated [Invoice Date], which is now [X] days overdue. The outstanding amount is [$Amount]. Keep the tone professional and relationship-focused. Offer to provide copies of the invoice or clarify any discrepancies."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049753/AR_Follow-Up_Email_cdjdhe.jpg",
    title_fr: "Courriel de suivi des comptes clients",
    description_fr: "Rédiger un courriel professionnel et cohérent pour effectuer le suivi de factures en souffrance tout en maintenant de solides relations avec la clientèle.",
    category_fr: "Comptabilité",
    prompts_fr: [
      "Rédigez un courriel de suivi professionnel à l'intention de [Nom du client] concernant la facture [Numéro de facture] datée du [Date de la facture], qui est maintenant en retard de [X] jours. Le montant impayé est de [$Montant]. Gardez un ton professionnel et axé sur la relation d'affaires. Proposez de fournir des copies de la facture ou d'éclaircir toute divergence."
    ]
  },
  {
    id: "d4e0f5g3-4f6g-7h0e-c304-9d7g2h2d4004",
    title: "Margin Explanation for Sales",
    description: "Explain financial variances or margin changes in simple language for non-financial team members.",
    category: "Accounting",
    prompts: [
      "Explain the following margin variance in simple, non-financial language that a sales rep can understand: [paste variance details]. Clarify the cause, the impact on profitability, and any recommended actions."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049752/Margin_Explanation_for_Sales_tgc2fw.jpg",
    title_fr: "Explication de la marge pour les ventes",
    description_fr: "Expliquer les écarts financiers ou les variations de marge en langage simple pour les membres de l'équipe non financiers.",
    category_fr: "Comptabilité",
    prompts_fr: [
      "Expliquer l'écart de marge suivant dans un langage simple et non financier qu'un représentant des ventes peut comprendre : [insérer les détails de l'écart]. Préciser la cause, l'impact sur la rentabilité et les actions recommandées."
    ]
  },
  {
    id: "e5f1g6h4-5g7h-8i1f-d405-0e8h3i3e5005",
    title: "Month-End Closing Checklist",
    description: "Create or refine structured accounting checklists to ensure consistent month-end processes.",
    category: "Accounting",
    prompts: [
      "Create a structured month-end closing checklist for a multi-manufacturer industrial automation distributor. Include AR, AP, inventory reconciliation, rebate tracking, and reporting steps."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049753/Month-End_Closing_Checklist_osxorq.jpg",
    title_fr: "Liste de contrôle de clôture mensuelle",
    description_fr: "Créer ou raffiner des listes de contrôle comptables structurées afin d'assurer l'uniformité des processus de fin de mois.",
    category_fr: "Comptabilité",
    prompts_fr: [
      "Créer une liste de contrôle structurée pour la clôture de fin de mois d'un distributeur d'automatisation industrielle multi-fabricant. Inclure les comptes clients, les comptes fournisseurs, la conciliation des stocks, le suivi des ristournes et les étapes de production de rapports."
    ]
  },
  {
    id: "c3d9e4f2-3e5f-6g9d-b203-8c6f1g1c3003",
    title: "Rebate Agreement Summary",
    description: "Summarize complex vendor rebate agreements into clear internal highlights and risk notes.",
    category: "Accounting",
    prompts: [
      "Summarize the following vendor rebate agreement. Highlight key thresholds, deadlines, reporting requirements, payout structure, and any risks or compliance considerations. Present the summary in clear bullet points suitable for internal leadership review: [paste agreement text]."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049752/Rebate_Agreement_Summary_sqdxha.jpg",
    title_fr: "Résumé de l'entente de remise",
    description_fr: "Résumer les ententes complexes de remises de fournisseurs en points saillants internes clairs et en notes sur les risques.",
    category_fr: "Comptabilité",
    prompts_fr: [
      "Résumez l'entente de remise fournisseur suivante. Mettez en évidence les seuils clés, les échéances, les exigences de rapport, la structure de paiement et tout risque ou considération de conformité. Présentez le résumé sous forme de points clairs adaptés à une revue interne par la direction : [coller le texte de l'entente]."
    ]
  },
  {
    id: "b2c8d3e1-2d4e-5f8c-a102-7b5e0f0b2002",
    title: "Vendor Invoice Discrepancy",
    description: "Generate clear communication to vendors when pricing, freight, or quantities do not match the purchase order.",
    category: "Accounting",
    prompts: [
      "Draft a professional email to [Vendor Name] regarding invoice [Invoice Number]. The invoice does not match our purchase order [PO Number] due to [describe discrepancy – pricing difference, freight charges, quantity variance, etc.]. Request clarification or a corrected invoice while keeping the tone professional and collaborative."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049753/Vendor_Invoice_Discrepancy_umlzfu.jpg",
    title_fr: "Écart de facturation fournisseur",
    description_fr: "Produire des communications claires aux fournisseurs lorsque le prix, le transport ou les quantités ne correspondent pas au bon de commande.",
    category_fr: "Comptabilité",
    prompts_fr: [
      "Rédiger un courriel professionnel à l'intention de [Nom du fournisseur] concernant la facture [Numéro de facture]. La facture ne correspond pas à notre bon de commande [Numéro de bon de commande] en raison de [décrire l'écart – différence de prix, frais de transport, écart de quantité, etc.]. Demander des clarifications ou une facture corrigée tout en conservant un ton professionnel et collaboratif."
    ]
  },
  {
    id: "4a1f25fb-4103-43a6-9811-7f65ee05d057",
    title: "LinkedIn & Social Content",
    description: "Generate professional LinkedIn posts that build Proax's brand without sounding like a hard sell.",
    category: "Business Development",
    prompts: [
      "Write a professional LinkedIn post for Proax on the topic of [topic, e.g. a new vendor partnership, a trade show we're attending, an industry trend, a customer success story]. Keep the tone knowledgeable and approachable. Avoid sounding like a hard sell. Aim for [short and punchy / 150–200 words]. Include a call to action at the end."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049756/LinkedIn___Social_Content_nwh0g3.jpg",
    title_fr: "Contenu LinkedIn et médias sociaux",
    description_fr: "Générer des publications LinkedIn professionnelles qui renforcent l'image de marque de Proax sans avoir l'air d'une vente sous pression.",
    category_fr: "Développement commercial",
    prompts_fr: [
      "Rédigez une publication LinkedIn professionnelle pour Proax sur le thème de [sujet, ex. : un nouveau partenariat fournisseur, un salon professionnel auquel nous participons, une tendance du secteur, une histoire de succès client]. Gardez un ton professionnel et accessible. Évitez d'avoir l'air d'un argumentaire de vente forcé. Visez [court et percutant / 150 à 200 mots]. Incluez un appel à l'action à la fin."
    ]
  },
  {
    id: "184422cd-978a-4497-bd39-226d025e3575",
    title: "Market & Industry Research",
    description: "Quickly understand a new vertical or market before pursuing it as a growth opportunity.",
    category: "Business Development",
    prompts: [
      "Research [industry / vertical / region, e.g. food & beverage manufacturing in Ontario]. Summarize the current landscape, key trends, common automation challenges, and potential opportunity areas relevant to an industrial automation distributor like Proax. Highlight any growth areas or pain points we could address."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049757/Market___Industry_Research_gvalum.jpg",
    title_fr: "Études de marché et de l'industrie",
    description_fr: "Comprendre rapidement un nouveau marché vertical ou un nouveau marché avant de l'envisager comme une opportunité de croissance.",
    category_fr: "Développement commercial",
    prompts_fr: [
      "Faites une recherche sur [secteur / vertical / région, ex. : fabrication d'aliments et de boissons en Ontario]. Résumez le paysage actuel, les tendances clés, les défis courants liés à l'automatisation et les créneaux potentiels pertinents pour un distributeur d'automatisation industrielle comme Proax. Mettez en évidence les secteurs de croissance ou les points de friction que nous pourrions cibler."
    ]
  },
  {
    id: "5f4cea36-0ef8-443f-a14a-2958a5c2dd4c",
    title: "Opportunity Qualification Summary",
    description: "Evaluate whether a new account or vertical is a strong fit for Proax before investing time.",
    category: "Business Development",
    prompts: [
      "I am evaluating a potential opportunity with [Company Name] in the [industry] sector. Here is what I know: [paste in context — company size, what they've asked about, current suppliers, potential spend, etc.]. Summarize the opportunity, assess the fit for Proax based on what I've described, identify any gaps or risks, and suggest recommended next steps."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049756/Opportunity_Qualification_Summary_wgnaav.jpg",
    title_fr: "Résumé de la qualification de l'opportunité",
    description_fr: "Évaluer si un nouveau compte ou un nouveau marché vertical est pertinent pour Proax avant d'y investir du temps.",
    category_fr: "Développement commercial",
    prompts_fr: [
      "Je suis en train d'évaluer une occasion d'affaires potentielle avec [Nom de l'entreprise] dans le secteur de [industrie]. Voici ce que je sais : [insérer le contexte — taille de l'entreprise, leurs demandes, fournisseurs actuels, dépenses potentielles, etc.]. Résumez l'opportunité, évaluez la compatibilité pour Proax selon ma description, identifiez les lacunes ou les risques, et suggérez les prochaines étapes recommandées."
    ]
  },
  {
    id: "90c05c61-f334-41f7-842f-4287727a87e5",
    title: "Outbound Outreach Email",
    description: "Write a compelling cold outreach email that opens the door without being pushy.",
    category: "Business Development",
    prompts: [
      "Write a professional cold outreach email to [Contact Name / Title] at [Company Name] in the [industry] sector. Proax is an industrial automation distributor representing brands like [list 1–2 relevant brands]. The goal is to introduce Proax and open the door for a conversation. Keep it concise, relevant to their industry, and end with a low-commitment call to action."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049756/Outbound_Outreach_Email_qkvrzq.jpg",
    title_fr: "Courriel de prospection sortante",
    description_fr: "Rédigez un courriel de prospection percutant qui ouvre la porte sans être trop insistant.",
    category_fr: "Développement commercial",
    prompts_fr: [
      "Rédigez un courriel de prospection percutant à l'attention de [Nom du contact / Titre] chez [Nom de l'entreprise] dans le secteur de [industrie]. Proax est un distributeur d'automatisation industrielle représentant des marques telles que [liste de 1 à 2 marques pertinentes]. L'objectif est de présenter Proax et d'ouvrir la porte à une conversation. Soyez concis, pertinent pour leur secteur et terminez par un appel à l'action sans pression."
    ]
  },
  {
    id: "ca2f4cf5-b986-43f8-8905-523f27e5d793",
    title: "Partnership or Vendor Proposal",
    description: "Draft a professional introduction or proposal for a new vendor or manufacturer relationship.",
    category: "Business Development",
    prompts: [
      "Draft a professional introductory email or proposal to [Vendor / Manufacturer Name] about [partnership opportunity / becoming an authorized distributor / expanding our current agreement]. Here is the context: [paste relevant background]. Keep the tone confident and collaborative, and clearly outline what Proax brings to the table."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049756/Partnership_or_Vendor_Proposal_wkzbgl.jpg",
    title_fr: "Proposition de partenariat ou de fournisseur",
    description_fr: "Rédigez une introduction ou une proposition professionnelle pour une nouvelle relation avec un fournisseur ou un fabricant.",
    category_fr: "Développement commercial",
    prompts_fr: [
      "Rédigez un courriel d'introduction professionnel ou une proposition à l'intention de [Nom du fournisseur / fabricant] concernant [une opportunité de partenariat / devenir un distributeur agréé / l'élargissement de notre entente actuelle]. Voici le contexte : [insérer les informations pertinentes]. Gardez un ton assuré et collaboratif, et soulignez clairement ce que Proax apporte à l'entreprise."
    ]
  },
  {
    id: "142b0cf1-0403-46dd-8a60-00c4fa09ff86",
    title: "Presentation & Pitch Narrative",
    description: "Turn your notes into a compelling pitch or business case for any audience.",
    category: "Business Development",
    prompts: [
      "I need to put together a pitch for [audience, e.g. a prospective key account / internal leadership / a vendor partner]. Here is the context and key points I want to cover: [paste in your notes or bullet points]. Write a clear, compelling narrative I can use as the backbone of a presentation or business case. Highlight the value Proax brings and end with a strong close."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049756/Presentation___Pitch_Narrative_ymip47.jpg",
    title_fr: "Présentation et récit de pitch",
    description_fr: "Transformez vos notes en un argumentaire ou une analyse de rentabilisation convaincante pour n'importe quel public.",
    category_fr: "Développement commercial",
    prompts_fr: [
      "J'ai besoin de préparer un pitch pour [public, ex. : un compte clé potentiel / la direction interne / un partenaire fournisseur]. Voici le contexte et les points saillants que je veux couvrir : [collez vos notes ou vos points d'intérêt]. Rédigez un récit clair et convaincant que je pourrai utiliser comme structure pour une présentation ou une analyse de rentabilisation. Mettez en valeur la valeur ajoutée par Proax et terminez par une conclusion percutante."
    ]
  },
  {
    id: "ac77940b-4300-450a-9075-5a9af2e96428",
    title: "Target Account Research",
    description: "Build a quick profile on a prospect before reaching out or visiting.",
    category: "Business Development",
    prompts: [
      "Find information about [Company Name] in [City/Region]. Summarize what they do, what industry they're in, their size if available, and any relevant news or recent developments. Identify potential automation or industrial supply needs we could address as their distributor."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049756/Target_Account_Research_oagrf5.jpg",
    title_fr: "Recherche sur les comptes cibles",
    description_fr: "Bâtissez un profil rapide sur un prospect avant de le contacter ou de lui rendre visite.",
    category_fr: "Développement commercial",
    prompts_fr: [
      "Trouvez des informations sur [Nom de l'entreprise] à [Ville/Région]. Résumez leurs activités, leur secteur d'activité, leur taille si disponible, ainsi que toute nouvelle ou tout développement récent pertinent. Identifiez les besoins potentiels en matière d'automatisation ou de fournitures industrielles que nous pourrions combler en tant que leur distributeur."
    ]
  },
  {
    id: "d0e6f1g5-0l2m-3n6k-i910-5j3m8n8j0010",
    title: "Internal Policy Drafting",
    description: "Create or refine HR policies in clear and consistent language.",
    category: "HR",
    prompts: [
      "Draft a clear internal policy for [policy topic – remote work, code of conduct, expense reimbursement, etc.]. Structure it with purpose, scope, responsibilities, and procedures in a professional tone suitable for an industrial distribution company."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049752/Internal_Policy_Drafting_rel9rm.jpg",
    title_fr: "Rédaction de politiques internes",
    description_fr: "Créer ou peaufiner des politiques RH dans un langage clair et uniforme.",
    category_fr: "HR",
    prompts_fr: [
      "Rédigez une politique interne claire concernant [sujet de la politique – télétravail, code de conduite, remboursement des dépenses, etc.]. Structurez-la avec l'objectif, la portée, les responsabilités et les procédures dans un ton professionnel adapté à une entreprise de distribution industrielle."
    ]
  },
  {
    id: "a7b3c8d2-7i9j-0k3h-f607-2g0j5k5g7007",
    title: "Interview Question Generator",
    description: "Generate structured interview questions aligned with role responsibilities and company culture.",
    category: "HR",
    prompts: [
      "Create a structured interview guide for a [Job Title] role. Include technical competency questions, behavioral questions, and cultural fit questions relevant to a fast-paced automation distribution environment."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049752/Interview_Question_Generator_bk6eyc.jpg",
    title_fr: "Générateur de questions d'entrevue",
    description_fr: "Produire des questions d'entrevue structurées alignées avec les responsabilités du poste et la culture de l'entreprise.",
    category_fr: "HR",
    prompts_fr: [
      "Créez un guide d'entretien structuré pour un poste de [Titre du poste]. Incluez des questions sur les compétences techniques, des questions comportementales et des questions sur l'adéquation culturelle pertinentes pour un environnement de distribution automatisé au rythme rapide."
    ]
  },
  {
    id: "f6a2b7c1-6h8i-9j2g-e506-1f9i4j4f6006",
    title: "Job Description Drafting",
    description: "Create clear and structured job descriptions for new or open roles within the company.",
    category: "HR",
    prompts: [
      "Draft a professional job description for a [Job Title] at Proax. The role is responsible for [key responsibilities]. Include required qualifications, preferred experience, and a short company overview tailored to an industrial automation distributor."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049752/Job_Description_Drafting_qfirvd.jpg",
    title_fr: "Rédaction de descriptions de postes",
    description_fr: "Rédiger des descriptions de poste claires et structurées pour les nouveaux rôles ou les postes à pourvoir au sein de l'entreprise.",
    category_fr: "HR",
    prompts_fr: [
      "Rédiger une description de poste professionnelle pour un [Titre du poste] chez Proax. Le titulaire du poste est responsable de [principales responsabilités]. Inclure les qualifications requises, l'expérience souhaitée et une brève présentation de l'entreprise adaptée à un distributeur d'automatisation industrielle."
    ]
  },
  {
    id: "b8c4d9e3-8j0k-1l4i-g708-3h1k6l6h8008",
    title: "Offer Letter Drafting",
    description: "Draft clear and professional employment offer letters.",
    category: "HR",
    prompts: [
      "Draft a professional employment offer letter for a [Job Title] position. Include start date, compensation details, reporting structure, and a welcoming tone consistent with Proax culture. Leave placeholders for salary and benefits details."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049752/Offer_Letter_Drafting_qatugl.jpg",
    title_fr: "Rédaction de la lettre d'offre",
    description_fr: "Rédiger des lettres d'offre d'emploi claires et professionnelles.",
    category_fr: "HR",
    prompts_fr: [
      "Rédigez une lettre d'offre d'emploi professionnelle pour un poste de [Titre du poste]. Incluez la date de début, les détails de la rémunération, la structure hiérarchique et un ton accueillant conforme à la culture de Proax. Laissez des espaces réservés pour le salaire et les détails des avantages sociaux."
    ]
  },
  {
    id: "c9d5e0f4-9k1l-2m5j-h809-4i2l7m7i9009",
    title: "Performance Review Summary",
    description: "Structure manager notes into a professional and balanced performance review summary.",
    category: "HR",
    prompts: [
      "Turn the following manager notes into a structured performance review summary. Highlight strengths, areas for development, and clear next-step goals. Keep the tone constructive and professional: [paste notes]."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049752/Performance_Review_Summary_gfyccc.jpg",
    title_fr: "Résumé de l'examen du rendement",
    description_fr: "Structurer les notes du gestionnaire en un résumé d'évaluation du rendement professionnel et équilibré.",
    category_fr: "HR",
    prompts_fr: [
      "Transformez les notes de gestionnaire suivantes en un résumé structuré de l'évaluation du rendement. Soulignez les points forts, les points à améliorer et fixez des objectifs clairs pour la suite. Maintenez un ton constructif et professionnel : [coller les notes]."
    ]
  },
  {
    id: "dee4ffdd-aac9-487d-9b31-700faa9415b4",
    title: "Call Prep – Customer & Product Summary",
    description: "Walk into every call prepared with a clear summary of the customer context and key talking points.",
    category: "Inside Sales",
    prompts: [
      "I have a call coming up with [Customer Name] at [Company Name]. Here is the context I have: [paste in any relevant notes, emails, or order history]. Summarize the key points I should know going into this call, suggest 2–3 questions I should ask, and highlight any open items or opportunities to address."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049753/Call_Prep___Customer___Product_Summary_vxmb7h.jpg",
    title_fr: "Préparation d'appel – Sommaire du client et du produit",
    description_fr: "Arrivez à chaque appel bien préparé avec un résumé clair du contexte client et des points de discussion clés.",
    category_fr: "Ventes internes",
    prompts_fr: [
      "J'ai un appel de prévu avec [Nom du client] de chez [Nom de l'entreprise]. Voici le contexte dont je dispose : [coller ici les notes, courriels ou l'historique de commandes pertinents]. Résume les points clés que je devrais connaître avant cet appel, suggère 2 ou 3 questions à poser et souligne les points en suspens ou les opportunités à aborder."
    ]
  },
  {
    id: "2c691e20-db29-412a-9022-fafcf277432f",
    title: "Customer Q&A Drafting",
    description: "Quickly draft accurate, professional responses to technical customer questions.",
    category: "Inside Sales",
    prompts: [
      "A customer is asking: '[paste customer question]'. The product is [product name / part number] from [manufacturer]. Find accurate information from the manufacturer's official documentation. Draft a clear, professional response I can send to the customer. If any part of the answer requires technical verification, flag it clearly."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049753/Customer_Q_A_Drafting_zuphjt.jpg",
    title_fr: "Rédaction de l'AQ des clients",
    description_fr: "Rédiger rapidement des réponses précises et professionnelles aux questions techniques des clients.",
    category_fr: "Ventes internes",
    prompts_fr: [
      "Un client pose la question suivante : '[coller la question du client]'. Le produit est [nom du produit / numéro de pièce] de [fabricant]. Trouvez des informations précises dans la documentation officielle du fabricant. Rédigez une réponse claire et professionnelle que je peux envoyer au client. Si une partie de la réponse nécessite une vérification technique, indiquez-le clairement."
    ]
  },
  {
    id: "94917e51-b662-4e1c-8297-697d55a15e52",
    title: "Follow-Up Emails",
    description: "Turn a quick note into a professional, action-driving follow-up email in seconds.",
    category: "Inside Sales",
    prompts: [
      "Write a professional follow-up email to [Customer Name] at [Company Name]. We spoke on [date] about [topic/product discussed]. The next step is [action item or what we're waiting on]. Keep the tone friendly but professional and end with a clear call to action."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049756/Follow-Up_Emails_qhnmwx.jpg",
    title_fr: "Courriels de suivi",
    description_fr: "Transformez une note rapide en un courriel de suivi professionnel et percutant en quelques secondes.",
    category_fr: "Ventes internes",
    prompts_fr: [
      "Écrivez un courriel de suivi professionnel à [Nom du client] chez [Nom de l'entreprise]. Nous avons discuté le [date] de [sujet/produit discuté]. La prochaine étape est [élément d'action ou ce que nous attendons]. Gardez un ton amical mais professionnel et terminez par un appel à l'action clair."
    ]
  },
  {
    id: "lead_time_response",
    title: "Lead Time Response",
    description: "Draft a professional response to a customer asking about product lead time and provide a direct ordering link if available.",
    category: "Inside Sales",
    prompts: [
      "Draft a concise inside sales reply confirming lead time {{LEAD_TIME}} for SKU {{SKU}} and include the purchase link {{PRODUCT_LINK}}. Do not include a signature."
    ],
    featureNote: null,
    ss: false,
    thumbnail: null,
    title_fr: "Réponse sur le délai de livraison",
    description_fr: "Rédige une réponse professionnelle à un client demandant le délai de livraison d'un produit et inclut un lien direct pour commander si disponible.",
    category_fr: "Ventes internes",
    prompts_fr: [
      "Rédige une réponse concise de ventes internes confirmant le délai {{LEAD_TIME}} pour le SKU {{SKU}} et inclue le lien d'achat {{PRODUCT_LINK}}. Ne pas inclure de signature."
    ]
  },
  {
    id: "712298d0-b101-4c14-a14a-3a1fb96fd1ed",
    title: "Product Cross-Referencing",
    description: "Find compatible alternatives when a product is unavailable or a customer is using a competitor part.",
    category: "Inside Sales",
    prompts: [
      "I need to find a cross-reference or equivalent for [competitor part number / product description] from [Brand]. Look up the original product specs and find a compatible alternative from [preferred brand, or 'any brand Proax carries']. Only reference information from the manufacturer's official website or authorized distributor sources. Flag anything that needs to be confirmed before quoting."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049755/Product_Cross-Referencing_abofst.jpg",
    title_fr: "Stratégies de recoupement de produits",
    description_fr: "Trouver des équivalents compatibles lorsqu'un produit est en rupture de stock ou qu'un client utilise une pièce d'un concurrent.",
    category_fr: "Ventes internes",
    prompts_fr: [
      "J'ai besoin de trouver une référence croisée ou un équivalent pour [numéro de pièce du concurrent / description du produit] de [Marque]. Recherchez les spécifications du produit d'origine et trouvez une alternative compatible de [marque préférée, ou 'n'importe quelle marque distribuée par Proax']. Référencez uniquement les informations provenant du site Web officiel du fabricant ou de sources de distributeurs agréés. Signalez tout ce qui doit être confirmé avant de soumettre une soumission."
    ]
  },
  {
    id: "1081dbe4-d1aa-40fe-8392-111d99ed12ba",
    title: "Upsell & Bundle Suggestions",
    description: "Spot complementary products and accessories to add value to every order.",
    category: "Inside Sales",
    prompts: [
      "A customer is ordering [product / part number] from [manufacturer]. Look up this product and identify commonly paired accessories, cables, mounting hardware, software, or complementary components. Present 2–3 suggestions as a helpful recommendation I can bring up naturally during the conversation."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049753/Upsell___Bundle_Suggestions_gnqc1h.jpg",
    title_fr: "Suggestions de ventes incitatives et d'offres groupées",
    description_fr: "Repérer des produits complémentaires et des accessoires pour ajouter de la valeur à chaque commande.",
    category_fr: "Ventes internes",
    prompts_fr: [
      "Un client commande [produit / numéro de pièce] de [fabricant]. Recherchez ce produit et identifiez les accessoires, câbles, matériel de montage, logiciels ou composants complémentaires couramment associés. Présentez 2 à 3 suggestions sous forme de recommandation utile que je peux mentionner naturellement durant la conversation."
    ]
  },
  {
    id: "47d1730d-a91f-4912-96fd-76aff07f477a",
    title: "Carrier & Freight Research",
    description: "Quickly compare carriers or look up freight options and current surcharges.",
    category: "Operations",
    prompts: [
      "Find information about [carrier name / freight topic, e.g. Purolator delivery service levels in Western Canada, LTL freight options between Montreal and Toronto, current surcharges from major carriers]. Summarize what you find in a way that helps me make a shipping or carrier decision."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049746/Carrier___Freight_Research_xrjird.jpg",
    title_fr: "Recherche sur les transporteurs et le fret",
    description_fr: "Comparez rapidement les transporteurs ou consultez les options de fret et les surcharges actuelles.",
    category_fr: "Opérations",
    prompts_fr: [
      "Trouvez des informations sur [nom du transporteur / sujet de fret, par exemple : niveaux de service de livraison de Purolator dans l'Ouest canadien, options de fret LTL entre Montréal et Toronto, surtaxes actuelles des principaux transporteurs]. Résumez ce que vous trouvez de manière à m'aider à prendre une décision concernant l'expédition ou le transporteur."
    ]
  },
  {
    id: "7be4e666-b368-492d-9aa4-6c608aa62282",
    title: "Internal Incident or Exception Reporting",
    description: "Turn rough notes about an operational issue into a clear, professional incident report.",
    category: "Operations",
    prompts: [
      "Help me write a clear internal incident or exception report for the following situation: [paste details — what happened, when, who was involved, what the impact was]. Summarize it in a professional format suitable for sharing with management, and suggest recommended follow-up actions."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049757/Internal_Incident_or_Exception_Reporting_c5e3q8.jpg",
    title_fr: "Signalement d'incident interne ou d'exception",
    description_fr: "Transformer des notes brutes sur un problème opérationnel en un rapport d'incident clair et professionnel.",
    category_fr: "Opérations",
    prompts_fr: [
      "Aidez-moi à rédiger un rapport d'incident ou d'exception interne clair pour la situation suivante : [insérer les détails — ce qui s'est passé, quand, qui était impliqué, quel a été l'impact]. Résumez-le dans un format professionnel approprié pour la direction et suggérez des mesures de suivi recommandées."
    ]
  },
  {
    id: "7d1ed081-6dc1-477e-8ff6-9b75fdae41dc",
    title: "Inventory & Supply Chain Research",
    description: "Get current best practices and insights on inventory management and supply chain challenges.",
    category: "Operations",
    prompts: [
      "Research [topic, e.g. best practices for managing slow-moving inventory, supply chain disruption trends in industrial distribution, strategies for reducing excess stock]. Summarize the key insights and suggest practical approaches that could apply to a mid-sized industrial distributor like Proax."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049746/Inventory___Supply_Chain_Research_bpbfwo.jpg",
    title_fr: "Recherche sur les stocks et la chaîne d'approvisionnement",
    description_fr: "Obtenez les meilleures pratiques et des idées actuelles sur la gestion des stocks et les défis de la chaîne d'approvisionnement.",
    category_fr: "Opérations",
    prompts_fr: [
      "Faites des recherches sur [sujet, ex. : meilleures pratiques pour la gestion des stocks à rotation lente, tendances des ruptures de la chaîne d'approvisionnement dans la distribution industrielle, stratégies pour réduire les surplus de stocks]. Résumez les points clés et suggérez des approches concrètes qui pourraient s'appliquer à un distributeur industriel de taille moyenne comme Proax."
    ]
  },
  {
    id: "06c3290d-32d4-4bea-a225-cc716e606444",
    title: "Process Improvement Summary",
    description: "Identify practical ways to make an existing operational process faster and more efficient.",
    category: "Operations",
    prompts: [
      "I want to improve the following operational process at Proax: [describe the current process and where the pain points are]. Based on what I've described, suggest 3–5 practical improvements we could implement. Focus on efficiency, accuracy, and reducing manual effort where possible."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049746/Process_Improvement_Summary_fbrzkk.jpg",
    title_fr: "Sommaire de l'amélioration des processus",
    description_fr: "Identifier des moyens concrets pour rendre un processus opérationnel existant plus rapide et plus efficace.",
    category_fr: "Opérations",
    prompts_fr: [
      "Je veux améliorer le processus opérationnel suivant chez Proax : [décrivez le processus actuel et les points de friction]. Sur la base de ma description, suggérez 3 à 5 améliorations concrètes que nous pourrions mettre en œuvre. Concentrez-vous sur l'efficacité, la précision et la réduction des tâches manuelles dans la mesure du possible."
    ]
  },
  {
    id: "2b486e28-69da-4973-82be-42ca02f1441b",
    title: "Root Cause Analysis",
    description: "Work through an operational issue systematically to find the cause and prevent recurrence.",
    category: "Operations",
    prompts: [
      "Help me work through a root cause analysis for the following operational issue: [describe the problem, when it occurred, and any relevant context]. Use a structured approach such as the 5 Whys or fishbone method to identify the likely root cause and suggest corrective actions to prevent it from happening again."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049746/Root_Cause_Analysis_do85tc.jpg",
    title_fr: "Analyse des causes fondamentales",
    description_fr: "Traiter un problème opérationnel de façon systématique pour en trouver la cause et prévenir sa récurrence.",
    category_fr: "Opérations",
    prompts_fr: [
      "Aidez-moi à effectuer une analyse de cause profonde pour le problème opérationnel suivant : [décrire le problème, le moment où il s'est produit et tout contexte pertinent]. Utilisez une approche structurée comme les 5 pourquoi ou le diagramme d'Ishikawa pour identifier la cause profonde probable et suggérer des mesures correctives pour éviter qu'il ne se reproduise."
    ]
  },
  {
    id: "148bc63b-360b-42ff-9302-61672aee5f45",
    title: "Standard Operating Procedures (SOPs)",
    description: "Quickly create clear, structured SOPs for any warehouse or operations process.",
    category: "Operations",
    prompts: [
      "Write a step-by-step standard operating procedure for [process name, e.g. receiving a shipment, processing a return, picking and packing an order]. Use clear, plain language suitable for training a new warehouse or operations team member. Format it with numbered steps and include any important safety notes, exceptions, or quality checks."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049746/Standard_Operating_Procedures__SOPs_jaogx9.jpg",
    title_fr: "Procédures de fonctionnement normalisées (PFN)",
    description_fr: "Créez rapidement des POS clairs et structurés pour n'importe quel processus d'entrepôt ou d'opérations.",
    category_fr: "Opérations",
    prompts_fr: [
      "Écrivez une procédure opérationnelle normalisée étape par étape pour [nom du processus, ex. : réception d'une expédition, traitement d'un retour, cueillette et emballage d'une commande]. Utilisez un langage clair et simple, adapté à la formation d'un nouveau membre de l'équipe de l'entrepôt ou des opérations. Présentez le tout sous forme de liste numérotée et incluez les notes de sécurité importantes, les exceptions ou les contrôles de qualité."
    ]
  },
  {
    id: "c5524c9e-6625-46d2-ab3d-8004d15aa98d",
    title: "Supplier & Vendor Communication",
    description: "Draft professional emails to vendors for expediting, resolving issues, or filing claims.",
    category: "Operations",
    prompts: [
      "Write a professional email to [Vendor / Supplier Name] regarding [issue or request, e.g. expediting a delayed shipment, resolving a short shipment, filing a freight claim, requesting an ETA update]. Here are the details: [paste relevant PO numbers, dates, quantities, and context]. Keep the tone direct and professional and include a clear request and response deadline."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049746/Supplier___Vendor_Communication_u2ki4w.jpg",
    title_fr: "Communication avec les fournisseurs et les vendeurs",
    description_fr: "Rédiger des courriels professionnels aux fournisseurs pour accélérer les commandes, résoudre des problèmes ou déposer des réclamations.",
    category_fr: "Opérations",
    prompts_fr: [
      "Écrivez un courriel professionnel à [Nom du fournisseur] concernant [problème ou demande, par exemple : accélérer une expédition retardée, résoudre une livraison incomplète, déposer une réclamation de fret, demander une mise à jour de l'ETA]. Voici les détails : [insérez les numéros de bon de commande, les dates, les quantités et le contexte pertinents]. Gardez un ton direct et professionnel et incluez une demande claire ainsi qu'une date limite de réponse."
    ]
  },
  {
    id: "a0fde3af-e8f5-4982-852e-c59a050e2455",
    title: "Training Material Development",
    description: "Create training guides and reference sheets for operations staff on any process or task.",
    category: "Operations",
    prompts: [
      "Create a training guide or reference sheet for operations staff on [topic, e.g. how to process a customer return, how to handle a damaged shipment, how to prioritize rush orders]. Use simple language, numbered steps, and include a quick-reference summary at the end."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049757/Training_Material_Development_zij80q.jpg",
    title_fr: "Développement de matériel de formation",
    description_fr: "Créer des guides de formation et des aide-mémoires pour le personnel des opérations sur n'importe quel processus ou tâche.",
    category_fr: "Opérations",
    prompts_fr: [
      "Créez un guide de formation ou une fiche de référence pour le personnel des opérations sur [sujet, ex. : comment traiter un retour client, comment gérer une expédition endommagée, comment prioriser les commandes urgentes]. Utilisez un langage simple, des étapes numérotées et incluez un résumé de référence rapide à la fin."
    ]
  },
  {
    id: "648c13c6-1313-41a9-8b26-08466ab8fa70",
    title: "Account Visit Preparation",
    description: "Walk into every customer visit informed and ready with a clear agenda and talking points.",
    category: "Outside Sales",
    prompts: [
      "I have a customer visit coming up with [Customer Name] at [Company Name] in the [industry] sector. Here is the context I have: [paste in any relevant notes, recent orders, open quotes, or previous conversation details]. Summarize the key points I should know going in, suggest 2–3 questions I should ask, and highlight any opportunities or open items I should address."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049746/Account_Visit_Preparation_klh1x9.jpg",
    title_fr: "Préparation pour une visite de compte",
    description_fr: "Arrivez à chaque visite client bien informé et prêt, avec un ordre du jour clair et des points de discussion précis.",
    category_fr: "Ventes externes",
    prompts_fr: [
      "J'ai une visite client de prévue avec [Nom du client] chez [Nom de l'entreprise] dans le secteur de [industrie]. Voici le contexte que j'ai : [coller ici les notes pertinentes, les commandes récentes, les soumissions ouvertes ou les détails des conversations précédentes]. Résume les points clés que je devrais connaître avant d'y aller, suggère 2 ou 3 questions que je devrais poser et souligne les opportunités ou les dossiers en suspens que je devrais aborder."
    ]
  },
  {
    id: "d3c90c8f-9d80-4373-a726-4fa6606369dd",
    title: "Company & Industry Research",
    description: "Quickly build background on a prospect or customer before a call or visit.",
    category: "Outside Sales",
    prompts: [
      "Find information about [Company Name] in [City/Region]. Summarize what they do, what industry they operate in, their size if available, and any recent news or developments. Also summarize any key trends or challenges in their industry that I can use as conversation starters during my visit."
    ],
    featureNote: null,
    ss: true,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049747/Company___Industry_Research_fdiao6.jpg",
    title_fr: "Recherche sur les entreprises et l'industrie",
    description_fr: "Construisez rapidement un profil sur un prospect ou un client avant un appel ou une visite.",
    category_fr: "Ventes externes",
    prompts_fr: [
      "Trouvez des informations sur [Nom de l'entreprise] à [Ville/Région]. Résumez leurs activités, leur secteur d'activité, leur taille si possible, ainsi que les nouvelles ou développements récents. Résumez également les tendances ou défis clés de leur industrie que je pourrais utiliser comme sujets de discussion lors de ma visite."
    ]
  },
  {
    id: "f468e68e-c0d2-4675-9bca-7270dba9a33a",
    title: "Competitive Positioning",
    description: "Prepare talking points when a customer brings up a competitor product or brand.",
    category: "Outside Sales",
    prompts: [
      "Research [competitor name or competitor product] and compare it to [Proax-carried brand or product]. Summarize the key differences in terms of features, support, availability, or value. Present the findings as talking points I can use when a customer brings up the competitor during a conversation."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049747/Competitive_Positioning_xfa7tz.jpg",
    title_fr: "Positionnement concurrentiel",
    description_fr: "Préparer des arguments lorsque le client mentionne un produit ou une marque concurrente.",
    category_fr: "Ventes externes",
    prompts_fr: [
      "Faites une recherche sur [nom du concurrent ou produit du concurrent] et comparez-le à [marque ou produit distribué par Proax]. Résumez les principales différences en matière de fonctionnalités, de soutien, de disponibilité ou de valeur. Présentez les résultats sous forme d'arguments de vente que je peux utiliser lorsqu'un client mentionne le concurrent au cours d'une conversation."
    ]
  },
  {
    id: "8fd39ffd-8497-49c2-9c50-52d824b849ca",
    title: "Custom Proposal or Solution Summary",
    description: "Create a polished proposal or solution overview tailored to a specific customer need.",
    category: "Outside Sales",
    prompts: [
      "I need to put together a proposal or solution summary for [Customer Name] at [Company Name]. Their challenge or requirement is: [describe what the customer needs]. The products or solution I am recommending are: [paste product names, part numbers, or descriptions]. Write a clear, professional summary I can present or send to the customer that explains the recommendation and the value it delivers."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049747/Custom_Proposal_or_Solution_Summary_wmbbzd.jpg",
    title_fr: "Résumé de la proposition ou de la solution personnalisée",
    description_fr: "Créer une proposition soignée ou un aperçu de solution adapté à un besoin client spécifique.",
    category_fr: "Ventes externes",
    prompts_fr: [
      "Je dois préparer une proposition ou un résumé de solution pour [Nom du client] chez [Nom de l'entreprise]. Leur défi ou leur besoin est le suivant : [décrire ce dont le client a besoin]. Les produits ou la solution que je recommande sont : [coller les noms de produits, les numéros de pièces ou les descriptions]. Rédigez un résumé clair et professionnel que je peux présenter ou envoyer au client, qui explique la recommandation et la valeur qu'elle apporte."
    ]
  },
  {
    id: "5544ec94-baa3-4b40-aa6e-59a94ba4f8ad",
    title: "Customer Presentation Narrative",
    description: "Build a clear and compelling story for a customer presentation or leave-behind.",
    category: "Outside Sales",
    prompts: [
      "I need to build a presentation for [Customer Name / Company Name]. Here are the key points I want to cover: [paste your notes or bullet points]. Write a clear and compelling narrative I can use as the structure for my slides or leave-behind document. Focus on Proax's value, the relevance to their business, and a strong close."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049746/Customer_Presentation_Narrative_bnee1n.jpg",
    title_fr: "Récit de présentation client",
    description_fr: "Bâtir une histoire claire et convaincante pour une présentation client ou un document de référence.",
    category_fr: "Ventes externes",
    prompts_fr: [
      "Je dois bâtir une présentation pour [Nom du client / Nom de l'entreprise]. Voici les points saillants que je veux aborder : [coller vos notes ou vos points]. Rédigez un récit clair et convaincant que je peux utiliser comme structure pour mes diapositives ou pour un document de référence. Mettez l'accent sur la valeur de Proax, la pertinence pour leur entreprise et une conclusion forte."
    ]
  },
  {
    id: "a51c13fd-af6b-483c-a73f-8d7edf56a709",
    title: "New Product or Line Card Introduction",
    description: "Quickly get up to speed on a product and craft a compelling introduction for a customer.",
    category: "Outside Sales",
    prompts: [
      "Find information about [product name / product line / manufacturer]. Summarize the key features, typical applications, and target industries for this product. Then write a short, compelling introduction I can use when presenting this product to a customer for the first time."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049747/New_Product_or_Line_Card_Introduction_xnbwp7.jpg",
    title_fr: "Lancement de nouveau produit ou de nouvelle carte de lignes",
    description_fr: "Informez-vous rapidement sur un produit et rédigez une introduction percutante pour un client.",
    category_fr: "Ventes externes",
    prompts_fr: [
      "Trouvez des renseignements sur [nom du produit / gamme de produits / fabricant]. Résumez les caractéristiques clés, les applications typiques et les industries cibles pour ce produit. Rédigez ensuite une courte introduction percutante que je pourrai utiliser pour présenter ce produit à un client pour la première fois."
    ]
  },
  {
    id: "653e6e07-4ff7-47da-9215-dcba5e7928c2",
    title: "Post-Visit Follow-Up Email",
    description: "Turn your field notes into a professional follow-up that keeps momentum going after a customer meeting.",
    category: "Outside Sales",
    prompts: [
      "Write a professional follow-up email to [Customer Name] at [Company Name] after our meeting on [date]. Here is a summary of what we discussed and the action items agreed upon: [paste your notes]. Recap the key points, confirm next steps clearly, and keep the tone warm and professional."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049747/Post-Visit_Follow-Up_Email_lb3nfa.jpg",
    title_fr: "Courriel de suivi après-visite",
    description_fr: "Transformez vos notes de terrain en un suivi professionnel pour garder l'élan après une rencontre client.",
    category_fr: "Ventes externes",
    prompts_fr: [
      "Rédigez un courriel de suivi professionnel à l'attention de [Nom du client] chez [Nom de l'entreprise] suite à notre rencontre du [date]. Voici un résumé de nos discussions et des points d'action convenus : [coller vos notes]. Récapitulez les points clés, confirmez clairement les prochaines étapes et gardez un ton chaleureux et professionnel."
    ]
  },
  {
    id: "sales-visit-mm3x3gil",
    title: "Sales Visit",
    description: "A Tactical First-Visit Playbook for Sales Reps Meeting New Customers",
    category: "Outside Sales",
    prompts: [
      "Act as a senior B2B outside sales coach specializing in industrial automation.\n\nI am an outside sales representative visiting a new [INDUSTRY] manufacturing customer for the first time.\n\nCreate a concise, structured first-visit playbook that includes:\n\nObjectives of the first meeting\n\nHow to position myself without sounding salesy\n\nStrategic discovery questions relevant to their industry\n\nCommon pain points in their industry\n\nHow to identify automation opportunities\n\nHow to build technical credibility\n\nWhat to avoid saying\n\nHow to secure clear next steps\n\nKeep it practical, tactical, and aligned with industrial automation sales. Avoid generic sales advice."
    ],
    featureNote: null,
    ss: false,
    thumbnail: null,
    title_fr: "Visite de vente",
    description_fr: "Guide tactique pour une première rencontre avec un nouveau client",
    category_fr: "Ventes externes",
    prompts_fr: [
      "Agis comme un coach senior en ventes externes B2B spécialisé en automatisation industrielle.\n\nJe suis un représentant des ventes externes qui visite pour la première fois un nouveau client manufacturier dans le secteur [INDUSTRY].\n\nCrée un guide structuré et concis pour une première visite qui inclut :\n\nLes objectifs de la première rencontre\n\nComment me positionner sans paraître trop vendeur\n\nDes questions stratégiques de découverte adaptées à leur industrie\n\nLes enjeux et défis courants dans leur secteur\n\nComment identifier des opportunités d'automatisation\n\nComment établir ma crédibilité technique\n\nCe qu'il faut éviter de dire\n\nComment conclure la rencontre et obtenir des prochaines étapes claires\n\nGarde le contenu pratique, concret et aligné avec la vente de solutions en automatisation industrielle."
    ]
  },
  {
    id: "39438cf3-0efb-40fa-b63c-8c3b2b15982d",
    title: "Territory & Prospect Research",
    description: "Identify new prospects and potential accounts within your territory.",
    category: "Outside Sales",
    prompts: [
      "Identify [manufacturers / industrial companies / potential prospects] in [city, region, or postal area] that operate in [industry or sector]. Summarize what you find and flag any companies that could be a good fit for Proax's automation and industrial supply offering."
    ],
    featureNote: null,
    ss: true,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049747/Territory___Prospect_Research_vkil5g.jpg",
    title_fr: "Recherche de territoires et de prospects",
    description_fr: "Identifier de nouveaux prospects et de nouveaux comptes potentiels au sein de votre territoire.",
    category_fr: "Ventes externes",
    prompts_fr: [
      "Identifiez des [fabricants / entreprises industrielles / prospects potentiels] dans [ville, région ou code postal] qui opèrent dans le secteur de [industrie ou secteur]. Résumez vos trouvailles et signalez toute entreprise qui pourrait bien correspondre à l'offre d'automatisation et de fournitures industrielles de Proax."
    ]
  },
  {
    id: "i5j1k6l0-5q7r-8s1p-n455-0o8r3s3o5055",
    title: "Change Order & Scope Clarification",
    description: "Draft clear documentation explaining scope changes and additional engineering requirements.",
    category: "Project & Engineering",
    prompts: [
      "Draft a professional change order summary explaining the following scope change: [describe change]. Clearly outline the original scope, revised scope, impact on timeline, and justification for additional engineering or cost."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049747/Change_Order___Scope_Clarification_lir9it.jpg",
    title_fr: "Ordre de changement et clarification de la portée",
    description_fr: "Rédiger une documentation claire expliquant les changements de portée et les exigences techniques supplémentaires.",
    category_fr: "Project & Engineering",
    prompts_fr: [
      "Rédigez un résumé professionnel de demande de changement expliquant la modification de portée suivante : [décrire le changement]. Présentez clairement la portée initiale, la portée révisée, l'incidence sur l'échéancier et la justification des coûts ou de l'ingénierie supplémentaires."
    ]
  },
  {
    id: "f2g8h3i7-2n4o-5p8m-k122-7l5o0p0l2022",
    title: "Compatibility & Risk Review",
    description: "Review a proposed multi-brand configuration and identify technical risks before quoting or ordering.",
    category: "Project & Engineering",
    prompts: [
      "Review the following proposed configuration and identify potential compatibility issues, communication risks, environmental concerns, or integration challenges: [paste product list or description]. Present findings in structured bullet points."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049747/Compatibility___Risk_Review_qkj6o4.jpg",
    title_fr: "Examen de la compatibilité et des risques",
    description_fr: "Examiner une proposition de configuration multimarque et cerner les risques techniques avant de soumettre un devis ou de passer une commande.",
    category_fr: "Project & Engineering",
    prompts_fr: [
      "Examinez la configuration proposée suivante et identifiez les problèmes de compatibilité potentiels, les risques de communication, les préoccupations environnementales ou les défis d'intégration : [coller la liste de produits ou la description]. Présentez les résultats sous forme de points structurés."
    ]
  },
  {
    id: "h4i0j5k9-4p6q-7r0o-m344-9n7q2r2n4044",
    title: "FAT / SAT Checklist Generator",
    description: "Create structured Factory or Site Acceptance Test checklists for automation systems.",
    category: "Project & Engineering",
    prompts: [
      "Create a detailed FAT checklist for the following automation system: [describe system]. Include mechanical verification, electrical verification, safety validation, functional testing, and documentation review steps."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049747/FAT__SAT_Checklist_Generator_tdbcsh.jpg",
    title_fr: "Générateur de listes de contrôle FAT / SAT",
    description_fr: "Créer des listes de contrôle structurées pour les essais d'acceptation en usine ou sur site des systèmes d'automatisation.",
    category_fr: "Project & Engineering",
    prompts_fr: [
      "Créer une liste de vérification détaillée pour l'essai d'acceptation en usine (FAT) pour le système d'automatisation suivant : [décrire le système]. Inclure les étapes de vérification mécanique, de vérification électrique, de validation de la sécurité, d'essais fonctionnels et de révision de la documentation."
    ]
  },
  {
    id: "g3h9i4j8-3o5p-6q9n-l233-8m6p1q1m3033",
    title: "Functional Design Specification Draft",
    description: "Convert raw engineering notes into a structured Functional Design Specification document.",
    category: "Project & Engineering",
    prompts: [
      "Convert the following engineering notes into a structured Functional Design Specification. Include system overview, scope, inputs/outputs, safety considerations, assumptions, and open items: [paste notes]."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049748/Functional_Design_Specification_Draft_wlcfio.jpg",
    title_fr: "Ébauche du devis technique fonctionnel",
    description_fr: "Convertir des notes d'ingénierie brutes en un document de spécifications de conception fonctionnelle structuré.",
    category_fr: "Project & Engineering",
    prompts_fr: [
      "Convertir les notes d'ingénierie suivantes en une spécification fonctionnelle structurée. Inclure l'aperçu du système, la portée, les entrées/sorties, les consignes de sécurité, les hypothèses et les points en suspens : [coller les notes]."
    ]
  },
  {
    id: "e1f7g2h6-1m3n-4o7l-j011-6k4n9o9k1011",
    title: "Technical Solution Architecture",
    description: "Design a structured multi-brand automation solution using Proax-represented manufacturers.",
    category: "Project & Engineering",
    prompts: [
      "Design a complete automation solution for the following application: [describe application]. Include sensing, safety, IO, and HMI components. Assume we are selecting from Proax-represented manufacturers only. Highlight compatibility considerations and potential integration risks."
    ],
    featureNote: null,
    ss: false,
    thumbnail: "https://res.cloudinary.com/di3cswum4/image/upload/w_800,q_auto,f_auto/v1772049752/Technical_Solution_Architecture_okri5i.jpg",
    title_fr: "Architecture de solution technique",
    description_fr: "Concevoir une solution d'automatisation multimarque structurée en utilisant les manufacturiers représentés par Proax.",
    category_fr: "Project & Engineering",
    prompts_fr: [
      "Concevez une solution d'automatisation complète pour l'application suivante : [décrire l'application]. Incluez les composants de détection, de sécurité, d'E/S et d'IHM. Supposez que nous choisissons uniquement parmi les fabricants représentés par Proax. Mettez en évidence les considérations de compatibilité et les risques d'intégration potentiels."
    ]
  }
];
