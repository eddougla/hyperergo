import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";

type Props = {
  _productId: string;
};

const FavoriteToggleButton = ({ _productId }: Props) => {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleButton;
