"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getAllUseCases,
  getAllCategories,
  saveUseCase,
  deleteUseCase,
  isSeedUseCase,
  type UseCase,
  type Category,
} from "@/lib/use-cases-store";
import { CATEGORIES } from "@/lib/use-cases";
import { Plus, Trash2, Pencil, LogOut, ChevronDown, X } from "lucide-react";
import Image from "next/image";

const ADMIN_PASSWORD = "proax2025";
const SESSION_KEY = "adminhako_auth";

function generateId(title: string): string {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") +
    "-" +
    Date.now().toString(36)
  );
}

const ALL_CATEGORIES: Category[] = [
  "Inside Sales",
  "Outside Sales",
  "Project & Engineering",
  "Business Development",
  "Operations",
  "HR",
  "Accounting",
];

// ── Login Screen ──────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      onLogin();
    } else {
      setError(true);
      setPassword("");
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center font-sans"
      style={{ backgroundColor: "#F5F3EE" }}
    >
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm flex flex-col items-center gap-6">
        <img
          src="https://proax.ca/images/proax-logo.png"
          alt="Proax Technologies"
          className="h-9 w-auto object-contain"
        />
        <div className="text-center">
          <h1 className="text-lg font-semibold" style={{ color: "#012A4A" }}>
            Admin Access
          </h1>
          <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
            Enter your password to manage use cases.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 font-sans"
            style={{
              borderColor: error ? "#EF4444" : "#D1D5DB",
              color: "#012A4A",
            }}
            autoFocus
          />
          {error && (
            <p className="text-xs" style={{ color: "#EF4444" }}>
              Incorrect password. Try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#012A4A" }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Empty form state ───────────────────────────────────────────────────────────
function emptyForm(): Omit<UseCase, "id"> & { id?: string } {
  return {
    title: "",
    description: "",
    category: "Inside Sales",
    prompts: [""],
    featureNote: "",
  };
}

// ── Admin Dashboard ────────────────────────────────────────────────────────────
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [useCases, setUseCases] = useState<UseCase[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<UseCase, "id"> & { id?: string }>(emptyForm());
  const [isNew, setIsNew] = useState(false);
  const [saved, setSaved] = useState(false);
  const [filterCat, setFilterCat] = useState<string>("All");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const reload = useCallback(() => setUseCases(getAllUseCases()), []);

  useEffect(() => { reload(); }, [reload]);

  const filtered = filterCat === "All"
    ? useCases
    : useCases.filter((u) => u.category === filterCat);

  function selectItem(item: UseCase) {
    setSelectedId(item.id);
    setForm({ ...item, prompts: [...item.prompts] });
    setIsNew(false);
    setSaved(false);
  }

  function startNew() {
    setSelectedId(null);
    setForm(emptyForm());
    setIsNew(true);
    setSaved(false);
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const id = form.id || generateId(form.title);
    const item: UseCase = {
      id,
      title: form.title,
      description: form.description,
      category: form.category as Category,
      prompts: form.prompts.filter((p) => p.trim() !== ""),
      ...(form.featureNote?.trim() ? { featureNote: form.featureNote } : {}),
    };
    saveUseCase(item);
    reload();
    setSelectedId(id);
    setForm({ ...item });
    setIsNew(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleDelete(id: string) {
    if (isSeedUseCase(id)) return;
    deleteUseCase(id);
    reload();
    if (selectedId === id) {
      setSelectedId(null);
      setForm(emptyForm());
    }
    setDeleteConfirmId(null);
  }

  function updatePrompt(i: number, value: string) {
    const p = [...form.prompts];
    p[i] = value;
    setForm((f) => ({ ...f, prompts: p }));
  }

  function addPrompt() {
    setForm((f) => ({ ...f, prompts: [...f.prompts, ""] }));
  }

  function removePrompt(i: number) {
    const p = form.prompts.filter((_, idx) => idx !== i);
    setForm((f) => ({ ...f, prompts: p.length ? p : [""] }));
  }

  const showForm = isNew || selectedId !== null;

  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: "#F5F3EE" }}>
      {/* Header */}
      <header
        className="flex items-center justify-between px-6 py-3 shrink-0"
        style={{ backgroundColor: "#012A4A" }}
      >
        <div className="flex items-center gap-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ProaxLogo_white-kO8MOv3mVch1BdT7xvZ2peSTNzZmqd.png"
            alt="Proax Technologies"
            className="h-7 w-auto object-contain"
          />
          <span className="text-sm font-medium" style={{ color: "#9BBCD6" }}>
            Use Case Admin
          </span>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
          style={{ color: "#9BBCD6" }}
        >
          <LogOut size={15} />
          Sign Out
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar list */}
        <aside
          className="w-72 shrink-0 flex flex-col border-r overflow-hidden"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
        >
          {/* Category filter + New button */}
          <div className="p-4 flex flex-col gap-3 border-b" style={{ borderColor: "#E5E7EB" }}>
            <button
              onClick={startNew}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#012A4A" }}
            >
              <Plus size={15} />
              New Use Case
            </button>
            <div className="relative">
              <select
                value={filterCat}
                onChange={(e) => setFilterCat(e.target.value)}
                className="w-full appearance-none border rounded-lg px-3 py-2 text-sm pr-8 outline-none font-sans"
                style={{ borderColor: "#D1D5DB", color: "#012A4A" }}
              >
                <option value="All">All Categories</option>
                {ALL_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#6B7280" }} />
            </div>
          </div>

          {/* Use case list */}
          <div className="flex-1 overflow-y-auto">
            {filtered.length === 0 && (
              <p className="p-4 text-sm" style={{ color: "#9CA3AF" }}>
                No use cases yet.
              </p>
            )}
            {filtered.map((item) => {
              const isSelected = selectedId === item.id;
              const isSeed = isSeedUseCase(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => selectItem(item)}
                  className="w-full text-left px-4 py-3 border-b transition-colors"
                  style={{
                    borderColor: "#F3F4F6",
                    backgroundColor: isSelected ? "#EBF2F8" : "transparent",
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p
                        className="text-sm font-medium truncate"
                        style={{ color: "#012A4A" }}
                      >
                        {item.title}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
                        {item.category}
                      </p>
                    </div>
                    {!isSeed && deleteConfirmId !== item.id && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setDeleteConfirmId(item.id); }}
                        className="shrink-0 mt-0.5 p-1 rounded transition-colors hover:bg-red-50"
                        style={{ color: "#9CA3AF" }}
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                    {!isSeed && deleteConfirmId === item.id && (
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                          className="text-xs font-medium px-2 py-0.5 rounded bg-red-500 text-white"
                        >
                          Delete
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); setDeleteConfirmId(null); }}
                          className="p-0.5 rounded hover:bg-gray-100"
                          style={{ color: "#6B7280" }}
                        >
                          <X size={13} />
                        </button>
                      </div>
                    )}
                    {isSeed && (
                      <span
                        className="shrink-0 text-xs px-1.5 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: "#F0F4F8", color: "#6B7280" }}
                      >
                        seed
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-4 border-t text-xs" style={{ borderColor: "#E5E7EB", color: "#9CA3AF" }}>
            {filtered.length} use case{filtered.length !== 1 ? "s" : ""}
          </div>
        </aside>

        {/* Edit / Create form */}
        <main className="flex-1 overflow-y-auto p-8">
          {!showForm ? (
            <div className="flex flex-col items-center justify-center h-full gap-3">
              <Pencil size={32} style={{ color: "#D1D5DB" }} />
              <p className="text-sm" style={{ color: "#9CA3AF" }}>
                Select a use case to edit, or create a new one.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSave} className="max-w-2xl mx-auto flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold" style={{ color: "#012A4A" }}>
                  {isNew ? "New Use Case" : "Edit Use Case"}
                </h2>
                {!isNew && isSeedUseCase(selectedId!) && (
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ backgroundColor: "#F0F4F8", color: "#6B7280" }}
                  >
                    Seed — read-only data, changes saved separately
                  </span>
                )}
              </div>

              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: "#374151" }}>
                  Title
                </label>
                <input
                  required
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  className="border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 font-sans"
                  style={{ borderColor: "#D1D5DB", color: "#012A4A" }}
                  placeholder="Use case title"
                />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: "#374151" }}>
                  Category
                </label>
                <div className="relative">
                  <select
                    required
                    value={form.category}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value as Category }))}
                    className="w-full appearance-none border rounded-lg px-4 py-2.5 text-sm pr-8 outline-none font-sans"
                    style={{ borderColor: "#D1D5DB", color: "#012A4A" }}
                  >
                    {ALL_CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#6B7280" }} />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: "#374151" }}>
                  Description
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  className="border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 font-sans resize-none"
                  style={{ borderColor: "#D1D5DB", color: "#012A4A" }}
                  placeholder="Brief description of what this use case does…"
                />
              </div>

              {/* Prompt Examples */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" style={{ color: "#374151" }}>
                  Prompt Examples
                </label>
                {form.prompts.map((p, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <textarea
                      rows={2}
                      value={p}
                      onChange={(e) => updatePrompt(i, e.target.value)}
                      className="flex-1 border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 font-sans resize-none"
                      style={{ borderColor: "#D1D5DB", color: "#012A4A" }}
                      placeholder={`Prompt ${i + 1}`}
                    />
                    {form.prompts.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePrompt(i)}
                        className="mt-1 p-1.5 rounded-lg transition-colors hover:bg-red-50"
                        style={{ color: "#9CA3AF" }}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addPrompt}
                  className="self-start flex items-center gap-1.5 text-sm font-medium mt-1 transition-opacity hover:opacity-70"
                  style={{ color: "#376FE5" }}
                >
                  <Plus size={14} />
                  Add prompt
                </button>
              </div>

              {/* Feature Note */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: "#374151" }}>
                  Feature Note{" "}
                  <span className="font-normal" style={{ color: "#9CA3AF" }}>
                    (optional — shown as a warning banner)
                  </span>
                </label>
                <input
                  type="text"
                  value={form.featureNote || ""}
                  onChange={(e) => setForm((f) => ({ ...f, featureNote: e.target.value }))}
                  className="border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 font-sans"
                  style={{ borderColor: "#D1D5DB", color: "#012A4A" }}
                  placeholder="e.g. Requires the Activation Search feature to be enabled."
                />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#012A4A" }}
                >
                  {saved ? "Saved!" : isNew ? "Create Use Case" : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={() => { setSelectedId(null); setForm(emptyForm()); setIsNew(false); }}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100"
                  style={{ color: "#6B7280" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}

// ── Root page ──────────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(SESSION_KEY) === "1");
  }, []);

  function handleLogin() { setAuthed(true); }
  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
  }

  if (authed === null) return null; // avoid flash

  return authed
    ? <AdminDashboard onLogout={handleLogout} />
    : <LoginScreen onLogin={handleLogin} />;
}
