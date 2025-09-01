"use server";
import { z } from "zod";
import { redirect } from "next/navigation";

const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  company: z.string().min(1, "Company name is required"),
  price: z.coerce.number().positive("Price must be positive"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  featured: z.boolean().optional(),
});

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    // Extract form data
    const rawData = {
      name: formData.get("name"),
      company: formData.get("company"),
      price: formData.get("price"),
      description: formData.get("description"),
      featured: formData.get("featured") === "on",
    };

    // Validate with Zod
    const validatedData = productSchema.parse(rawData);

    // TODO: Save to database
    // await db.product.create({ data: validatedData });

    console.log("Product data:", validatedData);

    // Optionally redirect after successful creation
    // redirect("/admin/products");

    return { message: "Product created successfully!" };
  } catch (error) {
    console.error("Error creating product:", error);

    if (error instanceof z.ZodError) {
      return { message: error.issues[0].message };
    }

    return { message: "Failed to create product. Please try again." };
  }
};
