import { motion } from "framer-motion";
import { Headphones, Zap, Users, Clock } from "lucide-react";

const features = [
  { icon: Headphones, title: "24/7 Priority Support", desc: "Chinoo's DP is always online to help you — day or night." },
  { icon: Zap, title: "Instant Member Addition", desc: "Get added to the Canva Business team within minutes." },
  { icon: Users, title: "Verified Business Team", desc: "Join a legit, long-lasting Canva Business workspace." },
  { icon: Clock, title: "Always Active", desc: "We never go offline. Reach us anytime via WhatsApp or call." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Why Choose <span className="gradient-text">Chinoo's DP</span>?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Premium features and unmatched support at an unbeatable price.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-border-glow rounded-2xl p-7 flex gap-5 items-start hover-lift hover:border-primary/40"
          >
            <div className="w-12 h-12 rounded-xl gradient-bg flex-shrink-0 flex items-center justify-center">
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
