"use client";

import { useState } from "react";
import { LanguageProvider, useLang, UI } from "@/lib/language-context";

interface AuthGateProps {
  onAuth: (email: string) => void;
}

function AuthGateInner({ onAuth }: AuthGateProps) {
  const { lang, setLang } = useLang();
  const t = UI[lang];
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (trimmed.endsWith("@proax.ca")) {
      setError("");
      onAuth(trimmed);
    } else {
      setError(t.authError);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#EFF3F9" }}
    >
      {/* Language toggle top-right */}
      <div className="fixed top-5 right-6 flex items-center rounded-full overflow-hidden text-xs font-semibold" style={{ border: "1px solid #D1DCE8" }}>
        <button
          onClick={() => setLang("en")}
          className="px-3 py-1.5 transition-colors"
          style={{ backgroundColor: lang === "en" ? "#376FE5" : "#FFFFFF", color: lang === "en" ? "#FFFFFF" : "#22577A" }}
        >
          EN
        </button>
        <button
          onClick={() => setLang("fr")}
          className="px-3 py-1.5 transition-colors"
          style={{ backgroundColor: lang === "fr" ? "#376FE5" : "#FFFFFF", color: lang === "fr" ? "#FFFFFF" : "#22577A" }}
        >
          FR
        </button>
      </div>

      <div
        className="w-full max-w-md rounded-2xl shadow-lg p-10 flex flex-col items-center gap-6"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* Logo */}
        <img
          src="https://proax.ca/images/proax-logo.png"
          alt="Proax Technologies"
          className="h-10 w-auto object-contain"
        />

        {/* Heading */}
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-2xl font-bold leading-tight text-balance" style={{ color: "#012A4A" }}>
            {t.authTitle}
          </h1>
          <p className="text-sm" style={{ color: "#22577A" }}>
            {t.authSubtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <label className="sr-only" htmlFor="auth-email">{t.authEmailLabel}</label>
          <input
            id="auth-email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
            placeholder={t.authEmailPlaceholder}
            required
            className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors"
            style={{
              borderColor: error ? "#ef4444" : "#D1DCE8",
              color: "#012A4A",
              backgroundColor: "#F8FAFC",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = error ? "#ef4444" : "#118AB2")}
            onBlur={(e) => (e.currentTarget.style.borderColor = error ? "#ef4444" : "#D1DCE8")}
          />

          {error && (
            <p className="text-xs font-medium" style={{ color: "#ef4444" }}>{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-80"
            style={{ backgroundColor: "#376FE5" }}
          >
            {t.authButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export function AuthGate({ onAuth }: AuthGateProps) {
  return <AuthGateInner onAuth={onAuth} />;
}
