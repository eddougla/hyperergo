import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const getAdminUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");

  const { orgRole } = await auth();
  if (orgRole !== "org:admin") {
    redirect("/"); // Redirect non-admins
  }

  return user;
};

export const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
  return user;
};

export const renderError = (error: unknown): { message: string } => {
  const message =
    error instanceof Error ? error.message : "Something went wrong";
  return { message };
};

// Helper to check if current user is admin (for conditional UI)
export const isAdmin = async (): Promise<boolean> => {
  try {
    const { orgRole } = await auth();
    return orgRole === "org:admin";
  } catch {
    return false;
  }
};
