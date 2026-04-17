import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, ShieldCheck, CheckCircle2, Timer, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import LiveTicker from "@/components/LiveTicker";

type Stat = {
  icon: typeof Users;
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  display?: (n: number) => string;
  caption: string;
  progress: number;
};

const stats: Stat[] = [
  {
    icon: Users,
    label: "Active Premium Members",
    value: 1250,
    suffix: "+",
    display: (n) => Math.floor(n).toLocaleString(),
    caption: "Growing daily",
    progress: 92,
  },
  {
    icon: ShieldCheck,
    label: "Service Stability",
    value: 99.9,
    suffix: "% Uptime",
    decimals: 1,
    caption: "Verified Business Team",
    progress: 99,
  },
  {
    icon: CheckCircle2,
    label: "Successful Activations",
    value: 5000,
    suffix: "+",
    display: (n) => Math.floor(n).toLocaleString(),
    caption: "Across Pakistan",
    progress: 96,
  },
  {
    icon: Timer,
    label: "Support Response",
    value: 5,
    suffix: " min",
    caption: "24/7 Active",
    progress: 88,
  },
];

const Counter = ({ stat }: { stat: Stat }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const [text, setText] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, stat.value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (stat.display) setText(stat.display(v));
        else if (stat.decimals) setText(v.toFixed(stat.decimals));
        else setText(Math.floor(v).toString());
      },
    });
    return controls.stop;
  }, [inView, motionValue, stat]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-bold gradient-text">
      {text}
      {stat.suffix && <span className="text-2xl sm:text-3xl ml-1">{stat.suffix}</span>}
    </span>
  );
};

const AnimatedBar = ({ value }: { value: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setProgress(value), 200);
      return () => clearTimeout(t);
    }
  }, [inView, value]);

  return (
    <div ref={ref}>
      <Progress value={progress} className="h-2 bg-muted/50" />
    </div>
  );
};

const StatusDashboard = () => (
  <section id="status" className="py-24 px-4 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] -z-10" />
    <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] -z-10" />

    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "hsl(var(--status-online))" }} />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: "hsl(var(--status-online))" }} />
          </span>
          <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "hsl(var(--status-online))" }}>
            System Status: Fully Operational
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Chinoo's <span className="gradient-text">Network Status</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Live Service Analysis — real numbers from our verified Canva Business infrastructure.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-border-glow rounded-2xl p-6 hover-lift hover:border-primary/50"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shadow-md">
                <stat.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              {stat.label === "Service Stability" ? (
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "hsl(var(--status-online))" }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: "hsl(var(--status-online))" }} />
                </span>
              ) : (
                <Activity className="w-4 h-4 animate-pulse" style={{ color: "hsl(var(--status-online))" }} />
              )}
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
              {stat.label}
            </p>
            <div className="mb-4 leading-none">
              <Counter stat={stat} />
            </div>
            <AnimatedBar value={stat.progress} />
            <p className="text-xs text-muted-foreground mt-3">{stat.caption}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8"
      >
        <LiveTicker />
      </motion.div>
    </div>
  </section>
);

export default StatusDashboard;
