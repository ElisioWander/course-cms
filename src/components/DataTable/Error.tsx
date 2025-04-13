import errorImage from "./assets/images/error.svg";

export function Error({ errorMessage }: { errorMessage: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 max-w-[400px] min-w-[200px]">
      <div
        className="w-[250px] h-[250px] flex flex-col items-center justify-center rounded-full "
        // background: 'linear-gradient(to top, #ffffff, #fdfcfd, #fafafa, #f8f7f8, #f5f5f6);',
      >
        <img
          src={errorImage}
          alt="Imagem de erro"
          width="148px"
          height="148px"
        />
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h4 className="font-bold">Ops! Algo deu errado</h4>

        <p className="text-sm">{errorMessage}</p>
      </div>
    </div>
  );
}
