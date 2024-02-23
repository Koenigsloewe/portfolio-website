import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thithu Siva - Entwickeln, Lernen, Wachsen: Meine Programmierreise",
  description: "Dieses Portfolio spiegelt meine Reise in der Welt der Programmierung wider – geprägt von einer tiefen Leidenschaft für das Coden, dem unermüdlichen Streben nach Wissen und der stetigen Entwicklung meiner Fähigkeiten durch kreative Problemlösungen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
      <footer className="flex flex-col justify-center items-center text-center border-t h-1/10 p-4">
          <p>© 2024 Thithu Siva</p>
      </footer>
    </html>
  );
}
