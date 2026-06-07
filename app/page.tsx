"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lora, Inter, Manrope } from "next/font/google";
import { motion } from "framer-motion";
import { type Variants } from "framer-motion";
import Silhouette from "@/components/Silhouette";
import AlmaFase2Sections from "@/components/alma_sections";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }, // cubic bezier en vez de string
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5, delayChildren: 1 }
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } },
};

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2" x2="12" y2="5"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="5" y2="12"/>
      <line x1="19" y1="12" x2="22" y2="12"/>
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function AppMockup({ isDark }: { isDark: boolean }) {
  return (
    <div style={{ position: "relative", width: "320px", height: "540px" }}>
      <img
        src={isDark ? "/mockup-dark.png" : "/mockup-light.png"}
        alt="Alma App"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transition: "opacity 0.4s ease",
          filter: "drop-shadow(0 32px 60px rgba(0,0,0,0.3))",
        }}
      />
    </div>
  );
}

export default function AlmaLanding() {
  const [isDark, setIsDark] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // TODO: reemplaza con cliente Supabase:
    // const { error } = await supabase.from("waitlist").insert({ email });
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setEmail("");
  };

const t = {
  // Fondos
  bg:         isDark ? "#141210" : "#f5f3f0",
  bgCard:     isDark ? "rgba(255,255,255,0.04)" : "#fdfaf7",
  bgCardAlt:  isDark ? "rgba(255,255,255,0.07)" : "#f9f4ee",

  // Bordes
  border:     isDark ? "rgba(255,255,255,0.07)" : "rgba(180,160,140,0.25)",
  borderStrong: isDark ? "rgba(255,255,255,0.12)" : "rgba(180,160,140,0.4)",

  // Textos
  text:       isDark ? "#f0ede8" : "#2d1f14",
  textMuted:  isDark ? "#7a6e64" : "#7a6555",
  textSub:    isDark ? "#5a5048" : "#b09a8a",

  // Acento principal — púrpura de la app
  accent:       "#6B46C1",
  accentMuted:  isDark ? "rgba(107,70,193,0.15)" : "rgba(107,70,193,0.08)",

  // Acento secundario — rosa palo/mauve de los iconos
  accentRose:       "#c4a49a",
  accentRoseMuted:  isDark ? "rgba(196,164,154,0.15)" : "rgba(196,164,154,0.18)",

  // Acento terciario — verde sage de la imagen
  accentSage:       "#8a9e8c",
  accentSageMuted:  isDark ? "rgba(138,158,140,0.15)" : "rgba(138,158,140,0.14)",

  // UI
  toggle:       isDark ? "rgba(255,255,255,0.06)" : "rgba(180,160,140,0.15)",
  inputBg:      isDark ? "rgba(255,255,255,0.05)" : "#fdfaf7",
  inputBorder:  isDark ? "rgba(255,255,255,0.1)"  : "rgba(180,160,140,0.35)",
  navBg:        isDark ? "rgba(20,18,16,0.88)"    : "rgba(245,240,234,0.88)",

  // Blobs ambientales
  blobA: isDark ? "rgba(107,70,193,0.07)"  : "rgba(196,164,154,0.2)",
  blobB: isDark ? "rgba(138,158,140,0.07)" : "rgba(138,158,140,0.18)",
  blobC: isDark ? "rgba(196,164,154,0.05)" : "rgba(107,70,193,0.06)",
};

  const features = [
    { icon: "✍️", title: "Editor Libre", sub: "Escritura sin presiones", desc: "Un espacio en blanco para ser tú mismo. Escribe libremente, sin juicios ni estructuras impuestas." },
    { icon: "📅", title: "Trayectoria Emocional", sub: "Estadísticas de tu evolución mental", desc: "Visualiza patrones, estados de ánimo y momentos clave a lo largo del tiempo. Conoce tu historia para crecer." },
    { icon: "🧠", title: "IA On-Device", sub: "Privacidad absoluta", desc: "Tus pensamientos se procesan localmente en el chip de tu teléfono. Cero servidores. Cero rastreo. 100% tú." },
  ];

  if (!mounted) return null;

  return (
    <div style={{ background: t.bg, minHeight: "100vh", transition: "background 0.4s ease", fontFamily: "'Georgia', serif", color: t.text, overflowX: "hidden" }}>

      {/* Blobs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "50vw", height: "50vw", borderRadius: "50%", background: t.blobA, filter: "blur(80px)", transition: "background 0.5s" }} />
        <div style={{ position: "absolute", top: "30%", right: "-10%", width: "40vw", height: "40vw", borderRadius: "50%", background: t.blobB, filter: "blur(80px)", transition: "background 0.5s" }} />
      </div>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", background: t.navBg, borderBottom: `1px solid ${t.border}`, transition: "background 0.4s" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img      src="/logo.png"
                      alt="Alma"
                      style={{ width: "36px", height: "36px", objectFit: "contain" }}/>
            <span className={inter.className} style={{ fontSize: "24px", fontWeight: "300", color: t.text, letterSpacing: "-0.02em" }}>Alma</span>
          </div>
          <div className= {manrope.className} style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <a href="#features" className="nav-link" style={{ fontSize: "14px", color: t.textMuted, textDecoration: "none" }}>Características</a>
            <Link href="/privacy" className="nav-link" style={{ fontSize: "14px", color: t.textMuted, textDecoration: "none" }}>Privacidad</Link>
            <button
              onClick={() => setIsDark(!isDark)}
              style={{ display: "flex", alignItems: "center", gap: "6px", background: t.toggle, border: `1px solid ${t.border}`, borderRadius: "20px", padding: "5px 10px", cursor: "pointer", color: t.textMuted, transition: "all 0.2s" }}
            >
              <span style={{ color: isDark ? t.textSub : t.text, transition: "color 0.2s" }}><SunIcon /></span>
              <span style={{ width: "1px", height: "12px", background: t.border }} />
              <span style={{ color: isDark ? t.text : t.textSub, transition: "color 0.2s" }}><MoonIcon /></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section 
                  variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
  style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "36px", flexWrap: "wrap" }}>
        <Silhouette shape="heart"   color="#c17b7b" size={380} top="80px" right="-190px"  opacity={0.30} rotate={25} />
        <Silhouette shape="petal"   color="#8a9e8c" size={160} bottom="0px" left="-40px"   opacity={0.30} rotate={45} />
        <Silhouette shape="arc"   color="#8a9e8c" size={160} bottom="30px" left="1100px"   opacity={0.30} rotate={10} />
        <Silhouette shape="blob"   color="#c7c4b3" size={160} bottom="0px" left="1150px"   opacity={0.30} rotate={90} />
        <Silhouette shape="arc"   color="#8a9e8c" size={160} bottom="30px" left="50px"   opacity={0.30} rotate={10} />
        
        <div style={{ flex: "1", minWidth: "280px", maxWidth: "600px" }}>
          
          <h1 className={lora.className} style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "500", lineHeight: "1.12", letterSpacing: "-0.03em", color: t.text, margin: "0 0 24px" }}>
            Un lugar seguro para tus pensamientos.
          </h1>
          <p className={manrope.className} style={{ fontSize: "17px", fontWeight:"400", lineHeight: "1.7", color: t.textMuted, margin: "0 0 40px", fontFamily: "system-ui, sans-serif", maxWidth: "520px" }}>
            El diario personal que combina Inteligencia Artificial local, análisis de trayectoria emocional y privacidad absoluta bajo llave.
          </p>
          <div className={inter.className} style={{ display: "flex", gap: "24px", marginBottom: "40px"}}>
            {[{ icon: "✍️", text: "Escribe." }, { icon: "🤍", text: "Sana." }, { icon: "🌱", text: "Vive." }].map((v) => (
              <div key={v.text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "20px" }}>{v.icon}</span>
                <span style={{ fontSize: "20px", fontWeight: "300", color: t.text}}>{v.text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/app-store-badge.svg"
                    alt="Descargar en App Store"
                    style={{ height: "48px", width: "auto" }}
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/google-badge-es.png"
                    alt="Disponible en Google Play"
                    style={{ height: "48px", width: "auto" }}
                  />
                </a>
              </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: "0 0 auto", position: "relative" }}>
          <div style={{ position: "absolute", width: "280px", height: "280px", borderRadius: "50%", background: `radial-gradient(circle, ${isDark ? "rgba(107,70,193,0.12)" : "rgba(107,70,193,0.08)"} 0%, transparent 70%)`, transition: "background 0.5s" }} />
          {/* Note: mockup shows OPPOSITE theme to demonstrate both */}
          <AppMockup isDark={!isDark} />
        </div>
      </motion.section>

      {/* Privacy banner */}
      <section style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto 40px", padding: "0 24px" }}>
        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: "16px", padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: t.accentMuted, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" width="22" height="22">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div>
              <p className={lora.className} style={{ fontSize: "24px", fontWeight: "500", color: t.text, margin: "0 0 4px" }}>Privacidad por diseño. IA 100% On-Device.</p>
              <p className= {manrope.className} style={{ fontSize: "16px", color: t.textMuted, margin: 0, fontFamily: "system-ui, sans-serif" }}>Tus pensamientos se procesan localmente en el chip de tu teléfono. Nada sale de tu dispositivo.</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: t.accentMuted, border: `1px solid rgba(107,70,193,0.25)`, borderRadius: "20px", padding: "6px 14px", flexShrink: 0 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" width="14" height="14">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span style={{ fontSize: "12px", color: t.accent, fontFamily: "system-ui", fontWeight: "500" }}>Privacidad Total</span>
          </div>
        </div>
      </section>

   {/* Features */}
    <motion.section
      id="features"
      style={{ position: "relative", overflow: "hidden", zIndex: 1, maxWidth: "1100px", margin: "0 auto 80px", padding: "0 24px" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      <Silhouette shape="petal"  color="#c4a49a" size={200} top="20px"   right="10px"  opacity={0.20} rotate={30} />
      <Silhouette shape="circle" color="#6B46C1" size={100} bottom="40px" left="5%"    opacity={0.20} />
  
      <motion.div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: "16px", padding: "28px", transition: "background 0.3s" }}
          >
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: t.accentMuted, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>{f.icon}</div>
            <p className={lora.className} style={{ fontSize: "24px", fontWeight: "700", color: t.text, margin: "0 0 4px" }}>{f.title}</p>
            <p className={manrope.className} style={{ fontSize: "16px", color: t.accent, margin: "0 0 12px", fontWeight: "500" }}>{f.sub}</p>
            <p className={manrope.className} style={{ fontSize: "16px", color: t.textMuted, margin: 0, lineHeight: "1.65" }}>{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>

      <AlmaFase2Sections isDark={isDark}/>

      {/* Waitlist */}
      <motion.section style={{ position: "relative", overflow: "hidden", zIndex: 1, maxWidth: "1100px", margin: "0 auto 80px", padding: "0 0px" }}>

        

        <div style={{ position: "relative", overflow: "hidden", background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: "20px", padding: "56px 48px", textAlign: "center" }}>
          <Silhouette shape="heart"   color="#c17b7b" size={250} top="80px"  left="0px"  opacity={0.10} />
         <Silhouette shape="arc"    color="#c4a49a" size={150} bottom="0px"  right="10%"  opacity={0.10} rotate={180} />

          <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: t.accent, marginBottom: "16px", fontFamily: "system-ui", fontWeight: "500" }}>ACCESO ANTICIPADO</p>
          <h2 className={lora.className} style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "500", color: t.text, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Sé parte del futuro de Alma.</h2>
          <p className={manrope.className} style={{ fontSize: "16px", color: t.textMuted, margin: "0 auto 40px", maxWidth: "480px", lineHeight: "1.7", fontFamily: "system-ui, sans-serif" }}>
            Estamos construyendo el diario más seguro e inteligente del mundo. Regístrate para obtener acceso anticipado a nuestra beta cerrada.
          </p>
          {status === "success" ? (
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(74,124,111,0.12)", border: "1px solid rgba(74,124,111,0.3)", borderRadius: "12px", padding: "14px 24px" }}>
              <span style={{ fontSize: "18px" }}>🌱</span>
              <span style={{ fontSize: "15px", color: "#4A7C6F", fontFamily: "system-ui", fontWeight: "500" }}>¡Listo! Te avisaremos cuando abramos la beta.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", maxWidth: "460px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
              <input
                type="email" required placeholder="Tu correo electrónico" value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flex: "1", minWidth: "220px", padding: "13px 18px", background: t.inputBg, border: `1px solid ${t.inputBorder}`, borderRadius: "10px", color: t.text, fontSize: "14px", fontFamily: "system-ui, sans-serif", outline: "none" }}
              />
              <button
                type="submit" disabled={status === "loading"}
                className= {manrope.className}
                style={{ padding: "13px 24px", background: "transparent", border: `1px solid ${t.text}`, borderRadius: "48px", color: t.text, fontSize: "16px", fontWeight: "400", fontFamily: "system-ui, sans-serif", cursor: "pointer", opacity: status === "loading" ? 0.7 : 1 }}
              >
                {status === "loading" ? "Enviando..." : "Asegurar Acceso →"}
              </button>
            </form>
          )}
        </div>
      </motion.section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: `1px solid ${t.border}`, padding: "28px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                 <img      src="/logo.png"
                      alt="Alma"
                      style={{ width: "36px", height: "36px", objectFit: "contain" }}/>
            <span className= {manrope.className} style={{ fontSize: "15px", fontWeight: "600", color: t.text }}>Alma</span>
            <span className= {manrope.className} style={{ fontSize: "12px", color: t.textMuted, fontFamily: "system-ui" }}>· Diario · Bienestar · Privacidad</span>
          </div>
          <div className= {manrope.className} style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {["Características", "Privacidad", "Ética", "Contacto"].map((l) => (
              <a key={l} href={l === "Privacidad" ? "/privacy" : "#"} style={{ fontSize: "13px", color: t.textMuted, textDecoration: "none", fontFamily: "system-ui" }}>{l}</a>
            ))}
          </div>
          <p className= {manrope.className} style={{ fontSize: "12px", color: t.textSub, margin: 0 }}>© 2026 Alma Diary. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
