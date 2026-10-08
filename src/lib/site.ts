// Tudo que é dado do negócio fica aqui. Mudou telefone, horário ou preço? Edita só este arquivo.

const whatsappNumber = "5547996848981";

export const site = {
  name: "Desapego da Bina",
  tagline: "Vista-se de você.",
  description:
    "Brechó com peças second hand selecionadas e consultoria de imagem e estilo com Sabrina Machado, no centro de Camboriú/SC.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://desapegodabina.com.br",
  owner: "Sabrina Machado",
  ownerRole: "Consultora de imagem e estilo",
  founded: 2019,
  phoneDisplay: "(47) 99684-8981",
  phoneE164: "+5547996848981",
  instagram: "https://www.instagram.com/desapego_dabina/",
  instagramHandle: "@desapego_dabina",
  address: {
    street: "Rua Oscar Vieira, 650 - Loja 02",
    district: "Centro",
    city: "Camboriú",
    state: "SC",
    country: "BR",
  },
  // Confirmar com a Sabrina antes de publicar.
  hours: [
    { days: "Segunda a sexta", time: "10h às 19h", schema: "Mo-Fr 10:00-19:00" },
    { days: "Sábado", time: "10h às 14h", schema: "Sa 10:00-14:00" },
  ],
  destrava: {
    price: 347,
    payment: "Pagamento à vista ou via PIX",
  },
};

export const mapsQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}`,
);

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export function whatsapp(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  geral: "Oi, Sabrina! Vim pelo site do Desapego da Bina e queria tirar uma dúvida.",
  destrava: "Oi, Sabrina! Vi o Destrava Closet no site e quero agendar a minha análise de guarda-roupa.",
  closetbox: "Oi, Sabrina! Queria entender como funciona a ClosetBox.",
  novidades: "Oi, Sabrina! O que chegou de novo no brechó essa semana?",
};
