import { cva, VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";
import { cn } from "@/utils/cn";

const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-5 w-5",
      xs: "h-2 w-2",
      sm: "h-3 w-3",
      base: "h-4 w-4",
      lg: "h-6 w-6",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner = ({ size }: SpinnerProps) => {
  return <Loader color="white" className={cn(spinnerVariants({ size }))} />;
};
