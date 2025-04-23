import { Box } from "@/components/Box";
import Icon from "@/components/Icon";
import { Button } from "@/ui/button";
import Link from "next/link";

export function ChapterCard() {
  return (
    <Box.Content>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">Capitulo do curso</h4>
          <Button variant="ghost">
            <Link
              href="/courses/1/chapter/2"
              className="flex items-center gap-2"
            >
              <Icon.CirclePlus />
              Adicionar capitulo
            </Link>
          </Button>
        </div>

        <Box.Paragrapth>Você não possue nenhum campitulo ainda</Box.Paragrapth>
      </div>
    </Box.Content>
  );
}
