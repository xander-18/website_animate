"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis"
import {
  Play,
  Pause,
  Eye,
  Calendar,
  Phone,
  Mail,
  User,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Maximize2,
} from "lucide-react"
import Logo1 from "../assets/img/logos-blackhouse/logo.png"
import Logo2 from "../assets/img/logos-blackhouse/logo2.png"
import estudio1 from "../assets/img/logos-blackhouse/estudio1.jpeg"
import estudio2 from "../assets/img/logos-blackhouse/estudio2.jpeg"
import estudio4 from "../assets/img/logos-blackhouse/estudio4.jpeg"
import onevideo from "../assets/videos/onevideo.mp4"
import backgroundMusic from "../assets/sounds/background.mp3"

// Registrar el plugin
gsap.registerPlugin(ScrollTrigger)

const Main = () => {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const lettersRef = useRef([])
  const backgroundVideoRef = useRef(null)
  const videoOverlayRef = useRef(null)
  const audioRef = useRef(null)

  // Referencias para las nuevas secciones
  const depasRef = useRef(null)
  const presupuestoRef = useRef(null)
  const agendarRef = useRef(null)
  const galleryRef = useRef(null)
  const mapRef = useRef(null)
  const carouselRef = useRef(null)
  const video3dRef = useRef(null)

  const [introComplete, setIntroComplete] = useState(false)
  const [animationsInitialized, setAnimationsInitialized] = useState(false)
  const [selectedBudget, setSelectedBudget] = useState("")
  const [selectedDepa, setSelectedDepa] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState({})
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [audioStarted, setAudioStarted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false)
  const [clientInfo, setClientInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
    presupuesto: "",
  })

  // Datos de los departamentos
  const departamentos = [
    {
      id: 1,
      tipo: "ESTUDIO PREMIUM",
      area: "35m²",
      precio: "$85,000",
      caracteristicas: [
        "Diseño moderno y funcional",
        "Vista panorámica de la ciudad",
        "Cocina equipada premium",
        "Baño con acabados de lujo",
        "Balcón privado",
        "Sistema de domótica",
      ],
      imagenes: [estudio1, estudio2, estudio4],
      video3d: onevideo,
      plano: "/placeholder.svg?height=400&width=600",
    },
  ]

  // Función para iniciar el audio
  const startBackgroundMusic = () => {
    if (!audioStarted && audioRef.current) {
      audioRef.current.play().catch(console.error)
      setAudioStarted(true)
    }
  }

  // Función para alternar el audio
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false
        setIsMuted(false)
      } else {
        audioRef.current.muted = true
        setIsMuted(true)
      }
    }
  }

  // Función para pantalla completa del video
  const toggleVideoFullscreen = (depaId) => {
    const videoElement = document.querySelector(`[data-video-id="${depaId}"]`)
    if (videoElement) {
      if (!isVideoFullscreen) {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen()
        }
        setIsVideoFullscreen(true)
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
        setIsVideoFullscreen(false)
      }
    }
  }

  useEffect(() => {
    // Event listener global para iniciar el audio en el primer clic
    const handleFirstClick = () => {
      startBackgroundMusic()
      document.removeEventListener("click", handleFirstClick)
    }

    document.addEventListener("click", handleFirstClick)

    // Solo ejecutar las animaciones una vez
    if (animationsInitialized) return

    // Inicializar Lenis para smooth scrolling premium
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    })

    // Conectar Lenis con GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Configuración global de GSAP para animaciones más suaves y profesionales
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    })

    // Animaciones existentes del hero (más suaves y elegantes)
    const letters = textRef.current.querySelectorAll(".letter")
    lettersRef.current = letters

    const tl = gsap.timeline()

    tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 2, ease: "power1.out" })
      .fromTo(leftRef.current, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 2.5, ease: "power1.out" })
      .fromTo(rightRef.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 2.5, ease: "power1.out" }, "-=2")
      .call(() => {
        // Iniciar el video inmediatamente después de que aparezcan los logos
        startVideoTransition()
      })
      .to({}, { duration: 1.2 })
      .fromTo(
        letters,
        {
          opacity: 0,
          y: 30,
          rotationX: -20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 2,
          ease: "power1.out",
          stagger: 0.08,
        },
      )
      .to(textRef.current, {
        textShadow: "0 0 25px #ffffff, 0 0 35px #ffffff, 0 0 45px #ffffff",
        duration: 1.5,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      })
      .to({}, { duration: 3 })
      .call(() => {
        setIntroComplete(true)
        // Ya no necesitamos llamar startVideoTransition aquí
      })

    const startVideoTransition = () => {
      // Primero intentar reproducir el video inmediatamente
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.play().catch(console.error)
      }

      // Animar la opacidad del video inmediatamente (sin delay)
      gsap.fromTo(
        backgroundVideoRef.current,
        { opacity: 0, scale: 1.03 },
        {
          opacity: 0.8,
          scale: 1,
          duration: 2, // Reducido de 3 a 2 segundos
          ease: "power1.out",
        },
      )

      // Reducir la opacidad del overlay inmediatamente
      gsap.to(videoOverlayRef.current, {
        opacity: 0.3,
        duration: 2, // Reducido de 3 a 2 segundos
        ease: "power1.out",
      })
    }

    // Marcar las animaciones como inicializadas
    setAnimationsInitialized(true)

    // Animaciones de scroll ULTRA suaves (estilo Rockstar Games)
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 6,
      onUpdate: (self) => {
        const progress = self.progress
        gsap.to(containerRef.current, {
          opacity: 1 - progress * 0.3,
          y: -8 * progress,
          scale: 1 - progress * 0.01,
          duration: 0.5,
          ease: "none",
        })
      },
    })

    // Animaciones para la galería ULTRA suaves
    ScrollTrigger.create({
      trigger: galleryRef.current,
      start: "top 95%",
      onEnter: () => {
        gsap.fromTo(
          galleryRef.current.querySelector("h2"),
          { opacity: 0, y: 50, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 3.5, ease: "power1.out" },
        )

        gsap.fromTo(
          carouselRef.current,
          { opacity: 0, x: -50, rotationY: -3 },
          { opacity: 1, x: 0, rotationY: 0, duration: 3.8, ease: "power1.out", delay: 0.8 },
        )

        gsap.fromTo(
          video3dRef.current,
          { opacity: 0, x: 50, rotationY: 3 },
          { opacity: 1, x: 0, rotationY: 0, duration: 3.8, ease: "power1.out", delay: 1.6 },
        )
      },
    })

    // Animaciones para las secciones de presupuesto y agenda
    ScrollTrigger.create({
      trigger: presupuestoRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(
          presupuestoRef.current.children,
          { opacity: 0, y: 40, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 2.8, stagger: 0.6, ease: "power1.out" },
        )
      },
    })

    ScrollTrigger.create({
      trigger: agendarRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(
          agendarRef.current.children,
          { opacity: 0, y: 35, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 3, stagger: 0.4, ease: "power1.out" },
        )
      },
    })

    // Efectos de hover más suaves para las letras
    const handleMouseEnter = () => {
      gsap.to(letters, {
        y: -2,
        color: "#00ff88",
        textShadow: "0 0 20px #00ff88, 0 0 40px #00ff88",
        duration: 1.2,
        stagger: 0.03,
        ease: "power1.out",
      })
    }

    const handleMouseLeave = () => {
      const shadowIntensity = introComplete
        ? "0 0 30px rgba(255,255,255,0.9), 0 0 60px rgba(255,255,255,0.5)"
        : "0 0 10px rgba(255,255,255,0.5)"

      gsap.to(letters, {
        y: 0,
        color: "#ffffff",
        textShadow: shadowIntensity,
        duration: 1.2,
        stagger: 0.03,
        ease: "power1.out",
      })
    }

    textRef.current.addEventListener("mouseenter", handleMouseEnter)
    textRef.current.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("click", handleFirstClick)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      if (textRef.current) {
        textRef.current.removeEventListener("mouseenter", handleMouseEnter)
        textRef.current.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  const handleVideoToggle = (depaId) => {
    const videoElement = document.querySelector(`[data-video-id="${depaId}"]`)
    if (videoElement) {
      if (isVideoPlaying[depaId]) {
        videoElement.pause()
      } else {
        videoElement.play().catch(console.error)
      }
      setIsVideoPlaying((prev) => ({
        ...prev,
        [depaId]: !prev[depaId],
      }))
    }
  }

  const handleBudgetSelect = (budget) => {
    setSelectedBudget(budget)
    setClientInfo({ ...clientInfo, presupuesto: budget })
  }

  const handleInputChange = (field, value) => {
    setClientInfo({ ...clientInfo, [field]: value })
  }

  const handleSubmit = () => {
    const mensaje = `Hola! Estoy interesado en los departamentos BLACKHOUSE.

Mis datos:

• Nombre: ${clientInfo.nombre}

• Teléfono: ${clientInfo.telefono}  

• Email: ${clientInfo.email}

• Presupuesto: ${clientInfo.presupuesto}

Me gustaría agendar una cita para conocer más detalles.`

    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(mensaje)}`

    window.open(whatsappUrl, "_blank")
  }

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % departamentos[0].imagenes.length
    setCurrentImageIndex(newIndex)

    gsap.fromTo(
      carouselRef.current.querySelector(".carousel-image"),
      { opacity: 0, x: 25, scale: 0.98 },
      { opacity: 1, x: 0, scale: 1, duration: 1.8, ease: "power1.out" },
    )
  }

  const prevImage = () => {
    const newIndex = currentImageIndex === 0 ? departamentos[0].imagenes.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(newIndex)

    gsap.fromTo(
      carouselRef.current.querySelector(".carousel-image"),
      { opacity: 0, x: -25, scale: 0.98 },
      { opacity: 1, x: 0, scale: 1, duration: 1.8, ease: "power1.out" },
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* AUDIO DE FONDO */}
      <audio ref={audioRef} loop preload="auto" className="hidden">
        <source src={backgroundMusic} type="audio/mpeg" />
        Tu navegador no soporta el elemento audio.
      </audio>

      {/* CONTROL DE AUDIO FLOTANTE */}
      {audioStarted && (
        <button
          onClick={toggleAudio}
          className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-500 hover:scale-110 border border-white/20"
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      )}

      {/* HERO SECTION */}
      <div ref={containerRef} className="relative flex flex-col justify-center items-center h-screen overflow-hidden">
        <video
          ref={backgroundVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ opacity: 0 }}
        >
          <source src={onevideo} type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
        <div ref={videoOverlayRef} className="absolute inset-0 bg-black/70 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="flex items-center mb-8">
            <img
              ref={leftRef}
              src={Logo1 || "/placeholder.svg"}
              alt="left"
              className="w-24 transition-all duration-1000"
            />
            <img
              ref={rightRef}
              src={Logo2 || "/placeholder.svg"}
              alt="right"
              className="w-9 -ml-0 translate-y-2.5 transition-all duration-1000"
            />
          </div>
          <div
            ref={textRef}
            className="text-white text-4xl md:text-6xl font-bold tracking-wider cursor-pointer select-none transition-all duration-1000"
            style={{
              fontFamily: "Arial, sans-serif",
              textShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            {"BLACKHOUSE".split("").map((letter, index) => (
              <span
                key={index}
                className="letter inline-block transition-all duration-500"
                style={{ transformOrigin: "center bottom" }}
              >
                {letter}
              </span>
            ))}
          </div>
          <p className="text-white/80 text-xl md:text-2xl mt-4 text-center max-w-2xl">
            ¡Últimas unidades! El depa que tanto soñaste está a punto de volar… ¡No dejes que se te escape de las manos!
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-white/70">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
            <span className="text-xs mt-2 tracking-wider">DESCUBRE MÁS</span>
          </div>
        </div>
      </div>

      {/* GALERÍA DE DEPARTAMENTOS - DISEÑO MEJORADO */}
      <section ref={galleryRef} className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-wider">NUESTROS DEPARTAMENTOS</h2>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto">
              Descubre espacios únicos diseñados para tu estilo de vida
            </p>
          </div>

          {departamentos.map((depa) => (
            <div key={depa.id} className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              {/* CAROUSEL DE IMÁGENES */}
              <div ref={carouselRef} className="relative">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={depa.imagenes[currentImageIndex] || "/placeholder.svg?height=400&width=600"}
                    alt={`${depa.tipo} - Vista ${currentImageIndex + 1}`}
                    className="carousel-image w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Controles del carousel */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-1000 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-1000 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Indicadores */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {depa.imagenes.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-1000 ${
                          index === currentImageIndex ? "bg-emerald-400 scale-125" : "bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Info overlay */}
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{depa.tipo}</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-xl text-emerald-400 font-semibold">{depa.area}</span>
                      <span className="text-2xl text-amber-400 font-bold">{depa.precio}</span>
                    </div>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-4 mt-6">
                  {depa.imagenes.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-1000 ${
                        index === currentImageIndex
                          ? "ring-2 ring-emerald-400 scale-105"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img || "/placeholder.svg?height=80&width=80"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* VIDEO 3D Y DETALLES - MEJORADO */}
              <div ref={video3dRef} className="space-y-8">
                {/* RECORRIDO 3D PROMINENTE Y MEJORADO */}
                <div className="relative bg-gradient-to-br from-emerald-900/30 via-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-emerald-400/30 shadow-2xl hover:border-emerald-400/50 transition-all duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent rounded-3xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-3xl font-bold text-white flex items-center gap-3">
                        <Eye className="w-8 h-8 text-emerald-400" />
                        Recorrido Virtual 3D
                      </h4>
                      <div className="flex gap-2">
                        <span className="bg-emerald-400/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-semibold">
                          PREMIUM
                        </span>
                        <span className="bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full text-sm font-semibold">
                          360°
                        </span>
                      </div>
                    </div>

                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                      <video
                        data-video-id={depa.id}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        <source src={depa.video3d} type="video/mp4" />
                        Tu navegador no soporta el elemento video.
                      </video>

                      {/* Overlay con controles mejorados */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20">
                        {/* Controles principales */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={() => handleVideoToggle(depa.id)}
                            className="bg-emerald-500/90 backdrop-blur-sm rounded-full p-8 group-hover:scale-110 transition-all duration-1000 shadow-2xl hover:bg-emerald-400 border-2 border-white/20"
                          >
                            {isVideoPlaying[depa.id] ? (
                              <Pause className="w-12 h-12 text-white" />
                            ) : (
                              <Play className="w-12 h-12 text-white ml-1" />
                            )}
                          </button>
                        </div>

                        {/* Controles adicionales */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          <button
                            onClick={() => toggleVideoFullscreen(depa.id)}
                            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all duration-500"
                          >
                            <Maximize2 className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Info del video */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                            <h5 className="text-white font-bold text-lg mb-1">Tour Virtual Interactivo</h5>
                            <p className="text-white/80 text-sm">
                              Explora cada rincón en alta definición • Duración: 2:30 min
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-emerald-400 font-bold text-xl">360°</div>
                        <div className="text-white/70 text-sm">Vista completa</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-emerald-400 font-bold text-xl">4K</div>
                        <div className="text-white/70 text-sm">Alta definición</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-emerald-400 font-bold text-xl">VR</div>
                        <div className="text-white/70 text-sm">Realidad virtual</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARACTERÍSTICAS */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-6">Características destacadas</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {depa.caracteristicas.map((caracteristica, charIndex) => (
                      <div
                        key={charIndex}
                        className="flex items-center gap-4 p-3 bg-white/5 rounded-lg transition-all duration-800 hover:bg-white/10"
                      >
                        <div className="w-3 h-3 bg-emerald-400 rounded-full flex-shrink-0" />
                        <span className="text-white/90 text-lg">{caracteristica}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN PRESUPUESTO */}
      <section
        ref={presupuestoRef}
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-6 flex items-center"
      >
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-16 tracking-wider">TU PRESUPUESTO</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { range: "$70,000 - $90,000", desc: "Estudios disponibles", popular: false },
              { range: "$90,000 - $130,000", desc: "Mayor selección", popular: true },
              { range: "$130,000+", desc: "Opciones premium", popular: false },
            ].map((budget, index) => (
              <div
                key={index}
                onClick={() => handleBudgetSelect(budget.range)}
                className={`relative cursor-pointer transform transition-all duration-1000 hover:scale-105 ${
                  selectedBudget === budget.range ? "scale-105" : ""
                }`}
              >
                {budget.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </div>
                )}
                <div
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                    selectedBudget === budget.range ? "border-emerald-400 bg-emerald-400/20" : "border-white/20"
                  } transition-all duration-1000`}
                >
                  <h3 className="text-2xl font-bold text-white text-center mb-4">{budget.range}</h3>
                  <p className="text-white/80 text-center text-lg">{budget.desc}</p>
                  <div className="mt-6 text-center">
                    <div
                      className={`inline-block w-4 h-4 rounded-full border-2 transition-all duration-1000 ${
                        selectedBudget === budget.range ? "bg-emerald-400 border-emerald-400" : "border-white/40"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {selectedBudget && (
            <div className="text-center mt-12">
              <p className="text-2xl text-emerald-400 font-semibold mb-4">
                Perfecto! Rango seleccionado: {selectedBudget}
              </p>
              <p className="text-white/80 text-lg">Ahora completa tus datos para agendar tu cita</p>
            </div>
          )}
        </div>
      </section>

      {/* SECCIÓN AGENDAR */}
      <section
        ref={agendarRef}
        className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 flex items-center"
      >
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-16 tracking-wider">AGENDA TU CITA</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <div>
                <label className="block text-white text-lg font-semibold mb-3 flex items-center gap-2">
                  <User className="w-5 h-5 text-emerald-400" />
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={clientInfo.nombre}
                  onChange={(e) => handleInputChange("nombre", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 transition-all duration-1000"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-white text-lg font-semibold mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={clientInfo.telefono}
                  onChange={(e) => handleInputChange("telefono", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 transition-all duration-1000"
                  placeholder="+51 999 999 999"
                />
              </div>

              <div>
                <label className="block text-white text-lg font-semibold mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  Email
                </label>
                <input
                  type="email"
                  value={clientInfo.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 transition-all duration-1000"
                  placeholder="tu@email.com"
                />
              </div>

              {selectedBudget && (
                <div className="bg-emerald-400/20 rounded-lg p-4 border border-emerald-400/30">
                  <p className="text-emerald-400 font-semibold">Presupuesto seleccionado: {selectedBudget}</p>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={!clientInfo.nombre || !clientInfo.telefono || !selectedBudget}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-1000 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {!selectedBudget
                  ? "Selecciona tu presupuesto primero"
                  : !clientInfo.nombre || !clientInfo.telefono
                    ? "Completa tus datos"
                    : "AGENDAR CITA VIA WHATSAPP"}
              </button>

              <p className="text-white/60 text-center text-sm">
                Te contactaremos en menos de 2 horas para coordinar tu visita
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
