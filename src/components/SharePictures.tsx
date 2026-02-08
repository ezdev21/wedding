// components/SharePictures.tsx
import Container from "./Container";

export default function SharePictures() {
  return (
    <section className="py-12 bg-[#fafbea]">
      <Container>
        <h2 className="mb-4 font-serif text-2xl">Share Your Pictures</h2>

        <p className="mb-4 text-sm leading-relaxed">
          Upload the pictures you took at our wedding so we can see and share
          those beautiful moments together.
        </p>

        <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-md bg-[#a65a00] py-2 px-5 text-center text-sm font-medium text-white hover:text-white hover:opacity-90"
          >
            Telegram Bot
          </a>
      </Container>
    </section>
  );
}
