import "@/styles/globals.css";

import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { inter, ubuntu } from "@/utils/Font";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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
          <main> {children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
