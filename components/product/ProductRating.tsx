import { FaStar } from "react-icons/fa";

type Props = {
  productId: string;
};

const ProductRating = ({ productId }: Props) => {
  const rating = 4.5; // Hardcoded for now
  const count = 25;

  const className = `flex gap-1 items-center text-md mt-1 mb-4`;

  return (
    <span className={className}>
      <FaStar className="w-3 h-3 text-yellow-500" />
      {rating} ({count} reviews)
    </span>
  );
};

export default ProductRating;
