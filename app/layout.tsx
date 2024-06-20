import { Inter, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from './components/header'
import { ContactForm } from './components/contact-form'
import { Footer } from "./components/footer";
import { BackToTop } from "./components/back-to-top";
import { Toaster } from './components/toaster'

export const metadata = {
  title: {
    default: "Paulo Ziembick",
    template: "%s | Paulo Ziembick",
  },
  icons: [
    {
      url: "/favicon.svg",
    },
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceGrotesk = Space_Grotesk ({
  variable: '--font-space-grotesk',
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Toaster />
        <BackToTop />
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
