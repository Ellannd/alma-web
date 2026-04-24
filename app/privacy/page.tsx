"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function PrivacyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "Do you sell my data?",
      a: "No. Alma does not sell, rent, or trade your personal data. Your journal content remains private and encrypted.",
    },
    {
      q: "Is my journal encrypted?",
      a: "Yes. All journal entries are encrypted at rest and in transit using industry-standard TLS encryption via Supabase infrastructure.",
    },
    {
      q: "Can AI read my entries?",
      a: "AI processes your entries only to generate reflections inside the app. No human reads your journal, and data is not used for external training without consent.",
    },
    {
      q: "Can I delete my data?",
      a: "Yes. You can request full deletion of your account and all associated data at any time.",
    },
    {
      q: "Is my data shared with third parties?",
      a: "No. We do not share your personal journal data with third-party advertisers or external platforms.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-black">
      {/* HEADER */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 px-6 py-4 flex justify-between z-50"
      >
        <h1 className="font-semibold tracking-tight">Alma</h1>
        <span className="text-sm text-zinc-500">Privacy Policy</span>
      </motion.header>

      <div className="max-w-6xl mx-auto flex">
        {/* CONTENT */}
        <div className="flex-1 px-6 py-12 space-y-14">
          {/* TITLE */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight"
            >
              Privacy Policy
            </motion.h1>
            <motion.p variants={fadeUp} className="text-zinc-500 mt-2">
              Last updated: April 2026
            </motion.p>
          </motion.div>

          {/* INTRO */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-3"
          >
            <motion.p
              variants={fadeUp}
              className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
            >
              At <span className="font-semibold">Alma</span>, your privacy and
              emotional safety are our highest priorities. This Privacy Policy
              explains how we collect, use, store, and protect your information
              when you use the app.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
            >
              By using Alma, you agree to the practices described in this
              policy.
            </motion.p>
          </motion.section>

          {/* 1 */}
          <motion.section
            id="info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-3"
          >
            <motion.h2 variants={fadeUp} className="text-xl font-semibold">
              1. Information We Collect
            </motion.h2>
            <motion.ul
              variants={fadeUp}
              className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 space-y-1"
            >
              <li>Account information (email or auth provider data)</li>
              <li>Journal entries written by you inside the app</li>
              <li>Emotional interaction data (mood, reflections)</li>
              <li>Anonymous usage analytics</li>
            </motion.ul>
          </motion.section>

          {/* 2 */}
          <motion.section
            id="usage"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-3"
          >
            <motion.h2 variants={fadeUp} className="text-xl font-semibold">
              2. How We Use Your Data
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              We use your data exclusively to provide personalized emotional
              journaling experiences, generate AI-based reflections, and
              improve app functionality.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-zinc-600 dark:text-zinc-400"
            >
              We do not sell your data. We do not share your journal content
              with advertisers.
            </motion.p>
          </motion.section>

          {/* 3 */}
          <motion.section
            id="storage"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-3"
          >
            <motion.h2 variants={fadeUp} className="text-xl font-semibold">
              3. Data Storage & Encryption
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              Your data is securely stored using Supabase infrastructure.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              All journal entries are encrypted at rest and in transit using
              industry-standard encryption protocols (HTTPS/TLS).
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              This means your entries are protected both while being transmitted
              and while stored in the database.
            </motion.p>
          </motion.section>

          {/* 4 */}
          <motion.section
            id="ai"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-3"
          >
            <motion.h2 variants={fadeUp} className="text-xl font-semibold">
              4. AI Processing
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              Some journal entries may be processed by AI models to generate
              emotional insights and reflections.
            </motion.p>
            <motion.ul
              variants={fadeUp}
              className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 space-y-1"
            >
              <li>AI is used only inside the app experience</li>
              <li>No human reads your personal journal entries</li>
              <li>
                We do not use your data to train external models without consent
              </li>
            </motion.ul>
          </motion.section>

          {/* 5 */}
          <motion.section
            id="rights"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-3"
          >
            <motion.h2 variants={fadeUp} className="text-xl font-semibold">
              5. Your Rights
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-zinc-600 dark:text-zinc-400"
            >
              You may request access, correction, export, or deletion of your
              data at any time.
            </motion.p>
          </motion.section>

          {/* 6 */}
          <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-3"
          >
            <motion.h2 variants={fadeUp} className="text-xl font-semibold">
              6. Contact
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-zinc-600 dark:text-zinc-400"
            >
              If you have any questions about this policy, contact:
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-medium text-zinc-900 dark:text-white"
            >
              support@alma.app
            </motion.p>
          </motion.section>
        </div>

        {/* SIDEBAR */}
        <aside className="hidden md:block w-64 border-l border-zinc-200 dark:border-zinc-800 px-6 py-12 sticky top-16 h-screen">
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-2 text-sm"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase text-zinc-500 mb-4"
            >
              On this page
            </motion.p>
            {[
              { href: "#info", label: "Information" },
              { href: "#usage", label: "Usage" },
              { href: "#storage", label: "Storage" },
              { href: "#ai", label: "AI" },
              { href: "#rights", label: "Rights" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={fadeUp}
                whileHover={{ scale: 1.03, x: 4 }}
                className="block text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        </aside>
      </div>

      {/* FAQ */}
      <motion.section
        id="faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="mt-20 space-y-2"
      >
        <div className="max-w-2xl mx-auto space-y-4">
          <motion.h2
            variants={fadeUp}
            className="text-2xl font-semibold tracking-tight"
          >
            FAQ
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-zinc-500">
            Common questions about privacy, security, and data usage.
          </motion.p>

          <div className="space-y-3 mt-6">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 flex justify-between items-center cursor-pointer text-left"
                  >
                    <span className="font-medium">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-zinc-400 shrink-0 ml-4"
                    >
                      ▾
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="px-4 pb-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="border-t border-zinc-200 dark:border-zinc-800 mt-24"
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* BRAND */}
            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-semibold tracking-tight">Alma</h3>
              <p className="text-sm text-zinc-500 mt-3 leading-relaxed">
                An emotional journaling space designed for reflection, clarity,
                and inner growth.
              </p>
            </motion.div>

            {/* PRODUCT */}
            <motion.div variants={fadeUp}>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a
                    href="/journal"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Journal
                  </a>
                </li>
                <li>
                  <a
                    href="/trajectory"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    href="/profile"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Profile
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* LEGAL */}
            <motion.div variants={fadeUp}>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* CONTACT */}
            <motion.div variants={fadeUp}>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>support@alma.app</li>
                <li className="text-zinc-500">
                  We usually respond within 24–48h
                </li>
              </ul>
            </motion.div>
          </div>

          {/* BOTTOM BAR */}
          <motion.div
            variants={fadeUp}
            className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} Alma. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-zinc-500">
              <a
                href="/privacy"
                className="hover:text-black dark:hover:text-white"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="hover:text-black dark:hover:text-white"
              >
                Terms
              </a>
              <a
                href="mailto:support@alma.app"
                className="hover:text-black dark:hover:text-white"
              >
                Support
              </a>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  );
}

