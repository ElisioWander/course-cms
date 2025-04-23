import { Page } from "@/components/page";
import Icon from "@/components/Icon";
import { Button } from "@/ui/button";
import { Box } from "@/components/Box";
import { Components } from "./components";
import Link from "next/link";

export default function Course() {
  return (
    <Page.Root>
      <Page.Header>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Link href="/courses">
              <Icon.ChevronLeft />
            </Link>
          </Button>
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
                  Customize seu curso
                </Box.Title>
              </Box.Header>

              <Components.TitleCard />
            </Box.Root>

            <Components.DescriptionCard />
            <Components.ImageCard />
          </div>

          <div className="w-full flex flex-col gap-4">
            <Box.Root>
              <Box.Header>
                <Box.Title>
                  <Box.Icon icon={<Icon.ListChecks />} />
                  Capitulos do curso
                </Box.Title>
              </Box.Header>

              <Components.ChapterCard />
            </Box.Root>

            <Box.Root>
              <Box.Header>
                <Box.Title>
                  <Box.Icon icon={<Icon.FileUp />} />
                  Materiais Extras
                </Box.Title>
              </Box.Header>

              <Components.Attachments />
            </Box.Root>
          </div>
        </div>
      </Page.Content>
    </Page.Root>
  );
}
