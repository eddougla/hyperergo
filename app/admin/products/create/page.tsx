import { faker } from "@faker-js/faker";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

const createProductAction = async (formData: FormData) => {
  "use server";
  const name = formData.get("name") as string;
  console.log("Product name:", name);
};

const CreateProductPage = () => {
  // Generate fake data
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraphs(1, "\n");

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>

      <div className="border p-4 rounded-md">
        <form action={createProductAction}>
          <div className="mb-2">
            <FormInput
              type="text"
              name="name"
              label="Product Name"
              defaultValue={name}
            />
          </div>

          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CreateProductPage;
