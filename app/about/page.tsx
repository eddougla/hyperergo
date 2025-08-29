// app/about/page.tsx
import db from "@/lib/db";

const AboutPage = async () => {
  // Create a new record in the database
  const addProfile = await db.testProfile.create({
    data: {
      username: `user_${Date.now()}`, // Make username unique
      email: "test@example.com",
    },
  });

  // Fetch all records from the testProfile model
  const users = await db.testProfile.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-4 p-6">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p className="text-gray-600">Total profiles: {users.length}</p>
      {users.map((user) => (
        <div key={user.id} className="border p-4 rounded-lg">
          <h2 className="text-2xl font-bold">{user.username}</h2>
          {user.email && <p className="text-gray-600">{user.email}</p>}
          <p className="text-sm text-gray-500">
            Created: {user.createdAt.toLocaleDateString()}
          </p>
          <p className="text-xs text-gray-400">ID: {user.id}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
