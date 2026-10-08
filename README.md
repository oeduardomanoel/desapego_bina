# Desapego da Bina · site

Site do brechó e da consultoria de estilo da Sabrina Machado, em Camboriú/SC.

Stack: Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript. A página é 100% estática,
com fontes servidas pelo próprio site, SEO local (schema.org `ClothingStore`), sitemap, robots e
imagem de compartilhamento gerada automaticamente.

## Rodar local

```bash
npm install
npm run dev
```

Abre em http://localhost:3000.

## Publicar na Vercel

1. Importe este repositório em https://vercel.com/new (o framework Next.js é detectado sozinho).
2. Em **Environment Variables**, crie `NEXT_PUBLIC_SITE_URL` com o domínio final
   (ex.: `https://desapegodabina.com.br`). Isso acerta canonical, sitemap e Open Graph.
3. Deploy. Depois é só apontar o domínio em **Settings → Domains**.

## Onde editar

| O quê | Arquivo |
|---|---|
| Telefone, endereço, horário, preço do Destrava Closet, mensagens do WhatsApp | `src/lib/site.ts` |
| Cores e fontes | `src/app/globals.css` (bloco `@theme`) |
| Textos de cada seção | `src/components/*.tsx` |
| Foto da Sabrina | `public/images/sabrina.webp` |
| Logo | `src/components/Logo.tsx` (trocar pelo vetor oficial quando tiver) |

## Pendências antes de ir pro ar

- Confirmar o horário de funcionamento (veio de um anúncio de vaga da loja).
- Trocar `public/images/sabrina.webp` por uma foto em alta resolução (a atual foi recortada do flyer).
- Substituir o logo recriado em SVG pelo arquivo original.
