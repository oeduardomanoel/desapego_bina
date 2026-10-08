import { messages, whatsapp } from "@/lib/site";
import { ArrowIcon, Sparkle } from "./icons";

// Caixa desenhada em SVG: kraft, fita e etiqueta. Sem foto de banco de imagem.
function BoxArt() {
  return (
    <svg viewBox="0 0 420 360" className="h-auto w-full" role="img" aria-label="Ilustração de uma caixa da ClosetBox com fita e etiqueta">
      <ellipse cx="210" cy="332" rx="170" ry="16" fill="var(--color-ink)" opacity=".12" />
      {/* tampa e corpo */}
      <path d="M60 140h300v180a12 12 0 0 1-12 12H72a12 12 0 0 1-12-12Z" fill="#d9b48a" />
      <path d="M60 140h300v40H60Z" fill="#c9a074" />
      <path d="M44 104h332a10 10 0 0 1 10 10v26H34v-26a10 10 0 0 1 10-10Z" fill="#e4c39c" />
      {/* tecido aparecendo */}
      <path d="M96 104c18-30 52-40 70-22 14-26 56-30 74-4 20-22 62-14 76 26Z" fill="var(--color-coral)" />
      <path d="M150 104c10-16 34-22 50-8 14-12 40-10 50 8Z" fill="var(--color-blush)" />
      <path d="M250 104c8-20 34-26 52-12 6 4 10 8 12 12Z" fill="var(--color-teal)" />
      {/* fita */}
      <rect x="196" y="104" width="28" height="228" fill="var(--color-teal)" />
      <path d="M210 104c-30-34-70-30-66-8 4 18 40 14 66 8Z" fill="var(--color-teal-deep)" />
      <path d="M210 104c30-34 70-30 66-8-4 18-40 14-66 8Z" fill="var(--color-teal-deep)" />
      {/* etiqueta */}
      <path d="M224 160c40 6 64 10 82 24" stroke="var(--color-ink)" strokeOpacity=".5" strokeWidth="1.5" fill="none" />
      <g transform="rotate(10 320 220)">
        <path d="M290 178h60l14 14v74H276v-74Z" fill="var(--color-paper)" stroke="var(--color-ink)" strokeOpacity=".15" />
        <circle cx="320" cy="192" r="5" fill="none" stroke="var(--color-ink)" strokeOpacity=".4" strokeWidth="1.5" />
        <text x="320" y="228" textAnchor="middle" fontFamily="var(--font-allura)" fontSize="30" fill="var(--color-coral)">pra você</text>
        <text x="320" y="250" textAnchor="middle" fontFamily="var(--font-figtree)" fontSize="9" letterSpacing="2.5" fill="var(--color-ink)" opacity=".6">CLOSETBOX</text>
      </g>
    </svg>
  );
}

export function ClosetBox() {
  return (
    <section id="closetbox" className="relative bg-teal-deep py-24 text-paper md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        <div data-reveal className="relative order-2 mx-auto w-full max-w-md lg:order-1">
          <Sparkle className="absolute -left-2 top-6 size-8 text-mustard-soft" />
          <Sparkle className="absolute right-4 top-0 size-5 text-mustard-soft/70" />
          <BoxArt />
        </div>

        <div className="order-1 lg:order-2">
          <p data-reveal className="kicker text-mustard-soft">
            <span className="h-px w-8 bg-mustard-soft" />
            Brechó por assinatura
          </p>
          <h2 data-reveal className="display mt-6 text-5xl md:text-7xl">
            Closet<span className="italic text-mustard-soft">Box</span>
          </h2>
          <p data-reveal className="mt-4 font-script text-4xl text-blush">
            o brechó vem até você, numa caixa.
          </p>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-paper/85">
            <p data-reveal>
              A ClosetBox é o brechó por assinatura do Desapego da Bina. As peças são separadas e
              montadas numa caixa com o mesmo cuidado de quem arruma a arara da loja.
            </p>
            <p data-reveal>
              Planos, valores e como funciona a entrega, a Sabrina explica direitinho pelo WhatsApp.
            </p>
          </div>
          <a
            data-reveal
            href={whatsapp(messages.closetbox)}
            target="_blank"
            rel="noopener"
            className="btn group mt-10 bg-mustard-soft text-ink shadow-[0_6px_0_0_var(--color-mustard)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
          >
            Quero saber da ClosetBox
            <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
