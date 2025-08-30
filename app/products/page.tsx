import ProductsContainer from "@/components/products/ProductsContainer";
import Container from "@/components/shared/Container";
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
      <Container size="full">
        <Hero />
      </Container>
      <Container size="xl" className="mb-8">
        <ProductsContainer layout={layout} search={search} />
      </Container>
    </>
  );
};

export default ProductsPage;
