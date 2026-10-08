import Image from "next/image";
import { messages, site, whatsapp } from "@/lib/site";
import { ArrowIcon, PinIcon, Sparkle, WhatsAppIcon } from "./icons";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      {/* arco do flyer, ecoando a identidade visual */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-56 -top-[20rem] hidden size-[26rem] rounded-full border-[3px] border-coral/70 md:block"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-14 md:px-8 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        <div className="lg:col-span-7 lg:pt-10">
          <p data-reveal className="kicker text-teal">
            <span className="h-px w-8 bg-teal" />
            Brechó e estilo · Centro de Camboriú
          </p>

          <h1 data-reveal style={{ "--delay": "80ms" } as React.CSSProperties} className="display mt-7 text-[clamp(4.2rem,13vw,8.4rem)] font-medium text-coral">
            Vista-se
            <span className="block">
              de{" "}
              <span className="relative inline-block font-script text-[1.12em] font-normal tracking-normal text-teal [font-variation-settings:normal]">
                você.
              </span>
            </span>
          </h1>

          <p
            data-reveal
            style={{ "--delay": "160ms" } as React.CSSProperties}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            Roupas second hand escolhidas uma a uma, num brechó que tem jeito de loja. E, quando o
            problema é o armário cheio sem nada pra vestir, a Sabrina senta com você e destrava o que
            já está lá.
          </p>

          <div
            data-reveal
            style={{ "--delay": "240ms" } as React.CSSProperties}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href={whatsapp(messages.geral)} target="_blank" rel="noopener" className="btn btn-coral">
              <WhatsAppIcon className="size-5" />
              Falar com a Sabrina
            </a>
            <a href="#destrava-closet" className="btn btn-ghost group">
              Conhecer o Destrava Closet
              <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
            </a>
          </div>

          <p
            data-reveal
            style={{ "--delay": "320ms" } as React.CSSProperties}
            className="mt-10 flex items-center gap-2 text-sm text-muted"
          >
            <PinIcon className="size-4 text-coral" />
            {site.address.street}, {site.address.district} · {site.address.city}/{site.address.state}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[25rem] lg:col-span-5 lg:mx-0 lg:ml-auto">
          {/* moldura em arco com a borda deslocada */}
          <div data-reveal style={{ "--delay": "200ms" } as React.CSSProperties} className="relative">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border-2 border-teal" />
            <div className="relative aspect-[383/585] overflow-hidden rounded-t-full bg-blush">
              <Image
                src="/images/sabrina.webp"
                alt="Sabrina Machado, consultora de imagem e estilo, sorrindo dentro do brechó Desapego da Bina"
                fill
                priority
                sizes="(min-width: 1024px) 400px, 90vw"
                className="object-cover object-top"
              />
            </div>

            {/* etiqueta pendurada */}
            <div
              className="absolute left-3 top-24 origin-top animate-sway md:-left-12"
              style={{ "--r": "-8deg" } as React.CSSProperties}
            >
              <span aria-hidden className="absolute -top-10 left-1/2 h-10 w-px bg-ink/50" />
              <div className="relative rounded-md bg-paper px-5 pb-4 pt-6 text-center shadow-lg shadow-ink/10 [clip-path:polygon(18%_0,82%_0,100%_14%,100%_100%,0_100%,0_14%)]">
                <span className="tag-hole left-1/2 top-2 -translate-x-1/2" />
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted">
                  desde
                </span>
                <span className="display block text-3xl text-coral">{site.founded}</span>
              </div>
            </div>

            {/* anotação à mão */}
            <div className="absolute -bottom-10 -right-2 rotate-[-4deg] md:-right-10">
              <p className="rounded-sm bg-mustard-soft px-4 py-2 font-script text-3xl text-ink shadow-md shadow-ink/10">
                “nem parece brechó!”
              </p>
            </div>

            <Sparkle className="absolute -right-4 top-10 size-8 text-mustard" />
            <Sparkle className="absolute right-10 top-0 size-4 text-mustard/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
