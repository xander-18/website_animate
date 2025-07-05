"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Star,
  Award,
  Users,
  TrendingUp,
  Mail,
  CheckCircle,
  Clock,
  Trophy,
  Target,
  Briefcase,
  Globe,
} from "lucide-react"
import { FaWhatsapp, FaLinkedin } from "react-icons/fa"
import person from "../assets/img/logos-blackhouse/person.jpg"
import person2 from "../assets/img/logos-blackhouse/person1.png"
import person3 from "../assets/img/logos-blackhouse/person2.png"
import person1 from "../assets/img/logos-blackhouse/person3.png"
// Registrar plugin
gsap.registerPlugin(ScrollTrigger)

const AsesoresSection = ({ onSelectAsesor, selectedAsesor }) => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])
  const [hoveredCard, setHoveredCard] = useState(null)

  // Datos mejorados de los asesores
  const asesores = [
    {
      id: 1,
      nombre: "Marco Vazques",
      cargo: "Gerente de Ventas Senior",
      foto: person1,
      experiencia: "8 años",
      ventasRealizadas: "150+",
      clientesSatisfechos: "98%",
      especialidad: "Departamentos Premium",
      rating: 4.9,
      telefono: "+51 999 123 456",
      email: "maria.vasquez@blackhouse.pe",
      linkedin: "maria-vasquez-inmobiliaria",
      logros: [
        "🏆 Top Seller 2023",
        "🎓 Certificación Internacional",
        "💎 Especialista en Inversiones Premium",
        "🌟 Mejor Atención al Cliente 2022",
      ],
      descripcion:
        "Especialista en proyectos premium con más de 8 años ayudando a familias a encontrar su hogar ideal. Experta en inversiones inmobiliarias y financiamiento.",
      horarios: "Lun-Vie: 9am-7pm, Sáb: 9am-5pm",
      idiomas: ["Español", "Inglés"],
      disponible: true,
      ventaPromedio: "$180,000",
      proyectosFavoritos: ["BLACKHOUSE PREMIUM", "BLACKHOUSE PENTHOUSE"],
      metodologia: "Asesoramiento personalizado con enfoque en inversión a largo plazo",
    },
    {
      id: 2,
      nombre: "Carlos Mendoza Rivera",
      cargo: "Asesor Comercial Senior",
      foto: person2,
      experiencia: "6 años",
      ventasRealizadas: "120+",
      clientesSatisfechos: "96%",
      especialidad: "Penthouses & Estudios",
      rating: 4.8,
      telefono: "+51 999 234 567",
      email: "carlos.mendoza@blackhouse.pe",
      linkedin: "carlos-mendoza-real-estate",
      logros: [
        "🥇 Mejor Asesor 2022",
        "🏢 Experto en Penthouses",
        "📈 Certificación en Ventas Avanzadas",
        "⭐ 5 años consecutivos Top 10",
      ],
      descripcion:
        "Asesor especializado en propiedades de lujo y estudios modernos. Conoce cada detalle de nuestros proyectos y te guiará en la mejor decisión de inversión.",
      horarios: "Lun-Vie: 8am-6pm, Sáb: 10am-4pm",
      idiomas: ["Español", "Portugués"],
      disponible: true,
      ventaPromedio: "$250,000",
      proyectosFavoritos: ["BLACKHOUSE PENTHOUSE", "BLACKHOUSE DELUXE"],
      metodologia: "Especialización en propiedades de alto valor con análisis de mercado detallado",
    },
    {
      id: 3,
      nombre: "Ana Sofía Torres",
      cargo: "Consultora Inmobiliaria",
      foto: person3,
      experiencia: "5 años",
      ventasRealizadas: "95+",
      clientesSatisfechos: "99%",
      especialidad: "Primeros Compradores",
      rating: 4.9,
      telefono: "+51 999 345 678",
      email: "ana.torres@blackhouse.pe",
      linkedin: "ana-torres-inmobiliaria",
      logros: [
        "🎯 Especialista en Millennials",
        "💰 Experta en Financiamiento",
        "📱 Certificación Digital Avanzada",
        "👥 Mejor Conexión Cliente 2023",
      ],
      descripcion:
        "Experta en acompañar a jóvenes profesionales en su primera compra. Especializada en opciones de financiamiento y procesos digitales ágiles.",
      horarios: "Lun-Vie: 10am-8pm, Sáb: 9am-3pm",
      idiomas: ["Español", "Inglés", "Francés"],
      disponible: true,
      ventaPromedio: "$120,000",
      proyectosFavoritos: ["BLACKHOUSE PREMIUM", "BLACKHOUSE SMART"],
      metodologia: "Acompañamiento integral desde la búsqueda hasta la entrega de llaves",
    },
    {
      id: 4,
      nombre: "Roberto Castillo",
      cargo: "Director Comercial",
      foto: person,
      experiencia: "12 años",
      ventasRealizadas: "300+",
      clientesSatisfechos: "100%",
      especialidad: "Inversiones Corporativas",
      rating: 5.0,
      telefono: "+51 999 456 789",
      email: "roberto.castillo@blackhouse.pe",
      linkedin: "roberto-castillo-director",
      logros: [
        "👑 Director del Año 2023",
        "🎓 Master en Real Estate",
        "🏢 Líder en Ventas Corporativas",
        "💼 15+ Proyectos Exitosos",
      ],
      descripcion:
        "Director comercial con más de una década de experiencia. Especialista en grandes inversiones y asesoramiento estratégico para inversionistas corporativos.",
      horarios: "Lun-Vie: 9am-6pm (Solo citas programadas)",
      idiomas: ["Español", "Inglés", "Italiano"],
      disponible: false,
      ventaPromedio: "$500,000+",
      proyectosFavoritos: ["Todos los proyectos BLACKHOUSE"],
      metodologia: "Estrategia de inversión personalizada con análisis de ROI detallado",
    },
  ]

  // Animaciones mejoradas
  // Animaciones mejoradas
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Verificar que las referencias existan antes de animar
      if (titleRef.current && titleRef.current.children) {
        // Animación del título con efecto más suave
        ScrollTrigger.create({
          trigger: titleRef.current,
          start: "top 85%",
          onEnter: () => {
            if (titleRef.current && titleRef.current.children) {
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
            }
          },
        })
      }

      // Verificar que las tarjetas existan antes de animar
      if (sectionRef.current && cardsRef.current.length > 0) {
        // Animación de las tarjetas más suave
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          onEnter: () => {
            if (cardsRef.current.length > 0) {
              // Filtrar elementos null del array
              const validCards = cardsRef.current.filter((card) => card !== null)
              if (validCards.length > 0) {
                gsap.fromTo(
                  validCards,
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
              }
            }
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSelectAsesor = (asesor) => {
    if (onSelectAsesor) {
      onSelectAsesor(asesor)
    }

    const cardElement = document.querySelector(`.card-${asesor.id}`)
    if (!cardElement) return

    // Animación de selección más suave
    gsap.to(cardElement, {
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

    const cardElement = document.querySelector(`.card-${asesorId}`)
    if (!cardElement) return

    if (isHovering) {
      gsap.to(cardElement, {
        y: -5,
        boxShadow: "0 20px 40px rgba(16, 185, 129, 0.25)",
        duration: 0.6,
        ease: "power1.out",
      })
    } else {
      gsap.to(cardElement, {
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
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header mejorado */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-block bg-emerald-400/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-emerald-400/20">
            <span className="text-emerald-400 font-semibold text-sm tracking-wider">NUESTRO EQUIPO EXPERTO</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider">
            ASESORES
            <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-4xl md:text-5xl font-light mt-2">
              de clase mundial
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Conoce a nuestros asesores especializados. Cada uno con años de experiencia, cientos de familias satisfechas
            y un compromiso inquebrantable con tu éxito.
            <span className="block mt-2 text-emerald-400 font-semibold">
              Elige con quién quieres hacer realidad tus sueños.
            </span>
          </p>
        </div>

        {/* Grid de Asesores Mejorado */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {asesores.map((asesor, index) => (
            <div
              key={asesor.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`card-${asesor.id} relative bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl overflow-hidden border transition-all duration-500 group cursor-pointer ${
                selectedAsesor?.id === asesor.id
                  ? "border-emerald-400 shadow-2xl shadow-emerald-400/30 scale-105"
                  : "border-white/10 hover:border-emerald-400/50"
              }`}
              onMouseEnter={() => handleCardHover(asesor.id, true)}
              onMouseLeave={() => handleCardHover(asesor.id, false)}
            >
              {/* Badge de disponibilidad mejorado */}
              <div className="absolute top-6 right-6 z-20">
                <div
                  className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm border ${
                    asesor.disponible
                      ? "bg-green-500/90 text-white border-green-400"
                      : "bg-yellow-500/90 text-black border-yellow-400"
                  }`}
                >
                  {asesor.disponible ? "🟢 Disponible" : "🟡 Solo citas"}
                </div>
              </div>

              {/* Foto del asesor mejorada */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={asesor.foto || "/placeholder.svg"}
                  alt={asesor.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Rating mejorado */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(asesor.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm">{asesor.rating}</span>
                </div>

                {/* Overlay de información rápida */}
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-emerald-400/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-black font-bold text-xs">{asesor.clientesSatisfechos} satisfacción</span>
                  </div>
                </div>
              </div>

              {/* Información del asesor mejorada */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{asesor.nombre}</h3>
                  <p className="text-emerald-400 text-sm font-semibold mb-3 uppercase tracking-wider">{asesor.cargo}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{asesor.descripcion}</p>
                </div>

                {/* Estadísticas mejoradas */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 p-4 rounded-xl border border-emerald-400/20">
                    <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <span className="text-white/70 text-xs block">Experiencia</span>
                    <span className="text-white font-bold text-lg">{asesor.experiencia}</span>
                  </div>
                  <div className="text-center bg-gradient-to-br from-blue-400/20 to-blue-600/10 p-4 rounded-xl border border-blue-400/20">
                    <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <span className="text-white/70 text-xs block">Ventas</span>
                    <span className="text-white font-bold text-lg">{asesor.ventasRealizadas}</span>
                  </div>
                </div>

                {/* Especialidad destacada */}
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-emerald-400/20 to-blue-400/20 text-white px-4 py-3 rounded-xl text-center border border-emerald-400/30">
                    <Target className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <span className="font-semibold text-sm">{asesor.especialidad}</span>
                  </div>
                </div>

                {/* Logros destacados */}
                <div className="mb-6">
                  <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    Logros Destacados
                  </h4>
                  <div className="space-y-2">
                    {asesor.logros.slice(0, 3).map((logro, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-white/80">{logro}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Información adicional */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-3 text-white/70 text-xs bg-white/5 p-3 rounded-lg">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>{asesor.horarios}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 text-xs bg-white/5 p-3 rounded-lg">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span>Idiomas: {asesor.idiomas.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 text-xs bg-white/5 p-3 rounded-lg">
                    <Briefcase className="w-4 h-4 text-purple-400" />
                    <span>Venta promedio: {asesor.ventaPromedio}</span>
                  </div>
                </div>

                {/* Botones de acción mejorados */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleSelectAsesor(asesor)}
                    className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-500 transform hover:scale-102 flex items-center justify-center gap-2 ${
                      selectedAsesor?.id === asesor.id
                        ? "bg-gradient-to-r from-emerald-400 to-emerald-500 text-black shadow-lg shadow-emerald-400/30"
                        : "bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 text-emerald-400 hover:from-emerald-400 hover:to-emerald-500 hover:text-black border border-emerald-400/30"
                    }`}
                  >
                    {selectedAsesor?.id === asesor.id ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Asesor Seleccionado
                      </>
                    ) : (
                      <>
                        <Users className="w-5 h-5" />
                        Seleccionar Asesor
                      </>
                    )}
                  </button>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleWhatsApp(asesor)}
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold py-3 px-3 rounded-lg transition-all duration-500 hover:scale-102 flex items-center justify-center"
                      title="WhatsApp"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => window.open(`mailto:${asesor.email}`, "_blank")}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-3 rounded-lg transition-all duration-500 hover:scale-102 flex items-center justify-center"
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => window.open(`https://linkedin.com/in/${asesor.linkedin}`, "_blank")}
                      className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-3 rounded-lg transition-all duration-500 hover:scale-102 flex items-center justify-center"
                      title="LinkedIn"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Efecto de selección mejorado */}
              {selectedAsesor?.id === asesor.id && (
                <div className="absolute inset-0 border-3 border-emerald-400 rounded-3xl pointer-events-none">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg">
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

        {/* Sección de beneficios mejorada */}
        <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Por qué elegir un asesor
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text">
                {" "}
                especializado
              </span>
              ?
            </h3>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Nuestros asesores no solo venden propiedades, crean experiencias y construyen relaciones duraderas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-500 border border-emerald-400/30">
                <Users className="w-10 h-10 text-emerald-400" />
              </div>
              <h4 className="text-white font-bold text-xl mb-4">Experiencia Comprobada</h4>
              <p className="text-white/70 leading-relaxed">
                Cientos de familias satisfechas y años de experiencia en el mercado inmobiliario respaldan nuestro
                trabajo profesional.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-500 border border-blue-400/30">
                <Award className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-white font-bold text-xl mb-4">Asesoramiento Personalizado</h4>
              <p className="text-white/70 leading-relaxed">
                Cada cliente recibe atención especializada según sus necesidades, presupuesto y objetivos de inversión
                únicos.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-500 border border-purple-400/30">
                <CheckCircle className="w-10 h-10 text-purple-400" />
              </div>
              <h4 className="text-white font-bold text-xl mb-4">Proceso Transparente</h4>
              <p className="text-white/70 leading-relaxed">
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
