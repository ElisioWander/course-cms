import { Box } from "@/components/Box";
import Icon from "@/components/Icon";
import { Button } from "@/ui/button";

export function DescriptionCard() {
  return (
    <Box.Root>
      <Box.Content>
        <div>
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">Descrição do curso</h4>
            <div>
              <Button variant="ghost">
                <Icon.Pencil />
                Editar título
              </Button>
            </div>
          </div>

          <Box.Paragrapth>
            Uma pequena descrição do curso para mais informações
          </Box.Paragrapth>
        </div>
      </Box.Content>
    </Box.Root>
  );
}
