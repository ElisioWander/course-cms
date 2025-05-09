import Link from "next/link";

import { Page } from "@/components/page";
import { Box } from "@/components/Box";
import Icon from "@/components/Icon";

import { Button } from "@/ui/button";

import { DescriptionCard } from "./components/descriptionCard";
import { ChapterCard } from "./components/chapterCard";
import { Attachments } from "./components/attachments";
import { TitleCard } from "./components/tituloCard";
import { ImageCard } from "./components/imageCard";

export default function Course() {
  return (
    <Page.Root>
      <Page.Header>
        <div className="flex items-center gap-4">
          <Link href="/courses">
            <Button variant="outline">
              <Icon.ChevronLeft />
            </Button>
          </Link>
          <div className="flex flex-col justify-center">
            <h1 className="text-md font-semibold">Edição do curso</h1>
            <span className="text-xs text-gray-500 font-medium ">
              Passos finalizados (6/6)
            </span>
          </div>
        </div>

        <Page.Actions>
          <Button variant="outline">Publicar</Button>
          <Button>
            <Icon.Trash color="#fff" />
          </Button>
        </Page.Actions>
      </Page.Header>

      <Page.Content>
        <div className="w-full flex flex-col gap-4 pb-12 md:flex-row">
          <div className="w-full flex flex-col gap-4">
            <Box.Root>
              <Box.Header>
                <Box.Title>
                  <Box.Icon icon={<Icon.LayoutDashboard />} />
                  Customize seu curso
                </Box.Title>
              </Box.Header>

              <TitleCard />
            </Box.Root>

            <DescriptionCard />
            <ImageCard />
          </div>

          <div className="w-full flex flex-col gap-4">
            <Box.Root>
              <Box.Header>
                <Box.Title>
                  <Box.Icon icon={<Icon.ListChecks />} />
                  Customize seus capitulos
                </Box.Title>
              </Box.Header>

              <ChapterCard />
            </Box.Root>

            <Box.Root>
              <Box.Header>
                <Box.Title>
                  <Box.Icon icon={<Icon.FileUp />} />
                  Materiais Extras
                </Box.Title>
              </Box.Header>

              <Attachments />
            </Box.Root>
          </div>
        </div>
      </Page.Content>
    </Page.Root>
  );
}
