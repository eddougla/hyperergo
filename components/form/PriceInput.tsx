import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputNumberProps = {
  defaultValue?: number;
};

const name = "price";

const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        name={name}
        type="number"
        min={0}
        required
        defaultValue={defaultValue || 100}
      />
    </div>
  );
};

export default PriceInput;
