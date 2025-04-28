"use client";

import { GrabCard } from "@/components/grabCard";
import { Fade } from "@/components/fade";
import { Box } from "@/components/Box";
import Icon from "@/components/Icon";

import { Button } from "@/ui/button";

import { Form } from "./form";

export function ChapterCard() {
  return (
    <Box.Content>
      <Fade.Root>
        <div className="flex items-center justify-between mb-4 ">
          <h4 className="text-sm font-semibold">Capitulo do curso</h4>
          <Fade.Trigger>
            <Button variant="ghost">
              <Icon.CirclePlus />
              Adicionar capitulo
            </Button>
          </Fade.Trigger>
        </div>

        <Fade.Visible>
          <Form />
        </Fade.Visible>

        <Fade.Root>
          <div className="flex flex-col gap-2">
            <GrabCard title="teste 1" />
            <GrabCard title="teste 2" />
            <GrabCard title="teste 3" />
            <GrabCard title="teste 4" />
          </div>
        </Fade.Root>

        {/* <Box.Paragrapth>Você não possue nenhum campitulo ainda</Box.Paragrapth> */}
      </Fade.Root>
    </Box.Content>
  );
}
