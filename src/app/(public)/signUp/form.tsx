"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

import { z } from "zod";

const schema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Informe o email" })
      .email({ message: "Informe um e-mail válido" }),
    password: z.string().min(7, { message: "Deve ter no mínimo 7 caracteres" }),
    passwordConfirmation: z
      .string()
      .min(7, { message: "Deve ter no mínimo 7 caracteres" }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas devem ser iguais",
    path: ["passwordConfirmation"],
  });

type SignUpUserInterface = z.infer<typeof schema>;

export function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpUserInterface>({
    resolver: zodResolver(schema),
  });

  async function onSubmit() {
    // signUp(signUpUserData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        type="email"
        placeholder="Seu e-mail"
        autoFocus
        error={errors.email}
        {...register("email")}
      />
      <Input
        type="password"
        placeholder="Deve ter no mínimo 7 caracteres"
        error={errors.password}
        {...register("password")}
      />
      <Input
        type="password"
        placeholder="Deve ter no mínimo 7 caracteres"
        error={errors.passwordConfirmation}
        {...register("passwordConfirmation")}
      />

      <Button type="submit" isLoading={false}>
        Cadastre-se
      </Button>
    </form>
  );
}
