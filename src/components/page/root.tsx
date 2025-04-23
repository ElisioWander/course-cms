import { HTMLAttributes, ReactNode } from "react";

type PageContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Root({ children, ...rest }: PageContainerProps) {
  return (
    <div id="layout-content" className={`flex-1 w-full h-full`} {...rest}>
      {children}
    </div>
  );
}
