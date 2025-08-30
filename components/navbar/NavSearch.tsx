"use client";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect, Suspense } from "react";

const NavSearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(
    () => searchParams.get("search")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.replace(`/products?${params.toString()}`);
  }, 300);

  // Extract search value to fix the useEffect warning
  const currentSearch = searchParams.get("search");

  useEffect(() => {
    if (!currentSearch) {
      setSearch("");
    }
  }, [currentSearch]);

  return (
    <Input
      type="search"
      placeholder="Search product..."
      name="search"
      className="max-w-xs text-white"
      value={search}
      onChange={(e) => {
        const value = e.target.value;
        setSearch(value);
        handleSearch(value);
      }}
    />
  );
};

const NavSearch = () => {
  return (
    <Suspense
      fallback={
        <div className="max-w-xs h-10 bg-gray-200 animate-pulse rounded" />
      }
    >
      <NavSearchInput />
    </Suspense>
  );
};

export default NavSearch;
