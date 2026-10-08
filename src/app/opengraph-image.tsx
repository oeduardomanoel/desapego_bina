import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Desapego da Bina · Brechó e consultoria de estilo em Camboriú";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/sabrina.webp"));
  const src = `data:image/webp;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#f4e7de", fontFamily: "serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 70px", flex: 1 }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#218988", textTransform: "uppercase" }}>
            Brechó e estilo · Camboriú/SC
          </div>
          <div style={{ fontSize: 110, color: "#e65463", lineHeight: 1, marginTop: 24 }}>Vista-se</div>
          <div style={{ fontSize: 110, color: "#e65463", lineHeight: 1 }}>de você.</div>
          <div style={{ fontSize: 30, color: "#6d5a53", marginTop: 36 }}>Desapego da Bina · com Sabrina Machado</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={413} height={630} style={{ objectFit: "cover" }} alt="" />
      </div>
    ),
    size,
  );
}
