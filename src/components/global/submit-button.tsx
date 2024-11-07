"use client";
import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { useFormStatus } from "react-dom";
import { Spinner } from "./spinner";
import type { SpinnerProps } from "./spinner";

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
  pendingClassName?: string;
  notPendingClassName?: string;
  showSpinner?: boolean;
  spinnerProps?: SpinnerProps;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  (
    {
      children,
      className = "",
      pendingClassName = "",
      notPendingClassName = "",
      showSpinner = true,
      spinnerProps,
      ...props
    },
    ref
  ) => {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        ref={ref}
        className={cn(
          "flex items-center justify-center space-x-2 duration-300",
          className,
          pending ? pendingClassName : notPendingClassName
        )}
        disabled={pending}
        {...props}
      >
        {pending && showSpinner && <Spinner {...spinnerProps} />}
        <span className="font-adjust">{children}</span>
      </button>
    );
  }
);

SubmitButton.displayName = "SubmitButton";

export default SubmitButton;
