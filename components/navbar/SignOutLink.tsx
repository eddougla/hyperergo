"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";
import Link from "next/link";

const SignOutLink = () => {
  const handleLogout = () => {
    toast.success("Logout successful");
  };

  return (
    <SignOutButton>
      <Link href="/" onClick={handleLogout} className="w-full text-left">
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
