import { Box } from "@/components/Box";
import Icon from "@/components/Icon";
import { Button } from "@/ui/button";

export function TitleCard() {
  return (
    <Box.Content>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">Título do curso</h4>
          <div>
            <Button variant="ghost">
              <Icon.Pencil />
              Editar título
            </Button>
          </div>
        </div>

        <Box.Paragrapth>Curso de qualquer coisa</Box.Paragrapth>
      </div>
    </Box.Content>
  );
}
