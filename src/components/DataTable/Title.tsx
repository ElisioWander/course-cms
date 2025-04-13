type TitleProps = {
  titleDivider?: boolean;
  children: string;
};

export function Title({ children, titleDivider = false }: TitleProps) {
  return (
    <p
      className={`text-sm whitespace-nowrap pr-3 ${
        titleDivider ? "border-r border-gray-200" : ""
      }`}
    >
      {children}
    </p>
  );
}
