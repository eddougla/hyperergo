import { faker } from "@faker-js/faker";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextareaInput from "@/components/form/TextArea";
import SelectInput from "@/components/form/SelectInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import { SubmitButton } from "@/components/shared/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categoryOptions = [
  { value: "lamps", label: "Lamps" },
  { value: "chairs", label: "Chairs" },
  { value: "tables", label: "Tables" },
  { value: "cabinets", label: "Cabinets" },
  { value: "plants", label: "Plants" },
  { value: "decor", label: "Decor" },
];

const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraphs({ min: 10, max: 12 });

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Create Product
          </h1>
          <p className="text-gray-600 mt-1">
            Add a new product to your store inventory
          </p>
        </div>
        <Link href="/admin/sales">
          <Button variant="outline" size="sm">
            ← Back to Sales
          </Button>
        </Link>
      </div>

      <div className="bg-white border rounded-lg p-6">
        <FormContainer action={createProductAction}>
          <div className="grid gap-6 md:grid-cols-2">
            <FormInput
              type="text"
              name="name"
              label="Product Name"
              defaultValue={name}
              required
            />
            <FormInput
              type="text"
              name="company"
              label="Company"
              defaultValue={company}
              required
            />
            <SelectInput
              name="category"
              label="Product Category"
              placeholder="Select a category"
              options={categoryOptions}
              required
            />
            <PriceInput required />
            <ImageInput />
          </div>

          <div className="mt-6">
            <TextareaInput
              name="description"
              labelText="Product Description"
              defaultValue={description}
              required
            />
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <CheckboxInput name="featured" label="Featured Product" />
            <p className="text-sm text-gray-500 mt-1">
              Featured products appear prominently on the homepage and in search
              results
            </p>
          </div>

          <div className="flex gap-3 mt-8 pt-6 border-t">
            <SubmitButton
              text="Create Product"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            />
            <Link href="/admin/sales">
              <Button variant="outline">Cancel</Button>
            </Link>
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default CreateProductPage;
