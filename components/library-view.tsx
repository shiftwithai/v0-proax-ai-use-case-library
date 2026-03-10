"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { LayoutGrid, List, Search, X } from "lucide-react";
import { type UseCase, type Category } from "@/lib/use-cases";
import { useLang, UI } from "@/lib/language-context";
import { FilterSidebar } from "@/components/filter-sidebar";
import { UseCaseCard } from "@/components/use-case-card";
import { UseCasePanel } from "@/components/use-case-panel";
import { USE_CASES_DATA } from "@/lib/use-cases-data";

export function LibraryView() {
  const { lang } = useLang();
  const t = UI[lang];

  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [gridView, setGridView] = useState(true);
  const [activeCase, setActiveCase] = useState<UseCase | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  // Transform static data with language support
  const allCases = useMemo<UseCase[]>(() => {
    return USE_CASES_DATA.map((row) => {
      const promptsEn = row.prompts;
      const promptsFr = row.prompts_fr;

      return {
        id: row.id,
        title: lang === "fr" && row.title_fr ? row.title_fr : row.title,
        description: lang === "fr" && row.description_fr ? row.description_fr : row.description,
        category: (lang === "fr" && row.category_fr ? row.category_fr : row.category) as Category,
        prompts: lang === "fr" && promptsFr?.length ? promptsFr : promptsEn,
        ...(row.featureNote ? { featureNote: row.featureNote } : {}),
        ss: row.ss ?? false,
        ...(row.thumbnail ? { thumbnail: row.thumbnail } : {}),
        // Keep raw FR fields so panel can access them
        title_fr: row.title_fr,
        description_fr: row.description_fr,
        category_fr: row.category_fr,
        prompts_fr: promptsFr,
      };
    });
  }, [lang]);

  const allCategories = useMemo<Category[]>(() => {
    return Array.from(new Set(allCases.map((u) => u.category))) as Category[];
  }, [allCases]);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allCases.filter((uc) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(uc.category);
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        uc.title.toLowerCase().includes(q) ||
        uc.description.toLowerCase().includes(q) ||
        uc.category.toLowerCase().includes(q) ||
        uc.prompts.some((p) => p.toLowerCase().includes(q))
      );
    });
  }, [allCases, selectedCategories, searchQuery]);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  // When lang changes, clear category filters to avoid stale English labels
  useEffect(() => {
    setSelectedCategories([]);
  }, [lang]);

  return (
    <div className="flex flex-1 min-h-0" style={{ backgroundColor: "#EFF3F9" }}>
      {/* Sidebar */}
      <FilterSidebar
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
        categories={allCategories}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0 px-8 py-6 gap-5">

        {/* Toolbar row */}
        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div
            className="flex items-center gap-2 flex-1 px-4 py-2.5 rounded-xl"
            style={{ border: "1px solid #D1DCE8", backgroundColor: "#FFFFFF" }}
          >
            <Search size={15} style={{ color: "#9BBCD6", flexShrink: 0 }} />
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="flex-1 text-sm outline-none bg-transparent font-sans"
              style={{ color: "#012A4A" }}
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(""); searchRef.current?.focus(); }}
                className="shrink-0 transition-opacity hover:opacity-60"
                aria-label={t.searchClear}
              >
                <X size={14} style={{ color: "#9BBCD6" }} />
              </button>
            )}
          </div>

          <div
            className="flex items-center rounded-xl overflow-hidden shrink-0"
            style={{ border: "1px solid #D1DCE8", backgroundColor: "#FFFFFF" }}
          >
            <button
              onClick={() => setGridView(true)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: gridView ? "#376FE5" : "transparent",
                color: gridView ? "#FFFFFF" : "#22577A",
              }}
              aria-label="Grid view"
            >
              <LayoutGrid size={15} />
              <span className="hidden sm:inline">{t.grid}</span>
            </button>
            <button
              onClick={() => setGridView(false)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: !gridView ? "#376FE5" : "transparent",
                color: !gridView ? "#FFFFFF" : "#22577A",
              }}
              aria-label="List view"
            >
              <List size={15} />
              <span className="hidden sm:inline">{t.list}</span>
            </button>
          </div>
        </div>

        {/* Clear filters */}
        {selectedCategories.length > 0 && (
          <div className="-mt-2">
            <button
              onClick={() => setSelectedCategories([])}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#376FE5" }}
            >
              {t.clearFilters}
            </button>
          </div>
        )}

        {/* Results count */}
        <p className="text-sm" style={{ color: "#64748B" }}>
          {t.results(filtered.length)}
          {selectedCategories.length > 0 && (
            <span style={{ color: "#118AB2" }}>
              {" "}{lang === "fr" ? "dans" : "in"} {selectedCategories.join(", ")}
            </span>
          )}
        </p>

        {/* Cards */}
        {filtered.length > 0 ? (
          gridView ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((uc) => (
                <UseCaseCard key={uc.id} useCase={uc} onClick={() => setActiveCase(uc)} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {filtered.map((uc) => (
                <UseCaseCard key={uc.id} useCase={uc} onClick={() => setActiveCase(uc)} listView />
              ))}
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="text-base font-medium" style={{ color: "#9BBCD6" }}>
              {t.noResults}
            </p>
            <button
              onClick={() => setSelectedCategories([])}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#376FE5" }}
            >
              {t.clearAll}
            </button>
          </div>
        )}
      </main>

      {/* Side panel */}
      <UseCasePanel useCase={activeCase} onClose={() => setActiveCase(null)} />
    </div>
  );
}
