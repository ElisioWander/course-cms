import { ButtonContainer } from "@/components/buttonContainer";
import { Fade } from "@/components/fade";
import { Input } from "@/components/input";
import { Button } from "@/ui/button";
import Link from "next/link";

export function Form() {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <Input placeholder="Digite o nome do capítulo aqui..." />

      <ButtonContainer>
        <Fade.Close>
          <Button variant="ghost">Cancelar</Button>
        </Fade.Close>
        <Link href="/courses/1/chapter/1">
          <Button>Continuar</Button>
        </Link>
      </ButtonContainer>
    </div>
  );
}
