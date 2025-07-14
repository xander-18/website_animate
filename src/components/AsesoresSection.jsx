"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star, Award, Users, TrendingUp, CheckCircle, Clock, Trophy, Target } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Jonel from "../assets/img/logos-blackhouse/jonel.png"
import Luna from "../assets/img/logos-blackhouse/Luna.png"
import jason from "../assets/img/logos-blackhouse/jason.png"
import Isaias from "../assets/img/logos-blackhouse/Isa.png"

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
      foto: Jonel,
      experiencia: "4 años",
      especialidad: "Lotes y Depas",
      rating: 4.9,
      telefono: "51954789430",
      linkedin: "maria-vasquez-inmobiliaria",
      logros: ["🏆 Top Seller 2024", "🎓 Certificación Internacional"],
      descripcion:
        "Especialista en proyectos premium con más de 8 años ayudando a familias a encontrar su hogar ideal. Experta en inversiones inmobiliarias y financiamiento.",
      horarios: "Lun-Sab: 9am-1pm Previa cita",
      disponible: true,
      proyectosFavoritos: ["BLACKHOUSE PREMIUM", "BLACKHOUSE PENTHOUSE"],
      metodologia: "Asesoramiento personalizado con enfoque en inversión a largo plazo",
    },
    {
      id: 2,
      nombre: "Carolina Rivera",
      cargo: "Asesora Inmobiliaria",
      foto: Luna,
      experiencia: "5 años",
      especialidad: "Lotes y Depas",
      rating: 4.9,
      telefono: "+51910191226",
      email: "ana.torres@blackhouse.pe",
      logros: ["🎯 03 Depas Vendidos En Un Mes", "👥 Mejor Conexión Cliente 2023"],
      descripcion:
        "Experta en acompañar a jóvenes profesionales en su primera compra. Especializada en opciones de financiamiento y procesos digitales ágiles.",
      horarios: "Lun-Vie: 10am-8pm, Previa Cita",
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
      experiencia: "6 años",
      ventasRealizadas: "120+",
      especialidad: "Lotes y Depas",
      rating: 4.8,
      telefono: "51974153985",
      email: "carlos.mendoza@blackhouse.pe",
      logros: [
        "🥇 Mejor Asesor 2022",
        "🏢 Experto en Penthouses",
        "📈 Certificación en Ventas Avanzadas",
        "⭐ 5 años consecutivos Top 10",
      ],
      descripcion:
        "Asesor especializado en propiedades de lujo y estudios modernos. Conoce cada detalle de nuestros proyectos y te guiará en la mejor decisión de inversión.",
      horarios: "Lun-Vie: 8am-6pm, Sáb: 10am-4pm",
      disponible: true,
      ventaPromedio: "$250,000",
      proyectosFavoritos: ["BLACKHOUSE PENTHOUSE", "BLACKHOUSE DELUXE"],
      metodologia: "Especialización en propiedades de alto valor con análisis de mercado detallado",
    },
    {
      id: 4,
      nombre: "Isaias",
      cargo: "Asesor Inmobiliario",
      foto: Isaias,
      experiencia: "12 años",
      ventasRealizadas: "300+",
      clientesSatisfechos: "100%",
      especialidad: "Lotes y Depas",
      rating: 5.0,
      telefono: "+51 999 456 789",
      email: "roberto.castillo@blackhouse.pe",
      logros: [
        "👑 Director del Año 2023",
        "🎓 Master en Real Estate",
        "🏢 Líder en Ventas Corporativas",
        "💼 15+ Proyectos Exitosos",
      ],
      descripcion:
        "Director comercial con más de una década de experiencia. Especialista en grandes inversiones y asesoramiento estratégico para inversionistas corporativos.",
      horarios: "Lun-Vie: 9am-6pm (Solo citas programadas)",
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
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header - MEJORADO RESPONSIVE */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block bg-emerald-400/10 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-6 sm:mb-8 border border-emerald-400/20">
            <span className="text-emerald-400 font-semibold text-xs sm:text-sm tracking-wider">
              NUESTRO EQUIPO EXPERTO
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-wider">
            ASESORES
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4">
            Conoce a nuestros asesores especializados. Cada uno con años de experiencia, cientos de familias satisfechas
            y un compromiso inquebrantable con tu éxito.
            <span className="block mt-2 text-emerald-400 font-semibold">
              Elige con quién quieres hacer realidad tus sueños.
            </span>
          </p>
        </div>

        {/* Grid de Asesores - MEJORADO RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {asesores.map((asesor, index) => (
            <div
              key={asesor.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`card-${asesor.id} relative bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl overflow-hidden border transition-all duration-500 group cursor-pointer flex flex-col ${
                selectedAsesor?.id === asesor.id
                  ? "border-emerald-400 shadow-2xl shadow-emerald-400/30 scale-105"
                  : "border-white/10 hover:border-emerald-400/50"
              }`}
              onMouseEnter={() => handleCardHover(asesor.id, true)}
              onMouseLeave={() => handleCardHover(asesor.id, false)}
            >
              {/* Badge de disponibilidad - MEJORADO RESPONSIVE */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
                <div
                  className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs font-bold backdrop-blur-sm border ${
                    asesor.disponible
                      ? "bg-green-500/90 text-white border-green-400"
                      : "bg-yellow-500/90 text-black border-yellow-400"
                  }`}
                >
                  {asesor.disponible ? "🟢 Disponible" : ""}
                </div>
              </div>

              {/* Foto del asesor - MEJORADO RESPONSIVE */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden flex-shrink-0">
                <img
                  src={asesor.foto || "/placeholder.svg"}
                  alt={asesor.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Rating - MEJORADO RESPONSIVE */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-white/20">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < Math.floor(asesor.rating) ? "text-yellow-400 fill-current" : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-bold text-xs sm:text-sm">{asesor.rating}</span>
                </div>
              </div>

              {/* Contenido de la tarjeta - MEJORADO RESPONSIVE */}
              <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                {/* Información básica */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{asesor.nombre}</h3>
                  <p className="text-emerald-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wider">
                    {asesor.cargo}
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-3">{asesor.descripcion}</p>
                </div>

                {/* Estadísticas - MEJORADO RESPONSIVE */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 p-3 sm:p-4 rounded-xl border border-emerald-400/20">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-emerald-400 mx-auto mb-2" />
                    <span className="text-white/70 text-xs block">Experiencia</span>
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg">{asesor.experiencia}</span>
                  </div>
                  <div className="text-center bg-gradient-to-br from-blue-400/20 to-blue-600/10 p-3 sm:p-4 rounded-xl border border-blue-400/20">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400 mx-auto mb-2" />
                    <span className="text-white/70 text-xs block">Ventas</span>
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                      {asesor.ventasRealizadas || "50+"}
                    </span>
                  </div>
                </div>

                {/* Especialidad - MEJORADO RESPONSIVE */}
                <div className="mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-emerald-400/20 to-blue-400/20 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl text-center border border-emerald-400/30">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mx-auto mb-1" />
                    <span className="font-semibold text-xs sm:text-sm">{asesor.especialidad}</span>
                  </div>
                </div>

                {/* Logros - MEJORADO RESPONSIVE */}
                <div className="mb-4 sm:mb-6 flex-grow">
                  <h4 className="text-white font-bold text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-2">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    Logros Destacados
                  </h4>
                  <div className="space-y-1 sm:space-y-2">
                    {asesor.logros.slice(0, 3).map((logro, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                        <span className="text-white/80 line-clamp-1">{logro}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Información adicional - MEJORADO RESPONSIVE */}
                <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3 text-white/70 text-xs bg-white/5 p-2 sm:p-3 rounded-lg">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-tight">{asesor.horarios}</span>
                  </div>
                </div>

                {/* Botones de acción - MEJORADO RESPONSIVE */}
                <div className="space-y-2 sm:space-y-3 mt-auto">
                  <button
                    onClick={() => handleSelectAsesor(asesor)}
                    className={`w-full font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-500 transform hover:scale-102 flex items-center justify-center gap-2 text-xs sm:text-sm ${
                      selectedAsesor?.id === asesor.id
                        ? "bg-gradient-to-r from-emerald-400 to-emerald-500 text-black shadow-lg shadow-emerald-400/30"
                        : "bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 text-emerald-400 hover:from-emerald-400 hover:to-emerald-500 hover:text-black border border-emerald-400/30"
                    }`}
                  >
                    {selectedAsesor?.id === asesor.id ? (
                      <>
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        Asesor Seleccionado
                      </>
                    ) : (
                      <>
                        <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                        Seleccionar Asesor
                      </>
                    )}
                  </button>

                  {/* Botón de WhatsApp - MEJORADO RESPONSIVE */}
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleWhatsApp(asesor)}
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-500 hover:scale-102 flex items-center justify-center gap-2 min-w-[100px] sm:min-w-[120px] text-xs sm:text-sm"
                      title="WhatsApp"
                    >
                      <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Efecto de selección - MEJORADO RESPONSIVE */}
              {selectedAsesor?.id === asesor.id && (
                <div className="absolute inset-0 border-2 sm:border-3 border-emerald-400 rounded-3xl pointer-events-none">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs font-bold shadow-lg">
                    ✨ ASESOR SELECCIONADO ✨
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

        {/* Sección de beneficios - MEJORADO RESPONSIVE */}
        <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Por qué elegir un asesor
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text">
                {" "}
                especializado
              </span>
              ?
            </h3>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
              Nuestros asesores no solo venden propiedades, crean experiencias y construyen relaciones duraderas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-500 border border-emerald-400/30">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
              </div>
              <h4 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">Experiencia Comprobada</h4>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                Cientos de familias satisfechas y años de experiencia en el mercado inmobiliario respaldan nuestro
                trabajo profesional.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-500 border border-blue-400/30">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              </div>
              <h4 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">Asesoramiento Personalizado</h4>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                Cada cliente recibe atención especializada según sus necesidades, presupuesto y objetivos de inversión
                únicos.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-500 border border-purple-400/30">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
              </div>
              <h4 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">Proceso Transparente</h4>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                Te acompañamos en cada paso del proceso, desde la primera visita hasta la entrega de llaves de tu nuevo
                hogar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AsesoresSection
