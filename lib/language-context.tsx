"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "fr";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// UI string translations
export const UI = {
  en: {
    libraryTitle: "AI Use Case Library",
    signOut: "Sign out",
    giveFeedback: "Give Feedback",
    feedbackTitle: "Share Your Feedback",
    feedbackSubtitle: "Help us improve the AI Use Case Library",
    filter: "Filter",
    categories: "Categories",
    clearFilters: "Clear filters",
    results: (n: number) => `${n} use case${n !== 1 ? "s" : ""}`,
    noResults: "No use cases match your current filters.",
    clearAll: "Clear all filters",
    grid: "Grid",
    list: "List",
    promptExamples: "Prompt Examples",
    tips: "Tips for Best Results",
    tipsList: [
      "Be specific about your industry, product line, or customer type for better results.",
      "Paste in real customer emails or notes and ask Claude to work with them directly.",
      "Iterate — if the first output isn't quite right, ask Claude to adjust the tone or length.",
      "Use these as starting points, not final outputs. Add your personal context.",
    ],
    enableWebSearch: "Enable Web Search",
    authTitle: "AI Use Case Library",
    authSubtitle: "Sign in with your Proax email to access the library.",
    authEmailPlaceholder: "you@proax.ca",
    authButton: "Access Library",
    authError: "Please use your @proax.ca email address.",
    authEmailLabel: "Proax Email",
    searchPlaceholder: "Search use cases, descriptions, prompts…",
    searchClear: "Clear",
    requestPrompt: "Request a Prompt",
    requestPromptTitle: "Request a Prompt",
    requestPromptSubtitle: "Don't see a use case you need? Let us know.",
    watchHowTo: "How to use ProaxGPT",
    watchHowToTitle: "How to use ProaxGPT",
    watchHowToUrl: "https://www.youtube.com/embed/-aa8Agcz9Uc",
  },
  fr: {
    libraryTitle: "Bibliothèque de cas d'utilisation IA",
    signOut: "Se déconnecter",
    giveFeedback: "Donner mon avis",
    feedbackTitle: "Partagez vos commentaires",
    feedbackSubtitle: "Aidez-nous à améliorer la bibliothèque de cas d'utilisation IA",
    filter: "Filtrer",
    categories: "Catégories",
    clearFilters: "Effacer les filtres",
    results: (n: number) => `${n} cas d'utilisation`,
    noResults: "Aucun cas d'utilisation ne correspond à vos filtres.",
    clearAll: "Effacer tous les filtres",
    grid: "Grille",
    list: "Liste",
    promptExamples: "Exemples d'invite",
    tips: "Conseils pour de meilleurs résultats",
    tipsList: [
      "Précisez votre secteur d'activité, votre gamme de produits ou le type de client pour de meilleurs résultats.",
      "Collez de vrais courriels ou notes de clients et demandez à Claude de travailler directement avec eux.",
      "Itérez — si le premier résultat n'est pas tout à fait correct, demandez à Claude d'ajuster le ton ou la longueur.",
      "Utilisez ces exemples comme point de départ, pas comme résultat final. Ajoutez votre contexte personnel.",
    ],
    enableWebSearch: "Activer la recherche Web",
    authTitle: "Bibliothèque de cas d'utilisation IA",
    authSubtitle: "Connectez-vous avec votre courriel Proax pour accéder à la bibliothèque.",
    authEmailPlaceholder: "vous@proax.ca",
    authButton: "Accéder à la bibliothèque",
    authError: "Veuillez utiliser votre adresse courriel @proax.ca.",
    authEmailLabel: "Courriel Proax",
    searchPlaceholder: "Rechercher des cas d'utilisation, descriptions, invites…",
    searchClear: "Effacer",
    requestPrompt: "Demander une invite",
    requestPromptTitle: "Demander une invite",
    requestPromptSubtitle: "Vous ne trouvez pas le cas d'utilisation dont vous avez besoin ? Faites-le nous savoir.",
    watchHowTo: "Comment utiliser ProaxGPT",
    watchHowToTitle: "Comment utiliser ProaxGPT",
    watchHowToUrl: "https://www.youtube.com/embed/doEVMqnkEfw",
  },
} as const;
