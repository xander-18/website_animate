"use client"

import { useEffect, useState } from "react"
import gsap from "gsap"
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Square,
  Bed,
  Bath,
  Download,
  Mail,
  Clock,
  Building,
  TreePine,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import img from "../assets/img/logos-blackhouse/360.webp"
import plano1 from "../assets/img/logos-blackhouse/plano1.webp"
import estudio1 from "../assets/img/logos-blackhouse/proyectovalle.jpg"
import { FaWhatsapp } from "react-icons/fa"

const DetalleProyecto = ({
  proyecto,
  volverAlHome,
  handleSubmit,
  currentImageGallery,
  setCurrentImageGallery,
  selectedPlano,
  setSelectedPlano,
  detalleRef,
}) => {
  // Estado para el carrusel de imágenes del lifestyle
  const [currentLifestyleImage, setCurrentLifestyleImage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Animaciones de entrada cuando se monta el componente
  useEffect(() => {
    if (detalleRef.current) {
      gsap.fromTo(detalleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
    }
  }, [detalleRef])

  // Auto-cambio de imágenes del lifestyle
  useEffect(() => {
    if (!proyecto?.imagenes || proyecto.imagenes.length <= 1) return

    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentLifestyleImage((prev) => (prev === proyecto.imagenes.length - 1 ? 0 : prev + 1))
        setIsTransitioning(false)
      }, 500) // Cambiar de 300 a 500
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(interval)
  }, [proyecto?.imagenes])

  // Función para cambiar imagen manualmente
  const changeLifestyleImage = (direction) => {
    if (isTransitioning) return

    setIsTransitioning(true)

    setTimeout(() => {
      if (direction === "next") {
        setCurrentLifestyleImage((prev) => (prev === proyecto.imagenes.length - 1 ? 0 : prev + 1))
      } else {
        setCurrentLifestyleImage((prev) => (prev === 0 ? proyecto.imagenes.length - 1 : prev - 1))
      }
      setIsTransitioning(false)
    }, 500) // Cambiar de 300 a 500
  }

  if (!proyecto) return null

  return (
    <div ref={detalleRef} className="min-h-screen bg-black">
      {/* NAVBAR FIJO PARA VISTA DETALLE - MEJORADO RESPONSIVE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-emerald-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={volverAlHome}
            className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">Volver</span>
          </button>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-emerald-400 font-bold text-sm sm:text-lg truncate max-w-32 sm:max-w-none">
              {proyecto.nombre}
            </span>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-black font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Brochure</span>
              <span className="sm:hidden">PDF</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - MEJORADO RESPONSIVE */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        <div className="absolute inset-0">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src={proyecto.video3d} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Información principal - MEJORADO RESPONSIVE */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-emerald-400/20 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
                <span className="text-emerald-400 font-semibold text-xs sm:text-sm">{proyecto.estado}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-wider leading-tight">
                {proyecto.nombre}
              </h1>
              <p className="text-emerald-400 text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{proyecto.tipo}</p>
              <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {proyecto.descripcion}
              </p>
              {/* Grid de especificaciones - MEJORADO RESPONSIVE */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-xs block">Ubicación</span>
                  <span className="text-white font-semibold text-xs sm:text-sm">{proyecto.ubicacion}</span>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <Square className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-xs block">Área</span>
                  <span className="text-white font-semibold text-xs sm:text-sm">{proyecto.area}</span>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-xs block">8 DEPARTAMENTOS DISPONIBLES</span>
                  <span className="text-white font-semibold text-xs sm:text-sm">{proyecto.dormitorios}</span>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-xs block">Desde</span>
                  <span className="text-white font-semibold text-xs sm:text-sm">{proyecto.precio}</span>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto mx-auto lg:mx-0"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Contactar Ahora</span>
              </button>
            </div>
            {/* Amenidades - MEJORADO RESPONSIVE */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mt-8 lg:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">ÁREAS COMUNES</h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {proyecto.amenidades.map((amenidad, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/50 transition-all duration-300"
                  >
                    <amenidad.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white text-sm">{amenidad.nombre}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISTA PANORÁMICA SECTION - MEJORADO RESPONSIVE */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8 sm:mb-12">
            <img src={img || "/placeholder.svg"} alt="Vista panorámica" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-400/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Vista Panorámica {proyecto.nombre}</h3>
                <p className="text-white/70 text-sm sm:text-base">Experimenta las vistas desde tu futuro hogar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS Y TIPOLOGÍAS - MEJORADO RESPONSIVE */}
      <section className="py-12 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
              PLANOS
              <span className="block text-emerald-400 text-xl sm:text-2xl md:text-3xl font-light mt-2">
                Tipologías disponibles
              </span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Plano actual - MEJORADO RESPONSIVE */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{proyecto.planos[selectedPlano].tipo}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedPlano(selectedPlano > 0 ? selectedPlano - 1 : proyecto.planos.length - 1)}
                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedPlano(selectedPlano < proyecto.planos.length - 1 ? selectedPlano + 1 : 0)}
                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
              <div className="relative mb-4 sm:mb-6">
                <img
                  src={plano1 || "/placeholder.svg"}
                  alt={`Plano ${proyecto.planos[selectedPlano].tipo}`}
                  className="w-full h-64 sm:h-80 object-contain bg-white/5 rounded-xl"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-center bg-black/30 p-3 sm:p-4 rounded-xl">
                  <Square className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-xs block">ÁREA</span>
                  <span className="text-white font-bold text-sm">{proyecto.planos[selectedPlano].area}</span>
                </div>
                <div className="text-center bg-black/30 p-3 sm:p-4 rounded-xl">
                  <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-xs block">DORMITORIOS</span>
                  <span className="text-white font-bold text-sm">{proyecto.planos[selectedPlano].dormitorios}</span>
                </div>
                <div className="text-center bg-black/30 p-3 sm:p-4 rounded-xl">
                  <Bath className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-xs block">BAÑOS</span>
                  <span className="text-white font-bold text-sm">{proyecto.planos[selectedPlano].baños}</span>
                </div>
              </div>
              {/* Selector de planos - MEJORADO RESPONSIVE */}
              <div className="flex flex-col sm:flex-row gap-2">
                {proyecto.planos.map((plano, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPlano(index)}
                    className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      index === selectedPlano ? "bg-emerald-400 text-black" : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {plano.tipo}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN Y MAPA - MEJORADO RESPONSIVE */}
      <section className="py-12 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
              UBICACIÓN
              <span className="block text-emerald-400 text-xl sm:text-2xl md:text-3xl font-light mt-2">
                Sala de ventas
              </span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Información de ubicación - MEJORADO RESPONSIVE */}
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-white/70 text-sm block">Sala de ventas:</span>
                      <span className="text-white font-semibold text-sm sm:text-base">
                        {proyecto.salaVentas.direccion}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-white/70 text-sm block">Horarios:</span>
                      <span className="text-white font-semibold block text-sm sm:text-base">
                        L-V: {proyecto.salaVentas.horarios.lunes_viernes}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-white/70 text-sm block">Email:</span>
                      <span className="text-white font-semibold text-sm sm:text-base">{proyecto.salaVentas.email}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center bg-emerald-400/10 p-4 sm:p-6 rounded-xl border border-emerald-400/20">
                  <Building className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-sm block">Servicios</span>
                  <span className="text-white font-semibold text-sm">Cerca del proyecto</span>
                </div>
                <div className="text-center bg-emerald-400/10 p-4 sm:p-6 rounded-xl border border-emerald-400/20">
                  <TreePine className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-sm block">Parques</span>
                </div>
              </div>
            </div>
            {/* Mapa - MEJORADO RESPONSIVE */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-800 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0927456784216!2d-76.235886!3d-9.9262337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c302c999af73%3A0xceac9a3797efef97!2sJir%C3%B3n%20Pedro%20Puelles%20682%2C%20Hu%C3%A1nuco%2010001!5e0!3m2!1ses-419!2spe!4v1751737066522!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-emerald-400 text-black px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold text-sm">
                    {proyecto.nombre}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE SECTION CON CARRUSEL AUTOMÁTICO - MEJORADO RESPONSIVE */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1 group">
              {/* Contenedor de imagen con transición */}
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src={proyecto.imagenes?.[currentLifestyleImage] || estudio1 || "/placeholder.svg"}
                  alt={`Lifestyle ${currentLifestyleImage + 1}`}
                  className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                    isTransitioning ? "opacity-0 scale-102" : "opacity-100 scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

                {/* Controles de navegación manual (opcionales) */}
                {proyecto.imagenes && proyecto.imagenes.length > 1 && (
                  <>
                    <button
                      onClick={() => changeLifestyleImage("prev")}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => changeLifestyleImage("next")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Indicadores de imagen */}
                {proyecto.imagenes && proyecto.imagenes.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {proyecto.imagenes.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (!isTransitioning) {
                            setIsTransitioning(true)
                            setTimeout(() => {
                              setCurrentLifestyleImage(index)
                              setIsTransitioning(false)
                            }, 500) // Cambiar de 300 a 500
                          }
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentLifestyleImage ? "bg-emerald-400 w-6" : "bg-white/50 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                {proyecto.nombre}
                <span className="block text-emerald-400 text-xl sm:text-2xl font-light mt-2">
                  Estilo de vida premium
                </span>
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                En {proyecto.nombre} encontrarás el balance perfecto en un entorno urbano y natural. Una ubicación
                estratégica y un diseño excepcional se conjugan en un espacio que te conecta con tu esencia. Vive frente
                al futuro y eleva tu forma de disfrutar la ciudad.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {proyecto.caracteristicas.slice(0, 4).map((caracteristica, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/10 rounded-xl">
                    <caracteristica.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-white text-sm">{caracteristica.texto}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DetalleProyecto
