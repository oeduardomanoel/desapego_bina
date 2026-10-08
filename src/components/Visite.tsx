import { mapsLink, mapsQuery, messages, site, whatsapp } from "@/lib/site";
import { ArrowIcon, ClockIcon, InstagramIcon, PinIcon, WhatsAppIcon } from "./icons";

export function Visite() {
  return (
    <section id="visite" className="relative bg-blush/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p data-reveal className="kicker text-teal">
              <span className="h-px w-8 bg-teal" />
              Visite o brechó
            </p>
            <h2 data-reveal className="display mt-6 text-5xl md:text-7xl">
              Passa <span className="italic text-coral">aqui.</span>
            </h2>
            <p data-reveal className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Fica no centro de Camboriú. Dá pra vir só olhar, experimentar com calma ou chamar antes
              pra saber o que chegou.
            </p>

            <dl className="mt-12 space-y-8">
              <div data-reveal className="flex gap-4">
                <PinIcon className="mt-1 size-6 shrink-0 text-coral" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Endereço</dt>
                  <dd className="mt-1 text-lg font-medium">
                    {site.address.street}
                    <br />
                    {site.address.district} · {site.address.city}/{site.address.state}
                  </dd>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener"
                    className="group mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-deep"
                  >
                    Abrir no mapa
                    <ArrowIcon className="size-3.5 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <div data-reveal className="flex gap-4">
                <ClockIcon className="mt-1 size-6 shrink-0 text-coral" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Horário</dt>
                  {site.hours.map((h) => (
                    <dd key={h.days} className="mt-1 text-lg font-medium">
                      {h.days}: <span className="text-muted">{h.time}</span>
                    </dd>
                  ))}
                </div>
              </div>

              <div data-reveal className="flex gap-4">
                <WhatsAppIcon className="mt-1 size-6 shrink-0 text-coral" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">WhatsApp</dt>
                  <dd className="mt-1 text-lg font-medium">
                    <a href={whatsapp(messages.geral)} target="_blank" rel="noopener" className="hover:text-coral">
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div data-reveal className="flex gap-4">
                <InstagramIcon className="mt-1 size-6 shrink-0 text-coral" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Instagram</dt>
                  <dd className="mt-1 text-lg font-medium">
                    <a href={site.instagram} target="_blank" rel="noopener" className="hover:text-coral">
                      {site.instagramHandle}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div data-reveal className="lg:col-span-7">
            <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[2rem] border-2 border-ink bg-paper shadow-[10px_10px_0_0_var(--color-teal)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(var(--color-line)_1.2px,transparent_1.2px)] [background-size:18px_18px] text-center">
                <PinIcon className="size-10 text-coral" />
                <p className="px-6 font-medium text-ink/70">{site.address.street} · {site.address.city}/{site.address.state}</p>
              </div>
              <iframe
                title="Mapa com a localização do Desapego da Bina em Camboriú"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                className="absolute inset-0 size-full grayscale-[35%] sepia-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
