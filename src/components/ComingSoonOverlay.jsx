"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ArrowLeft, Mail, Phone, User, Calendar, X, Sparkles, Gift } from "lucide-react"

const ComingSoonOverlay = ({ onComplete }) => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const subtitleRef = useRef(null)
  const backButtonRef = useRef(null)
  const floatingButtonRef = useRef(null)
  const modalRef = useRef(null)

  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    dni: "",
    phone: "",
    timeframe: "",
    comments: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline()

    // Dividir el texto en letras individuales
    const mainText = textRef.current
    const subtitle = subtitleRef.current

    if (mainText) {
      const letters = mainText.textContent.split("")
      mainText.innerHTML = letters
        .map((letter) =>
          letter === " " ? '<span class="letter">&nbsp;</span>' : `<span class="letter">${letter}</span>`,
        )
        .join("")
    }

    // Animación cinematográfica
    tl.set(".letter", { opacity: 0, y: 100, rotationX: -90 })
      .set(subtitle, { opacity: 0, y: 50, scale: 0.8 })
      .set(backButtonRef.current, { opacity: 0, x: -50 })
      .set(floatingButtonRef.current, { opacity: 0, scale: 0, rotation: 180 })

    // Efecto de cortina inicial
    tl.fromTo(
      containerRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power4.inOut" },
    )

    // Animación de letras una por una
    tl.to(
      ".letter",
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: {
          amount: 2,
          from: "start",
          ease: "power2.out",
        },
        ease: "back.out(1.7)",
      },
      0.5,
    )

    // Efecto de brillo en las letras
    tl.to(
      ".letter",
      {
        textShadow: "0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.4)",
        duration: 0.3,
        stagger: 0.05,
        yoyo: true,
        repeat: 1,
      },
      1.5,
    )

    // Subtítulo aparece
    tl.to(
      subtitle,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      },
      2,
    )

    // Botón de volver aparece
    tl.to(
      backButtonRef.current,
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      2.5,
    )

    // Botón flotante aparece con efecto dramático
    tl.to(
      floatingButtonRef.current,
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      },
      3,
    )

    // Animación continua del botón flotante
    gsap.to(floatingButtonRef.current, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    })

    // Efecto de pulso en el botón
    gsap.to(floatingButtonRef.current, {
      boxShadow: "0 0 30px rgba(16, 185, 129, 0.8), 0 0 60px rgba(16, 185, 129, 0.4)",
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    })
  }, [])

  const handleFloatingButtonClick = () => {
    setShowModal(true)
    // Animación de entrada del modal
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
    )
  }

  const handleCloseModal = () => {
    // Animación de salida del modal
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setShowModal(false),
    })
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Aquí conectarás con tu backend
    console.log("Datos del formulario:", formData)

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setShowSuccess(true)

    // Mostrar mensaje de éxito por 3 segundos
    setTimeout(() => {
      handleCloseModal()
      setShowSuccess(false)
      setFormData({ email: "", dni: "", phone: "", timeframe: "", comments: "" })
    }, 3000)
  }

  return (
    <div
      ref={containerRef}
      className="coming-soon-overlay fixed inset-0 z-[999] flex items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1a1a1a 100%)`,
      }}
    >
      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(typeof window !== "undefined" && window.innerWidth < 768 ? 25 : 50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-emerald-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Botón de volver */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <button
          ref={backButtonRef}
          onClick={onComplete}
          className="flex items-center gap-1 sm:gap-2 text-white hover:text-emerald-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10 px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-white/20 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-semibold">Volver</span>
        </button>
      </div>

      {/* Botón flotante llamativo */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          ref={floatingButtonRef}
          onClick={handleFloatingButtonClick}
          className="group relative bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20"
        >
          <div className="flex items-center gap-3">
            <Gift className="w-6 h-6 animate-bounce" />
            <div className="text-left">
              <div className="text-sm font-bold">¡RESERVA TU LUGAR!</div>
              <div className="text-xs opacity-90">Obtén descuentos exclusivos</div>
            </div>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>

          {/* Efecto de ondas */}
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-pulse"></div>
        </button>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          ref={textRef}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-wide sm:tracking-wider md:tracking-widest mb-4 sm:mb-6 lg:mb-8 relative leading-tight"
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            textShadow: "0 0 30px rgba(0,0,0,0.5)",
          }}
        >
          PRÓXIMAMENTE
        </div>

        <div className="w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-4 sm:mb-6 lg:mb-8 opacity-80"></div>

        <div
          ref={subtitleRef}
          className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide text-emerald-400 font-light relative px-4 sm:px-0 leading-relaxed"
          style={{
            textShadow: "0 0 20px rgba(16, 185, 129, 0.5)",
          }}
        >
          <span className="block sm:inline">HALIT -</span>
          <span className="block sm:inline sm:ml-2">Departamento Inteligente</span>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-12">
          <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Estamos trabajando en algo increíble. Pronto podrás conocer todos los detalles de este innovador proyecto.
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full animate-pulse opacity-30"></div>
      </div>

      {/* Modal del formulario */}
      {showModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="relative bg-gradient-to-br from-gray-900 to-black border border-emerald-500/30 rounded-2xl p-6 w-full max-w-md shadow-2xl"
          >
            {/* Botón cerrar */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!showSuccess ? (
              <>
                {/* Encabezado del modal */}
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-3 rounded-full">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">¡Reserva tu lugar!</h2>
                  <p className="text-emerald-400 text-sm">Obtén acceso prioritario y descuentos exclusivos</p>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-1">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-emerald-400" />
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dni" className="block text-white text-sm font-medium mb-1">
                      DNI *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-emerald-400" />
                      <input
                        id="dni"
                        type="text"
                        required
                        value={formData.dni}
                        onChange={(e) => handleInputChange("dni", e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                        placeholder="12345678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white text-sm font-medium mb-1">
                      Teléfono *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-emerald-400" />
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeframe" className="block text-white text-sm font-medium mb-1">
                      ¿Cuándo te gustaría comprarlo? *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-emerald-400" />
                      <select
                        id="timeframe"
                        required
                        value={formData.timeframe}
                        onChange={(e) => handleInputChange("timeframe", e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                      >
                        <option value="" className="bg-gray-900">
                          Selecciona un período
                        </option>
                        <option value="1-3-months" className="bg-gray-900">
                          En 1-3 meses
                        </option>
                        <option value="3-6-months" className="bg-gray-900">
                          En 3-6 meses
                        </option>
                        <option value="6-12-months" className="bg-gray-900">
                          En 6-12 meses
                        </option>
                        <option value="1-2-years" className="bg-gray-900">
                          En 1-2 años
                        </option>
                        <option value="just-interested" className="bg-gray-900">
                          Solo me interesa saber más
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-white text-sm font-medium mb-1">
                      Comentarios adicionales
                    </label>
                    <textarea
                      id="comments"
                      value={formData.comments}
                      onChange={(e) => handleInputChange("comments", e.target.value)}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 resize-none"
                      placeholder="¿Algo específico que te gustaría saber?"
                      rows={3}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Enviando...
                      </div>
                    ) : (
                      "¡Reservar mi lugar!"
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* Mensaje de éxito */
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-full">
                    <Sparkles className="w-12 h-12 text-white animate-pulse" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">¡Perfecto!</h2>
                <p className="text-emerald-400 mb-2">Tu reserva ha sido confirmada</p>
                <p className="text-white/70 text-sm">
                  Te contactaremos pronto con información exclusiva y descuentos especiales.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Efectos de fondo */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none sm:hidden"></div>
    </div>
  )
}

export default ComingSoonOverlay
