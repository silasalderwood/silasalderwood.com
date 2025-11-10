"use client";

import { ButtonHTMLAttributes } from "react";
import { analytics } from "@/lib/analytics";

interface TrackedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonName: string;
  location?: string;
}

/**
 * Button component that automatically tracks clicks
 */
export function TrackedButton({
  children,
  buttonName,
  location,
  onClick,
  ...props
}: TrackedButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    analytics.trackClick(buttonName, location);
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

