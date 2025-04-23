import { Box } from "@/components/Box";
import Icon from "@/components/Icon";
import { Button } from "@/ui/button";

export function Attachments() {
  return (
    <Box.Content>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">Materiais Extras</h4>
          <div>
            <Button variant="ghost">
              <Icon.CirclePlus />
              Adicionar arquivo
            </Button>
          </div>
        </div>

        <Box.Paragrapth>Você não possue nenhum arquivo ainda</Box.Paragrapth>
      </div>
    </Box.Content>
  );
}
