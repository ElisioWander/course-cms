import Link from "next/link";

import { ButtonContainer } from "@/components/buttonContainer";
import { Input } from "@/components/input";
import { Fade } from "@/components/fade";

import { Button } from "@/ui/button";

export function Form() {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <Input placeholder="Digite o nome do episódio aqui..." />

      <ButtonContainer>
        <Fade.Close>
          <Button variant="ghost">Cancelar</Button>
        </Fade.Close>
        <Link href="/courses/1/chapter/1/episode/1">
          <Button>Continuar</Button>
        </Link>
      </ButtonContainer>
    </div>
  );
}
