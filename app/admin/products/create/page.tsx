import { faker } from "@faker-js/faker";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextareaInput from "@/components/form/TextArea";
import CheckboxInput from "@/components/form/CheckboxInput";
import { SubmitButton } from "@/components/shared/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/lib/actions";

const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraphs({ min: 10, max: 12 });

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>

      <div className="border p-4 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
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
            <PriceInput required />
            <ImageInput />
          </div>

          <TextareaInput
            name="description"
            labelText="Product Description"
            defaultValue={description}
            required
          />

          <div className="mt-6">
            <CheckboxInput name="featured" label="Featured" />
          </div>

          <SubmitButton text="Create Product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProductPage;
