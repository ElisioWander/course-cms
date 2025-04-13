import CardButton from "@/components/cardButton";
import Icon from "@/components/Icon";

import { Form } from "./form";
import { Header } from "../header";

export default function SignUp() {
  return (
    <div>
      <Header subTitle="Assine já!" />
      <Form />

      <CardButton.Root
        asLink
        href="/signIn"
        variant="outlined"
        className="mt-4"
      >
        <Icon.logIn />
        <CardButton.Text>
          Já possui uma conta?
          <CardButton.Span>Entre na plataforma</CardButton.Span>
        </CardButton.Text>
        <Icon.ChevronRight />
      </CardButton.Root>
    </div>
  );
}
