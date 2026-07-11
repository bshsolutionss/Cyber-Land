"use client";

import { useUIStore } from "@/store/ui.store";

export function useUI() {
  return useUIStore();
}
