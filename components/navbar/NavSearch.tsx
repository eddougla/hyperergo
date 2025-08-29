const NavSearch = () => {
  return (
    <div className="flex-1 max-w-md mx-4">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default NavSearch;
