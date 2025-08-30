import LoadingProduct from "@/components/shared/LoadingProduct";

const LoadingContainer = () => {
  return (
    <div className="pt-24 px-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
};

export default LoadingContainer;
