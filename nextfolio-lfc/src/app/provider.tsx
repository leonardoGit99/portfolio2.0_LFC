"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({children,...props}: React.ComponentProps<typeof NextThemesProvider>) {
  const [isThemeLoaded, setIsThemeLoaded] = React.useState(false);

  React.useEffect(() => {
    // Esperar a que el tema se cargue por completo
    setIsThemeLoaded(true);
  }, []);

  if (!isThemeLoaded) {
    // Mostrar un estado inicial vacío o un loader mientras se carga el tema
    return null; // O un componente de carga como <div>Loading...</div>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
