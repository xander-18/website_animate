"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, Users, TrendingUp, Star, Phone, Mail, Linkedin } from "lucide-react"
import Jason from "../assets/img/logos-blackhouse/jason.png"
import Luna from "../assets/img/logos-blackhouse/Luna.png"
import Isais from "../assets/img/logos-blackhouse/Isa.png"
import Jonel from "../assets/img/logos-blackhouse/jonel.png"
import Xander from "../assets/img/logos-blackhouse/xander.png"
// Registrar el plugin
gsap.registerPlugin(ScrollTrigger)

const NuestroEquipo = ({ onVolver }) => {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const teamGridRef = useRef(null)
  const statsRef = useRef(null)
  const cinematicRef = useRef(null)
  const [activeTeamMember, setActiveTeamMember] = useState(0)

  // Datos del equipo BlackHouse
  const teamMembers = [
    {
      id: 1,
      nombre: "Jason Arce",
      cargo: "Asesor Inmobiliario",
      experiencia: "15+ años",
      descripcion: "Visionario líder con más de 15 años transformando el mercado inmobiliario peruano.",
      imagen: Jason,
      logros: ["500+ Proyectos", "Mejor CEO 2023", "Innovación Inmobiliaria"],
      contacto: {
        telefono: "+51 999 111 111",
        email: "carlos@blackhouse.pe",
        linkedin: "carlos-mendoza-blackhouse",
      },
      color: "emerald",
    },
    {
      id: 2,
      nombre: "Ana Rodríguez",
      cargo: "Directora Comercial",
      experiencia: "12+ años",
      descripcion: "Experta en ventas de lujo, conectando sueños con realidades inmobiliarias.",
      imagen: Luna,
      logros: ["$50M+ en Ventas", "Top Sales 2023", "Cliente Satisfecho 98%"],
      contacto: {
        telefono: "+51 999 222 222",
        email: "ana@blackhouse.pe",
        linkedin: "ana-rodriguez-blackhouse",
      },
      color: "orange",
    },
    {
      id: 3,
      nombre: "Miguel Torres",
      cargo: "Arquitecto Principal",
      especialidad: "Diseño Innovador",
      experiencia: "10+ años",
      descripcion: "Creador de espacios únicos que redefinen el concepto de hogar moderno.",
      imagen: Isais,
      logros: ["Premio Arquitectura", "50+ Diseños", "Sostenibilidad"],
      contacto: {
        telefono: "+51 999 333 333",
        email: "miguel@blackhouse.pe",
        linkedin: "miguel-torres-blackhouse",
      },
      color: "red",
    },
    {
      id: 4,
      nombre: "Sofia Vargas",
      cargo: "Gerente de Marketing",
      especialidad: "Estrategia Digital",
      experiencia: "8+ años",
      descripcion: "Estratega digital que posiciona BlackHouse como líder en innovación inmobiliaria.",
      imagen: Jonel,
      logros: ["Campañas Virales", "ROI 300%+", "Brand Recognition"],
      contacto: {
        telefono: "+51 999 444 444",
        email: "sofia@blackhouse.pe",
        linkedin: "sofia-vargas-blackhouse",
      },
      color: "yellow",
    },
    {
      id: 5,
      nombre: "Roberto Silva",
      cargo: "Director Financiero",
      especialidad: "Inversiones",
      experiencia: "14+ años",
      descripcion: "Experto financiero que maximiza el valor de cada inversión inmobiliaria.",
      imagen: "/placeholder.svg?height=600&width=400",
      logros: ["ROI Optimizado", "Finanzas Sólidas", "Crecimiento 200%"],
      contacto: {
        telefono: "+51 999 555 555",
        email: "roberto@blackhouse.pe",
        linkedin: "roberto-silva-blackhouse",
      },
      color: "purple",
    },
    {
      id: 6,
      nombre: "Lucia Morales",
      cargo: "Jefa de Proyectos",
      especialidad: "Gestión Integral",
      experiencia: "9+ años",
      descripcion: "Coordinadora excepcional que garantiza la excelencia en cada proyecto.",
      imagen: Xander,
      logros: ["Entregas a Tiempo", "Calidad Premium", "Satisfacción 100%"],
      contacto: {
        telefono: "+51 999 666 666",
        email: "lucia@blackhouse.pe",
        linkedin: "lucia-morales-blackhouse",
      },
      color: "teal",
    },
  ]

  const stats = [
    { icon: Award, numero: "500+", texto: "Proyectos Completados" },
    { icon: Users, numero: "2000+", texto: "Familias Felices" },
    { icon: TrendingUp, numero: "15+", texto: "Años de Experiencia" },
    { icon: Star, numero: "98%", texto: "Satisfacción Cliente" },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación inicial del hero
      const tl = gsap.timeline()
      tl.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" })

      // Animación de las estadísticas
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            ".stat-item",
            { opacity: 0, y: 30, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              stagger: 0.2,
              ease: "back.out(1.7)",
            },
          )
        },
      })

      // Animación cinematográfica ÉPICA del equipo
      ScrollTrigger.create({
        trigger: cinematicRef.current,
        start: "top 60%",
        onEnter: () => {
          // Timeline épica
          const epicTl = gsap.timeline()

          // Efectos de entrada dramáticos
          epicTl.fromTo(
            ".cinematic-bg",
            { opacity: 0, scale: 1.3, rotationZ: 5 },
            { opacity: 1, scale: 1, rotationZ: 0, duration: 2.5, ease: "power3.out" },
          )

          // Aparición épica de los miembros
          epicTl.fromTo(
            ".team-member-cinematic",
            {
              opacity: 0,
              y: 150,
              scale: 0.7,
              rotationY: 45,
              rotationX: 15,
              filter: "blur(20px) brightness(0.3)",
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              rotationX: 0,
              filter: "blur(0px) brightness(1)",
              duration: 2,
              stagger: {
                amount: 1.5,
                from: "center",
                ease: "power2.out",
              },
              ease: "back.out(1.2)",
            },
            "-=2",
          )

          // Efectos de partículas épicas
          epicTl.fromTo(
            ".light-effect",
            { opacity: 0, scale: 0, rotation: 0 },
            {
              opacity: 1,
              scale: 1,
              rotation: 360,
              duration: 3,
              stagger: 0.05,
              ease: "power2.out",
            },
            "-=2.5",
          )
        },
      })

      // Animación del grid tradicional
      ScrollTrigger.create({
        trigger: teamGridRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(
            ".team-card",
            {
              opacity: 0,
              y: 60,
              rotationY: 15,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              scale: 1,
              duration: 1.2,
              stagger: 0.15,
              ease: "power2.out",
            },
          )
        },
      })

      // Efectos hover para las tarjetas del equipo
      document.querySelectorAll(".team-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          })
          gsap.to(card.querySelector(".team-overlay"), {
            opacity: 1,
            duration: 0.3,
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
          gsap.to(card.querySelector(".team-overlay"), {
            opacity: 0,
            duration: 0.3,
          })
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

   return (
    <div ref={containerRef} className="min-h-screen bg-black">
      {/* Navbar fijo */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onVolver}
            className="text-white hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2"
          >
            <span>←</span> Volver al Inicio
          </button>
          <h1 className="text-white font-bold text-xl tracking-wider">NUESTRO EQUIPO</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(255, 100, 50, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255, 150, 0, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #1a0a00 50%, #2d1810 100%)
          `,
        }}
      >
        {/* Efectos de luz dramática */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider">
            NUESTRO
            <span className="block text-emerald-400 text-5xl md:text-7xl font-light mt-2">EQUIPO</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Los visionarios que transforman sueños en realidades inmobiliarias. Cada miembro de BlackHouse aporta
            pasión, experiencia y excelencia.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/70">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-bounce"></div>
            </div>
            <span className="text-xs mt-2 tracking-wider">CONOCE AL EQUIPO</span>
          </div>
        </div>
      </section>

      {/* Sección Cinematográfica ÉPICA del Equipo */}
      <section
        ref={cinematicRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `
      radial-gradient(circle at 20% 30%, rgba(255, 140, 0, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(255, 165, 0, 0.05) 0%, transparent 60%),
      linear-gradient(135deg, #000000 0%, #0a0a0a 30%, #1a1a1a 70%, #000000 100%)
    `,
        }}
      >
        {/* Efectos de luz cinematográficos ÉPICOS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Rayos de luz principales */}
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-orange-400/30 via-transparent to-transparent transform -translate-x-1/2 rotate-12 animate-pulse"></div>
          <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-emerald-400/20 via-transparent to-transparent transform -translate-x-1/2 -rotate-12 animate-pulse delay-1000"></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-yellow-400/25 via-transparent to-transparent transform translate-x-1/2 rotate-6 animate-pulse delay-2000"></div>

          {/* Partículas flotantes épicas */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}

          {/* Efectos de humo/niebla */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent"></div>
        </div>

        {/* Contenedor principal ÉPICO */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          {/* Título cinematográfico */}
          <div className="text-center mb-16">
            <div className="relative">
              <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-emerald-400 mb-6 tracking-wider drop-shadow-2xl">
                BLACKHOUSE
              </h2>
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-white/10 blur-sm">BLACKHOUSE</div>
            </div>
            <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">ÉLITE INMOBILIARIA</p>

            {/* Línea decorativa épica */}
            <div className="flex items-center justify-center mt-8 mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-32"></div>
              <div className="mx-4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-32"></div>
            </div>
          </div>

          {/* Presentación ÉPICA del equipo */}
          <div className="relative">
            {/* Spotlight effect para el miembro activo */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute w-96 h-96 bg-gradient-radial from-orange-400/20 via-orange-400/10 to-transparent rounded-full blur-3xl transition-all duration-1000"
                style={{
                  left: `${(activeTeamMember % 3) * 33.33}%`,
                  top: `${Math.floor(activeTeamMember / 3) * 50}%`,
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>

            {/* Grid ÉPICO del equipo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`team-member-cinematic relative group cursor-pointer transition-all duration-700 transform ${
                    index === activeTeamMember
                      ? "scale-110 z-30 shadow-2xl shadow-orange-400/30"
                      : "scale-95 opacity-80 hover:opacity-100 hover:scale-100"
                  }`}
                  onClick={() => setActiveTeamMember(index)}
                >
                  {/* Aura épica para el miembro activo */}
                  {index === activeTeamMember && (
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/30 via-yellow-400/20 to-emerald-400/30 rounded-3xl blur-xl animate-pulse"></div>
                  )}

                  {/* Container principal */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/90 to-black/95 border-2 border-white/20 backdrop-blur-sm">
                    {/* Efectos de borde dinámicos */}
                    <div
                      className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                        index === activeTeamMember
                          ? "bg-gradient-to-r from-orange-400/20 via-transparent to-emerald-400/20"
                          : "bg-transparent"
                      }`}
                    ></div>

                    {/* Imagen épica */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={member.imagen || "/placeholder.svg"}
                        alt={member.nombre}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          index === activeTeamMember
                            ? "scale-105 brightness-110 contrast-110"
                            : "scale-100 brightness-90"
                        }`}
                      />

                      {/* Overlay cinematográfico */}
                      <div
                        className={`absolute inset-0 transition-all duration-500 ${
                          index === activeTeamMember
                            ? "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                            : "bg-gradient-to-t from-black/60 via-black/30 to-black/10"
                        }`}
                      >
                        {/* Efectos de partículas para el miembro activo */}
                        {index === activeTeamMember && (
                          <div className="absolute inset-0">
                            {[...Array(15)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-1 bg-orange-400 rounded-full animate-ping"
                                style={{
                                  left: `${20 + Math.random() * 60}%`,
                                  top: `${20 + Math.random() * 60}%`,
                                  animationDelay: `${i * 0.3}s`,
                                  animationDuration: "2s",
                                }}
                              />
                            ))}
                          </div>
                        )}

                        {/* Información del miembro */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div
                            className={`transition-all duration-500 ${
                              index === activeTeamMember
                                ? "transform translate-y-0 opacity-100"
                                : "transform translate-y-2 opacity-90"
                            }`}
                          >
                            <h3
                              className={`font-bold mb-2 transition-all duration-300 ${
                                index === activeTeamMember
                                  ? "text-2xl text-white drop-shadow-lg"
                                  : "text-xl text-white/90"
                              }`}
                            >
                              {member.nombre}
                            </h3>
                            <p
                              className={`font-semibold mb-1 transition-all duration-300 ${
                                index === activeTeamMember ? "text-orange-400 text-lg" : "text-emerald-400 text-base"
                              }`}
                            >
                              {member.cargo}
                            </p>
                            <p className="text-white/70 text-sm mb-3">{member.especialidad}</p>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-px bg-gradient-to-r from-orange-400 to-emerald-400"></div>
                              <span className="text-orange-400 text-sm font-bold">{member.experiencia}</span>
                            </div>

                            {/* Logros destacados */}
                            {index === activeTeamMember && (
                              <div className="flex gap-2 mb-4 flex-wrap">
                                {member.logros.slice(0, 2).map((logro, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs bg-gradient-to-r from-orange-400/20 to-emerald-400/20 text-white px-3 py-1 rounded-full border border-orange-400/30 backdrop-blur-sm"
                                  >
                                    {logro}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Información expandida para miembro activo */}
                    {index === activeTeamMember && (
                      <div className="p-6 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border-t border-orange-400/30">
                        <p className="text-white/90 text-sm leading-relaxed mb-4">{member.descripcion}</p>
                        <div className="flex justify-center gap-3">
                          <button className="p-3 bg-gradient-to-r from-orange-400/20 to-emerald-400/20 rounded-full hover:from-orange-400/30 hover:to-emerald-400/30 transition-all duration-300 border border-orange-400/30">
                            <Phone className="w-4 h-4 text-white" />
                          </button>
                          <button className="p-3 bg-gradient-to-r from-orange-400/20 to-emerald-400/20 rounded-full hover:from-orange-400/30 hover:to-emerald-400/30 transition-all duration-300 border border-orange-400/30">
                            <Mail className="w-4 h-4 text-white" />
                          </button>
                          <button className="p-3 bg-gradient-to-r from-orange-400/20 to-emerald-400/20 rounded-full hover:from-orange-400/30 hover:to-emerald-400/30 transition-all duration-300 border border-orange-400/30">
                            <Linkedin className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Indicadores épicos */}
            <div className="flex justify-center gap-4 mt-12">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTeamMember(index)}
                  className={`relative transition-all duration-500 ${
                    index === activeTeamMember
                      ? "w-12 h-3 bg-gradient-to-r from-orange-400 to-emerald-400 rounded-full shadow-lg shadow-orange-400/50"
                      : "w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full"
                  }`}
                >
                  {index === activeTeamMember && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-emerald-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Efectos de profundidad */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Estadísticas */}
      <section ref={statsRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-400/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.numero}</div>
                <div className="text-white/70 text-sm md:text-base">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ¿LISTO PARA
            <span className="block text-emerald-400">TRABAJAR JUNTOS?</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está preparado para hacer realidad tu proyecto inmobiliario soñado.
          </p>
          <button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-400/25">
            Contactar al Equipo
          </button>
        </div>
      </section>
    </div>
  )
}

export default NuestroEquipo