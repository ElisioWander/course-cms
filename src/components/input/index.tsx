import { InputHTMLAttributes, ReactElement, forwardRef } from "react";
import { FieldError } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, error, ...props }, ref) => {
    return (
      <>
        <div className="w-full flex items-center px-2 border-2 border-solid border-zinc-400 focus-within:border-2 focus-within:border-solid text-zinc-600 focus-within:border-zinc-900 focus-within:text-zinc-900 rounded-lg bg-zinc-100">
          {icon && <div className="w-8 flex justify-center mr-1">{icon}</div>}
          <label className="flex-1">
            <input
              type={type}
              className={`w-full p-4 h-full border-none focus:outline-none text-sm placeholder:text-sm placeholder:text-zinc-500 ${className}`}
              ref={ref}
              {...props}
            />
          </label>
        </div>
        {!!error && (
          <span className="block -mt-3 ml-2 text-brand-red text-sm text-red-500">
            {error.message}
          </span>
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
