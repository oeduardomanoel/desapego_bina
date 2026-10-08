import { messages, site, whatsapp } from "@/lib/site";
import { Leaf, PinIcon, Sparkle, WhatsAppIcon } from "./icons";

const steps = [
  {
    title: "Análise do seu guarda-roupa",
    text: "A gente identifica o que funciona, o que pode ser melhor aproveitado e o que não faz mais sentido pra você hoje.",
    dot: "bg-coral",
  },
  {
    title: "Montagem de looks",
    text: "Combinações novas, montadas com as peças que você já tem. Looks reais, que dá pra usar na segunda-feira.",
    dot: "bg-teal",
  },
  {
    title: "Encontro prático e personalizado",
    text: "Tudo acontece no mesmo dia, de um jeito leve e estratégico. Você sai sabendo o que vestir.",
    dot: "bg-mustard",
  },
];

export function DestravaCloset() {
  return (
    <section id="destrava-closet" className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-72 size-[30rem] rounded-full border-[3px] border-teal/30" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <p data-reveal className="kicker text-teal">
            Consultoria de imagem · novidade
          </p>
          <h2 data-reveal className="mt-6 leading-none">
            <span className="display block text-[clamp(3.6rem,12vw,9rem)] font-semibold uppercase tracking-[-0.01em] text-coral">
              Destrava
            </span>
            <span className="relative -mt-[0.35em] flex items-center justify-center gap-4">
              <Leaf className="hidden h-4 w-8 -rotate-12 text-teal sm:block" />
              <Leaf className="hidden h-4 w-8 rotate-[200deg] text-mustard sm:block" />
              <span className="font-script text-[clamp(3.8rem,11vw,8rem)] text-teal">Closet</span>
              <Leaf className="hidden h-4 w-8 -rotate-[20deg] text-mustard sm:block" />
              <Leaf className="hidden h-4 w-8 rotate-[190deg] text-teal sm:block" />
            </span>
          </h2>
          <p data-reveal className="mx-auto mt-4 max-w-xl text-xl text-ink md:text-2xl">
            Um novo olhar para o que você já tem.
          </p>
          <p data-reveal className="mt-2 font-semibold">
            <span className="text-coral">Mais combinações,</span>{" "}
            <span className="text-teal">mais possibilidades,</span>{" "}
            <span className="text-mustard">mais você.</span>
          </p>
        </div>

        <div className="mt-20 grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p data-reveal className="max-w-2xl text-lg leading-relaxed text-muted">
              Sabe aquele armário lotado e a sensação de que não tem nada pra vestir? O Destrava Closet
              é uma análise de guarda-roupa express, feita pessoalmente, num encontro só. A proposta é
              aproveitar melhor o que já está aí e se vestir com mais praticidade e confiança.
            </p>

            <ol className="mt-12 space-y-10">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  data-reveal
                  style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
                  className="grid grid-cols-[auto_1fr] gap-6"
                >
                  <span
                    className={`display flex size-14 items-center justify-center rounded-full text-2xl text-paper ${step.dot}`}
                  >
                    {i + 1}
                  </span>
                  <div className="border-b border-dashed border-line pb-8">
                    <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p data-reveal className="mt-10 flex items-center gap-3 text-sm font-medium text-ink">
              <PinIcon className="size-5 shrink-0 text-coral" />
              Atendimento presencial, exclusivo para clientes da região.
            </p>
          </div>

          {/* card de investimento no mesmo espírito do flyer */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <div data-reveal className="relative">
              <Sparkle className="absolute -right-3 -top-6 z-10 size-10 text-mustard" />
              <Sparkle className="absolute right-9 -top-9 z-10 size-5 text-mustard/80" />

              <div className="relative overflow-hidden rounded-[2rem] bg-teal px-8 pb-10 pt-14 text-center text-paper shadow-[0_30px_60px_-30px_rgba(21,95,94,0.8)]">
                <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-b-xl bg-mustard-soft px-5 py-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-ink">
                  Valor especial de lançamento
                </span>

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-paper/80">
                  Investimento
                </p>
                <p className="mt-3 flex items-start justify-center font-sans font-extrabold leading-none">
                  <span className="mt-3 text-2xl">R$</span>
                  <span className="mx-1 text-[5.5rem] tracking-tight">{site.destrava.price}</span>
                  <span className="mt-3 text-2xl">,00</span>
                </p>
                <p className="mt-3 text-paper/90">{site.destrava.payment}</p>

                <div className="my-8 border-t border-dashed border-paper/30" />

                <p className="text-[0.95rem] leading-relaxed text-paper/90">
                  Ideal pra quem quer aproveitar melhor o que já tem e se vestir com mais praticidade e
                  confiança.
                </p>

                <a
                  href={whatsapp(messages.destrava)}
                  target="_blank"
                  rel="noopener"
                  className="btn mt-8 w-full bg-paper text-teal-deep shadow-[0_6px_0_0_var(--color-teal-deep)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
                >
                  <WhatsAppIcon className="size-5" />
                  Quero agendar o meu
                </a>
              </div>

              <p className="mt-6 text-center font-script text-3xl text-coral">Sabrina Machado</p>
              <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-muted">
                {site.ownerRole}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
