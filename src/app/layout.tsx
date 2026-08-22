import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ritik — AI & Full-Stack Developer | Freelance",
  description:
    "Freelance AI & Full-Stack Developer. I build AI-powered apps, data analytics solutions, automation workflows, and production web applications.",
  keywords: [
    "AI developer",
    "freelance developer",
    "full-stack developer",
    "LLM integration",
    "Power BI",
    "n8n automation",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Ritik — AI & Full-Stack Developer",
    description:
      "Building AI-powered applications, data solutions & automation for clients worldwide.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
