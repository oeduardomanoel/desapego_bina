import { messages, whatsapp } from "@/lib/site";
import { ArrowIcon } from "./icons";

const tags = [
  {
    title: "Roupas femininas",
    text: "Do básico que salva a semana à peça que vira assunto no almoço de domingo.",
    color: "bg-paper",
    rotate: "-rotate-3",
    accent: "text-coral",
  },
  {
    title: "Acessórios",
    text: "Aquele detalhe pequeno que muda o look inteiro.",
    color: "bg-blush",
    rotate: "rotate-2",
    accent: "text-teal",
  },
  {
    title: "Decoração vintage",
    text: "Objetos com história pra casa também. Tem peça que não se acha em loja nenhuma.",
    color: "bg-mustard-soft",
    rotate: "-rotate-1",
    accent: "text-coral-deep",
  },
];

export function Brecho() {
  return (
    <section id="brecho" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p data-reveal className="kicker text-coral">
            <span className="h-px w-8 bg-coral" />O brechó
          </p>
          <h2 data-reveal className="display mt-6 text-5xl text-ink md:text-6xl">
            “Nem parece brechó.”
          </h2>
          <p data-reveal className="mt-5 font-script text-4xl text-teal">
            A gente escuta muito essa frase. E adora.
          </p>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7 lg:pt-4">
          <p data-reveal>
            Nada vai pra arara sem passar pelo olho da Sabrina. Por isso o Desapego da Bina tem cara de
            loja: arrumado, com peças em bom estado e combinações já pensadas pra você só chegar e
            experimentar.
          </p>
          <p data-reveal>
            Comprar second hand faz bem pro bolso e pro planeta, isso todo mundo já sabe. O que pouca
            gente espera é sair daqui com a peça mais bonita do armário.
          </p>
          <a
            data-reveal
            href={whatsapp(messages.novidades)}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 font-semibold text-ink underline decoration-coral decoration-2 underline-offset-[6px] hover:text-coral"
          >
            Perguntar o que chegou essa semana
            <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* etiquetas de preço como cards */}
      <ul className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {tags.map((tag, i) => (
          <li
            key={tag.title}
            data-reveal
            style={{ "--delay": `${i * 110}ms` } as React.CSSProperties}
            className="flex justify-center"
          >
            <article
              className={`relative w-full max-w-sm ${tag.rotate} ${tag.color} rounded-2xl border border-ink/10 px-8 pb-9 pt-14 shadow-[0_18px_40px_-24px_rgba(46,33,26,0.45)] transition duration-500 hover:rotate-0`}
            >
              <span className="tag-hole left-8 top-6" />
              <span aria-hidden className="absolute left-[2.35rem] top-0 h-6 w-px bg-ink/30" />
              <span className="absolute right-6 top-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
                0{i + 1}
              </span>
              <h3 className={`display text-3xl ${tag.accent}`}>{tag.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/75">{tag.text}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
