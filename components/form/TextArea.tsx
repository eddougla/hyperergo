import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

const TextArea = ({ name, labelText, defaultValue }: TextAreaInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        rows={5}
        required
        defaultValue={defaultValue}
        className="leading-loose"
      />
    </div>
  );
};

export default TextArea;
