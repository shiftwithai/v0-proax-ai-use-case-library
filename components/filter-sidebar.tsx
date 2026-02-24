"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { type Category } from "@/lib/use-cases";

interface FilterSidebarProps {
  selectedCategories: Category[];
  onCategoryChange: (categories: Category[]) => void;
  categories?: Category[];
}

export function FilterSidebar({
  selectedCategories,
  onCategoryChange,
  categories: categoriesProp,
}: FilterSidebarProps) {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [categories, setCategories] = useState<Category[]>(categoriesProp ?? []);

  useEffect(() => {
    if (categoriesProp) setCategories(categoriesProp);
  }, [categoriesProp]);

  const toggleCategory = (cat: Category) => {
    if (selectedCategories.includes(cat)) {
      onCategoryChange(selectedCategories.filter((c) => c !== cat));
    } else {
      onCategoryChange([...selectedCategories, cat]);
    }
  };

  return (
    <aside
      className="w-[220px] shrink-0 flex flex-col gap-1 py-6 px-4 min-h-full"
      style={{ backgroundColor: "#FFFFFF", borderRight: "1px solid #E2EBF3" }}
    >
      <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#9BBCD6" }}>
        Filter
      </p>

      {/* Category section */}
      <div className="flex flex-col gap-1">
        <button
          onClick={() => setCategoryOpen((v) => !v)}
          className="flex items-center justify-between w-full py-2 px-1 rounded-md text-sm font-semibold transition-colors hover:bg-slate-50"
          style={{ color: "#012A4A" }}
        >
          Category
          {categoryOpen ? (
            <ChevronUp size={14} style={{ color: "#9BBCD6" }} />
          ) : (
            <ChevronDown size={14} style={{ color: "#9BBCD6" }} />
          )}
        </button>

        {categoryOpen && (
          <div className="flex flex-col gap-1 pl-1">
            {categories.map((cat) => {
              const checked = selectedCategories.includes(cat);
              return (
                <label
                  key={cat}
                  className="flex items-center gap-2.5 py-1.5 px-1 rounded-md cursor-pointer select-none text-sm transition-colors hover:bg-slate-50"
                  style={{ color: checked ? "#376FE5" : "#22577A" }}
                >
                  <span
                    className="w-4 h-4 rounded flex items-center justify-center border shrink-0 transition-colors"
                    style={{
                      borderColor: checked ? "#376FE5" : "#CBD5E1",
                      backgroundColor: checked ? "#376FE5" : "transparent",
                    }}
                  >
                    {checked && (
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                      >
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => toggleCategory(cat)}
                  />
                  {cat}
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="my-4" style={{ borderTop: "1px solid #E2EBF3" }} />

      {/* Quick reset */}
      {selectedCategories.length > 0 && (
        <button
          onClick={() => onCategoryChange([])}
          className="text-xs font-medium text-left px-1 transition-opacity hover:opacity-70"
          style={{ color: "#118AB2" }}
        >
          Clear filters
        </button>
      )}
    </aside>
  );
}
