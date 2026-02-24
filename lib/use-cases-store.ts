import { USE_CASES, CATEGORIES, type UseCase, type Category } from "./use-cases";

const STORAGE_KEY = "proax_use_cases";

function loadFromStorage(): UseCase[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UseCase[]) : [];
  } catch {
    return [];
  }
}

function saveToStorage(items: UseCase[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

/** Merge seed data with any admin-created entries (admin items take precedence by id). */
export function getAllUseCases(): UseCase[] {
  const adminItems = loadFromStorage();
  const adminIds = new Set(adminItems.map((u) => u.id));
  const seed = USE_CASES.filter((u) => !adminIds.has(u.id));
  return [...seed, ...adminItems];
}

export function getAllCategories(): Category[] {
  const adminItems = loadFromStorage();
  const extraCats = adminItems.map((u) => u.category);
  const merged = Array.from(new Set([...CATEGORIES, ...extraCats]));
  return merged as Category[];
}

export function saveUseCase(item: UseCase) {
  const existing = loadFromStorage();
  const idx = existing.findIndex((u) => u.id === item.id);
  if (idx >= 0) {
    existing[idx] = item;
  } else {
    existing.push(item);
  }
  saveToStorage(existing);
}

export function deleteUseCase(id: string) {
  const existing = loadFromStorage();
  saveToStorage(existing.filter((u) => u.id !== id));
}

export function isSeedUseCase(id: string): boolean {
  return USE_CASES.some((u) => u.id === id);
}

export { CATEGORIES, type UseCase, type Category };
