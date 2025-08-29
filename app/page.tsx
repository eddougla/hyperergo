import Container from "@/components/shared/Container";

const LandingPage = () => {
  return (
    <Container
      size="xl"
      className="bg-red-500 xs:bg-blue-500 sm:bg-green-500 md:bg-purple-500 lg:bg-yellow-500 xl:bg-orange-500"
    >
      <p>This div changes color at different breakpoints!</p>
    </Container>
  );
};

export default LandingPage;
