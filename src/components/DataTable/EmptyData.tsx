import Image from "next/image";
import notifyImage from "./assets/images/empty-data.svg";

export function EmptyData() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 max-w-[400px] min-w-[250px">
      <div
        className="w-[250px] h-[250px] flex flex-col items-center justify-center rounded-full"
        // 'linear-gradient(to top, #ffffff, #fdfcfd, #fafafa, #f8f7f8, #f5f5f6);',
      >
        <Image
          src={notifyImage}
          alt="Imagem de notificação"
          width={148}
          height={148}
        />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-2xl font-bold">Nenhum registro encontrado</h2>
        <p className="whitespace-normal text-sm ">
          Tente outra pesquisa ou adicione um novo registro.
        </p>
      </div>
    </div>
  );
}
