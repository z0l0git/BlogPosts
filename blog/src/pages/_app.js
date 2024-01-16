import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Work_Sans, Source_Serif_4 } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});
const sourceSerifPro = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif-pro",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${workSans.variable} ${sourceSerifPro.variable}`}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </main>
  );
}
