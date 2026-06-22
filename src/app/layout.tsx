import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Noto_Serif_Telugu } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoTelugu = Noto_Serif_Telugu({
  subsets: ["telugu", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-telugu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "చి.ల.సౌ. Sai Jyoshna & చి. Vikram Wedding Invitation",
  description: "శుభ ముహూర్తం: Sunday, July 5, 2026, 8:05 AM. Sri Laxminarasimha Gardens, Karimnagar. You are cordially invited.",
  metadataBase: new URL("https://sai-jyoshna-vikram.wedding"),
  openGraph: {
    title: "చి.ల.సౌ. Sai Jyoshna & చి. Vikram Wedding Invitation",
    description: "Sunday, July 5, 2026. Sri Laxminarasimha Gardens, Karimnagar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="te"
      className={`${playfair.variable} ${cormorant.variable} ${notoTelugu.variable} scroll-smooth`}
    >
      <body className="bg-[#FDFBF7] text-[#42040B] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
