// components/Invitation.tsx
import Container from "./Container";

export default function Invitation() {
  return (
    <section className="py-10 bg-[#964d0a] text-[#F5E6C8]">
      <Container>
        <h1 className="mb-6 font-serif text-2xl">
          DEAR FAMILY AND FRIENDS
        </h1>

        <p className="mb-2 font-serif text-md leading-relaxed">
          “The eternal God is your refuge, and underneath are the everlasting arms.”
        </p>

        <p className="mb-6 text-sm tracking-wide">
          Deuteronomy 33:27
        </p>

        <p className="mb-4 text-base leading-relaxed">
          We respectfully invite you to share in our joy as we celebrate the union
          of <strong>Michael Abebe</strong> and <strong>Erkibe Temesgen</strong>.
        </p>

        <p className="mb-4 text-base leading-relaxed">
          The wedding will take place on <strong>Saturday, February 14, 2025</strong>.
          Lunch will be served earlier in the day at our home.
        </p>

        <p className="mb-6 text-base leading-relaxed">
          The wedding ceremony will be held at
          <br />
          <strong>1:00 PM at Wedajinet Park</strong>
        </p>

        <p className="font-semibold">
          We would be honored by your presence!
        </p>
      </Container>
    </section>
  );
}
