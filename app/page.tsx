import FeaturedProducts from "@/components/landing/FeaturedProducts";
import Hero from "@/components/landing/Hero";
import Container from "@/components/shared/Container";
import { Suspense } from "react";
import LoadingContainer from "@/components/shared/LoadingContainer";

const LandingPage = () => {
  return (
    <>
      <Container size="full" className="min-h-screen">
        <Hero />
      </Container>
      <Container size="xl">
        <Suspense fallback={<LoadingContainer />}>
          <FeaturedProducts />
        </Suspense>
      </Container>
    </>
  );
};

export default LandingPage;
