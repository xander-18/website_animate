"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ArrowLeft, MapPin, Mail, Clock, Building, Send } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa"
import oneVideo from "../assets/videos/onevideo.mp4"
const Contacto = ({ onVolver }) => {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // Animaciones de entrada
    if (containerRef.current) {
      gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" })
    }

    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.3 },
      )
    }

    if (contentRef.current) {
      const elements = contentRef.current.children
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.6,
        },
      )
    }
  }, [])

  const contactInfo = {
    direccion: "Jirón Pedro Puelles 671, Huánuco",
    email: "groupblackhouse@gmail.com",
    horarios: {
      lunes_viernes: "9:00 am - 7:00 pm",
      sabados: "9:00 am - 12:00 pm",
    },
  }

  const redesSociales = [
    {
      nombre: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/51999999999",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-400/10",
    },
    {
      nombre: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/profile.php?id=61574718328290",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400/10",
    },
    {
      nombre: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/blackhousegroup_oficial/",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-400/10",
    },
    {
      nombre: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/company/blackhouse",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-600/10",
    },
    {
      nombre: "TikTok",
      icon: FaTiktok,
      url: "https://tiktok.com/@blackhouse",
      color: "hover:text-white",
      bgColor: "hover:bg-white/10",
    },
    {
      nombre: "YouTube",
      icon: FaYoutube,
      url: "https://youtube.com/@blackhouse",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-400/10",
    },
  ]

  const handleWhatsAppContact = () => {
    const mensaje = `Hola! Me gustaría obtener más información sobre los proyectos de BLACK HOUSE. ¿Podrían ayudarme?`
    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEmailContact = () => {
    const subject = "Consulta sobre proyectos BLACK HOUSE"
    const body = "Hola,\n\nMe gustaría obtener más información sobre sus proyectos inmobiliarios.\n\nGracias."
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black">
      {/* NAVBAR FIJO */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-emerald-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={onVolver}
            className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">Volver</span>
          </button>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-emerald-400 font-bold text-sm sm:text-lg">CONTACTANOS</span>
          </div>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
        <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* INFORMACIÓN DE CONTACTO */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* DATOS DE CONTACTO */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Información de Contacto</h2>
                <div className="space-y-6">
                  {/* Dirección */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-400/20 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Dirección</h3>
                      <p className="text-white/70">{contactInfo.direccion}</p>
                      <p className="text-white/50 text-sm">Huánuco, Perú</p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-400/20 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-white/70 hover:text-emerald-400 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  {/* Horarios */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-400/20 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Horarios de Atención</h3>
                      <p className="text-white/70">Lunes - Viernes: {contactInfo.horarios.lunes_viernes}</p>
                      <p className="text-white/70">Sábados: {contactInfo.horarios.sabados}</p>
                      <p className="text-white/50 text-sm">Domingos: Previa Cita</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTONES DE ACCIÓN RÁPIDA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={handleWhatsAppContact}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Chatear por WhatsApp</span>
                </button>
                <button
                  onClick={handleEmailContact}
                  className="bg-emerald-400 hover:bg-emerald-500 text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Email</span>
                </button>
              </div>
            </div>

            {/* VIDEO DE CÓMO LLEGAR */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Ubicacion</h2>
              <div className="relative h-80 lg:h-96 bg-gray-800 rounded-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover rounded-xl"
                  controls
                  muted
                  loop
                  playsInline
                  poster="/placeholder.svg?height=400&width=600"
                >
                  <source src={oneVideo} />
                  Tu navegador no soporta el elemento de video.
                </video>

                {/* Overlay con información */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold">BLACK HOUSE</span>
                  </div>
                </div>

                {/* Overlay con dirección */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-lg">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">{contactInfo.direccion}</p>
                      <p className="text-xs text-white/70">Huánuco, Perú</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información adicional del video */}
              <div className="mt-4 text-center">
                <p className="text-white/70 text-sm">Video guía para llegar a nuestras oficinas</p>
              </div>
            </div>
          </div>

          {/* REDES SOCIALES */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Síguenos en Redes Sociales</h2>
              <p className="text-white/70">Mantente conectado y descubre las últimas novedades de nuestros proyectos</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {redesSociales.map((red, index) => (
                <a
                  key={index}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-white/5 ${red.bgColor} border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-white/20`}
                >
                  <red.icon
                    className={`w-8 h-8 mx-auto mb-3 text-white/70 ${red.color} transition-colors duration-300`}
                  />
                  <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors duration-300">
                    {red.nombre}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
