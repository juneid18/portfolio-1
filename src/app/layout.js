import { Inter } from "next/font/google";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata = {
  title: {
    default: "Juneid Shaikh | Full-Stack Developer",
    template: "%s | Juneid Shaikh",
  },
  description:
    "Juneid Shaikh is a Full-Stack React/Next.js developer building performant, scalable, and modern web experiences.",
  metadataBase: new URL("https://example.com"), // replace with your actual domain
  openGraph: {
    title: "Juneid Shaikh | Full-Stack React Developer",
    description:
      "Explore projects, experiments, and contact details of Juneid Shaikh, a Full-Stack React/Next.js developer.",
    url: "https://example.com", // replace with your actual domain
    siteName: "Juneid Shaikh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juneid Shaikh | Full-Stack React Developer",
    description:
      "Explore projects, experiments, and contact details of Juneid Shaikh, a Full-Stack React/Next.js developer.",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
