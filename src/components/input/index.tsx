import { cn } from "@/lib/utils";
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
        <div
          className={cn(
            "w-full flex items-center px-2 border-1 border-solid border-gray-200 focus-within:border-1 focus-within:border-solid text-gray-900 focus-within:border-gray-900 focus-within:text-gray-900 rounded-md bg-gray-100",
            className
          )}
        >
          {icon && <div className="w-5 flex justify-center mr-1">{icon}</div>}
          <label className="flex-1">
            <input
              type={type}
              className={`w-full p-2 h-full border-none focus:outline-none text-sm placeholder:text-sm placeholder:text-gray-500 ${className}`}
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
