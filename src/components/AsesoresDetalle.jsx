"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Phone, Star, MessageCircle, Video, X, ArrowLeft, Play, Clock } from 'lucide-react'
import Luna from "../assets/img/logos-blackhouse/Luna.png"
import Jonel from "../assets/img/logos-blackhouse/jonel.png"
import jason from "../assets/img/logos-blackhouse/jason.png"
import isaias from "../assets/img/logos-blackhouse/Isa.png"

const AsesoresDetalle = ({ onVolver }) => {
  const detalleRef = useRef(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [selectedAsesor, setSelectedAsesor] = useState(null)
  const [hoveredVideo, setHoveredVideo] = useState(null)
  const [playingVideos, setPlayingVideos] = useState({})

  // Datos simplificados y más visuales
  const asesoresDetallados = [
    {
      id: 1,
      nombre: "Jonel Casio",
      cargo: "Asesor Inmobiliario Senior",
      especialidad: "Lotes y Depas",
      experiencia: "4 años",
      ventasRealizadas: "300+",
      rating: 5.0,
      whatsapp: "51999333444",
      imagen: Jonel,
      videoIntro: "https://res.cloudinary.com/dourqe39h/video/upload/v1751584424/onevideo_1_dcpgmn.mp4",
      descripcionCorta:
        "Director comercial con 12 años liderando proyectos inmobiliarios de gran escala y inversiones estratégicas.",
      logrosDestacados: ["Director del Año 2023", "300+ ventas realizadas", "Experto en Inversiones"],
      horarios: "Lun-Vie: 9AM-1PM | Previa Cita",
      proyectos: ["HIRAKI PENTHOUSE", "HALIT SMART"],
    },
    {
      id: 2,
      nombre: "Carolina Rivera",
      cargo: "Asesora Inmobiliaria",
      especialidad: "Lotes y Depas",
      experiencia: "4 años",
      ventasRealizadas: "150+",
      rating: 5,
      whatsapp: "51910191226",
      imagen: Luna,
      videoIntro: "https://res.cloudinary.com/dourqe39h/video/upload/v1751584424/onevideo_1_dcpgmn.mp4",
      descripcionCorta:
        "Especialista en proyectos de lujo con 8 años de experiencia. Experta en encontrar el hogar perfecto para cada cliente.",
      logrosDestacados: ["Top Seller 2023", "150+ ventas exitosas", "Especialista en Premium"],
      horarios: "Lun-Vie: 9AM-1PM | Previa Cita",
      proyectos: ["HIRAKI PENTHOUSE", "HUERTAS DEL VALLE"],
    },
    {
      id: 3,
      nombre: "Jason Arce",
      cargo: "Asesor Inmobiliario Senior",
      especialidad: "Lotes y Depas",
      experiencia: "4 años",
      ventasRealizadas: "150+",
      rating: 5,
      whatsapp: "51910191226",
      imagen: jason,
      videoIntro: "https://res.cloudinary.com/dourqe39h/video/upload/v1751584424/onevideo_1_dcpgmn.mp4",
      descripcionCorta:
        "Especialista en proyectos de lujo con 8 años de experiencia. Experta en encontrar el hogar perfecto para cada cliente.",
      logrosDestacados: ["Top Seller 2023", "150+ ventas exitosas", "Especialista en Premium"],
      horarios: "Lun-Vie: 9AM-1PM | Previa Cita",
      proyectos: ["HIRAKI PENTHOUSE", "HUERTAS DEL VALLE"],
    },
    {
      id: 4,
      nombre: "Isaias",
      cargo: "Asesor Inmobiliario",
      especialidad: "Lotes y Depas",
      experiencia: "4 años",
      ventasRealizadas: "150+",
      rating: 5,
      whatsapp: "51910191226",
      imagen: isaias,
      videoIntro: "https://res.cloudinary.com/dourqe39h/video/upload/v1751584424/onevideo_1_dcpgmn.mp4",
      descripcionCorta:
        "Especialista en proyectos de lujo con 8 años de experiencia. Experta en encontrar el hogar perfecto para cada cliente.",
      logrosDestacados: ["Top Seller 2023", "150+ ventas exitosas", "Especialista en Premium"],
      horarios: "Lun-Vie: 9AM-1PM | Previa Cita",
      proyectos: ["HIRAKI PENTHOUSE", "HUERTAS DEL VALLE"],
    },
  ]

  useEffect(() => {
    gsap.fromTo(detalleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
    gsap.fromTo(
      ".asesor-card",
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power1.out",
        delay: 0.3,
      },
    )
  }, [])

  const handleMouseEnter = (asesorId) => {
    setHoveredVideo(asesorId)
    const videoElement = document.querySelector(`[data-hover-video="${asesorId}"]`)
    if (videoElement) {
      videoElement.play().catch(console.error)
      setPlayingVideos((prev) => ({ ...prev, [asesorId]: true }))
    }
  }

  const handleMouseLeave = (asesorId) => {
    setHoveredVideo(null)
    const videoElement = document.querySelector(`[data-hover-video="${asesorId}"]`)
    if (videoElement) {
      videoElement.pause()
      videoElement.currentTime = 0 // Reiniciar el video
      setPlayingVideos((prev) => ({ ...prev, [asesorId]: false }))
    }
  }

  const openVideoModal = (asesor) => {
    setSelectedAsesor(asesor)
    setShowVideoModal(true)
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
    setSelectedAsesor(null)
    const modalVideo = document.querySelector(".modal-video")
    if (modalVideo) {
      modalVideo.pause()
    }
  }

  const contactarAsesor = (asesor, metodo = "whatsapp") => {
    let url = ""
    const mensaje = `Hola ${asesor.nombre}, me interesa conocer más sobre los proyectos BlackHouse. ¿Podrías brindarme asesoría personalizada?`

    switch (metodo) {
      case "whatsapp":
        url = `https://wa.me/${asesor.whatsapp}?text=${encodeURIComponent(mensaje)}`
        break
      case "telefono":
        url = `tel:${asesor.telefono}`
        break
    }

    if (url) {
      window.open(url, "_blank")
    }
  }

  return (
    <div ref={detalleRef} className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header - MEJORADO RESPONSIVE */}
      <div className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <button
            onClick={onVolver}
            className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors duration-300"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            <span className="font-medium text-sm sm:text-base">Volver</span>
          </button>
          <h1 className="text-white text-lg sm:text-xl font-bold">Nuestros Asesores</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Título - MEJORADO RESPONSIVE */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
            CONOCE A TU
            <span className="block text-emerald-400 text-2xl sm:text-3xl md:text-4xl font-light mt-2">
              asesor ideal
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto px-4">
            Pasa el cursor sobre su foto para ver su presentación, o haz clic para verlo en pantalla completa
          </p>
        </div>

        {/* Grid de asesores - MEJORADO RESPONSIVE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {asesoresDetallados.map((asesor) => (
            <div
              key={asesor.id}
              className="asesor-card bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-400/30 transition-all duration-1000 group"
            >
              {/* Video Preview con Hover - MEJORADO RESPONSIVE */}
              <div
                className="relative h-64 sm:h-72 lg:h-80 overflow-hidden cursor-pointer"
                onMouseEnter={() => handleMouseEnter(asesor.id)}
                onMouseLeave={() => handleMouseLeave(asesor.id)}
              >
                {/* Imagen estática */}
                <img
                  src={asesor.imagen || "/placeholder.svg"}
                  alt={asesor.nombre}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredVideo === asesor.id ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Video que aparece en hover */}
                <video
                  data-hover-video={asesor.id}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    hoveredVideo === asesor.id ? "opacity-100" : "opacity-0"
                  }`}
                  muted
                  loop
                  playsInline
                >
                  <source src={asesor.videoIntro} type="video/mp4" />
                </video>

                {/* Overlay con controles - MEJORADO RESPONSIVE */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {hoveredVideo === asesor.id ? (
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => openVideoModal(asesor)}
                        className="bg-emerald-500 text-white p-2 sm:p-3 rounded-full hover:bg-emerald-600 transition-colors duration-300"
                      >
                        <Video size={16} className="sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center px-4">
                      <div className="bg-emerald-500 text-white p-3 sm:p-4 rounded-full mb-2 mx-auto w-fit">
                        <Play size={24} className="sm:w-8 sm:h-8" fill="white" />
                      </div>
                      <p className="text-white text-xs sm:text-sm">Pasa el cursor para ver el video</p>
                    </div>
                  )}
                </div>

                {/* Rating flotante - MEJORADO RESPONSIVE */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1 flex items-center gap-1">
                  <Star className="text-yellow-400 fill-yellow-400 w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-white font-semibold text-xs sm:text-sm">{asesor.rating}</span>
                </div>

                {/* Botón para pantalla completa - MEJORADO RESPONSIVE */}
                <button
                  onClick={() => openVideoModal(asesor)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-500/90 hover:bg-emerald-600 text-white p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
                >
                  <Video size={14} className="sm:w-4 sm:h-4" />
                </button>

                {/* Info overlay - MEJORADO RESPONSIVE */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1">{asesor.nombre}</h3>
                  <p className="text-emerald-400 font-medium mb-1 text-sm sm:text-base">{asesor.cargo}</p>
                  <p className="text-white/80 text-xs sm:text-sm">{asesor.especialidad}</p>
                </div>
              </div>

              {/* Info compacta - MEJORADO RESPONSIVE */}
              <div className="p-4 sm:p-6">
                {/* Stats rápidas - MEJORADO RESPONSIVE */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-emerald-400 text-base sm:text-lg font-bold">{asesor.experiencia}</div>
                    <div className="text-white/60 text-xs">Experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-emerald-400 text-base sm:text-lg font-bold">{asesor.ventasRealizadas}</div>
                    <div className="text-white/60 text-xs">Ventas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-emerald-400 text-base sm:text-lg font-bold">{asesor.rating}</div>
                    <div className="text-white/60 text-xs">Rating</div>
                  </div>
                </div>

                {/* Descripción corta - MEJORADO RESPONSIVE */}
                <p className="text-white/80 text-xs sm:text-sm mb-4 leading-relaxed">{asesor.descripcionCorta}</p>

                {/* Logros destacados - MEJORADO RESPONSIVE */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {asesor.logrosDestacados.map((logro, index) => (
                      <span
                        key={index}
                        className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full text-xs"
                      >
                        {logro}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Horarios - MEJORADO RESPONSIVE */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                    <Clock size={12} className="sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{asesor.horarios}</span>
                  </div>
                </div>

                {/* Botones de contacto - MEJORADO RESPONSIVE */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      onClick={() => contactarAsesor(asesor, "whatsapp")}
                      className="bg-green-600 hover:bg-green-700 text-white py-2 sm:py-2.5 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium"
                    >
                      <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                      WhatsApp
                    </button>
                    <button
                      onClick={() => contactarAsesor(asesor, "telefono")}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-2.5 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium"
                    >
                      <Phone size={14} className="sm:w-4 sm:h-4" />
                      Llamar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final - MEJORADO RESPONSIVE */}
        <div className="text-center">
          <p className="text-white/70 mb-4 sm:mb-6 text-base sm:text-lg px-4">
            ¿Listo para encontrar tu hogar ideal?
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-500 text-sm sm:text-base">
            Contactar Equipo de Ventas
          </button>
        </div>
      </div>

      {/* Modal de video - MEJORADO RESPONSIVE */}
      {showVideoModal && selectedAsesor && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeVideoModal}
              className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-emerald-400 transition-colors duration-300"
            >
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>

            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
              {/* Header simple - MEJORADO RESPONSIVE */}
              <div className="p-4 sm:p-6 border-b border-white/10 text-center">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">{selectedAsesor.nombre}</h3>
                <p className="text-emerald-400 font-medium text-sm sm:text-base">{selectedAsesor.cargo}</p>
              </div>

              {/* Video principal - MEJORADO RESPONSIVE */}
              <div className="relative">
                <video
                  className="modal-video w-full h-48 sm:h-64 md:h-96 object-cover"
                  controls
                  autoPlay
                  muted
                >
                  <source src={selectedAsesor.videoIntro} type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
              </div>

              {/* Footer con contacto directo - MEJORADO RESPONSIVE */}
              <div className="p-4 sm:p-6">
                <p className="text-white/80 mb-4 sm:mb-6 text-center text-sm sm:text-base">
                  {selectedAsesor.descripcionCorta}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <button
                    onClick={() => {
                      closeVideoModal()
                      contactarAsesor(selectedAsesor, "whatsapp")
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
                  >
                    <MessageCircle size={16} className="sm:w-5 sm:h-5" />
                    Contactar por WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      closeVideoModal()
                      contactarAsesor(selectedAsesor, "telefono")
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
                  >
                    <Phone size={16} className="sm:w-5 sm:h-5" />
                    Llamar Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AsesoresDetalle
