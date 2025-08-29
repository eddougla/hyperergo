import { Separator } from "@/components/ui/separator";

type SectionTitleProps = {
  text: string;
};

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-4">
        {text}
      </h2>
      <Separator />
    </div>
  );
};

export default SectionTitle;
