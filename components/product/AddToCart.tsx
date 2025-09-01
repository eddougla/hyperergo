import { Button } from "@/components/ui/button";

type Props = {
  _productId: string;
};

const AddToCart = ({ _productId }: Props) => {
  return (
    <Button className="capitalize mt-8" size="lg">
      Add to cart
    </Button>
  );
};

export default AddToCart;
