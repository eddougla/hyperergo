import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/lib/loaders";
import Link from "next/link";
import Container from "../shared/Container";

type ProductsContainerProps = {
  layout: "grid" | "list";
  search: string;
};

const ProductsContainer = async ({
  layout,
  search,
}: ProductsContainerProps) => {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <Container size="xl">
      <section className="flex justify-between items-center my-4">
        <h4 className="font-medium text-lg">
          {totalProducts} product{totalProducts !== 1 ? "s" : ""}
        </h4>

        <div className="flex gap-4">
          {/* Grid View Button */}
          <Button
            size="icon"
            variant={layout === "grid" ? "default" : "ghost"}
            asChild
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <LuLayoutGrid />
            </Link>
          </Button>

          {/* List View Button */}
          <Button
            size="icon"
            variant={layout === "list" ? "default" : "ghost"}
            asChild
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <LuList />
            </Link>
          </Button>
        </div>
      </section>
      <Separator className="mt-4" />
      {/* Display logic based on layout */}
      {totalProducts === 0 ? (
        <h5 className="text-2xl mt-16">
          Sorry, no products matched your search.
        </h5>
      ) : layout === "grid" ? (
        <ProductsGrid products={products} />
      ) : (
        <ProductsList products={products} />
      )}
    </Container>
  );
};

export default ProductsContainer;
