import { ButtonContainer } from "@/components/buttonContainer";
import { Fade } from "@/components/fade";
import { Input } from "@/components/input";
import { Button } from "@/ui/button";

export function Form() {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Digite seu título aqui..." />

      <ButtonContainer>
        <Fade.Close>
          <Button variant="ghost">Cancelar</Button>
        </Fade.Close>
        <Button>Salvar</Button>
      </ButtonContainer>
    </div>
  );
}
