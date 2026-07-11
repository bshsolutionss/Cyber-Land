"use client";

import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/product.service";
import type { ProductFilters } from "@/types";

export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (filters?: ProductFilters) =>
    [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (handle: string) => [...productKeys.details(), handle] as const,
  collection: (handle: string) =>
    [...productKeys.all, "collection", handle] as const,
  search: (q: string) => [...productKeys.all, "search", q] as const,
  related: (id: string) => [...productKeys.all, "related", id] as const,
};

export function useProducts() {
  return useQuery({
    queryKey: productKeys.lists(),
    queryFn: () => productService.getAll(),
  });
}

export function useProduct(handle: string) {
  return useQuery({
    queryKey: productKeys.detail(handle),
    queryFn: () => productService.getByHandle(handle),
    enabled: Boolean(handle),
  });
}

export function useCollectionProducts(handle: string) {
  return useQuery({
    queryKey: productKeys.collection(handle),
    queryFn: () => productService.getByCollection(handle),
    enabled: Boolean(handle),
  });
}

export function useProductSearch(query: string) {
  return useQuery({
    queryKey: productKeys.search(query),
    queryFn: () => productService.search(query),
    enabled: query.trim().length > 0,
  });
}
