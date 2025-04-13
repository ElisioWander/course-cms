import { ReactElement, ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";
import { Button as BaseButton } from "@/components/button";

type ButtonProps = {
  startIcon?: ReactElement;
  isLoading?: boolean;
  children: ReactNode;
};

export function Button({
  isLoading = false,
  startIcon,
  children,
}: ButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {/* <IconButton
            {...rest}
            color="primary"
            disabled={isLoading ? true : rest.disabled}
          >
            {startIcon}
            {isLoading && (
              <CircularProgress
                color="secondary"
                size={14}
                sx={{
                  position: "absolute",
                  top: "25%",
                  bottom: "25%",
                  left: "25%",
                  right: "25%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </IconButton> */}
        </TooltipTrigger>
        <BaseButton
          startIcon={startIcon}
          // disabled={isLoading ? true : rest.disabled}
          className="relative h-7 p-[7px 8px 8px] border border-red-500 rounded-full flex items-center overflow-hidden whitespace-nowrap transition-all duration-200"
        >
          <span className="transition-opacity duration-200 overflow-hidden whitespace-nowrap text-ellipsis">
            {isLoading && <div className="absolute animate-spin" />}

            {children}
          </span>
        </BaseButton>

        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
