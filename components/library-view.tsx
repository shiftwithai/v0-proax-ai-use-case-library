"use client";

import { useState, useMemo } from "react";
import { Search, LayoutGrid, List } from "lucide-react";
import { USE_CASES, type UseCase, type Category } from "@/lib/use-cases";
import { FilterSidebar } from "@/components/filter-sidebar";
import { UseCaseCard } from "@/components/use-case-card";
import { UseCasePanel } from "@/components/use-case-panel";

export function LibraryView() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [gridView, setGridView] = useState(true);
  const [activeCase, setActiveCase] = useState<UseCase | null>(null);

  const filtered = useMemo(() => {
    return USE_CASES.filter((uc) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(uc.category);
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        uc.title.toLowerCase().includes(q) ||
        uc.description.toLowerCase().includes(q) ||
        uc.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategories, searchQuery]);

  return (
    <div className="flex flex-1 min-h-0" style={{ backgroundColor: "#EFF3F9" }}>
      {/* Sidebar */}
      <FilterSidebar
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0 px-8 py-6 gap-6">
        {/* Toolbar */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex-1 relative max-w-xl">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2"
              style={{ color: "#9BBCD6" }}
            />
            <input
              type="search"
              placeholder="Search use cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none transition-colors"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #D1DCE8",
                color: "#012A4A",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#118AB2")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#D1DCE8")}
            />
          </div>

          {/* Grid / List toggle */}
          <div
            className="flex items-center rounded-xl overflow-hidden"
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

        {/* Results count */}
        <div className="flex items-center justify-between">
          <p className="text-sm" style={{ color: "#64748B" }}>
            {filtered.length} use case{filtered.length !== 1 ? "s" : ""}
            {selectedCategories.length > 0 && (
              <span style={{ color: "#118AB2" }}>
                {" "}in {selectedCategories.join(", ")}
              </span>
            )}
          </p>
        </div>

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
            <Search size={40} style={{ color: "#D1DCE8" }} />
            <p className="text-base font-medium" style={{ color: "#9BBCD6" }}>
              No use cases match your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategories([]);
              }}
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
