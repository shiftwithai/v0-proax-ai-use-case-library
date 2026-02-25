"use client";

import { useState } from "react";
import { AuthGate } from "@/components/auth-gate";
import { AppHeader } from "@/components/app-header";
import { LibraryView } from "@/components/library-view";
import { LanguageProvider } from "@/lib/language-context";

export default function Page() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  if (!userEmail) {
    return (
      <LanguageProvider>
        <AuthGate onAuth={setUserEmail} />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#EFF3F9" }}>
        <AppHeader userEmail={userEmail} onSignOut={() => setUserEmail(null)} />
        <LibraryView />
      </div>
    </LanguageProvider>
  );
}
