interface HeaderProps {
  subTitle: string;
}

export function Header({ subTitle }: HeaderProps) {
  return (
    <header className="text-center mb-8">
      <h2 className="text-2xl font-bold text-zinc-800 mb-2 ">CMS</h2>
      <h3 className="text-[1.25rem] text-zinc-700">{subTitle}</h3>
    </header>
  );
}
