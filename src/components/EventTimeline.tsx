// components/EventTimeline.tsx
import Container from "./Container";
import {
  Utensils,
  Car,
  Church,
  Camera,
} from "lucide-react";

const events = [
  {
    time: "5:00 – 8:00",
    title: "Lunch Program",
    icon: Utensils,
  },
  {
    time: "8:10 – 9:00",
    title: "Trip to Church",
    icon: Car,
  },
  {
    time: "9:00 – 11:00",
    title: "Wedding Ceremony",
    icon: Church,
  },
  {
    time: "11:00 – 12:00",
    title: "Photo Program",
    icon: Camera,
  },
];

export default function EventTimeline() {
  return (
    <section className="py-16 bg-[#fafbea] text-[#964d0a]">
      <Container>
        <h2 className="mb-12 text-center font-serif text-3xl tracking-wide">
          EVENT TIMELINE
        </h2>

        <div className="grid gap-y-12 gap-x-20 sm:grid-cols-2">
          {events.map(({ time, title, icon: Icon }) => (
            <div
              key={time}
              className="flex min-w-[260px] items-center gap-5"
            >
              {/* Icon */}
              <Icon className="h-6 w-6 shrink-0" />

              {/* Text block */}
              <div className="flex flex-col gap-2 shrink-0">
                <span className="text-lg font-bold tracking-wide text-black">
                  {time}
                </span>
                <span className="whitespace-nowrap text-sm tracking-wide">
                  {title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
