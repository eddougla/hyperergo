import BreadCrumbs from "@/components/product/BreadCrumbs";
import { fetchSingleProduct } from "@/lib/loaders";
import Image from "next/image";
import { formatCurrency } from "@/lib/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/product/AddToCart";
import ProductRating from "@/components/product/ProductRating";
import Container from "@/components/shared/Container";
import Hero from "@/components/product/Hero";

type Params = {
  params: {
    id: string;
  };
};

const ProductPage = async ({ params }: Params) => {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  const formattedPrice = formatCurrency(price);

  return (
    <>
      <Container size="full">
        <Hero />
      </Container>
      <Container size="xl" className="my-8 mx-8">
        <BreadCrumbs name={name} />
        <section className="mt-6 grid gap-y-8 lg:grid-cols-2">
          {/* IMAGE COLUMN */}
          <div className="relative aspect-square max-w-xl">
            <Image
              src={image}
              alt={name}
              fill
              priority
              className="rounded object-cover bg-white"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            />
          </div>

          {/* PRODUCT INFO COLUMN */}
          <div>
            <div className="flex items-center gap-x-8">
              <h1 className="capitalize text-3xl font-bold">{name}</h1>
              <FavoriteToggleButton productId={params.id} />
            </div>

            <ProductRating productId={params.id} />

            <h4 className="text-xl mt-2">{company}</h4>

            <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
              {formattedPrice}
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              {description}
            </p>

            <AddToCart productId={params.id} />
          </div>
        </section>
      </Container>
    </>
  );
};

export default ProductPage;
