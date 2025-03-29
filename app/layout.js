import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/Theme-provider";
import Head from "next/head";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});


export const metadata = {
  title: "PortfolioNext - Ittiphol",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
          <title>Portfolio - Ittiphol</title>
          <meta name="description" content="Portfolio website of Ittiphol Puangchaiya" />
        </Head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
