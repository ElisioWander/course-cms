"use client";
import Link from "next/link";

import Icon from "@/components/Icon";
import { Input } from "@/components/input";
import { Button } from "@/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  Dialog,
  DialogTrigger,
} from "@/ui/dialog";

export function AddForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icon.CirclePlus />
          Novo curso
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar curso</DialogTitle>
          <DialogDescription>
            Que nome você gostaria de dar para o seu curso?
            <br />
            Não se preocupe, você pode alterá-lo mais tarde.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input autoFocus placeholder="Digite aqui o título do curso" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button type="submit">
            <Link href="/courses/1">Continuar</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
