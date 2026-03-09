"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, PlayCircle, X } from "lucide-react";
import { type Category } from "@/lib/use-cases";
import { useLang, UI } from "@/lib/language-context";

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
  const { lang } = useLang();
  const t = UI[lang];
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [categories, setCategories] = useState<Category[]>(categoriesProp ?? []);
  const [videoOpen, setVideoOpen] = useState(false);

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
    <>
      <aside
        className="w-[220px] shrink-0 flex flex-col gap-1 py-6 px-4 min-h-full"
        style={{ backgroundColor: "#FFFFFF", borderRight: "1px solid #E2EBF3" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "#9BBCD6" }}
        >
          {t.filter}
        </p>

        {/* Watch video button */}
        <button
          onClick={() => setVideoOpen(true)}
          className="flex items-center gap-2 w-full py-2.5 px-3 rounded-xl text-sm font-semibold mb-3 transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#012A4A", color: "#FFFFFF" }}
        >
          <PlayCircle size={15} />
          {t.watchHowTo}
        </button>

        {/* Divider */}
        <div className="mb-3" style={{ borderTop: "1px solid #E2EBF3" }} />

        {/* Category section */}
        <div className="flex flex-col gap-1">
          <button
            onClick={() => setCategoryOpen((v) => !v)}
            className="flex items-center justify-between w-full py-2 px-1 rounded-md text-sm font-semibold transition-colors hover:bg-slate-50"
            style={{ color: "#012A4A" }}
          >
            {t.categories}
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
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
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
            {t.clearFilters}
          </button>
        )}
      </aside>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(1,42,74,0.75)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setVideoOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ backgroundColor: "#000000" }}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ backgroundColor: "#012A4A" }}
            >
              <h2 className="text-sm font-semibold text-white">{t.watchHowToTitle}</h2>
              <button
                onClick={() => setVideoOpen(false)}
                className="text-white transition-opacity hover:opacity-70 p-1 rounded-lg"
                aria-label="Close video"
              >
                <X size={18} />
              </button>
            </div>

            {/* YouTube embed */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`${t.watchHowToUrl}?autoplay=1&rel=0`}
                title={t.watchHowToTitle}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
