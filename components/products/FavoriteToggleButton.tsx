import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";

type Props = {
  productId: string;
};

const FavoriteToggleButton = ({ productId }: Props) => {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleButton;
