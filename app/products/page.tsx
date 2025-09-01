import ProductsContainer from "@/components/products/ProductsContainer";
import Hero from "@/components/products/Hero";

type SearchParams = {
  layout?: "grid" | "list";
  search?: string;
};

const ProductsPage = ({ searchParams }: { searchParams: SearchParams }) => {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return (
    <>
      <Hero />
      <ProductsContainer layout={layout} search={search} />
    </>
  );
};

export default ProductsPage;
