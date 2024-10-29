import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";



export const metadata: Metadata = {
  title: "Weather App",
  description: "Please hire me, thanks man!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}