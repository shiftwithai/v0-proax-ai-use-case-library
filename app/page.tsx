"use client";

import { AppHeader } from "@/components/app-header";
import { LibraryView } from "@/components/library-view";
import { LanguageProvider } from "@/lib/language-context";

export default function Page() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#EFF3F9" }}>
        <AppHeader />
        <LibraryView />
      </div>
    </LanguageProvider>
  );
}
