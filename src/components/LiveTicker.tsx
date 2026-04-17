import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const NAMES = [
  "Ahmed K.", "Sara M.", "Bilal R.", "Hira N.", "Zainab A.", "Usman T.",
  "Maryam S.", "Hamza I.", "Ayesha F.", "Faisal Q.", "Noor E.", "Imran W.",
  "Tania Y.", "Zara B.", "Omar D.", "Rabia C.", "Saad H.", "Mehwish J.",
];
const CITIES = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad",
  "Multan", "Peshawar", "Quetta", "Sialkot", "Hyderabad",
];

type Activation = { id: number; name: string; city: string; mins: number };

const make = (id: number): Activation => ({
  id,
  name: NAMES[Math.floor(Math.random() * NAMES.length)],
  city: CITIES[Math.floor(Math.random() * CITIES.length)],
  mins: Math.floor(Math.random() * 9) + 1,
});

const initial: Activation[] = Array.from({ length: 8 }, (_, i) => make(i));

const LiveTicker = () => {
  const [items, setItems] = useState<Activation[]>(initial);

  useEffect(() => {
    let next = initial.length;
    const t = setInterval(() => {
      setItems((prev) => [make(next++), ...prev].slice(0, 10));
    }, 3500);
    return () => clearInterval(t);
  }, []);

  // duplicate list for seamless marquee
  const loop = [...items, ...items];

  return (
    <div className="glass glass-border-glow rounded-2xl p-5 sm:p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: "hsl(var(--status-online))" }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: "hsl(var(--status-online))" }}
            />
          </span>
          <span
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: "hsl(var(--status-online))" }}
          >
            Recently Activated
          </span>
        </div>
        <span className="text-[11px] text-muted-foreground uppercase tracking-wider hidden sm:inline">
          Live across Pakistan
        </span>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="flex gap-3 marquee w-max">
          {loop.map((a, i) => (
            <div
              key={`${a.id}-${i}`}
              className="flex items-center gap-2.5 glass rounded-xl px-3.5 py-2 whitespace-nowrap border border-border/40"
            >
              <CheckCircle2
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: "hsl(var(--status-online))" }}
              />
              <span className="text-xs">
                <strong className="text-foreground font-semibold">{a.name}</strong>
                <span className="text-muted-foreground"> from </span>
                <strong className="text-foreground font-medium">{a.city}</strong>
                <span className="text-muted-foreground"> activated · {a.mins} min ago</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTicker;
