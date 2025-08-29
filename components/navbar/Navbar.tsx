import Container from "@/components/shared/Container";
import Logo from "@/components/navbar/Logo";
import NavSearch from "@/components/navbar/NavSearch";
import CartButton from "@/components/navbar/CartButton";
import DarkModeToggle from "@/components/navbar/DarkModeToggle";
import LinksDropdown from "@/components/navbar/LinksDropdown";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container
        size="xl"
        className="
          flex flex-col 
          sm:flex-row 
          sm:justify-between 
          sm:items-center 
          flex-wrap 
          gap-4
          py-8
          bg-gray-700
        "
      >
        <Logo />
        <NavSearch />
        <div className="flex items-center gap-4">
          <CartButton />
          <DarkModeToggle />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
