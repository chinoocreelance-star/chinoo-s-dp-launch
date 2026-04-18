import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const TrustBanner = () => (
  <section className="py-20 px-4 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[120px] -z-10" />

    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass glass-border-glow rounded-2xl p-8 sm:p-10 text-center"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-bg shadow-md mb-5">
          <BadgeCheck className="w-7 h-7 text-primary-foreground" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Verified <span className="gradient-text">Canva Business Team</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Join hundreds of satisfied designers.
        </p>
      </motion.div>
    </div>
  </section>
);

export default TrustBanner;
