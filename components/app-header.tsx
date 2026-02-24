"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface AppHeaderProps {
  userEmail: string;
  onSignOut: () => void;
}

export function AppHeader({ userEmail, onSignOut }: AppHeaderProps) {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

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
            AI Use Case Library
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setFeedbackOpen(true)}
            className="text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#376FE5", color: "#FFFFFF" }}
          >
            Give Feedback
          </button>
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

      {/* Feedback modal */}
      {feedbackOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(1,42,74,0.7)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setFeedbackOpen(false); }}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ backgroundColor: "#012A4A" }}
            >
              <div>
                <h2 className="text-base font-semibold text-white">Share Your Feedback</h2>
                <p className="text-xs mt-0.5" style={{ color: "#9BBCD6" }}>
                  Help us improve the AI Use Case Library
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

            {/* Embedded form */}
            <iframe
              src="https://forms.office.com/r/Zpd04RCuWL?embed=true"
              width="100%"
              height="520"
              frameBorder="0"
              marginWidth={0}
              marginHeight={0}
              allowFullScreen
              title="Feedback Form"
              style={{ border: "none", display: "block" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
