import { messages, site, whatsapp } from "@/lib/site";
import { Logo } from "./Logo";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-ink text-paper/80">
      <div className="mx-auto max-w-7xl px-5 pb-28 pt-20 md:px-8 md:pb-12">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <div className="inline-block rounded-2xl bg-cream px-4 py-3">
              <Logo />
            </div>
            <p className="display mt-8 max-w-md text-4xl text-paper md:text-5xl">
              Bora destravar esse armário?
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={whatsapp(messages.geral)} target="_blank" rel="noopener" className="btn btn-coral">
              <WhatsAppIcon className="size-5" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener"
              className="btn border-[1.5px] border-paper/40 text-paper hover:bg-paper hover:text-ink"
            >
              <InstagramIcon className="size-5" />
              {site.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-8 text-sm md:flex-row md:justify-between">
          <p>
            {site.address.street} · {site.address.district} · {site.address.city}/{site.address.state}
          </p>
          <p>
            © {new Date().getFullYear()} {site.name}. Peças second hand com carinho.
          </p>
        </div>
      </div>
    </footer>
  );
}
