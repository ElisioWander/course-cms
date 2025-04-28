"use client";

import { Fade } from "@/components/fade";
import { Box } from "@/components/Box";
import Icon from "@/components/Icon";

import { Button } from "@/ui/button";
import { Form } from "./form";

export function DescriptionCard() {
  return (
    <Box.Root>
      <Box.Content>
        <Fade.Root>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold">Descrição do episódio</h4>
            <Fade.Trigger>
              <Button variant="ghost">
                <Icon.Pencil />
                Editar descrição
              </Button>
            </Fade.Trigger>
          </div>

          <Fade.Visible>
            <Form />
          </Fade.Visible>

          <Fade.Invisible>
            <Box.Paragrapth>
              Você não informou nenhuma descrição ainda
            </Box.Paragrapth>
          </Fade.Invisible>
        </Fade.Root>
      </Box.Content>
    </Box.Root>
  );
}
