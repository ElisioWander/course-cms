import { Page } from "@/components/page";
import Icon from "@/components/Icon";
import { Button } from "@/ui/button";
import { Box } from "@/components/Box";
import { Components } from "./components";
import Link from "next/link";
import { DescriptionCard } from "./components/descriptionCard";
import { TitleCard } from "./components/titleCard";

export default function Chapter() {
  return (
    <Page.Root>
      <Page.Header>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Link href="/courses/1">
              <Icon.ChevronLeft />
            </Link>
          </Button>
          <div className="flex flex-col justify-center">
            <h1 className="text-md font-semibold">Edição dos capítulos</h1>
          </div>
        </div>

        <Page.Actions>
          <Button>
            <Icon.Trash className="text-white" />
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

              <Components.ChapterCard />
            </Box.Root>
          </div>
        </div>
      </Page.Content>
    </Page.Root>
  );
}
