import { messages, whatsapp } from "@/lib/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons";

const nav = [
  { href: "#brecho", label: "O brechó" },
  { href: "#destrava-closet", label: "Destrava Closet" },
  { href: "#closetbox", label: "ClosetBox" },
  { href: "#sabrina", label: "A Sabrina" },
  { href: "#visite", label: "Visite" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <a href="#topo" aria-label="Desapego da Bina, voltar ao início">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.92rem] font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-coral after:transition-transform hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsapp(messages.geral)}
            target="_blank"
            rel="noopener"
            className="btn btn-coral hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Chamar no WhatsApp
          </a>

          {/* menu mobile sem JS */}
          <details className="group relative lg:hidden">
            <summary
              className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-ink/20 [&::-webkit-details-marker]:hidden"
              aria-label="Abrir menu"
            >
              <span className="relative block h-3 w-5">
                <span className="absolute inset-x-0 top-0 h-[1.5px] bg-ink transition group-open:top-1/2 group-open:rotate-45" />
                <span className="absolute inset-x-0 bottom-0 h-[1.5px] bg-ink transition group-open:bottom-1/2 group-open:-rotate-45" />
              </span>
            </summary>
            <div className="absolute right-0 top-14 w-64 rounded-2xl border border-line bg-paper p-3 shadow-xl shadow-ink/10">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="block rounded-xl px-4 py-3 font-medium hover:bg-blush/60">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={whatsapp(messages.geral)}
                target="_blank"
                rel="noopener"
                className="btn btn-coral mt-2 w-full text-sm"
              >
                <WhatsAppIcon className="size-4" />
                Chamar no WhatsApp
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
