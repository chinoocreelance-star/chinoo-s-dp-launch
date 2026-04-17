import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Legitimate Invites", desc: "Verified Canva Business invites that actually last. No temporary hacks." },
  { icon: Lock, title: "100% Secure Designs", desc: "Your projects, templates, and data stay safe — always." },
  { icon: CheckCircle, title: "No Scams, Ever", desc: "Stop getting scammed by temporary sellers. We keep it real." },
];

const TrustSection = () => (
  <section id="trust" className="py-24 px-4">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Peace of <span className="gradient-text">Mind</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
          We use <strong className="text-foreground">genuine Canva Business seats</strong>. No educational tricks, no temporary links, no scams. Your designs are secure with <strong className="text-foreground">Chinoo's DP</strong>.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
