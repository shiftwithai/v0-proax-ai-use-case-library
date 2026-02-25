"use client";

import { useState, useMemo, useEffect } from "react";
import { LayoutGrid, List } from "lucide-react";
import { type UseCase, type Category } from "@/lib/use-cases";
import { FilterSidebar } from "@/components/filter-sidebar";
import { UseCaseCard } from "@/components/use-case-card";
import { UseCasePanel } from "@/components/use-case-panel";

export function LibraryView() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [gridView, setGridView] = useState(true);
  const [activeCase, setActiveCase] = useState<UseCase | null>(null);

  const [allCases, setAllCases] = useState<UseCase[]>([]);
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/use-cases")
      .then((r) => r.json())
      .then((rows: any[]) => {
        const normalized: UseCase[] = rows.map((row) => ({
          id: row.id,
          title: row.title,
          description: row.description,
          category: row.category as Category,
          prompts: Array.isArray(row.prompts) ? row.prompts : JSON.parse(row.prompts ?? "[]"),
          ...(row.feature_note ? { featureNote: row.feature_note } : {}),
          ss: row.ss ?? false,
          ...(row.thumbnail ? { thumbnail: row.thumbnail } : {}),
        }));
        setAllCases(normalized);
        const cats = Array.from(new Set(normalized.map((u) => u.category))) as Category[];
        setAllCategories(cats);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return allCases.filter((uc) => {
      return selectedCategories.length === 0 || selectedCategories.includes(uc.category);
    });
  }, [allCases, selectedCategories]);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

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

        {/* Toolbar row: grid/list toggle */}
        <div className="flex items-center gap-3">
          {/* Grid / List toggle */}
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
              <span className="hidden sm:inline">Grid</span>
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
              <span className="hidden sm:inline">List</span>
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
              Clear filters
            </button>
          </div>
        )}

        {/* Results count */}
        <p className="text-sm" style={{ color: "#64748B" }}>
          {filtered.length} use case{filtered.length !== 1 ? "s" : ""}
          {selectedCategories.length > 0 && (
            <span style={{ color: "#118AB2" }}>
              {" "}in {selectedCategories.join(", ")}
            </span>
          )}
        </p>

        {/* Cards */}
        {filtered.length > 0 ? (
          gridView ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((uc) => (
                <UseCaseCard
                  key={uc.id}
                  useCase={uc}
                  onClick={() => setActiveCase(uc)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {filtered.map((uc) => (
                <UseCaseCard
                  key={uc.id}
                  useCase={uc}
                  onClick={() => setActiveCase(uc)}
                  listView
                />
              ))}
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="text-base font-medium" style={{ color: "#9BBCD6" }}>
              No use cases in this category.
            </p>
            <button
              onClick={() => setSelectedCategories([])}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#376FE5" }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      {/* Side panel */}
      <UseCasePanel useCase={activeCase} onClose={() => setActiveCase(null)} />
    </div>
  );
}
