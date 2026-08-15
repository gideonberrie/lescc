"use client";

import { createContext, useContext, useState } from "react";

const SoundContext = createContext<{
  enabled: boolean;
  toggle: () => void;
} | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <SoundContext.Provider
      value={{ enabled, toggle: () => setEnabled((prev) => !prev) }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
