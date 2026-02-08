// components/ImageAccordion.tsx
import { useState } from "react";

const images = [
  "photo_2026-02-08_14-21-28.jpg",
  "photo_2026-02-08_14-21-50.jpg",
  "photo_2026-02-08_14-21-33-edited.jpg",
];

export default function ImageAccordion() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="">
      <div className="flex h-[400px] overflow-hidden rounded-sm">
        {images.map((src, i) => {
          const width =
            hovered === null
              ? "33.3333%"
              : hovered === i
              ? "50%"
              : "25%";

          return (
            <img
              key={i}
              src={src}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ width }}
              className="
                object-cover
                transition-[width]
                duration-300
                ease-in-out
              "
            />
          );
        })}
      </div>
    </section>
  );
}
