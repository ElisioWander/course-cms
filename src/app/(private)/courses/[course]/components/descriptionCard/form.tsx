"use client";

import { ButtonContainer } from "@/components/buttonContainer";
import { Input } from "@/components/input";
import { Fade } from "@/components/fade";

import { Button } from "@/ui/button";

export function Form() {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Digite a descrição aqui..." />

      <ButtonContainer>
        <Fade.Close>
          <Button variant="ghost">Cancelar</Button>
        </Fade.Close>
        <Button>Salvar</Button>
      </ButtonContainer>
    </div>
  );
}
