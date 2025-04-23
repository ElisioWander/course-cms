import { Box } from "@/components/Box";
import Icon from "@/components/Icon";
import { Button } from "@/ui/button";

export function ImageCard() {
  return (
    <Box.Root>
      <Box.Content>
        <div>
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">Imagem do curso</h4>
            <div>
              <Button variant="ghost">
                <Icon.CirclePlus />
                Adicionar imagem
              </Button>
            </div>
          </div>

          <div className="h-40 w-full rounded-md bg-gray-300 flex flex-col items-center justify-center ">
            <Icon.Image />
          </div>
        </div>
      </Box.Content>
    </Box.Root>
  );
}
