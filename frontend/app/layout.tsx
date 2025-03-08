import { Metadata } from "next";
import "../styles/globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "NovusAstra OS",
  description: "The Pinnacle of Advanced Technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
