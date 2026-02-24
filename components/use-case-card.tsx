"use client";

import { AlertTriangle } from "lucide-react";
import type { UseCase } from "@/lib/use-cases";

const CATEGORY_COLORS: Record<string, string> = {
  "Inside Sales": "#118AB2",
  "Outside Sales": "#376FE5",
};

const HEADER_PATTERNS: Record<string, { bg: string; pattern: string }> = {
  "Inside Sales": { bg: "#22577A", pattern: "inside" },
  "Outside Sales": { bg: "#012A4A", pattern: "outside" },
};

interface UseCaseCardProps {
  useCase: UseCase;
  onClick: () => void;
  listView?: boolean;
}

function CardHeader({ useCase }: { useCase: UseCase }) {
  const { bg } = HEADER_PATTERNS[useCase.category];
  const color = CATEGORY_COLORS[useCase.category];

  return (
    <div
      className="h-36 w-full rounded-t-xl relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      {/* Subtle geometric decoration */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 320 144"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="260" cy="20" r="80" fill="white" />
        <circle cx="40" cy="130" r="60" fill="white" />
        <rect x="120" y="40" width="100" height="60" rx="8" fill="white" opacity="0.5" />
      </svg>

      {/* Icon area */}
      <div
        className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: color + "33", border: `1.5px solid ${color}66` }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {useCase.category === "Inside Sales" ? (
            <>
              <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="1.5" />
              <path d="M8 10h8M8 14h5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
              <path d="M12 7v5l3 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            </>
          )}
        </svg>
      </div>
    </div>
  );
}

export function UseCaseCard({ useCase, onClick, listView = false }: UseCaseCardProps) {
  const catColor = CATEGORY_COLORS[useCase.category];

  if (listView) {
    return (
      <button
        onClick={onClick}
        className="w-full text-left rounded-xl p-5 flex items-start gap-5 transition-all duration-200 hover:-translate-y-0.5"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 1px 4px rgba(1,42,74,0.08), 0 0 0 1px rgba(1,42,74,0.06)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 6px 20px rgba(1,42,74,0.12), 0 0 0 1px rgba(55,111,229,0.2)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 1px 4px rgba(1,42,74,0.08), 0 0 0 1px rgba(1,42,74,0.06)")
        }
      >
        {/* Category color bar */}
        <div
          className="w-1 self-stretch rounded-full shrink-0"
          style={{ backgroundColor: catColor }}
        />
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-bold text-base leading-snug text-balance" style={{ color: "#012A4A" }}>
              {useCase.title}
            </h3>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0"
              style={{ backgroundColor: catColor + "18", color: catColor }}
            >
              {useCase.category}
            </span>
          </div>
          <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "#64748B" }}>
            {useCase.description}
          </p>
          {useCase.featureNote && (
            <div
              className="flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium"
              style={{ backgroundColor: "#FEF9C3", color: "#854D0E" }}
            >
              <AlertTriangle size={12} />
              {useCase.featureNote}
            </div>
          )}
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-xl flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0 1px 4px rgba(1,42,74,0.08), 0 0 0 1px rgba(1,42,74,0.06)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 8px 24px rgba(1,42,74,0.14), 0 0 0 1px rgba(55,111,229,0.2)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 1px 4px rgba(1,42,74,0.08), 0 0 0 1px rgba(1,42,74,0.06)")
      }
    >
      <CardHeader useCase={useCase} />

      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-bold text-base leading-snug text-balance" style={{ color: "#012A4A" }}>
          {useCase.title}
        </h3>
        <p className="text-sm leading-relaxed line-clamp-3 flex-1" style={{ color: "#64748B" }}>
          {useCase.description}
        </p>

        {useCase.featureNote && (
          <div
            className="flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium"
            style={{ backgroundColor: "#FEF9C3", color: "#854D0E" }}
          >
            <AlertTriangle size={12} />
            <span className="line-clamp-1">{useCase.featureNote}</span>
          </div>
        )}

        {/* Category tag */}
        <div className="pt-1">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: catColor + "18", color: catColor }}
          >
            {useCase.category}
          </span>
        </div>
      </div>
    </button>
  );
}
