"use client"

import { Calendar, Phone, Mail, User, Users } from "lucide-react"

const AgendarForm = ({ clientInfo, handleInputChange, handleSubmit, selectedAsesor, agendarRef }) => (
  <section
    ref={agendarRef}
    className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 flex items-center"
  >
    <div className="max-w-3xl mx-auto w-full">
      {/* Título - MEJORADO RESPONSIVE */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16 tracking-wider">
        AGENDA TU CITA
      </h2>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
        <div className="space-y-4 sm:space-y-6">
          {/* Campo Nombre - MEJORADO RESPONSIVE */}
          <div>
            <label className="block text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3 flex items-center gap-2">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              Nombre completo
            </label>
            <input
              type="text"
              value={clientInfo.nombre}
              onChange={(e) => handleInputChange("nombre", e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 transition-all duration-1000 text-sm sm:text-base"
              placeholder="Tu nombre completo"
            />
          </div>

          {/* Campo Teléfono - MEJORADO RESPONSIVE */}
          <div>
            <label className="block text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              Teléfono
            </label>
            <input
              type="tel"
              value={clientInfo.telefono}
              onChange={(e) => handleInputChange("telefono", e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 transition-all duration-1000 text-sm sm:text-base"
              placeholder="+51 999 999 999"
            />
          </div>

          {/* Campo Email - MEJORADO RESPONSIVE */}
          <div>
            <label className="block text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              Email
            </label>
            <input
              type="email"
              value={clientInfo.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 transition-all duration-1000 text-sm sm:text-base"
              placeholder="tu@email.com"
            />
          </div>

          {/* Mostrar asesor seleccionado - MEJORADO RESPONSIVE */}
          {selectedAsesor ? (
            <div className="bg-emerald-400/20 rounded-lg p-3 sm:p-4 border border-emerald-400/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={selectedAsesor.foto || "/placeholder.svg"}
                    alt={selectedAsesor.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-emerald-400 font-semibold text-sm sm:text-base">
                    Asesor seleccionado: {selectedAsesor.nombre}
                  </p>
                  <p className="text-emerald-300 text-xs sm:text-sm">{selectedAsesor.cargo}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-yellow-400/20 rounded-lg p-3 sm:p-4 border border-yellow-400/30">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <p className="text-yellow-400 font-semibold text-sm sm:text-base">
                  Selecciona un asesor en la sección anterior para continuar
                </p>
              </div>
            </div>
          )}

          {/* Botón de envío - MEJORADO RESPONSIVE */}
          <button
            onClick={handleSubmit}
            disabled={!clientInfo.nombre || !clientInfo.telefono || !selectedAsesor}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-xl transition-all duration-1000 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-center">
              {!selectedAsesor
                ? "Selecciona un asesor primero"
                : !clientInfo.nombre || !clientInfo.telefono
                  ? "Completa tus datos"
                  : "AGENDAR CITA VIA WHATSAPP"}
            </span>
          </button>

          {/* Texto informativo - MEJORADO RESPONSIVE */}
          <p className="text-white/60 text-center text-xs sm:text-sm">
            Te contactaremos en menos de 2 horas para coordinar tu visita
          </p>

          {/* Información adicional del asesor seleccionado - NUEVO */}
          {selectedAsesor && (
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Tu asesor {selectedAsesor.nombre}:</h4>
              <div className="space-y-1 text-xs sm:text-sm text-white/80">
                <p>• Especialidad: {selectedAsesor.especialidad}</p>
                <p>• Experiencia: {selectedAsesor.experiencia}</p>
                <p>• Rating: ⭐ {selectedAsesor.rating}/5.0</p>
                {selectedAsesor.horarios && <p>• Horarios: {selectedAsesor.horarios}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
)

export default AgendarForm
