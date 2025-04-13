import CardButton from "@/components/cardButton";
import Icon from "@/components/Icon";

import { Form } from "./form";
import { Header } from "../header";

export default function PasswordRecover() {
  return (
    <div>
      <Header subTitle="Esqueci minha senha" />
      <Form />

      <CardButton.Root
        asLink
        href="/signIn"
        variant="outlined"
        className="mt-4"
      >
        <Icon.ArrowBigLeft />
        <CardButton.Text className="text-center">
          Voltar para o login
        </CardButton.Text>
      </CardButton.Root>
    </div>
  );
}
