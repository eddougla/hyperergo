"use client";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

const NavSearch = () => {
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
  }, [searchParams.get("search")]);

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

export default NavSearch;
