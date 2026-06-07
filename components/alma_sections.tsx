"use client";

import { Lora, Manrope } from "next/font/google";
import { motion, type Variants } from "framer-motion";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

// ── Variantes de animación ──────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ── Interface de Props ──────────────────────────────────────────
interface AlmaSectionsProps {
  isDark?: boolean; 
}

// Definimos el tipo del objeto t para los subcomponentes
type ThemeTokens = {
  bg: string;
  bgCard: string;
  bgAlt: string;
  border: string;
  borderStrong: string;
  text: string;
  muted: string;
  sub: string;
  accent: string;
  accentM: string;
  rose: string;
  roseM: string;
  sage: string;
  sageM: string;
};

// ────────────────────────────────────────────────────────────────
// EXPORT PRINCIPAL 
// ────────────────────────────────────────────────────────────────

export default function AlmaFase2Sections({ isDark = false }: AlmaSectionsProps) {

  const t: ThemeTokens = {
    // Fondos
    bg:           isDark ? "#141210" : "#f5f3f0",
    bgCard:       isDark ? "rgba(255,255,255,0.04)" : "#fdfaf7",
    bgAlt:        isDark ? "rgba(255,255,255,0.07)" : "#f0ede8", 

    // Bordes
    border:       isDark ? "rgba(255,255,255,0.07)" : "rgba(180,160,140,0.25)",
    borderStrong: isDark ? "rgba(255,255,255,0.12)" : "rgba(180,160,140,0.4)",

    // Textos
    text:         isDark ? "#f0ede8" : "#2d1f14",
    muted:        isDark ? "#7a6e64" : "#7a6555", 
    sub:          isDark ? "#5a5048" : "#b09a8a", 

    // Acento principal — púrpura Alma
    accent:       "#6B46C1",
    accentM:      isDark ? "rgba(107,70,193,0.15)" : "rgba(107,70,193,0.08)",

    // Acento secundario — rosa palo / mauve
    rose:         "#c4a49a", 
    roseM:        isDark ? "rgba(196,164,154,0.15)" : "rgba(196,164,154,0.18)", 

    // Acento terciario — verde sage
    sage:         "#8a9e8c", 
    sageM:        isDark ? "rgba(138,158,140,0.15)" : "rgba(138,158,140,0.14)", 
  };

  return (
    <div style={{ background: t.bg, overflowX: "hidden", transition: "background 0.3s ease" }}>
      <HowItWorks t={t} />
      <Screenshots t={t} />
      <PrivacyDeep t={t} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// SUB-COMPONENTES INTERNOS (Reciben 't' mediante props)
// ────────────────────────────────────────────────────────────────

function SectionLabel({ children, t }: { children: React.ReactNode; t: ThemeTokens }) {
  return (
    <p
      className={manrope.variable}
      style={{
        fontSize: "11px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: t.accent,
        marginBottom: "14px",
        fontWeight: 500,
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
      }}
    >
      {children}
    </p>
  );
}

function Divider({ t }: { t: ThemeTokens }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
      <div style={{ flex: 1, height: "1px", background: t.border }} />
      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: t.accent, opacity: 0.4 }} />
      <div style={{ flex: 1, height: "1px", background: t.border }} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// SECCIÓN 1 — CÓMO FUNCIONA
// ────────────────────────────────────────────────────────────────

function HowItWorks({ t }: { t: ThemeTokens }) {
  const steps = [
    {
      n: "01",
      iconBg: t.accentM,
      iconStroke: t.accent,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      ),
      title: "Escribe sin filtros",
      desc: "Abre la app. Un espacio en blanco te espera. Sin prompts, sin presiones. Tu voz, tu ritmo, tu momento.",
      tag: "Menos de 30 segundos para empezar",
      tagBg: t.accentM,
      tagBorder: "rgba(107,70,193,0.2)",
      tagColor: t.accent,
      tagIcon: (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      n: "02",
      iconBg: t.roseM,
      iconStroke: t.rose,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={t.rose} strokeWidth="1.5" strokeLinecap="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        </svg>
      ),
      title: "Alma te escucha",
      desc: "La IA analiza el tono emocional de tu entrada en tiempo real. Detecta patrones, detecta lo que quizás tú no ves todavía.",
      tag: "Solo en tu dispositivo",
      tagBg: t.roseM,
      tagBorder: "rgba(196,164,154,0.3)",
      tagColor: t.rose,
      tagIcon: (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      n: "03",
      iconBg: t.sageM,
      iconStroke: t.sage,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={t.sage} strokeWidth="1.5" strokeLinecap="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: "Observa tu evolución",
      desc: "Semana a semana, tu trayectoria emocional toma forma. Alma te muestra hacia dónde vas — y de dónde vienes.",
      tag: "Historial de hasta 12 meses",
      tagBg: t.sageM,
      tagBorder: "rgba(138,158,140,0.3)",
      tagColor: t.sage,
      tagIcon: (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px", position: "relative", zIndex: 1 }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <SectionLabel t={t}>El proceso</SectionLabel>
      <h2
        className={lora.className}
        style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 500, color: t.text, marginBottom: "8px", letterSpacing: "-0.02em" }}
      >
        Tres momentos que cambian todo.
      </h2>
      <p
        className={manrope.variable}
        style={{ fontSize: "16px", color: t.muted, marginBottom: "44px", lineHeight: 1.6, maxWidth: "520px", fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
      >
        Sin registros complicados. Sin curvas de aprendizaje. Solo abre, escribe, y deja que Alma haga el resto.
      </p>


        <motion.div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={item}
              style={{ padding: "28px 24px", position: "relative" }}
            >
              <span
                className={lora.className}
                style={{
                  position: "absolute", top: "-10px", right: "20px",
                  fontSize: "80px", fontWeight: 600, color: t.border,
                  lineHeight: 1, letterSpacing: "-0.04em", pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {s.n}
              </span>

              <div style={{
                width: "56px", height: "56px", borderRadius: "16px",
                background: s.iconBg, display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "20px", position: "relative", zIndex: 1,
              }}>
                {s.icon}
              </div>

              <p className={lora.className} style={{ fontSize: "20px", fontWeight: 600, color: t.text, marginBottom: "8px" }}>
                {s.title}
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: t.muted, marginBottom: "12px", fontFamily: "system-ui, sans-serif" }}>
                {s.desc}
              </p>

              <span style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                background: s.tagBg, border: `1px solid ${s.tagBorder}`,
                borderRadius: "20px", padding: "3px 10px",
                fontSize: "11px", color: s.tagColor, fontWeight: 500,
                fontFamily: "system-ui, sans-serif",
              }}>
                {s.tagIcon}
                {s.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
    </motion.section>
  );
}

// ────────────────────────────────────────────────────────────────
// SECCIÓN 2 — SCREENSHOTS / LA EXPERIENCIA
// ────────────────────────────────────────────────────────────────

function PhoneMockup({ children, t, size = "md" }: { children: React.ReactNode; t: ThemeTokens; size?: "sm" | "md" | "lg" }) {
  const dims = {
    sm: { w: 70, h: 120, r: 14, iw: 52, ih: 88, mt: 8 },
    md: { w: 70, h: 120, r: 14, iw: 52, ih: 88, mt: 8 },
    lg: { w: 90, h: 160, r: 18, iw: 70, ih: 120, mt: 10 },
  }[size];

  return (
    <div style={{
      width: `${dims.w}px`, height: `${dims.h}px`,
      border: `2px solid ${t.borderStrong}`, borderRadius: `${dims.r}px`,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", background: t.bgAlt,
    }}>
      <div style={{ position: "absolute", top: "8px", width: "24px", height: "3px", background: t.borderStrong, borderRadius: "4px" }} />
      <div style={{
        width: `${dims.iw}px`, height: `${dims.ih}px`,
        background: t.bg, borderRadius: "6px",
        marginTop: `${dims.mt}px`, overflow: "hidden",
        display: "flex", flexDirection: "column", padding: "6px 4px", gap: "3px",
      }}>
        {children}
      </div>
    </div>
  );
}

function Sl({ width = "80%", height = "5px", color }: { width?: string; height?: string; color?: string }) {
  return <div style={{ width, height, borderRadius: "3px", background: color }} />;
}

function UploadHint({ children, t }: { children: React.ReactNode; t: ThemeTokens }) {
  return (
    <div style={{
      border: `1.5px dashed ${t.borderStrong}`, borderRadius: "12px",
      padding: "10px 16px", fontSize: "12px", color: t.sub,
      textAlign: "center", marginTop: "8px", lineHeight: 1.5,
      fontFamily: "system-ui, sans-serif",
    }}>
      {children}
    </div>
  );
}

function Screenshots({ t }: { t: ThemeTokens }) {
  return (
    <motion.section
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px", position: "relative", zIndex: 1 }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <Divider t={t} />
      <SectionLabel t={t}>La experiencia</SectionLabel>
      <h2
        className={lora.className}
        style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 500, color: t.text, marginBottom: "8px", letterSpacing: "-0.02em" }}
      >
        Diseñada para el momento de mayor vulnerabilidad.
      </h2>
      <p style={{ fontSize: "16px", color: t.muted, marginBottom: "32px", lineHeight: 1.6, maxWidth: "520px", fontFamily: "system-ui, sans-serif" }}>
        Cada pantalla pensada para que escribir se sienta como respirar.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>

        {/* Card Editor */}
        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: "20px", overflow: "hidden", position: "relative", gridRow: "span 2" }}>
          <div style={{
            position: "absolute", top: "12px", right: "12px",
            background: t.accentM, border: "1px solid rgba(107,70,193,0.2)",
            borderRadius: "20px", padding: "3px 9px",
            fontSize: "10px", color: t.accent, fontWeight: 500, fontFamily: "system-ui, sans-serif",
          }}>
            Editor
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "32px 20px", minHeight: "380px" }}>
            <PhoneMockup size="lg" t={t}>
              <Sl width="90%" height="8px" color="rgba(107,70,193,0.15)" />
              <Sl width="90%" color={t.borderStrong} />
              <Sl width="60%" color={t.borderStrong} />
              <Sl width="75%" color={t.borderStrong} />
              <Sl width="40%" color={t.borderStrong} />
              <div style={{ height: "20px" }} />
              <Sl width="50%" height="3px" color={t.roseM} />
              <Sl width="70%" height="3px" color={t.roseM} />
            </PhoneMockup>
            <p style={{ fontSize: "13px", color: t.muted, fontFamily: "system-ui, sans-serif" }}>Editor de escritura libre</p>
            <UploadHint t={t}>Sube tu screenshot<br />del editor principal</UploadHint>
          </div>
        </div>

        {/* Card Análisis */}
        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: "20px", overflow: "hidden", position: "relative" }}>
          <div style={{
            position: "absolute", top: "12px", right: "12px",
            background: t.roseM, border: "1px solid rgba(196,164,154,0.3)",
            borderRadius: "20px", padding: "3px 9px",
            fontSize: "10px", color: t.rose, fontWeight: 500, fontFamily: "system-ui, sans-serif",
          }}>
            Análisis
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "32px 20px", minHeight: "180px" }}>
            <PhoneMockup t={t}>
              <div style={{ height: "30px", borderRadius: "4px", background: t.roseM, marginTop: "4px" }} />
              <Sl width="90%" height="3px" color={t.roseM} />
              <Sl width="60%" height="3px" color={t.roseM} />
            </PhoneMockup>
            <UploadHint t={t}>Screenshot del<br />análisis de IA</UploadHint>
          </div>
        </div>

        {/* Card Trayectoria */}
        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: "20px", overflow: "hidden", position: "relative" }}>
          <div style={{
            position: "absolute", top: "12px", right: "12px",
            background: t.sageM, border: "1px solid rgba(138,158,140,0.3)",
            borderRadius: "20px", padding: "3px 9px",
            fontSize: "10px", color: t.sage, fontWeight: 500, fontFamily: "system-ui, sans-serif",
          }}>
            Trayectoria
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "32px 20px", minHeight: "180px" }}>
            <PhoneMockup t={t}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "40px", paddingTop: "8px" }}>
                {[30, 60, 45, 100, 80, 70, 90].map((h, i) => (
                  <div key={i} style={{ flex: 1, background: i === 3 ? t.sageM : "rgba(138,158,140,0.5)", height: `${h}%`, borderRadius: "2px" }} />
                ))}
              </div>
              <Sl width="90%" height="2px" color={t.borderStrong} />
            </PhoneMockup>
            <UploadHint t={t}>Screenshot del<br />gráfico de evolución</UploadHint>
          </div>
        </div>

        {/* Card Insights */}
        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: "20px", overflow: "hidden", gridColumn: "span 2" }}>
          <div style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: "16px", borderBottom: `1px solid ${t.border}` }}>
            <div style={{ flex: 1 }}>
              <p className={lora.className} style={{ fontSize: "15px", fontWeight: 600, color: t.text, marginBottom: "4px" }}>
                Insights semanales de Alma
              </p>
              <p style={{ fontSize: "13px", color: t.muted, fontFamily: "system-ui, sans-serif" }}>
                Cada semana, un resumen emocional construido solo desde tus palabras.
              </p>
            </div>
            <UploadHint t={t}>Sube screenshot de insights</UploadHint>
          </div>
          <div style={{ padding: "16px 24px", display: "flex", gap: "12px" }}>
            <div style={{ flex: 1, background: t.accentM, borderRadius: "10px", padding: "12px 14px" }}>
              <p style={{ fontSize: "11px", color: t.accent, fontWeight: 500, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "system-ui, sans-serif" }}>
                Esta semana
              </p>
              <p style={{ fontSize: "13px", color: t.muted, fontFamily: "system-ui, sans-serif" }}>
                Detectamos un patrón de <strong style={{ color: t.text }}>mayor calma</strong> en tus entradas del mediodía.
              </p>
            </div>
            <div style={{ flex: 1, background: t.roseM, borderRadius: "10px", padding: "12px 14px" }}>
              <p style={{ fontSize: "11px", color: t.rose, fontWeight: 500, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "system-ui, sans-serif" }}>
                Tema recurrente
              </p>
              <p style={{ fontSize: "13px", color: t.muted, fontFamily: "system-ui, sans-serif" }}>
                Mencionas conexión y pertenencia con más frecuencia que la semana pasada.
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

// ────────────────────────────────────────────────────────────────
// SECCIÓN 3 — PRIVACIDAD TÉCNICA
// ────────────────────────────────────────────────────────────────

function PrivacyDeep({ t }: { t: ThemeTokens }) {
  const techRows = [
    { key: "Almacenamiento de entradas", val: "SQLite cifrado en dispositivo", badge: false },
    { key: "Cifrado en reposo", val: "AES-256-GCM", badge: true, badgeColor: t.sage, badgeBg: t.sageM, badgeBorder: "rgba(138,158,140,0.3)" },
    { key: "Claves de cifrado", val: "Secure Enclave / StrongBox", badge: false },
    { key: "Modelo de IA", val: "On-device · sin API externa", badge: false },
    { key: "Analíticas de telemetría", val: "Desactivadas", badge: true, badgeColor: "#b34a4a", badgeBg: "#fce8e8", badgeBorder: "rgba(179,74,74,0.2)" },
    { key: "Backup opcional", val: "iCloud cifrado / Google Drive E2E", badge: false },
    { key: "Acceso de Alma a tus datos", val: "Imposible por diseño", badge: true, badgeColor: "#b34a4a", badgeBg: "#fce8e8", badgeBorder: "rgba(179,74,74,0.2)" },
  ];

  const neverItems = [
    "El contenido de ninguna de tus entradas de diario",
    "Resultados del análisis emocional de la IA",
    "Tu nombre, edad o cualquier dato demográfico",
    "Tu ubicación GPS o historial de movimiento",
    "Comportamiento de uso o patrones de escritura",
    "Identificadores de dispositivo vinculables a ti",
  ];

  const yesItems = [
    "Modelo ejecutado en el Neural Engine del chip (Apple A-series / Snapdragon)",
    "Inferencia local: sin conexión a internet al analizar",
    "Almacenamiento cifrado con AES-256 en el secure enclave",
    "Funciona en modo avión sin perder ninguna función",
  ];

  const cardStyle: React.CSSProperties = {
    background: t.bgCard,
    border: `1px solid ${t.border}`,
    borderRadius: "16px",
    padding: "24px",
  };

  return (
    <motion.section
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px", position: "relative", zIndex: 1 }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <Divider t={t} />
      <SectionLabel t={t}>Privacidad técnica real</SectionLabel>
      <h2
        className={lora.className}
        style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 500, color: t.text, marginBottom: "8px", letterSpacing: "-0.02em" }}
      >
        Tu mente no es un producto.
      </h2>
      <p style={{ fontSize: "16px", color: t.muted, marginBottom: "36px", lineHeight: 1.6, maxWidth: "540px", fontFamily: "system-ui, sans-serif" }}>
        Construimos Alma desde el principio con una premisa: si los datos no salen del dispositivo, nadie puede venderlos, hackearlos ni filtrarlos. Ni siquiera nosotros.
      </p>

      <motion.div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* NUNCA */}
        <motion.div variants={item} style={cardStyle}>
          <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#fce8e8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b34a4a" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>
          <p className={lora.className} style={{ fontSize: "16px", fontWeight: 600, color: t.text, marginBottom: "8px" }}>
            Lo que nunca recopilamos
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", paddingLeft: 0 }}>
            {neverItems.map((item) => (
              <li key={item} style={{ fontSize: "13px", color: t.muted, display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "system-ui, sans-serif" }}>
                <span style={{ color: "#b34a4a", fontSize: "11px", marginTop: "2px", flexShrink: 0 }}>✕</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SI */}
        <motion.div variants={item} style={cardStyle}>
          <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: t.sageM, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.sage} strokeWidth="1.5" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <p className={lora.className} style={{ fontSize: "16px", fontWeight: 600, color: t.text, marginBottom: "8px" }}>
            Cómo funciona la IA on-device
          </p>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: t.muted, marginBottom: "14px", fontFamily: "system-ui, sans-serif" }}>
            El modelo de análisis emocional vive completamente dentro de tu teléfono. No hay llamadas a ningún servidor externo cuando escribes.
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", paddingLeft: 0 }}>
            {yesItems.map((item) => (
              <li key={item} style={{ fontSize: "13px", color: t.muted, display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "system-ui, sans-serif" }}>
                <span style={{ color: t.sage, fontSize: "11px", marginTop: "2px", flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tabla completa */}
        <motion.div variants={item} style={{ ...cardStyle, gridColumn: "span 2" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: t.accentM, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <p className={lora.className} style={{ fontSize: "16px", fontWeight: 600, color: t.text, marginBottom: "8px" }}>
                Especificaciones técnicas de privacidad
              </p>
              <p style={{ fontSize: "13px", lineHeight: 1.7, color: t.muted, fontFamily: "system-ui, sans-serif" }}>
                Lo que sucede bajo el capó cuando escribes en Alma.
              </p>
            </div>

            <div style={{ flex: 2, minWidth: "280px" }}>
              {techRows.map((row, i) => (
                <div
                  key={row.key}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: i < techRows.length - 1 ? `1px solid ${t.border}` : "none",
                  }}
                >
                  <span style={{ fontSize: "13px", color: t.muted, fontFamily: "system-ui, sans-serif" }}>{row.key}</span>
                  {row.badge ? (
                    <span style={{
                      background: row.badgeBg, border: `1px solid ${row.badgeBorder}`,
                      borderRadius: "20px", padding: "3px 10px",
                      fontSize: "11px", color: row.badgeColor, fontWeight: 500,
                      fontFamily: "system-ui, sans-serif",
                    }}>
                      {row.val}
                    </span>
                  ) : (
                    <span style={{ fontSize: "13px", fontWeight: 500, color: t.text, fontFamily: "monospace" }}>
                      {row.val}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}