import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from '../../i18n/routing';
import { notFound } from "next/navigation";
import "../../app/globals.css";
import { ModalProvider } from "@/components/ui/animatedLanguageModal";

export const metadata: Metadata = {
  title: "Leonardo Fuentes Claros Portfolio",
  description: "Portfolio of LFC - Nextjs - TailwindCSS - Typescript - Frame Motion - Aceternity UI - React - react icons",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            {/*  We need this provider to use modal in the entire app */}
            <ModalProvider>
              {children}
            </ModalProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>

  );
}
