import Link from "next/link";

import { Page } from "@/components/page";
import { Box } from "@/components/Box";
import Icon from "@/components/Icon";

import { Button } from "@/ui/button";

import { DescriptionCard } from "./components/descriptionCard";
import { EpisodeCard } from "./components/episodeCard";
import { TitleCard } from "./components/titleCard";

export default function Chapter() {
  return (
    <Page.Root>
      <Page.Header>
        <div className="flex items-center gap-4">
          <Link href="/courses/1">
            <Button variant="outline">
              <Icon.ChevronLeft />
            </Button>
          </Link>

          <div className="flex flex-col justify-center">
            <h1 className="text-md font-semibold">Edição dos capítulos</h1>
          </div>
        </div>

        <Page.Actions>
          <Button>
            <Icon.Trash color="white" />
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
                  Customize seu capítulo
                </Box.Title>
              </Box.Header>

              <TitleCard />
            </Box.Root>

            <DescriptionCard />
          </div>

          <div className="w-full flex flex-col gap-4">
            <Box.Root>
              <Box.Header>
                <Box.Title>
                  <Box.Icon icon={<Icon.ListChecks />} />
                  Episódios do curso
                </Box.Title>
              </Box.Header>

              <EpisodeCard />
            </Box.Root>
          </div>
        </div>
      </Page.Content>
    </Page.Root>
  );
}
