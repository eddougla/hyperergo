import { isAdmin } from "@/lib/helpers";

type AdminOnlyProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

const AdminOnly = async ({ children, fallback = null }: AdminOnlyProps) => {
  const userIsAdmin = await isAdmin();

  if (!userIsAdmin) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default AdminOnly;
