import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string | Date;
  backgroundImage?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - new Date().getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({
  targetDate,
  backgroundImage = "photo_2026-02-08_14-21-11.jpg",
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(new Date(targetDate))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(new Date(targetDate)));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-6xl md:text-7xl font-light tracking-wider">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-3 text-sm md:text-base tracking-[0.25em] text-[#f5e6b8]">
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <span className="text-5xl md:text-6xl font-light px-4 -mt-6">:</span>
  );

  return (
    <section className="relative h-[380px] w-full overflow-hidden text-[#fafbea]">
      {/* Background */}
      <img
        src={backgroundImage}
        alt="Countdown background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-xs" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
        <h2 className="mb-10 text-3xl md:text-4xl tracking-[0.35em] font-serif text-[#f5e6b8]">
          COUNT DOWN
        </h2>

        <div className="flex items-center">
          <Item value={timeLeft.days} label="DAYS" />
          <Separator />
          <Item value={timeLeft.hours} label="HOURS" />
          <Separator />
          <Item value={timeLeft.minutes} label="MINUTES" />
          <Separator />
          <Item value={timeLeft.seconds} label="SECONDS" />
        </div>
      </div>
    </section>
  );
}
