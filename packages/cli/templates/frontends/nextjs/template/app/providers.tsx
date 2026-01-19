"use client";

import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

// With Stacks Connect v8, no provider wrapper is needed
// The connect() function handles wallet connection directly
export function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}
