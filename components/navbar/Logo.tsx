import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Logo = () => {
  return (
    <Button asChild variant="ghost" className="p-2">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={220}
          height={36}
          className="h-auto w-auto"
        />
      </Link>
    </Button>
  );
};

export default Logo;
