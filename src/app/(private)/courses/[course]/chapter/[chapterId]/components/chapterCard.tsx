import { Box } from "@/components/Box";
import Icon from "@/components/Icon";
import { Button } from "@/ui/button";

export function ChapterCard() {
  return (
    <Box.Content>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">Capitulo do curso</h4>
          <div>
            <Button variant="ghost">
              <Icon.CirclePlus />
              Adicionar capitulo
            </Button>
          </div>
        </div>

        <Box.Paragrapth>Você não possue nenhum campitulo ainda</Box.Paragrapth>
      </div>
    </Box.Content>
  );
}
