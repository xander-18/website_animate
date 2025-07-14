"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ArrowLeft } from "lucide-react"

const ComingSoonOverlay = ({ onComplete }) => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const subtitleRef = useRef(null)
  const backButtonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Dividir el texto en letras individuales
    const mainText = textRef.current
    const subtitle = subtitleRef.current

    if (mainText) {
      const letters = mainText.textContent.split("")
      mainText.innerHTML = letters
        .map((letter) =>
          letter === " " ? '<span class="letter">&nbsp;</span>' : `<span class="letter">${letter}</span>`,
        )
        .join("")
    }

    // Animación cinematográfica
    tl.set(".letter", { opacity: 0, y: 100, rotationX: -90 })
      .set(subtitle, { opacity: 0, y: 50, scale: 0.8 })
      .set(backButtonRef.current, { opacity: 0, x: -50 })

      // Efecto de cortina inicial
      .fromTo(
        containerRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power4.inOut" },
      )

      // Animación de letras una por una
      .to(
        ".letter",
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: {
            amount: 2,
            from: "start",
            ease: "power2.out",
          },
          ease: "back.out(1.7)",
        },
        0.5,
      )

      // Efecto de brillo en las letras
      .to(
        ".letter",
        {
          textShadow: "0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.4)",
          duration: 0.3,
          stagger: 0.05,
          yoyo: true,
          repeat: 1,
        },
        1.5,
      )

      // Subtítulo aparece
      .to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        2,
      )

      // Botón de volver aparece
      .to(
        backButtonRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        2.5,
      )
  }, [])

  return (
    <div
      ref={containerRef}
      className="coming-soon-overlay fixed inset-0 z-[999] flex items-center justify-center text-white text-center px-4 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1a1a1a 100%)
        `,
      }}
    >
      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Botón de volver */}
      <div className="absolute top-6 left-6 z-10">
        <button
          ref={backButtonRef}
          onClick={onComplete}
          className="flex items-center gap-2 text-white hover:text-emerald-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Volver</span>
        </button>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Texto principal */}
        <div
          ref={textRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest mb-8 relative"
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            textShadow: "0 0 30px rgba(0,0,0,0.5)",
          }}
        >
          PRÓXIMAMENTE
        </div>

        {/* Línea decorativa */}
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8 opacity-80"></div>

        {/* Subtítulo */}
        <div
          ref={subtitleRef}
          className="text-2xl md:text-4xl tracking-wide text-emerald-400 font-light relative"
          style={{
            textShadow: "0 0 20px rgba(16, 185, 129, 0.5)",
          }}
        >
          HALIT - Departamento Inteligente
        </div>

        {/* Efecto de escaneo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full animate-pulse opacity-30"></div>
      </div>

      {/* Overlay de ruido cinematográfico */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}

export default ComingSoonOverlay
