import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartButton = async () => {
  // Temp hardcoded value – will become dynamic later
  const numItemsInCart = 9;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative flex justify-center items-center"
    >
      <Link href="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
