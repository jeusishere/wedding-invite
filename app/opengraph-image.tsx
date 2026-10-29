import { ImageResponse } from "next/og";

export const alt = "Hatice Kübra ve Samet Baki nikah davetiyesi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8f0e7",
          color: "#2d2a26",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            width: 1040,
            height: 470,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #c8a96a",
            backgroundColor: "#fffdf9",
          }}
        >
          <div style={{ color: "#a98236", fontSize: 24, letterSpacing: 8 }}>
            NIKAH DAVETİYESİ
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 32,
              fontSize: 58,
              lineHeight: 1.25,
            }}
          >
            <span>Hatice Kübra Özcan</span>
            <span style={{ color: "#a98236", fontSize: 42 }}>&amp;</span>
            <span>Samet Baki Tokur</span>
          </div>
          <div style={{ marginTop: 28, color: "#6e5942", fontSize: 28 }}>
            15 Kasım 2026 · 18.00
          </div>
          <div style={{ marginTop: 10, color: "#6e5942", fontSize: 21 }}>
            Şahinbey Kongre Ve Sanat Merkezi · Şehreküstü Salonu
          </div>
        </div>
      </div>
    ),
    size,
  );
}