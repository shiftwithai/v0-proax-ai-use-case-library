"use client";

import { useState } from "react";

interface AuthGateProps {
  onAuth: (email: string) => void;
}

export function AuthGate({ onAuth }: AuthGateProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (trimmed.endsWith("@proax.ca")) {
      setError("");
      onAuth(trimmed);
    } else {
      setError("Access is limited to @proax.ca email addresses.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#EFF3F9" }}
    >
      <div
        className="w-full max-w-md rounded-2xl shadow-lg p-10 flex flex-col items-center gap-6"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* Logo */}
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl tracking-tight"
          style={{ backgroundColor: "#012A4A" }}
        >
          P
        </div>

        {/* Heading */}
        <div className="text-center flex flex-col gap-2">
          <h1
            className="text-2xl font-bold leading-tight text-balance"
            style={{ color: "#012A4A" }}
          >
            Welcome to the Proax AI Use Case Library
          </h1>
          <p className="text-sm" style={{ color: "#22577A" }}>
            Enter your Proax email to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="you@proax.ca"
            required
            className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors"
            style={{
              borderColor: error ? "#ef4444" : "#D1DCE8",
              color: "#012A4A",
              backgroundColor: "#F8FAFC",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = error ? "#ef4444" : "#118AB2")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = error ? "#ef4444" : "#D1DCE8")
            }
          />

          {error && (
            <p className="text-xs font-medium" style={{ color: "#ef4444" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-80"
            style={{ backgroundColor: "#376FE5" }}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
