import React from "react";
import { weddingData } from "@/data/wedding";

export default function Location() {
  return (
    <div className="mx-auto w-full max-w-2xl text-center">
      <h2 className="font-script text-5xl text-wine">Düğün mekanı</h2>
      <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
        {weddingData.location.name}
      </h3>
      <p className="mx-auto mt-1 max-w-md text-sm leading-relaxed text-soft">
        {weddingData.location.address}
      </p>

      <div className="mt-6 h-[260px] overflow-hidden border border-gold/50 bg-sand sm:h-[340px]">
        <iframe
          src={weddingData.location.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Düğün konumu"
          className="h-full w-full"
        ></iframe>
      </div>

      <a
        href={weddingData.location.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 bg-wine px-7 py-3.5 text-sm tracking-wide text-cream shadow-md transition active:scale-95"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Haritada aç, yol tarifi al
      </a>
    </div>
  );
}
