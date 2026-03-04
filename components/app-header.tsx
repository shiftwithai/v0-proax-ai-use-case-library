"use client";

import { useState } from "react";
import { X, MessageSquarePlus } from "lucide-react";
import { useLang, UI } from "@/lib/language-context";

interface AppHeaderProps {
  userEmail: string;
  onSignOut: () => void;
}

export function AppHeader({ userEmail, onSignOut }: AppHeaderProps) {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [requestPromptOpen, setRequestPromptOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = UI[lang];

  return (
    <>
      <header
        className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 shadow-sm"
        style={{ backgroundColor: "#012A4A" }}
      >
        {/* Wordmark */}
        <div className="flex items-center gap-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProaxLogo_white-kO8MOv3mVch1BdT7xvZ2peSTNzZmqd.png"
            alt="Proax Technologies"
            className="h-7 w-auto object-contain"
          />
          <span
            className="text-sm font-medium tracking-tight"
            style={{ color: "#9BBCD6" }}
          >
            {t.libraryTitle}
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div
            className="flex items-center rounded-full overflow-hidden text-xs font-semibold"
            style={{ border: "1px solid #22577A" }}
          >
            <button
              onClick={() => setLang("en")}
              className="px-3 py-1.5 transition-colors"
              style={{
                backgroundColor: lang === "en" ? "#376FE5" : "transparent",
                color: lang === "en" ? "#FFFFFF" : "#9BBCD6",
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              className="px-3 py-1.5 transition-colors"
              style={{
                backgroundColor: lang === "fr" ? "#376FE5" : "transparent",
                color: lang === "fr" ? "#FFFFFF" : "#9BBCD6",
              }}
            >
              FR
            </button>
          </div>

          {/* Request a Prompt */}
          <button
            onClick={() => setRequestPromptOpen(true)}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#FFFFFF", color: "#012A4A" }}
          >
            <MessageSquarePlus size={13} />
            <span>{t.requestPrompt}</span>
          </button>

          {/* Give Feedback */}
          <button
            onClick={() => setFeedbackOpen(true)}
            className="text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#376FE5", color: "#FFFFFF" }}
          >
            {t.giveFeedback}
          </button>

          {/* Sign out */}
          <button
            onClick={onSignOut}
            className="text-xs font-medium transition-opacity hover:opacity-70"
            style={{ color: "#9BBCD6" }}
          >
            {t.signOut}
          </button>
        </div>
      </header>

      {/* Feedback modal */}
      {feedbackOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(1,42,74,0.7)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setFeedbackOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ backgroundColor: "#012A4A" }}
            >
              <div>
                <h2 className="text-base font-semibold text-white">{t.feedbackTitle}</h2>
                <p className="text-xs mt-0.5" style={{ color: "#9BBCD6" }}>
                  {t.feedbackSubtitle}
                </p>
              </div>
              <button
                onClick={() => setFeedbackOpen(false)}
                className="text-white transition-opacity hover:opacity-70 p-1 rounded-lg"
                aria-label="Close feedback"
              >
                <X size={18} />
              </button>
            </div>
            <iframe
              src="https://forms.office.com/r/Zpd04RCuWL?embed=true"
              width="100%"
              height="520"
              frameBorder="0"
              allowFullScreen
              title="Feedback Form"
              style={{ border: "none", display: "block" }}
            />
          </div>
        </div>
      )}

      {/* Request a Prompt modal */}
      {requestPromptOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(1,42,74,0.7)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setRequestPromptOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ backgroundColor: "#012A4A" }}
            >
              <div>
                <h2 className="text-base font-semibold text-white">{t.requestPromptTitle}</h2>
                <p className="text-xs mt-0.5" style={{ color: "#9BBCD6" }}>
                  {t.requestPromptSubtitle}
                </p>
              </div>
              <button
                onClick={() => setRequestPromptOpen(false)}
                className="text-white transition-opacity hover:opacity-70 p-1 rounded-lg"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <iframe
              src="https://forms.office.com/r/pcuPS9rS6A?embed=true"
              width="100%"
              height="520"
              frameBorder="0"
              allowFullScreen
              title="Request a Prompt"
              style={{ border: "none", display: "block" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
