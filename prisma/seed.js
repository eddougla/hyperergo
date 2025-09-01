// SOLUTION 3: Enhanced seeder with better error handling and real admin clerkId
const { PrismaClient } = require("@prisma/client");
const products = require("./products.json");
const prisma = new PrismaClient();

async function main() {
  try {
    // Optional: Clear existing products
    const deletedCount = await prisma.product.deleteMany({});
    console.log(`🗑️ Deleted ${deletedCount.count} existing products`);

    // You can replace "your-real-clerk-id" with an actual admin user's clerkId
    const adminClerkId = process.env.ADMIN_CLERK_ID || "your-real-clerk-id";

    for (const [index, product] of products.entries()) {
      const createdProduct = await prisma.product.create({
        data: {
          ...product,
          clerkId: adminClerkId, // Use real admin clerkId instead of "clerkId"
          // If you have audit fields:
          // createdBy: "system-seed",
        },
      });

      console.log(
        `✅ Created product ${index + 1}/${products.length}: ${
          createdProduct.name
        }`
      );
    }

    console.log(`🎉 Successfully seeded ${products.length} products!`);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
