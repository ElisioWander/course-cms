"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/button";

import { z } from "zod";
import { LinkButton } from "@/components/linkButton";
import { Input } from "@/components/input";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Informe o e-mail" })
    .email({ message: "Informe um e-mail válido" }),
  password: z.string().min(7, { message: "Deve ter no mínimo 7 caracteres" }),
});

type SignInUserInterface = z.infer<typeof schema>;

export function Form() {
  const { push } = useRouter();

  const { handleSubmit } = useForm<SignInUserInterface>({
    resolver: zodResolver(schema),
  });

  async function onSubmit() {
    // signIn(signInUserData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
      <Input type="email" autoFocus placeholder="Seu e-mail" />
      <Input type="password" placeholder="Sua senha" />

      <div className="text-sm mb-4">
        <LinkButton href="/password-recover">Esqueci minha senha</LinkButton>
      </div>

      <Button
        type="submit"
        isLoading={false}
        className="mb-4"
        onClick={() => push("/dashboard")}
      >
        Entrar
      </Button>
    </form>
  );
}
