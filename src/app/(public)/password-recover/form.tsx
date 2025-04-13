"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Informe o e-mail" })
    .email({ message: "Informe um e-mail válido" }),
});

type PasswordRecoverUserInterface = z.infer<typeof schema>;

export function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<PasswordRecoverUserInterface>({
    resolver: zodResolver(schema),
  });

  async function onSubmit() {
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        type="email"
        autoFocus
        placeholder="Informe seu e-mail para a recuperação da senha"
        error={errors.email}
        {...register("email")}
      />

      <Button type="submit" isLoading={false}>
        Recuperar minha senha
      </Button>
    </form>
  );
}
