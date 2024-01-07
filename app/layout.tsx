import "@/styles/globals.css";

import { AOSInit } from "@/components/aos";
import Header from "@/components/header";
import PageWrapper from "@/components/page-wrapper";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { inter, ubuntu } from "@/utils/Font";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <AOSInit />
      <body
        className={cn(
          "min-h-screen  font-sans antialiased",
          inter.variable,
          ubuntu.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
