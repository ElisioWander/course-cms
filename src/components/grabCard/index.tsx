import Icon from "@/components/Icon";
import { Button } from "@/ui/button";

type GrabCardProps = {
  title: string;
};

export function GrabCard({ title }: GrabCardProps) {
  return (
    <div className="flex itens-center border border-green-200 bg-green-50 p-[1px] rounded-md">
      <div className="flex items-cneter px-2 py-2 cursor-grab">
        <Icon.Grid color="green" />
      </div>
      <div className="pl-2 border-l flex items-center mb-[2px] border-green-200">
        <p className="text-green-700 ">{title}</p>
      </div>
      <div className="ml-auto flex items-center ">
        <Button variant="ghost">
          <Icon.Pencil color="green" />
        </Button>
      </div>
    </div>
  );
}
