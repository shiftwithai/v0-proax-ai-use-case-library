"use client";

interface AppHeaderProps {
  userEmail: string;
  onSignOut: () => void;
}

export function AppHeader({ userEmail, onSignOut }: AppHeaderProps) {
  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 shadow-sm"
      style={{ backgroundColor: "#012A4A" }}
    >
      {/* Wordmark */}
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: "#376FE5" }}
        >
          P
        </div>
        <span className="text-white font-semibold text-base tracking-tight">
          Proax AI Use Case Library
        </span>
      </div>

      {/* User pill + sign out */}
      <div className="flex items-center gap-3">
        <span
          className="text-xs font-medium px-3 py-1.5 rounded-full"
          style={{ backgroundColor: "#22577A", color: "#FFFFFF" }}
        >
          {userEmail}
        </span>
        <button
          onClick={onSignOut}
          className="text-xs font-medium transition-opacity hover:opacity-70"
          style={{ color: "#9BBCD6" }}
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
