import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from '../../i18n/routing';
import { notFound } from "next/navigation";
import "../../app/globals.css";
import { ModalProvider } from "@/components/ui/animatedLanguageModal";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isSpanish = params.locale === "es";

  return {
    title: isSpanish
      ? "Leonardo Fuentes Claros | Portafolio Desarrollador de Software"
      : "Leonardo Fuentes Claros | Software Developer Portfolio",
    description: isSpanish
      ? "Explora los proyectos y habilidades de Leonardo Fuentes Claros, desarrollador con experiencia en React, Next.js, Tailwind CSS, TypeScript, ExpressJS, PHP, Java, y ciberseguridad."
      : "Explore projects and skills of Leonardo Fuentes Claros, a developer with expertise in React, Next.js, Tailwind CSS, TypeScript, ExpressJS, PHP, Java, and cybersecurity.",
    keywords: isSpanish
      ? [
        "leonardo fuentes claros",
        "Leonardo Fuentes Claros",
        "Desarrollador de software",
        "Portafolio Next.js",
        "Tailwind CSS",
        "TypeScript",
        "React",
        "ExpressJs",
        "Ciberseguridad",
        "Frontend Bolivia",
        "Backend Bolivia",
      ]
      : [
        "leonardo fuentes claros",
        "Leonardo Fuentes Claros",
        "Software Developer",
        "Next.js Portfolio",
        "Tailwind CSS",
        "TypeScript",
        "React Developer",
        "ExpressJs Developer",
        "Cybersecurity",
        "Software Developer Bolivia",
        "Frontend Developer",
        "Backend Developer",
      ],
    metadataBase: new URL("https://leonardo-fuentes-claros.vercel.app"),
    openGraph: {
      title: isSpanish
        ? "Leonardo Fuentes Claros | Desarrollador de Software"
        : "Leonardo Fuentes Claros | Software Developer",
      description: isSpanish
        ? "Portafolio de aplicaciones modernas desarrolladas por Leonardo Fuentes Claros."
        : "Explore Leonardo's portfolio of modern web applications built with React, Next.js, and more.",
      url: `https://leonardo-fuentes-claros.vercel.app/${params.locale}`,
      siteName: "Leonardo Fuentes Claros Portfolio",
      images: [
        {
          url: "https://leonardo-fuentes-claros.vercel.app/preview.jpg",
          width: 1200,
          height: 630,
          alt: "Leonardo Fuentes Claros Portfolio Preview",
        },
      ],
      locale: isSpanish ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isSpanish
        ? "Portafolio de Leonardo Fuentes Claros"
        : "Leonardo Fuentes Claros Portfolio",
      description: isSpanish
        ? "Proyectos de Leonardo Fuentes Claros."
        : "Discover modern projects by Leonardo Fuentes Claros.",
      images: ["https://leonardo-fuentes-claros.vercel.app/preview.jpg"],
    },
    alternates: {
      canonical: `https://leonardo-fuentes-claros.vercel.app/${params.locale}`,
      languages: {
        en: "https://leonardo-fuentes-claros.vercel.app/en",
        es: "https://leonardo-fuentes-claros.vercel.app/es",
      },
    },
    authors: [
      {
        name: "Leonardo Fuentes Claros",
        url: "https://leonardo-fuentes-claros.vercel.app",
      },
    ],
    creator: "Leonardo Fuentes Claros",
    publisher: "Leonardo Fuentes Claros",
  };
}

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
