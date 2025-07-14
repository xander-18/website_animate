"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Star, Quote, ArrowLeft } from "lucide-react"

const TestimoniosSection = ({ onVolver }) => {
  const testimoniosRef = useRef(null)
  const [hoveredVideo, setHoveredVideo] = useState(null)
  const [playingVideos, setPlayingVideos] = useState({})

  const testimonios = [
    {
      id: 1,
      nombre: "María González",
      proyecto: "HUERTAS DEL VALLE",
      testimonio:
        "Increíble experiencia desde el primer día. El equipo de BlackHouse me acompañó en todo el proceso y ahora tengo el hogar de mis sueños. La calidad de construcción es excepcional.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      fecha: "Enero 2024",
      video: "https://res.cloudinary.com/dourqe39h/video/upload/v1751584424/onevideo_1_dcpgmn.mp4",
    },
    {
      id: 2,
      nombre: "Carlos Mendoza",
      proyecto: "HIRAKI PENTHOUSE",
      testimonio:
        "La atención personalizada y el nivel de acabados superaron todas mis expectativas. Vivir en el penthouse HIRAKI ha sido una experiencia transformadora. Totalmente recomendado.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      fecha: "Marzo 2024",
      video: "https://res.cloudinary.com/dourqe39h/video/upload/v1751584424/onevideo_1_dcpgmn.mp4",
    },
    {
      id: 3,
      nombre: "Ana Rodríguez",
      proyecto: "HALIT SMART",
      testimonio:
        "La tecnología integrada en mi departamento es impresionante. Desde la domótica hasta los acabados premium, cada detalle refleja calidad e innovación. Excelente inversión.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      fecha: "Febrero 2024",
      video: "https://res.cloudinary.com/dourqe39h/video/upload/v1751584424/onevideo_1_dcpgmn.mp4",
    },
    {
      id: 4,
      nombre: "Roberto Silva",
      proyecto: "HUERTAS DEL VALLE",
      testimonio:
        "El proceso de compra fue transparente y profesional. Las amenidades del proyecto son de primer nivel y la ubicación es perfecta. Mi familia está muy feliz con la decisión.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      fecha: "Abril 2024",
      video: "https://res.cloudinary.com/dourqe39h/video/upload/v1751584424/onevideo_1_dcpgmn.mp4",
    },
    {
      id: 5,
      nombre: "Lucía Torres",
      proyecto: "HIRAKI PENTHOUSE",
      testimonio:
        "BlackHouse cumplió cada promesa. La vista desde mi penthouse es espectacular y la calidad de vida que tengo ahora no tiene precio. Gracias por hacer realidad mi sueño.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      fecha: "Mayo 2024",
      video: "https://res.cloudinary.com/dourqe39h/video/upload/v1751584424/onevideo_1_dcpgmn.mp4",
    },
    {
      id: 6,
      nombre: "Diego Vargas",
      proyecto: "HALIT SMART",
      testimonio:
        "La innovación tecnológica y el diseño moderno hacen de mi hogar un lugar único. El equipo de ventas fue excepcional y el proceso de entrega impecable.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      fecha: "Junio 2024",
      video: "https://res.cloudinary.com/dourqe39h/video/upload/v1751584424/onevideo_1_dcpgmn.mp4",
    },
  ]

  useEffect(() => {
    gsap.fromTo(testimoniosRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })

    gsap.fromTo(
      ".testimonio-card",
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power1.out",
        delay: 0.3,
      },
    )
  }, [])

  const handleMouseEnter = (testimonioId) => {
    setHoveredVideo(testimonioId)
    const videoElement = document.querySelector(`[data-hover-video="${testimonioId}"]`)
    if (videoElement) {
      videoElement.play().catch(console.error)
      setPlayingVideos((prev) => ({ ...prev, [testimonioId]: true }))
    }
  }

  const handleMouseLeave = (testimonioId) => {
    setHoveredVideo(null)
    const videoElement = document.querySelector(`[data-hover-video="${testimonioId}"]`)
    if (videoElement) {
      videoElement.pause()
      videoElement.currentTime = 0
      setPlayingVideos((prev) => ({ ...prev, [testimonioId]: false }))
    }
  }

  const contactarWhatsApp = () => {
    const mensaje = `Hola! He visto los testimonios de BlackHouse y me interesa conocer más sobre sus proyectos. ¿Podrían brindarme más información?`
    const whatsappUrl = `https://wa.me/51977249329?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div ref={testimoniosRef} className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onVolver}
            className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Volver</span>
          </button>
          <h1 className="text-white text-xl font-bold">Testimonios</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            HISTORIAS DE
            <span className="block text-emerald-400 text-3xl md:text-4xl font-light mt-2">éxito real</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Descubre las experiencias reales de quienes ya viven el sueño BlackHouse
          </p>
        </div>

        {/* Grid de testimonios con videos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="testimonio-card bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-400/30 transition-all duration-1000 hover:transform hover:scale-[1.02] group"
            >
              {/* Video testimonial */}
              <div
                className="relative h-64 overflow-hidden"
                onMouseEnter={() => handleMouseEnter(testimonio.id)}
                onMouseLeave={() => handleMouseLeave(testimonio.id)}
              >
                <video
                  data-hover-video={testimonio.id}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  controls={hoveredVideo !== testimonio.id}
                  poster={testimonio.imagen}
                  preload="metadata"
                  muted={hoveredVideo === testimonio.id}
                  loop={hoveredVideo === testimonio.id}
                >
                  <source src={testimonio.video} type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>

                {/* Overlay con info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <h3 className="text-white text-lg font-bold mb-1">{testimonio.nombre}</h3>
                  <p className="text-emerald-400 text-sm font-medium">{testimonio.proyecto}</p>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="text-emerald-400 opacity-50" size={24} />
                </div>

                {/* Testimonio */}
                <p className="text-white/90 text-sm leading-relaxed mb-6">"{testimonio.testimonio}"</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>

                {/* Info adicional */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 text-xs">{testimonio.fecha}</p>
                  </div>
                  <div className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full text-xs">
                    Cliente Verificado
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-white/70">Familias Felices</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">4.9</div>
            <div className="text-white/70">Rating Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
            <div className="text-white/70">Satisfacción</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">15</div>
            <div className="text-white/70">Proyectos Entregados</div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">¿Quieres ser parte de nuestras historias de éxito?</h3>
          <p className="text-white/70 mb-8 text-lg max-w-2xl mx-auto">
            Únete a las más de 500 familias que ya viven el sueño BlackHouse. Tu historia de éxito comienza aquí.
          </p>
          <button
            onClick={contactarWhatsApp}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-500 text-lg"
          >
            Agenda tu cita ahora
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestimoniosSection
