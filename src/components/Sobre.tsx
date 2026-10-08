import { site } from "@/lib/site";
import { InstagramIcon, Underline } from "./icons";

export function Sobre() {
  return (
    <section id="sabrina" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p data-reveal className="kicker text-coral">
            <span className="h-px w-8 bg-coral" />
            Quem está por trás
          </p>
          <h2 data-reveal className="display mt-6 text-5xl md:text-6xl">
            Prazer,
            <span className="relative block text-coral">
              Sabrina.
              <Underline className="absolute -bottom-3 left-0 h-4 w-56 text-mustard" />
            </span>
          </h2>
          <p data-reveal className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-muted">
            {site.ownerRole}
          </p>

          <a
            data-reveal
            href={site.instagram}
            target="_blank"
            rel="noopener"
            className="group mt-12 hidden max-w-xs items-center lg:flex gap-4 rounded-2xl border border-line bg-paper/70 p-4 transition hover:border-coral"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-coral text-paper">
              <InstagramIcon className="size-6" />
            </span>
            <span className="text-sm leading-snug text-muted">
              Os bastidores, as peças novas e as montagens de ClosetBox ficam no Instagram.
              <span className="mt-1 block font-semibold text-ink group-hover:text-coral">{site.instagramHandle}</span>
            </span>
          </a>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <blockquote data-reveal className="relative border-l-4 border-coral pl-6 md:pl-8">
            <p className="display text-3xl italic leading-tight text-ink md:text-4xl">
              “Desapegar não é fácil… agora imagina empreender.”
            </p>
          </blockquote>

          <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
            <p data-reveal>
              O Desapego da Bina nasceu em {site.founded}, no meio de um monte de dúvidas. De lá
              pra cá, virou endereço certo no centro de Camboriú pra quem gosta de garimpar.
            </p>
            <p data-reveal>
              Hoje são duas frentes que andam juntas: as peças second hand selecionadas e a consultoria
              de imagem e estilo. Uma ajuda a outra. Quem passa o dia escolhendo roupa pra arara aprende
              a olhar o armário de alguém sem julgamento e com bastante imaginação.
            </p>
          </div>

          <p data-reveal className="mt-10 font-script text-5xl text-teal">Vista-se de você.</p>
        </div>
      </div>
    </section>
  );
}
