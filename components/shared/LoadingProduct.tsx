import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingProduct = () => {
  return (
    <article className="group relative">
      <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
        <CardContent className="p-4">
          {/* Image skeleton - matching actual h-80 md:h-80 */}
          <div className="relative h-80 md:h-80 rounded overflow-hidden">
            <Skeleton className="h-full w-full rounded" />
          </div>
          {/* Text content skeleton */}
          <div className="mt-4 text-center">
            <Skeleton className="h-6 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-1/2 mt-2 mx-auto" />
          </div>
        </CardContent>
      </Card>
      {/* Favorite button skeleton - positioned like the real one */}
      <div className="absolute top-7 right-7 z-10">
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </article>
  );
};

export default LoadingProduct;
