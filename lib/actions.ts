"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import { getAdminUser, renderError } from "@/lib/helpers";

const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  company: z.string().min(1, "Company name is required"),
  price: z.coerce.number().positive("Price must be positive"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  featured: z.boolean().optional(),
  category: z.string().optional(), // Add category field
});

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    // 🔐 ADMIN CHECK: Only admins can create products
    const adminUser = await getAdminUser();

    // Extract and validate form data
    const rawData = {
      name: formData.get("name"),
      company: formData.get("company"),
      price: formData.get("price"),
      description: formData.get("description"),
      featured: formData.get("featured") === "on",
      category: formData.get("category") || null,
    };

    const validatedData = productSchema.parse(rawData);

    // Create product with admin user tracking
    await db.product.create({
      data: {
        ...validatedData,
        image: "/images/product-1.jpg", // Placeholder
        clerkId: adminUser.id,
        createdBy: adminUser.emailAddresses[0]?.emailAddress || "admin",
      },
    });

    return { message: "Product created successfully!" };
  } catch (error) {
    console.error("Error creating product:", error);

    if (error instanceof z.ZodError) {
      return { message: error.issues[0].message };
    }

    return renderError(error);
  }
};
