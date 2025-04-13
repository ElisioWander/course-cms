"use client";

import { useMemo } from "react";
import { useTableRootContext } from "./RootProvider";

type SelectionCounterProps = {
  countTitle?: string;
  gender?: "masculino" | "feminino";
};

export function SelectionCounter(props: SelectionCounterProps) {
  const { countTitle, gender } = props;

  const { rowsSelectedId } = useTableRootContext();
  const countQuantidade = rowsSelectedId?.length;

  const flexSufixCountTitle = useMemo(() => {
    if (!countTitle) return "";

    const selecionadoText =
      gender === "feminino" ? "selecionada" : "selecionado";
    const selecionadosText =
      gender === "feminino" ? "selecionadas" : "selecionados";
    const nenhumText = gender === "feminino" ? "Nenhuma" : "Nenhum";

    return countQuantidade === 1
      ? `${countTitle} ${selecionadoText}`
      : countQuantidade && countQuantidade > 1
      ? `${countTitle
          .split(" ")
          .map((item) => `${item}s`)
          .join("  ")} ${selecionadosText}`
      : `${nenhumText} ${countTitle} ${selecionadoText}`;
  }, [countQuantidade, countTitle, gender]);

  return (
    <div className="flex flex-col">
      <p className="text-sm font-semibold whitespace-nowrap">
        {countQuantidade && countQuantidade > 0 ? countQuantidade : ""}{" "}
        {flexSufixCountTitle}
      </p>
    </div>
  );
}
