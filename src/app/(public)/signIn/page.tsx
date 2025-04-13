import CardButton from "@/components/cardButton";
import Icon from "@/components/Icon";

import { Form } from "./form";
import { Header } from "../header";

export default function SignIn() {
  return (
    <div>
      <Header subTitle="Acesse sua conta" />
      <Form />

      <CardButton.Root asLink href="/signUp" variant="outlined">
        <Icon.User />

        <CardButton.Text>
          Não tem uma conta?
          <CardButton.Span>Se inscreva clicando aqui!</CardButton.Span>
        </CardButton.Text>
        <Icon.ChevronRight />
      </CardButton.Root>
    </div>
  );
}
