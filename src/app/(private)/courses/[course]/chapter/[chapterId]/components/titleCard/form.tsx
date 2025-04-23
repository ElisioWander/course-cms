import { ButtonContainer } from "@/components/buttonContainer";
import { Input } from "@/components/input";
import { Fade } from "@/components/fade";

import { Button } from "@/ui/button";

export function Form() {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Digite seu novo título aqui..." />

      <ButtonContainer>
        <Fade.Trigger>
          <Button variant="ghost">Cancelar</Button>
        </Fade.Trigger>
        <Button>Salvar</Button>
      </ButtonContainer>
    </div>
  );
}
