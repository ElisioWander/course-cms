import { Box } from "@/components/Box";
export function VideoCard() {
  return (
    <Box.Content>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">Upload do episódio</h4>
        </div>

        <Box.Paragrapth>Você não possue nenhum vídeo ainda</Box.Paragrapth>
      </div>
    </Box.Content>
  );
}
