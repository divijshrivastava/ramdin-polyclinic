import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "Dr. Ramdin's Polyclinic",
  description:
    "A premium multi-specialty clinic experience for Dr. Ramdin's Polyclinic in Andheri West, Mumbai.",
  other: {
    "build-marker": "nextjs-modular-rebuild",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
