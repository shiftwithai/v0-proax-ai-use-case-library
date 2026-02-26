"use client";

import { useState, useEffect } from "react";
import { AuthGate } from "@/components/auth-gate";
import { AppHeader } from "@/components/app-header";
import { LibraryView } from "@/components/library-view";
import { LanguageProvider } from "@/lib/language-context";

const AUTH_KEY = "proax_user_email";

export default function Page() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  // On mount, restore saved email from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(AUTH_KEY);
    if (saved) setUserEmail(saved);
    setChecked(true);
  }, []);

  const handleAuth = (email: string) => {
    localStorage.setItem(AUTH_KEY, email);
    setUserEmail(email);
  };

  const handleSignOut = () => {
    localStorage.removeItem(AUTH_KEY);
    setUserEmail(null);
  };

  // Avoid flash of auth gate before localStorage is read
  if (!checked) return null;

  if (!userEmail) {
    return (
      <LanguageProvider>
        <AuthGate onAuth={handleAuth} />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#EFF3F9" }}>
        <AppHeader userEmail={userEmail} onSignOut={handleSignOut} />
        <LibraryView />
      </div>
    </LanguageProvider>
  );
}
