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
            <h4 className="text-sm font-semibold">Descrição do capítulo</h4>
            <Fade.Trigger>
              <Button variant="ghost">
                <Icon.Pencil />
                Editar capítulo
              </Button>
            </Fade.Trigger>
          </div>

          <Fade.Visible>
            <Form />
          </Fade.Visible>

          <Fade.Invisible>
            <Box.Paragrapth>
              Uma pequena descrição do capítulo para mais informações
            </Box.Paragrapth>
          </Fade.Invisible>
        </Fade.Root>
      </Box.Content>
    </Box.Root>
  );
}
