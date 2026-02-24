"use client";

import { useEffect, useRef, useState } from "react";
import { X, Copy, Check, AlertTriangle } from "lucide-react";
import type { UseCase } from "@/lib/use-cases";

const CATEGORY_COLORS: Record<string, string> = {
  "Inside Sales": "#118AB2",
  "Outside Sales": "#376FE5",
};

interface PromptBlockProps {
  prompt: string;
  index: number;
}

function PromptBlock({ prompt, index }: PromptBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ border: "1px solid #E2EBF3" }}
    >
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{ backgroundColor: "#F0F6FB" }}
      >
        <span className="text-xs font-semibold" style={{ color: "#22577A" }}>
          Prompt {index + 1}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-medium rounded-md px-2 py-1 transition-colors"
          style={{
            backgroundColor: copied ? "#DCFCE7" : "#FFFFFF",
            color: copied ? "#15803D" : "#376FE5",
            border: `1px solid ${copied ? "#BBF7D0" : "#376FE5"}`,
          }}
        >
          {copied ? (
            <>
              <Check size={12} />
              Copied
            </>
          ) : (
            <>
              <Copy size={12} />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="p-4" style={{ backgroundColor: "#F8FAFC" }}>
        <p
          className="text-sm leading-relaxed font-mono whitespace-pre-wrap"
          style={{ color: "#334155" }}
        >
          {prompt}
        </p>
      </div>
    </div>
  );
}

interface UseCasePanelProps {
  useCase: UseCase | null;
  onClose: () => void;
}

export function UseCasePanel({ useCase, onClose }: UseCasePanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (useCase) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [useCase]);

  const isOpen = !!useCase;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          backgroundColor: "rgba(1,42,74,0.4)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={useCase?.title ?? "Use case details"}
        className="fixed right-0 top-0 bottom-0 z-50 flex flex-col overflow-hidden transition-transform duration-300 ease-out"
        style={{
          width: "min(560px, 100vw)",
          backgroundColor: "#FFFFFF",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          boxShadow: "-8px 0 40px rgba(1,42,74,0.14)",
        }}
      >
        {useCase && (
          <>
            {/* Panel Header */}
            <div
              className="flex items-start justify-between gap-4 px-6 py-5 shrink-0"
              style={{ backgroundColor: "#012A4A" }}
            >
              <div className="flex flex-col gap-2 flex-1">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full self-start"
                  style={{
                    backgroundColor: CATEGORY_COLORS[useCase.category] + "33",
                    color: CATEGORY_COLORS[useCase.category],
                  }}
                >
                  {useCase.category}
                </span>
                <h2
                  className="text-xl font-bold leading-snug text-balance"
                  style={{ color: "#FFFFFF" }}
                >
                  {useCase.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="mt-1 rounded-lg p-1.5 transition-colors shrink-0"
                style={{ color: "#9BBCD6" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#22577A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
                aria-label="Close panel"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
              {/* Description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#9BBCD6" }}>
                  Description
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>
                  {useCase.description}
                </p>
              </div>

              {/* Feature note */}
              {useCase.featureNote && (
                <div
                  className="flex items-start gap-3 rounded-lg px-4 py-3"
                  style={{ backgroundColor: "#FEF9C3", border: "1px solid #FDE047" }}
                >
                  <AlertTriangle size={16} style={{ color: "#854D0E", marginTop: 1, shrink: 0 }} />
                  <p className="text-sm leading-relaxed" style={{ color: "#854D0E" }}>
                    <span className="font-semibold">Note: </span>
                    {useCase.featureNote}
                  </p>
                </div>
              )}

              {/* Prompts */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#9BBCD6" }}>
                  Example Prompts
                </h3>
                <div className="flex flex-col gap-3">
                  {useCase.prompts.map((prompt, i) => (
                    <PromptBlock key={i} prompt={prompt} index={i} />
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div
                className="rounded-lg p-4 flex flex-col gap-2"
                style={{ backgroundColor: "#F0F6FB", border: "1px solid #D1E8F5" }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#22577A" }}>
                  Tips
                </h3>
                <ul className="text-sm leading-relaxed flex flex-col gap-1.5" style={{ color: "#334155" }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "#118AB2" }}>•</span>
                    Replace bracketed placeholders with your actual customer data.
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "#118AB2" }}>•</span>
                    Add context about the customer's industry or size for more tailored results.
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "#118AB2" }}>•</span>
                    Iterate on the output by asking follow-up questions in the same conversation.
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
