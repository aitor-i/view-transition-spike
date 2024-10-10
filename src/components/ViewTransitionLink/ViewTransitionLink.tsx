"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export const ViewTransitionLink = ({ href, children }: Props) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    // Start the view transition before navigation
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(href);
      });
    } else {
      // Fallback for browsers that do not support the View-Transition API
      router.push(href);
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};
