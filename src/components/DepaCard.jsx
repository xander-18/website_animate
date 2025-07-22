"use client"
import { useState } from "react"
import { Eye, Star, MapPin, Ruler, Pause, Play } from "lucide-react"

const DepaCard = ({ depa, isVideoPlaying, handleVideoToggle, onVerProyecto }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="w-full max-w-sm mx-auto depa-card bg-gradient-to-b from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
      {/* Imagen o video - TAMAÑO INTERMEDIO PARA MEJOR VISUALIZACIÓN */}
      <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden">
        {isVideoPlaying[depa.id] ? (
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline data-video-id={depa.id}>
            <source src={depa.video3d} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        ) : !imageError ? (
          <img
            src={depa.imagenes[0] || "/placeholder.svg?height=350&width=450"}
            alt={depa.nombre}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-white/50 text-sm">Imagen no disponible</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* Estado del proyecto - TAMAÑO MODERADO */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
          <span
            className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              depa.destacado ? "bg-emerald-400 text-black" : "bg-white/20 text-white backdrop-blur-sm"
            }`}
          >
            {depa.estado}
          </span>
        </div>

        {/* Destacado - TAMAÑO MODERADO */}
        {depa.destacado && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-current transition-transform duration-300 hover:scale-110" />
          </div>
        )}

        {/* Controles de video - TAMAÑO MODERADO */}
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex gap-2">
          <button
            onClick={() => handleVideoToggle(depa.id)}
            className="bg-black/50 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-105"
          >
            {isVideoPlaying[depa.id] ? (
              <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
            ) : (
              <Play className="w-3 h-3 sm:w-4 sm:h-4" />
            )}
          </button>
        </div>

        {/* Info overlay - TAMAÑO MODERADO */}
        <div className="absolute bottom-2 left-2 right-16 sm:bottom-3 sm:left-3 sm:right-20">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 transition-all duration-300 line-clamp-1">
            {depa.nombre}
          </h3>
          <p className="text-emerald-400 text-xs sm:text-sm font-semibold transition-all duration-300">{depa.tipo}</p>
        </div>
      </div>

      {/* Información del proyecto - ESPACIADO MODERADO */}
      <div className="p-3 sm:p-4 lg:p-5">
        {/* Ubicación y área en la misma línea, área alineada a la derecha */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
            <span className="text-white/80 text-xs sm:text-sm truncate">{depa.ubicacion}</span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
            <span className="text-white font-bold text-xs sm:text-sm">{depa.area}</span>
            <span className="text-white/60 text-xs leading-tight">Área</span>
          </div>
        </div>

        {/* Precio - TAMAÑO MODERADO */}
        <div className="mb-4 sm:mb-5">
          {depa.precio === "Agotado" ? (
            <div className="flex justify-center items-center">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-red-500 text-center block">
                {depa.precio}
              </span>
            </div>
          ) : (
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-400 block">{depa.precio}</span>
                <span className="text-white/60 text-xs sm:text-sm">{depa.precioM2}</span>
              </div>
              {/* Mostrar entrega y financiamiento solo si existe entrega */}
              {depa.entrega && (
                <div className="text-right flex-shrink-0">
                  <div className="text-white/80 text-xs sm:text-sm">Entrega: {depa.entrega}</div>
                  <div className="text-emerald-400 text-xs">{depa.financiamiento}</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Botón de acción - TAMAÑO MODERADO */}
        <div className="flex gap-3">
          <button
            onClick={onVerProyecto}
            className="flex-1 bg-white/10 border border-white/20 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">Ver proyecto</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DepaCard
