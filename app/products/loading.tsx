"use client";

import Container from "@/components/shared/Container";
import LoadingContainer from "@/components/shared/LoadingContainer";
import Hero from "@/components/products/Hero";

const loading = () => {
  return (
    <>
      <Container size="full">
        <Hero />
      </Container>
      <Container size="xl">
        <LoadingContainer />
      </Container>
    </>
  );
};
export default loading;
