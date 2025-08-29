const CartButton = () => {
  return (
    <button className="relative p-2 hover:bg-gray-100 rounded-md transition-colors">
      🛒
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        0
      </span>
    </button>
  );
};

export default CartButton;
