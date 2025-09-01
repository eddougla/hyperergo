"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import { getAdminUser, renderError } from "@/lib/helpers";

const productSchema = z.object({
  name: z.string().min(2, "Product name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  price: z.coerce.number().positive("Price must be positive"),
  description: z.string().refine(
    (val) => {
      const wordCount = val.trim().split(/\s+/).length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    { message: "Description must be between 10 and 1000 words" }
  ),
  featured: z.boolean().optional(),
  category: z.string().optional(),
});

function validateWithProductSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.issues.map((err) => err.message);
    throw new Error(errors.join(", "));
  }

  return result.data;
}

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const adminUser = await getAdminUser();

    const rawData = {
      name: formData.get("name"),
      company: formData.get("company"),
      price: formData.get("price"),
      description: formData.get("description"),
      featured: formData.get("featured") === "on",
      category: formData.get("category") || null,
    };

    const validatedData = validateWithProductSchema(productSchema, rawData);

    await db.product.create({
      data: {
        ...validatedData,
        image: "/images/product-1.jpg",
        clerkId: adminUser.id,
        createdBy: adminUser.emailAddresses[0]?.emailAddress || "admin",
      },
    });

    return { message: "Product created successfully!" };
  } catch (error) {
    console.error("Error creating product:", error);
    return renderError(error);
  }
};
