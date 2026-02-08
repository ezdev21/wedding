import { useEffect, useState, useRef } from "react";

const images = [
  "photo_2026-02-08_14-21-47.jpg",
  "photo_2026-02-08_14-21-18.jpg",
  "photo_2026-02-08_14-22-00.jpg",
  "photo_2026-02-08_14-21-48.jpg",
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const galleryRef = useRef(null);

  // Observe when the gallery enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 } // Adjust threshold if needed
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) observer.unobserve(galleryRef.current);
    };
  }, []);

  // Start slideshow only when in view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={galleryRef}
      className="relative mx-auto w-full max-w-5xl overflow-hidden"
    >
      {/* Images */}
      <div className="relative h-[420px] md:h-[520px]">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Wedding gallery image ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              index === activeIndex ? "opacity-100 scale-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={[
              "appearance-none p-0 border-0 bg-clip-padding",
              "h-4 w-4 rounded-full",
              "outline-none focus:outline-none focus:ring-0 focus:ring-offset-0",
              "transition-transform duration-300",
              index === activeIndex ? "bg-[#964d0a] scale-110" : "bg-white",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
