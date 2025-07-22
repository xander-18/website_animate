"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star, Users, TrendingUp, CheckCircle, Clock, Trophy, Target } from "lucide-react"
import jason from "../assets/img/logos-blackhouse/jason.png"
import carolina from "../assets/img/logos-blackhouse/Luna.png"
import jonel from "../assets/img/logos-blackhouse/jonel.png"
import isaias from "../assets/img/logos-blackhouse/Isa.png"
// import { FaWhatsapp } from "react-icons/fa"

// Registrar plugin
gsap.registerPlugin(ScrollTrigger)

const AsesoresSection = ({ onSelectAsesor, selectedAsesor }) => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])
  const [hoveredCard, setHoveredCard] = useState(null)

  // Datos de los asesores (mantengo los datos originales)
  const asesores = [
    {
      id: 1,
      nombre: "Jonel Casio",
      cargo: "Asesor Inmobiliario Senior",
      foto: jonel,
      especialidad: "Lotes y Depas",
      rating: 4.9,
      telefono: "51954789430",
      virtudes: ["Tranquilo", "Honrado", "Puntual"],
      logros: ["🏆 Top Seller 2024", "👥 Mejor Conexión Cliente 2024"],
      descripcion:
        "Especialista en proyectos premium con más de 8 años ayudando a familias a encontrar su hogar ideal. Experta en inversiones inmobiliarias y financiamiento.",
      horarios: "Lun-Sab: 9am-7pm Domingo Previa cita",
      disponible: true,
      proyectosFavoritos: ["BLACKHOUSE PREMIUM", "BLACKHOUSE PENTHOUSE"],
      metodologia: "Asesoramiento personalizado con enfoque en inversión a largo plazo",
    },
    {
      id: 2,
      nombre: "Carolina Rivera",
      cargo: "Asesora Inmobiliaria",
      foto: carolina,
      rating: 4.9,
      telefono: "+51910191226",
      virtudes: ["Empatia", "Humildad", "Respeto"],
      logros: ["🎯 03 Depas Vendidos En Un Mes", "👥 Mejor Conexión Cliente 2025"],
      descripcion:
        "Experta en acompañar a jóvenes profesionales en su primera compra. Especializada en opciones de financiamiento y procesos digitales ágiles.",
      horarios: "Lun-Sab: 9am-7pm Domingo Previa cita",
      disponible: true,
      ventaPromedio: "$120,000",
      proyectosFavoritos: ["BLACKHOUSE PREMIUM", "BLACKHOUSE SMART"],
      metodologia: "Acompañamiento integral desde la búsqueda hasta la entrega de llaves",
    },
    {
      id: 3,
      nombre: "Jason Arce",
      cargo: "Asesor Inmobiliario Senior",
      foto: jason,
      rating: 4.8,
      telefono: "51974153985",
      virtudes: ["Compromiso", "Empatia", "Paciencia"],
      logros: [
        "🥇 Mejor Asesor 2022",
        "⏱️ ¡Un depa vendido en 14 días!",
        "📈 Certificación en Ventas Avanzadas",
        "⭐ 5 años consecutivos Top 10",
      ],
      descripcion:
        "Asesor especializado en propiedades de lujo y estudios modernos. Conoce cada detalle de nuestros proyectos y te guiará en la mejor decisión de inversión.",
      horarios: "Lun-Sab: 9am-7pm Domingo Previa cita",
      disponible: true,
      ventaPromedio: "$250,000",
      proyectosFavoritos: ["BLACKHOUSE PENTHOUSE", "BLACKHOUSE DELUXE"],
      metodologia: "Especialización en propiedades de alto valor con análisis de mercado detallado",
    },
    {
      id: 4,
      nombre: "Isaias Huertas",
      cargo: "Asesor Inmobiliario",
      foto: isaias,
      clientesSatisfechos: "100%",
      especialidad: "Lotes y Depas",
      rating: 5.0,
      telefono: "51931696858",
      logros: [
        "👑 Director del Año 2023",
        "🎓 Master en Real Estate",
        "🏢 Líder en Ventas Corporativas",
        "💼 15+ Proyectos Exitosos",
      ],
      descripcion:
        "Director comercial con más de una década de experiencia. Especialista en grandes inversiones y asesoramiento estratégico para inversionistas corporativos.",
      horarios: "Lun-Sab: 9am-7pm Domingo Previa cita",
      disponible: true,
      ventaPromedio: "$500,000+",
      proyectosFavoritos: ["Todos los proyectos BLACKHOUSE"],
      metodologia: "Estrategia de inversión personalizada con análisis de ROI detallado",
    },
  ]

  // Animaciones
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(
            titleRef.current.children,
            { opacity: 0, y: 30, rotationX: -5 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 2.5,
              ease: "power2.out",
              stagger: 0.2,
            },
          )
        },
      })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            cardsRef.current,
            {
              opacity: 0,
              y: 50,
              scale: 0.95,
              rotationY: -5,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 2.2,
              stagger: 0.15,
              ease: "power2.out",
              delay: 0.3,
            },
          )
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSelectAsesor = (asesor) => {
    if (onSelectAsesor) {
      onSelectAsesor(asesor)
    }
    gsap.to(`.card-${asesor.id}`, {
      scale: 1.02,
      duration: 0.6,
      ease: "power1.out",
      yoyo: true,
      repeat: 1,
    })
  }

  const handleWhatsApp = (asesor) => {
    const mensaje = `¡Hola ${asesor.nombre}! 👋

Me interesa conocer más sobre los proyectos BLACKHOUSE y me gustaría que seas mi asesor/a.

He visto tu perfil y me parece que tu especialidad en "${asesor.especialidad}" es exactamente lo que busco.

¿Podrías ayudarme con información detallada?

¡Gracias! 🏠✨`

    const whatsappUrl = `https://wa.me/${asesor.telefono.replace(/\D/g, "")}?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCardHover = (asesorId, isHovering) => {
    setHoveredCard(isHovering ? asesorId : null)
    if (isHovering) {
      gsap.to(`.card-${asesorId}`, {
        y: -5,
        boxShadow: "0 20px 40px rgba(16, 185, 129, 0.25)",
        duration: 0.6,
        ease: "power1.out",
      })
    } else {
      gsap.to(`.card-${asesorId}`, {
        y: 0,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
        duration: 0.6,
        ease: "power1.out",
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Efectos de fondo - RESPONSIVE */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        {/* Header - COMPLETAMENTE RESPONSIVE */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block bg-emerald-400/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full mb-4 sm:mb-6 md:mb-8 border border-emerald-400/20">
            <span className="text-emerald-400 font-semibold text-xs sm:text-sm tracking-wider">
              NUESTRO EQUIPO EXPERTO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-wider">
            ASESORES
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Conoce a nuestros asesores especializados. Cada uno con años de experiencia, cientos de familias satisfechas
            y un compromiso inquebrantable con tu éxito.
            <span className="block mt-2 text-emerald-400 font-semibold">
              Elige con quién quieres hacer realidad tus sueños.
            </span>
          </p>
        </div>

        {/* Grid de Asesores - COMPLETAMENTE RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {asesores.map((asesor, index) => (
            <div
              key={asesor.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`card-${asesor.id} relative bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-500 group cursor-pointer flex flex-col ${
                selectedAsesor?.id === asesor.id
                  ? "border-emerald-400 shadow-2xl shadow-emerald-400/30 scale-105"
                  : "border-white/10 hover:border-emerald-400/50"
              }`}
              onMouseEnter={() => handleCardHover(asesor.id, true)}
              onMouseLeave={() => handleCardHover(asesor.id, false)}
            >
              {/* Badge de disponibilidad - RESPONSIVE */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-20">
                <div
                  className={`px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-full text-xs font-bold backdrop-blur-sm border ${
                    asesor.disponible
                      ? "bg-green-500/90 text-white border-green-400"
                      : "bg-yellow-500/90 text-black border-yellow-400"
                  }`}
                >
                  <span className="hidden sm:inline">🟢 Disponible</span>
                  <span className="sm:hidden">🟢</span>
                </div>
              </div>

              {/* Foto del asesor - RESPONSIVE */}
              <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 overflow-hidden flex-shrink-0">
                <img
                  src={asesor.foto || "/placeholder.svg"}
                  alt={asesor.nombre}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                  style={{ filter: "none)" }}
                />
                {/* Rating - RESPONSIVE */}
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full border border-white/20">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 ${
                          i < Math.floor(asesor.rating) ? "text-yellow-400 fill-current" : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-bold text-xs">{asesor.rating}</span>
                </div>
              </div>

              {/* Contenido de la tarjeta - COMPLETAMENTE RESPONSIVE */}
              <div className="p-2.5 sm:p-3 md:p-4 flex flex-col flex-grow">
                {/* Información básica - RESPONSIVE */}
                <div className="mb-2 sm:mb-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 leading-tight">
                    {asesor.nombre}
                  </h3>
                  <p className="text-emerald-400 text-xs font-semibold mb-1.5 sm:mb-2 uppercase tracking-wider">
                    {asesor.cargo}
                  </p>
                  <p className="text-white/80 text-xs leading-relaxed line-clamp-2">{asesor.descripcion}</p>
                </div>

                {/* Estadísticas - RESPONSIVE */}
                {/* <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="text-center bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-emerald-400/20">
                    <TrendingUp className="w-3 h-3 text-emerald-400 mx-auto mb-0.5 sm:mb-1" />
                    <span className="text-white/70 text-xs block">Experiencia</span>
                    <span className="text-white font-bold text-xs">{asesor.experiencia}</span>
                  </div>
                  <div className="text-center bg-gradient-to-br from-blue-400/20 to-blue-600/10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-blue-400/20">
                    <Users className="w-3 h-3 text-blue-400 mx-auto mb-0.5 sm:mb-1" />
                    <span className="text-white/70 text-xs block">Ventas</span>
                    <span className="text-white font-bold text-xs">{asesor.ventasRealizadas || "50+"}</span>
                  </div>
                </div> */}

                {/* Especialidad - RESPONSIVE */}
       

                {/* Logros - RESPONSIVE */}
                <div className="mb-2 sm:mb-3 flex-grow">
                  <h4 className="text-white font-bold text-xs mb-1.5 sm:mb-2 flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-yellow-400" />
                    <span className="hidden sm:inline">Logros Destacados</span>
                    <span className="sm:hidden">Logros</span>
                  </h4>
                  <div className="space-y-0.5 sm:space-y-1">
                    {asesor.logros.slice(0, 2).map((logro, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-xs">
                        <div className="w-1 h-1 bg-emerald-400 rounded-full flex-shrink-0"></div>
                        <span className="text-white/80 line-clamp-1">{logro}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Virtudes - RESPONSIVE */}
                {asesor.virtudes && (
                  <div className="mb-2 sm:mb-3">
                    <h4 className="text-white font-bold text-xs mb-1.5 sm:mb-2 flex items-center gap-1">
                      <Star className="w-3 h-3 text-emerald-400" />
                      Virtudes
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {asesor.virtudes.map((virtud, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-400/20 text-white text-xs px-1.5 py-0.5 rounded-full border border-emerald-400/30"
                        >
                          {virtud}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Información adicional - RESPONSIVE */}
                <div className="mb-2 sm:mb-3">
                  <div className="flex items-start gap-1.5 sm:gap-2 text-white/70 text-xs bg-white/5 p-1.5 sm:p-2 rounded-lg">
                    <Clock className="w-3 h-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-tight">{asesor.horarios}</span>
                  </div>
                </div>

                {/* Botones de acción - RESPONSIVE */}
                <div className="space-y-1.5 sm:space-y-2 mt-auto">
                  <button
                    onClick={() => handleSelectAsesor(asesor)}
                    className={`w-full font-bold py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl transition-all duration-500 transform hover:scale-102 flex items-center justify-center gap-1.5 sm:gap-2 text-xs ${
                      selectedAsesor?.id === asesor.id
                        ? "bg-gradient-to-r from-emerald-400 to-emerald-500 text-black shadow-lg shadow-emerald-400/30"
                        : "bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 text-emerald-400 hover:from-emerald-400 hover:to-emerald-500 hover:text-black border border-emerald-400/30"
                    }`}
                  >
                    {selectedAsesor?.id === asesor.id ? (
                      <>
                        <CheckCircle className="w-3 h-3" />
                        <span className="hidden sm:inline">Asesor Seleccionado</span>
                        <span className="sm:hidden">Seleccionado</span>
                      </>
                    ) : (
                      <>
                        <Users className="w-3 h-3" />
                        <span className="hidden sm:inline">Seleccionar Asesor</span>
                        <span className="sm:hidden">Seleccionar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Efecto de selección - RESPONSIVE */}
              {selectedAsesor?.id === asesor.id && (
                <div className="absolute inset-0 border-2 border-emerald-400 rounded-2xl sm:rounded-3xl pointer-events-none">
                  <div className="absolute -top-1.5 sm:-top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-lg">
                    <span className="hidden sm:inline">✨ ASESOR SELECCIONADO ✨</span>
                    <span className="sm:hidden">✨ SELECCIONADO ✨</span>
                  </div>
                </div>
              )}

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AsesoresSection
