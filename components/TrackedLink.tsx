"use client";

import Link, { LinkProps } from "next/link";
import { analytics } from "@/lib/analytics";

interface TrackedLinkProps extends Omit<LinkProps, "href"> {
  children: React.ReactNode;
  href: string | { pathname: string; query?: Record<string, string> };
  className?: string;
  linkText?: string;
}

/**
 * Link component that automatically tracks clicks
 */
export function TrackedLink({
  children,
  href,
  className,
  linkText,
  ...props
}: TrackedLinkProps) {
  const handleClick = () => {
    const url = typeof href === "string" 
      ? href 
      : (href as { pathname?: string }).pathname || "";
    analytics.trackLink(url, linkText || (typeof children === "string" ? children : url));
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

