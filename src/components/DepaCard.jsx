"use client"

import { useState } from "react"
import { Eye, Star, MapPin, Bed, Bath, Ruler, Pause, Play } from "lucide-react"

const DepaCard = ({
  depa,
  isVideoPlaying,
  handleVideoToggle,
  onVerProyecto,
}) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="depa-card bg-gradient-to-b from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
      {/* Imagen principal con overlay de estado */}
      <div className="relative h-64 overflow-hidden">
        {!imageError ? (
          <img
            src={depa.imagenes[0] || "/placeholder.svg?height=300&width=400"}
            alt={depa.nombre}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-white/50">Imagen no disponible</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* Estado del proyecto */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
              depa.destacado ? "bg-emerald-400 text-black" : "bg-white/20 text-white backdrop-blur-sm"
            }`}
          >
            {depa.estado}
          </span>
        </div>

        {/* Destacado */}
        {depa.destacado && (
          <div className="absolute top-4 right-4">
            <Star className="w-6 h-6 text-amber-400 fill-current transition-transform duration-300 hover:scale-110" />
          </div>
        )}

        {/* Controles de video */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={() => handleVideoToggle(depa.id)}
            className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-105"
          >
            {isVideoPlaying[depa.id] ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        {/* Info overlay */}
        <div className="absolute bottom-4 left-4 right-20">
          <h3 className="text-xl font-bold text-white mb-1 transition-all duration-300">{depa.nombre}</h3>
          <p className="text-emerald-400 text-sm font-semibold transition-all duration-300">{depa.tipo}</p>
        </div>
      </div>

      {/* Información del proyecto */}
      <div className="p-6">
        {/* Ubicación */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-white/80 text-sm transition-colors duration-300">{depa.ubicacion}</span>
        </div>

        {/* Especificaciones principales */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Bed className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-bold">{depa.dormitorios}</span>
            </div>
            <span className="text-white/60 text-xs">Dormitorios</span>
          </div>
          <div className="text-center transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Bath className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-bold">{depa.baños}</span>
            </div>
            <span className="text-white/60 text-xs">Baños</span>
          </div>
          <div className="text-center transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Ruler className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-bold">{depa.area}</span>
            </div>
            <span className="text-white/60 text-xs">Área</span>
          </div>
        </div>

        {/* Precio */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-emerald-400 transition-all duration-300">{depa.precio}</span>
              <span className="text-white/60 text-sm ml-2 transition-colors duration-300">{depa.precioM2}</span>
            </div>
            <div className="text-right">
              <div className="text-white/80 text-sm transition-colors duration-300">Entrega: {depa.entrega}</div>
              <div className="text-emerald-400 text-xs transition-colors duration-300">{depa.financiamiento}</div>
            </div>
          </div>
        </div>

        {/* Botón de acción */}
        <div className="flex gap-3">
          <button
            onClick={onVerProyecto}
            className="flex-1 bg-white/10 border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4 transition-transform duration-300" />
            <span className="text-sm">Ver proyecto</span>
          </button>
        </div>

        {/* Video 3D expandible */}
        {isVideoPlaying[depa.id] && (
          <div className="mt-6 relative h-48 rounded-lg overflow-hidden animate-in fade-in duration-300">
            <video data-video-id={depa.id} className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src={depa.video3d} type="video/mp4" />
            </video>
            <button
              onClick={() => handleVideoToggle(depa.id)}
              className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded transition-all duration-300 hover:bg-black/70 hover:scale-105"
            >
              <Pause className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DepaCard