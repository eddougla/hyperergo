import Container from "@/components/shared/Container";
import Logo from "@/components/navbar/Logo";
import NavSearch from "@/components/navbar/NavSearch";
import CartButton from "@/components/navbar/CartButton";
import DarkModeToggle from "@/components/navbar/DarkModeToggle";
import LinksDropdown from "@/components/navbar/LinksDropdown";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-50">
      <div className="bg-black/20 backdrop-blur-sm py-4 border-b border-white/10 px-8">
        <Container
          size="xl"
          className="
            flex flex-col 
            sm:flex-row 
            sm:justify-between 
            sm:items-center 
            flex-wrap 
            gap-4
            py-4
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
      </div>
    </nav>
  );
};

export default Navbar;
