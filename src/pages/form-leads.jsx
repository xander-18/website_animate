import { useState, useEffect, useRef } from "react"
import { ArrowLeft, User, Phone, FileText, CheckCircle, ArrowRight } from 'lucide-react'

// Importar las imágenes (usando placeholders para el ejemplo)
const Luna = "https://images.unsplash.com/photo-1494790108755-2616b332446c?w=400&h=400&fit=crop&crop=face"
const Jonel = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
const jason = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
const isaias = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"

const FormularioAsesores = () => {
  const [step, setStep] = useState(1) // 1: Selección, 2: Formulario
  const [selectedAsesor, setSelectedAsesor] = useState(null)
  const [formData, setFormData] = useState({
    dni: '',
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const containerRef = useRef(null)

  // Datos de asesores simplificados
  const asesores = [
    {
      id: 1,
      nombre: "Jonel Casio",
      imagen: Jonel,
      especialidad: "Lotes y Departamentos"
    },
    {
      id: 2,
      nombre: "Carolina Rivera",
      imagen: Luna,
      especialidad: "Proyectos Premium"
    },
    {
      id: 3,
      nombre: "Jason Arce",
      imagen: jason,
      especialidad: "Inversiones"
    },
    {
      id: 4,
      nombre: "Isaías",
      imagen: isaias,
      especialidad: "Asesoría General"
    }
  ]

  const handleAsesorSelect = (asesor) => {
    setSelectedAsesor(asesor)
    setStep(2)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Aquí iría la lógica para enviar los datos
    console.log('Datos del formulario:', {
      asesor: selectedAsesor,
      cliente: formData
    })
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Resetear después de 3 segundos
    setTimeout(() => {
      setIsSuccess(false)
      setStep(1)
      setSelectedAsesor(null)
      setFormData({
        dni: '',
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        mensaje: ''
      })
    }, 3000)
  }

  const isFormValid = formData.dni && formData.nombre && formData.apellido && formData.telefono

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center p-4">
        <div className="text-center">
          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">¡Formulario Enviado!</h2>
            <p className="text-white/70 text-lg">
              {selectedAsesor.nombre} se contactará contigo pronto
            </p>
          </div>
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-4 max-w-md">
            <p className="text-emerald-400 text-sm">
              Recibirás una confirmación en tu WhatsApp/Email
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors duration-300"
            >
              <ArrowLeft size={18} />
              <span className="font-medium text-sm sm:text-base">Volver</span>
            </button>
          )}
          <h1 className="text-white text-lg sm:text-xl font-bold">
            {step === 1 ? 'Selecciona tu Asesor' : 'Completa tus Datos'}
          </h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {step === 1 ? (
          // STEP 1: Selección de Asesor
          <div>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Elige tu
                <span className="block text-emerald-400 text-2xl sm:text-3xl md:text-4xl font-light mt-2">
                  asesor ideal
                </span>
              </h2>
              <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
                Selecciona al asesor que mejor se adapte a tus necesidades
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {asesores.map((asesor) => (
                <div
                  key={asesor.id}
                  onClick={() => handleAsesorSelect(asesor)}
                  className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-400/50 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={asesor.imagen}
                      alt={asesor.nombre}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-lg font-bold mb-1">{asesor.nombre}</h3>
                      <p className="text-emerald-400 text-sm">{asesor.especialidad}</p>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <button className="bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
                      Seleccionar
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // STEP 2: Formulario
          <div>
            {/* Asesor seleccionado */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-xl p-4 sm:p-6 mb-8">
              <div className="flex items-center gap-4">
                <img
                  src={selectedAsesor.imagen}
                  alt={selectedAsesor.nombre}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-emerald-400"
                />
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-bold">
                    Asesor: {selectedAsesor.nombre}
                  </h3>
                  <p className="text-emerald-400 text-sm sm:text-base">
                    {selectedAsesor.especialidad}
                  </p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                Completa tus datos de contacto
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* DNI */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    DNI <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
                    <input
                      type="text"
                      name="dni"
                      value={formData.dni}
                      onChange={handleInputChange}
                      placeholder="Ingresa tu DNI"
                      className="w-full bg-black/50 border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/50 focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Nombre y Apellido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Nombre <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        className="w-full bg-black/50 border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/50 focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Apellido <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
                      <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                        placeholder="Tu apellido"
                        className="w-full bg-black/50 border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/50 focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Teléfono <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="Ej: 999 888 777"
                      className="w-full bg-black/50 border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/50 focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Email (opcional) */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email <span className="text-white/50">(opcional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Mensaje (opcional) */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Mensaje <span className="text-white/50">(opcional)</span>
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu interés en nuestros proyectos..."
                    rows={4}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-emerald-400 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isFormValid && !isSubmitting
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white transform hover:scale-105'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Enviando...
                    </div>
                  ) : (
                    `Contactar a ${selectedAsesor.nombre}`
                  )}
                </button>
             / </form>

              <p className="text-white/60 text-sm text-center mt-4">
                * Campos obligatorios
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FormularioAsesores