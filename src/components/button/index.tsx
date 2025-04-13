import { ButtonHTMLAttributes, ReactElement } from "react";

type ButtonProps = {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const {
    startIcon,
    endIcon,
    isLoading = false,
    children,
    type = "button",
    disabled = false,
    className,
    ...rest
  } = props;

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      {...rest}
      className={`w-full flex items-center justify-center gap-2 p-4 font-bold text-sm text-white cursor-pointer rounded-lg border-solid border-transparent
      bg-gray-700 transition-all duration-200 hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-green-400 disabled:opacity-80 focus:border-s focus:border-gray-700 ${className}`}
    >
      {isLoading ? (
        <span className="border-s border-t-white rounded-[50%] w-4 h-4 animate-spin" />
      ) : (
        <>
          {startIcon}
          {children}
          {endIcon}
        </>
      )}
    </button>
  );
}
