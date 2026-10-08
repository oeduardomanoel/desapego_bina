import { Brecho } from "@/components/Brecho";
import { ClosetBox } from "@/components/ClosetBox";
import { DestravaCloset } from "@/components/DestravaCloset";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { RevealObserver } from "@/components/RevealObserver";
import { Sobre } from "@/components/Sobre";
import { Visite } from "@/components/Visite";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <Brecho />
        <DestravaCloset />
        <ClosetBox />
        <Sobre />
        <Visite />
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
    </>
  );
}
