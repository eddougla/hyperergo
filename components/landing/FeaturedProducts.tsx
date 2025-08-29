import { fetchFeaturedProducts } from "@/lib/loaders";
import EmptyList from "../shared/EmptyList";
import SectionTitle from "../shared/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();

  if (!products || products.length === 0) {
    return <EmptyList />;
  }

  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={products} />
    </section>
  );
};

export default FeaturedProducts;
