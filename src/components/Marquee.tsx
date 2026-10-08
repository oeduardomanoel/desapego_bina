import { Sparkle } from "./icons";

const words = [
  "peças second hand selecionadas",
  "consultoria de imagem e estilo",
  "ClosetBox",
  "roupas femininas",
  "decoração vintage",
  "consumo consciente",
  "Camboriú/SC",
];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative -rotate-1 border-y-2 border-ink bg-coral py-4 text-paper" aria-hidden>
      <div className="flex w-max animate-marquee items-center">
        {row.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="display px-6 text-2xl italic md:text-3xl">{word}</span>
            <Sparkle className="size-4 text-mustard-soft" />
          </span>
        ))}
      </div>
    </div>
  );
}
