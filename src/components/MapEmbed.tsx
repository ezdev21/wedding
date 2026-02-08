import { Maximize, Share2 } from "lucide-react";

export default function MapEmbed() {
  // Base Google Maps links
  const wedajinetPark =
    "https://www.google.com/maps/search/?api=1&query=Wedajinet+Park+Addis+Ababa";

  const groomHouse =
    "https://www.google.com/maps/search/?api=1&query=Groom+House+Addis+Ababa";

  const church =
    "https://www.google.com/maps/search/?api=1&query=Church+near+Wedajinet+Park+Addis+Ababa";

  const brideHouse =
    "https://www.google.com/maps/search/?api=1&query=Bride+House+Addis+Ababa";

  return (
    <section className="">
      <div className="relative w-full overflow-hidden">
        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between bg-[#a65a00] px-4 py-2 text-white">
          <div className="flex items-center gap-3">
            {/* Info-like link (not login icon) */}
            <a
              href={wedajinetPark}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
              title="Open in Google Maps"
            >
              <img src="photo_2026-02-08_14-21-57-small.jpg" className="rounded-full" />
            </a>

            <div>
              <p className="text-sm font-semibold leading-tight">
                Wedding Venue
              </p>
              <p className="text-xs opacity-90">Michael Abebe & Erkibe Temesgen</p>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            {/* Share */}
            <a
              href={wedajinetPark}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Google Maps"
              className="hover:opacity-80"
            >
              <Share2 className="h-8 w-8 text-white" />
            </a>

            {/* Fullscreen / Zoom */}
            <a
              href={wedajinetPark}
              target="_blank"
              rel="noopener noreferrer"
              title="View fullscreen"
              className="hover:opacity-80"
            >
              <Maximize className="h-8 w-8 text-white" />
            </a>
          </div>
        </div>

        {/* Map */}
        <iframe
          title="Wedding Venue Map"
          className="h-[500px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Wedajinet+Park+Addis+Ababa&output=embed"
        />

        {/* Bottom buttons */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex gap-3 bg-[#fff7e6] px-4 py-3">
          <a
            href={groomHouse}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-md bg-[#a65a00] py-2 text-center text-sm font-medium text-white hover:opacity-90"
          >
            Groom&apos;s House
          </a>

          <a
            href={church}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-md bg-[#a65a00] py-2 text-center text-sm font-medium text-white hover:opacity-90"
          >
            Church
          </a>

          <a
            href={brideHouse}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-md bg-[#a65a00] py-2 text-center text-sm font-medium text-white hover:opacity-90"
          >
            Bride&apos;s House
          </a>
        </div>
      </div>
    </section>
  );
}
