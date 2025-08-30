"use client";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect, Suspense } from "react";

// Separate the search logic into its own component
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

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams]);

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

// Loading fallback component
const SearchInputFallback = () => (
  <Input
    type="search"
    placeholder="Search product..."
    name="search"
    className="max-w-xs text-white"
    disabled
  />
);

// Main component with Suspense wrapper
const NavSearch = () => {
  return (
    <Suspense fallback={<SearchInputFallback />}>
      <NavSearchInput />
    </Suspense>
  );
};

export default NavSearch;
