"use client";

import { Box } from "@/components/Box";
import { Fade } from "@/components/fade";
import Icon from "@/components/Icon";
import { Button } from "@/ui/button";
import { Form } from "./form";
import { GrabCard } from "@/components/grabCard";

export function EpisodeCard() {
  return (
    <Box.Content>
      <Fade.Root>
        <div className="flex items-center justify-between mb-4 ">
          <h4 className="text-sm font-semibold">Episódio do curso</h4>
          <Fade.Trigger>
            <Button variant="ghost">
              <Icon.CirclePlus />
              Adicionar episódio
            </Button>
          </Fade.Trigger>
        </div>

        <Fade.Visible>
          <Form />
        </Fade.Visible>

        <div className="flex flex-col gap-2">
          <GrabCard title="episódio 1" />
          <GrabCard title="episódio 2" />
          <GrabCard title="episódio 3" />
          <GrabCard title="episódio 4" />
          <GrabCard title="episódio 5" />
          <GrabCard title="episódio 6" />
          <GrabCard title="episódio 7" />
          <GrabCard title="episódio 8" />
        </div>

        {/* <Fade.Invisible>
          <Box.Paragrapth>Você não possue nenhum episódio ainda</Box.Paragrapth>
        </Fade.Invisible> */}
      </Fade.Root>
    </Box.Content>
  );
}
