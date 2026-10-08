import { messages, whatsapp } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsapp(messages.geral)}
      target="_blank"
      rel="noopener"
      aria-label="Conversar com a Sabrina no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
