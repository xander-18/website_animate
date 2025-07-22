"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis"
import {
  Eye,
  Home,
  Bath,
  Wifi,
  Shield,
  Zap,
  Car,
  Users,
  Building,
  TreePine,
  Dumbbell,
  Waves,
  Coffee,
  ShieldCheck,
  ScrollText,
  Menu,
  X,
} from "lucide-react"
import Logo1 from "../assets/img/logos-blackhouse/logo.png"
import Logo2 from "../assets/img/logos-blackhouse/logo2.png"
import estudio1 from "../assets/img/logos-blackhouse/estudio1.jpeg"
import estudio2 from "../assets/img/logos-blackhouse/estudio2.jpeg"
import estudio4 from "../assets/img/logos-blackhouse/estudio4.jpeg"
import proyectovalle from "../assets/img/logos-blackhouse/proyectovalle.jpg"
import proyectosmart from "../assets/img/logos-blackhouse/proyectosmart.png"
import DepaCard from "./DepaCard"
import AgendarForm from "./AgendarForm"
import DetalleProyecto from "./DetalleProducto"
import AsesoresSection from "./AsesoresSection"
import AsesoresDetalle from "./AsesoresDetalle"
import TestimoniosSection from "./TestimoniosSection"
import huertasValle from "../assets/videos/0216.mp4"
import NuestroEquipo from "./Nosotros"
import ComingSoonOverlay from "./ComingSoonOverlay"
import Contacto from "./Contacto"

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
  const agendarRef = useRef(null)
  const galleryRef = useRef(null)
  const detalleRef = useRef(null)
  const [introComplete, setIntroComplete] = useState(false)
  const [animationsInitialized, setAnimationsInitialized] = useState(false)
  const [selectedBudget, setSelectedBudget] = useState("")
  const [isVideoPlaying, setIsVideoPlaying] = useState({})
  const [audioStarted, setAudioStarted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("todos")
  const [selectedAsesor, setSelectedAsesor] = useState(null)

  // NUEVOS ESTADOS PARA LA NAVEGACIÓN
  const [showNavbar, setShowNavbar] = useState(false)
  const [currentView, setCurrentView] = useState("home") // "home", "detalle", "asesores"
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageGallery, setCurrentImageGallery] = useState(0)
  const [selectedPlano, setSelectedPlano] = useState(0)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // NUEVO ESTADO PARA MENÚ MÓVIL
  const [clientInfo, setClientInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
    asesor: "",
  })

  // Datos de los departamentos - Estilo Edifica pero con nuestra esencia
  const departamentos = [
    {
      id: 1,
      nombre: "HUERTAS DEL VALLE",
      tipo: "SANTA MARIA DEL VALLE",
      ubicacion: "Santa Maria del Valle",
      estado: "ÚLTIMAS UNIDADES",
      destacado: true,
      area: "120m²",
      precio: "Agotado",
      estacionamiento: 1,
      caracteristicas: [
        { icon: Home, texto: "Diseño moderno y funcional" },
        { icon: Eye, texto: "Vista panorámica de la ciudad" },
        { icon: Zap, texto: "Cocina equipada premium" },
        { icon: Bath, texto: "Baño con acabados de lujo" },
        { icon: Shield, texto: "Balcón privado" },
        { icon: Wifi, texto: "Sistema de domótica" },
      ],
      amenidades: [
        { icon: TreePine, nombre: "Parque" },
        { icon: Waves, nombre: "Cerco Vivo" },
        { icon: Coffee, nombre: "Vías de 8 metros" },
        { icon: Eye, nombre: "Casa de Campo" },
        { icon: ShieldCheck, nombre: "Rodeado de Naturaleza" },
        { icon: ScrollText, nombre: "Título en RRPP" },
      ],
      imagenes: [proyectovalle, estudio1, estudio2],
      video3d: huertasValle,
      planos: [
        {
          tipo: "TIPO A",
          area: "35m²",
          dormitorios: 1,
          baños: 1,
          imagen: "/placeholder.svg?height=400&width=600",
        },
        {
          tipo: "TIPO B",
          area: "38m²",
          dormitorios: 1,
          baños: 1,
          imagen: "/placeholder.svg?height=400&width=600",
        },
      ],
      descripcion:
        "Lanzado en febrero de 2024, este proyecto de 26 lotes ubicado en Santa María del Valle tuvo una acogida excepcional, logrando vender el 95% en solo 3 meses. Cuenta con todos los servicios básicos: agua, luz y título de propiedad, ofreciendo seguridad y calidad a sus propietarios.",
      ubicacionDetalle: {
        direccion: "Av. Santa María del Valle 123, Lima",
        distrito: "Santa María del Valle",
        coordenadas: { lat: -12.0464, lng: -77.0428 },
      },
      salaVentas: {
        direccion: "Jirón Pedro Puelles 671, Huánuco",
        horarios: {
          lunes_viernes: "9:00 am a 1:00 pm",
        },
        telefono: "+51 999 999 999",
        email: "groupblackhouse@gmail.com",
      },
    },
    {
      id: 2,
      nombre: "HIRAKI",
      tipo: "HUANUCO - AMARILIS",
      ubicacion: "La Colectora",
      estado: "PREVENTA",
      destacado: true,
      area: "62m² y 84m²",
      precio: "s/193,000",
      estacionamiento: 2,
      caracteristicas: [
        { icon: Home, texto: "Doble altura en sala" },
        { icon: Eye, texto: "Vista 360° de la ciudad" },
        { icon: Zap, texto: "Cocina gourmet completa" },
        { icon: Bath, texto: "Master suite con vestidor" },
        { icon: Shield, texto: "Terraza con jacuzzi privado" },
        { icon: Wifi, texto: "Domótica avanzada" },
      ],
      amenidades: [
        { icon: Building, nombre: "Ascensor Panoramico" },
        { icon: Coffee, nombre: "Zona Social" },
        { icon: Eye, nombre: "Zona de Parrilla" },
        { icon: TreePine, nombre: "Area tendal" },
        { icon: Users, nombre: "Zona Lavanderia" },
      ],
      imagenes: [estudio4, estudio1, estudio2],
      video3d: "https://res.cloudinary.com/dourqe39h/video/upload/v1751584424/onevideo_1_dcpgmn.mp4",
      planos: [
        {
          tipo: "PENTHOUSE A",
          area: "120m²",
          dormitorios: 3,
          baños: 3,
          imagen: "/placeholder.svg?height=400&width=600",
        },
        {
          tipo: "PENTHOUSE B",
          area: "135m²",
          dormitorios: 3,
          baños: 3,
          imagen: "/placeholder.svg?height=400&width=600",
        },
      ],
      entrega: "Mayo 2026",
      financiamiento: "Disponible",
      descripcion:
        "Lanzado en marzo de 2025,  EL proyecto HIKARI consta 15 departamentos distribuidos en 8 pisos ofrece unidades de 02 y 03 habitaciones. El edificio cuenta con ascensor panorámico  , zona de parrilla, lavandería y cochera inscritos en SUNARP. Los departamentos se destacan por sus acabados modernos. Su ubicación es estratégica, con fácil acceso a establecimientos e instituciones. Con una venta total de 9 departamentos.",
      ubicacionDetalle: {
        direccion: "Av. La Colectora",
        distrito: "La Colectora",
        coordenadas: { lat: -12.0464, lng: -77.0428 },
      },
      salaVentas: {
        direccion: "Jirón Pedro Puelles 671, Huánuco",
        horarios: {
          lunes_viernes: "9:00 am a 1:00 pm",
        },
        telefono: "+51 999 999 999",
        email: "groupblackhouse@gmail.com",
      },
    },
    {
      id: 3,
      nombre: "HALIT",
      tipo: "HUANUCO - AMARILIS",
      ubicacion: "Los Portales",
      estado: "PRÓXIMO LANZAMIENTO",
      destacado: false,
      area: "65m²",
      precio: "Proximamente",
      estacionamiento: 1,
      caracteristicas: [
        { icon: Home, texto: "Amplios espacios integrados" },
        { icon: Eye, texto: "Vista al mar" },
        { icon: Zap, texto: "Cocina isla central" },
        { icon: Bath, texto: "Baño principal con jacuzzi" },
        { icon: Shield, texto: "Terraza privada" },
        { icon: Wifi, texto: "Smart home completo" },
      ],
      amenidades: [
        { icon: Eye, nombre: "Sky lounge" },
        { icon: Waves, nombre: "Piscina climatizada" },
        { icon: TreePine, nombre: "Spa & wellness" },
        { icon: Coffee, nombre: "Business center" },
        { icon: Car, nombre: "Valet parking" },
        { icon: Users, nombre: "Pet friendly" },
        { icon: Dumbbell, nombre: "Fitness center" },
        { icon: Building, nombre: "Smart lobby" },
      ],
      imagenes: [proyectosmart, estudio1, estudio2],
      video3d:
        "https://res.cloudinary.com/dcj324bua/video/upload/v1752527161/Grabacio%CC%81n_de_pantalla_2025-07-14_a_la_s_16.03.23_online-video-cutter.com_dawup9.mp4",
      planos: [
        {
          tipo: "SMART A",
          area: "65m²",
          dormitorios: 2,
          baños: 2,
          imagen: "/placeholder.svg?height=400&width=600",
        },
        {
          tipo: "SMART B",
          area: "72m²",
          dormitorios: 2,
          baños: 2,
          imagen: "/placeholder.svg?height=400&width=600",
        },
      ],
      descripcion:
        "Experimenta el futuro de la vida urbana con nuestro departamento inteligente. Tecnología de vanguardia y diseño contemporáneo se fusionan para crear tu hogar ideal.",
      ubicacionDetalle: {
        direccion: "Av. Huánuco 789, Lima",
        distrito: "Huánuco",
        coordenadas: { lat: -12.0464, lng: -77.0428 },
      },
      salaVentas: {
        direccion: "Jirón Pedro Puelles 671, Huánuco",
        horarios: {
          lunes_viernes: "9:00 am a 1:00 pm",
        },
        telefono: "+51 999 999 999",
        email: "groupblackhouse@gmail.com",
      },
    },
  ]

  // const filtros = [
  //   { id: "todos", nombre: "Todos los proyectos" },
  //   { id: "estudio", nombre: "Estudios" },
  //   { id: "departamento", nombre: "Departamentos" },
  //   { id: "penthouse", nombre: "Penthouses" },
  // ]

  // FUNCIONES DE NAVEGACIÓN
  const verProyecto = (proyecto) => {
    if (proyecto.nombre === "HALIT") {
      setShowComingSoon(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    // Si no es HALIT, sí mostrar el detalle
    setSelectedProject(proyecto)
    setCurrentView("detalle")
    setCurrentImageGallery(0)
    setSelectedPlano(0)
    window.scrollTo({ top: 0, behavior: "smooth" })
    setTimeout(() => {
      if (detalleRef.current) {
        gsap.fromTo(detalleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
      }
    }, 100)
  }

  const verAsesores = () => {
    setCurrentView("asesores")
    setMobileMenuOpen(false) // Cerrar menú móvil
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const verTestimonios = () => {
    setCurrentView("testimonios")
    setMobileMenuOpen(false) // Cerrar menú móvil
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const verSomos = () => {
    setCurrentView("somos")
    setMobileMenuOpen(false) // Cerrar menú móvil
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const verContactanos = () => {
    setCurrentView("contactanos")
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const volverAlHome = () => {
    // Animar salida
    if (detalleRef.current) {
      gsap.to(detalleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setCurrentView("home")
          setSelectedProject(null)
        },
      })
    } else {
      setCurrentView("home")
      setSelectedProject(null)
    }
  }

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

  // Filtrar departamentos
  const departamentosFiltrados = departamentos.filter((depa) => {
    if (selectedFilter === "todos") return true
    if (selectedFilter === "estudio") return depa.tipo.includes("ESTUDIO")
    if (selectedFilter === "departamento") return depa.tipo.includes("DEPARTAMENTO")
    if (selectedFilter === "penthouse") return depa.tipo.includes("PENTHOUSE")
    return true
  })

  const handleSelectAsesor = (asesor) => {
    setSelectedAsesor(asesor)
  }

  const handleVideoToggle = (depaId) => {
    console.log("Toggle video for depa:", depaId)
    setIsVideoPlaying((prev) => {
      const newIsPlayingState = {}
      const videoWasPlaying = prev[depaId] // ¿El video clickeado ya se estaba reproduciendo?

      // Primero, itera y pausa todos los videos actuales.
      for (const id in prev) {
        if (prev[id]) {
          // Si el video con este 'id' se estaba reproduciendo
          const videoElement = document.querySelector(`[data-video-id="${id}"]`)
          if (videoElement) {
            videoElement.pause()
          }
        }
        // Resetea el estado de todos a 'false' (pausado).
        newIsPlayingState[id] = false
      }

      // Ahora, si el video que clickeaste no se estaba reproduciendo, reprodúcelo.
      if (!videoWasPlaying) {
        newIsPlayingState[depaId] = true // Actualiza su estado a 'true'.
        const videoElement = document.querySelector(`[data-video-id="${depaId}"]`)
        // El setTimeout ayuda a asegurar que el estado se actualice antes de dar play.
        setTimeout(() => {
          if (videoElement) {
            videoElement.play().catch((error) => {
              console.error("Error attempting to play video:", error)
            })
          }
        }, 0)
      }

      // Si el video ya se estaba reproduciendo, el bucle anterior ya lo pausó
      // y su estado quedará en 'false', por lo que no se necesita hacer más.
      return newIsPlayingState
    })
  }

  const handleAsesorSelect = (asesor) => {
    setSelectedAsesor(asesor)
    setClientInfo({ ...clientInfo, asesor: asesor.nombre })
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
• Asesor preferido: ${selectedAsesor?.nombre || "No seleccionado"}

Me gustaría agendar una cita para conocer más detalles.`

    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  useEffect(() => {
    // Event listener global para iniciar el audio en el primer clic
    const handleFirstClick = () => {
      startBackgroundMusic()
      document.removeEventListener("click", handleFirstClick)
    }
    document.addEventListener("click", handleFirstClick)

    // Event listener para el scroll del navbar
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    // Solo ejecutar las animaciones una vez y solo en la vista home
    if (animationsInitialized || currentView !== "home") return

    // Inicializar Lenis para smooth scrolling premium
    const lenis = new Lenis({
      duration: 1.0, // Reducido para mejor performance
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 0.5, // Reducido para menos sensibilidad
      smoothTouch: false,
      touchMultiplier: 1.0, // Reducido para mejor control
      infinite: false,
    })

    // Conectar Lenis con GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // Configuración global de GSAP para mejor performance
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
      autoSleep: 60,
    })

    // Optimizar CSS para mejor performance
    gsap.set("*", { willChange: "auto" })

    // Solo ejecutar animaciones del hero si estamos en home
    if (currentView === "home" && textRef.current) {
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
            duration: 2,
            ease: "power1.out",
          },
        )

        // Reducir la opacidad del overlay inmediatamente
        gsap.to(videoOverlayRef.current, {
          opacity: 0.3,
          duration: 2,
          ease: "power1.out",
        })
      }

      // Marcar las animaciones como inicializadas
      setAnimationsInitialized(true)

      // ANIMACIONES DE SCROLL OPTIMIZADAS - AQUÍ ESTÁN LOS CAMBIOS PRINCIPALES
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5, // REDUCIDO DRÁSTICAMENTE de 2 a 0.5 para eliminar lag
        onUpdate: (self) => {
          const progress = self.progress
          // Usar transform3d para mejor performance
          gsap.set(containerRef.current, {
            opacity: 1 - progress * 0.15, // Reducido el efecto
            transform: `translate3d(0, ${-2 * progress}px, 0) scale(${1 - progress * 0.003})`, // Usar transform3d
          })
        },
      })

      // ANIMACIONES PARA LA GALERÍA ULTRA OPTIMIZADAS
      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top 80%", // Cambiar para que se active antes
        onEnter: () => {
          // Animación del título más simple y rápida
          if (galleryRef.current && galleryRef.current.querySelector("h2")) {
            gsap.fromTo(
              galleryRef.current.querySelector("h2"),
              { opacity: 0, y: 20 }, // Reducir movimiento
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, // Más rápido
            )
          }

          // ANIMACIÓN DE TARJETAS ULTRA OPTIMIZADA
          const depaCards = document.querySelectorAll(".depa-card")
          if (depaCards.length > 0) {
            // Preparar las tarjetas para animación con will-change
            gsap.set(depaCards, {
              willChange: "transform, opacity",
              transform: "translate3d(0, 30px, 0)", // Usar transform3d
              opacity: 0,
            })

            // Animación más simple y rápida
            gsap.to(depaCards, {
              transform: "translate3d(0, 0, 0)", // Usar transform3d
              opacity: 1,
              duration: 0.6, // Más rápido
              stagger: 0.08, // Reducir stagger
              ease: "power2.out",
              delay: 0.1,
              onComplete: () => {
                // Limpiar will-change después de la animación
                gsap.set(depaCards, { willChange: "auto" })
              },
            })
          }
        },
      })

      ScrollTrigger.create({
        trigger: agendarRef.current,
        start: "top 80%", // Cambiar para que se active antes
        onEnter: () => {
          if (agendarRef.current && agendarRef.current.children) {
            gsap.fromTo(
              agendarRef.current.children,
              { opacity: 0, y: 15 }, // Reducir movimiento
              {
                opacity: 1,
                y: 0,
                duration: 0.8, // Más rápido
                stagger: 0.1, // Reducir stagger
                ease: "power2.out",
              },
            )
          }
        },
      })

      // Efectos de hover más suaves para las letras
      const handleMouseEnter = () => {
        gsap.to(letters, {
          y: -2,
          color: "#00ff88",
          textShadow: "0 0 15px #00ff88",
          duration: 0.4, // Más rápido
          stagger: 0.015, // Reducir stagger
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        const shadowIntensity = introComplete ? "0 0 20px rgba(255,255,255,0.8)" : "0 0 8px rgba(255,255,255,0.4)"
        gsap.to(letters, {
          y: 0,
          color: "#ffffff",
          textShadow: shadowIntensity,
          duration: 0.4, // Más rápido
          stagger: 0.015, // Reducir stagger
          ease: "power2.out",
        })
      }

      textRef.current.addEventListener("mouseenter", handleMouseEnter)
      textRef.current.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      document.removeEventListener("click", handleFirstClick)
      window.removeEventListener("scroll", handleScroll)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      if (textRef.current) {
        const handleMouseEnter = () => {}
        const handleMouseLeave = () => {}
        textRef.current.removeEventListener("mouseenter", handleMouseEnter)
        textRef.current.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [currentView, animationsInitialized])

  // OPTIMIZACIÓN CSS MEJORADA
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      .depa-card {
        will-change: transform, opacity;
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
      .depa-card:hover {
        will-change: transform;
      }
      /* Optimización para scroll suave */
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      /* Optimización para animaciones */
      .gallery-section {
        transform: translateZ(0);
        will-change: transform;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // RENDERIZADO CONDICIONAL
  if (currentView === "detalle") {
    return (
      <DetalleProyecto
        proyecto={selectedProject}
        volverAlHome={volverAlHome}
        handleSubmit={handleSubmit}
        currentImageGallery={currentImageGallery}
        setCurrentImageGallery={setCurrentImageGallery}
        selectedPlano={selectedPlano}
        setSelectedPlano={setSelectedPlano}
        detalleRef={detalleRef}
      />
    )
  }

  if (currentView === "asesores") {
    return <AsesoresDetalle onVolver={volverAlHome} />
  }

  if (currentView === "testimonios") {
    return <TestimoniosSection onVolver={volverAlHome} />
  }

  if (currentView === "somos") {
    return <NuestroEquipo onVolver={volverAlHome} />
  }

  if (currentView === "contactanos") {
    return <Contacto onVolver={volverAlHome} />
  }

  return (
    <div className="min-h-screen bg-black">
      {/* NAVBAR FIJO AL HACER SCROLL - MEJORADO RESPONSIVE */}
      {showComingSoon && <ComingSoonOverlay onComplete={() => setShowComingSoon(false)} />}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 transition-all duration-500 ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo - MEJORADO RESPONSIVE */}
          <div className="flex items-center">
            <img src={Logo1 || "/placeholder.svg"} alt="BlackHouse Logo" className="w-6 h-9 sm:w-7 sm:h-11" />
            <img
              src={Logo2 || "/placeholder.svg"}
              alt="BlackHouse Logo 2"
              className="w-2.5 h-6 sm:w-3 sm:h-7 translate-y-1"
            />
            <span className="ml-2 sm:ml-3 text-white font-bold text-base sm:text-lg tracking-wider">BLACK HOUSE</span>
          </div>

          {/* Items de navegación desktop - OCULTOS EN MÓVIL */}
          <div className="hidden md:flex items-center gap-8 ml-auto mr-10">
            <button
              onClick={verAsesores}
              className="text-white hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Asesores
            </button>
            <button
              onClick={verTestimonios}
              className="text-white hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Testimonios
            </button>
            <button
              onClick={verSomos}
              className="text-white hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Nuestro Equipo
            </button>
            <button
              onClick={verContactanos}
              className="text-white hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Contactanos
            </button>
          </div>

          {/* Botones de acción - MEJORADO RESPONSIVE */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Botón menú móvil - SOLO VISIBLE EN MÓVIL */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-emerald-400 transition-colors duration-300 p-2"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable - NUEVO */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={verAsesores}
                className="block w-full text-left text-white hover:text-emerald-400 transition-colors duration-300 font-medium py-2"
              >
                Asesores
              </button>
              <button
                onClick={verTestimonios}
                className="block w-full text-left text-white hover:text-emerald-400 transition-colors duration-300 font-medium py-2"
              >
                Testimonios
              </button>
              <button
                onClick={verSomos}
                className="block w-full text-left text-white hover:text-emerald-400 transition-colors duration-300 font-medium py-2"
              >
                Nuestro Equipo
              </button>
              <button
                onClick={verContactanos}
                className="text-white hover:text-emerald-400 transition-colors duration-300 font-medium"
              >
                Contactanos
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* AUDIO DE FONDO */}
      <audio ref={audioRef} loop preload="auto" className="hidden">
        <source src="" type="audio/mpeg" />
        Tu navegador no soporta el elemento audio.
      </audio>

      {/* HERO SECTION - MEJORADO RESPONSIVE */}
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
          <source
            src="https://res.cloudinary.com/dcj324bua/video/upload/v1752505685/render_pagina_p8h4yn.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento video.
        </video>

        <div ref={videoOverlayRef} className="absolute inset-0 bg-black/70 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative z-10 flex flex-col justify-center items-center px-4">
          <div className="flex items-center mb-6 sm:mb-8">
            <img
              ref={leftRef}
              src={Logo1 || "/placeholder.svg"}
              alt="left"
              className="w-16 sm:w-20 md:w-24 transition-all duration-1000"
            />
            <img
              ref={rightRef}
              src={Logo2 || "/placeholder.svg"}
              alt="right"
              className="w-6 sm:w-7 md:w-9 -ml-0 translate-y-2.5 transition-all duration-1000"
            />
          </div>

          <div
            ref={textRef}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide text-center cursor-pointer select-none transition-all duration-1000"
            style={{
              fontFamily: "Arial, sans-serif",
              textShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            {"BLACK".split("").map((letter, index) => (
              <span
                key={`black-${index}`}
                className="letter inline-block transition-all duration-500"
                style={{ transformOrigin: "center bottom" }}
              >
                {letter}
              </span>
            ))}
            {/* Espacio entre palabras */}
            <span className="inline-block mx-1 sm:mx-2">&nbsp;</span>
            {"HOUSE".split("").map((letter, index) => (
              <span
                key={`house-${index}`}
                className="letter inline-block transition-all duration-500"
                style={{ transformOrigin: "center bottom" }}
              >
                {letter}
              </span>
            ))}
          </div>

          <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-2xl mt-4 text-center max-w-2xl leading-relaxed">
            ¡Últimas unidades! El depa que tanto soñaste está a punto de volar… ¡No dejes que se te escape de las manos!
          </p>
        </div>

        {/* Scroll indicator - MEJORADO RESPONSIVE */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-white/70">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
            <span className="text-xs mt-2 tracking-wider">DESCUBRE MÁS</span>
          </div>
        </div>
      </div>

      {/* SECCIÓN DE DEPARTAMENTOS - OPTIMIZADA PARA PERFORMANCE */}
      <section
        ref={galleryRef}
        className="gallery-section min-h-screen bg-gradient-to-b from-black to-gray-900 py-12 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header con estilo Edifica - MEJORADO RESPONSIVE */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-wider">
              ESPACIOS
              <span className="block text-emerald-400 text-3xl sm:text-4xl md:text-5xl font-light mt-2">
                con estilo
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Descubre nuestros proyectos inmobiliarios diseñados para tu estilo de vida
            </p>
          </div>

          {/* Filtros estilo Edifica - MEJORADO RESPONSIVE */}
          {/* <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {filtros.map((filtro) => (
              <button
                key={filtro.id}
                onClick={() => setSelectedFilter(filtro.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 transition-all duration-500 text-sm sm:text-base ${
                  selectedFilter === filtro.id
                    ? "bg-emerald-400 border-emerald-400 text-black font-semibold"
                    : "border-white/30 text-white hover:border-emerald-400/50 hover:text-emerald-400"
                }`}
              >
                {filtro.nombre}
              </button>
            ))}
          </div> */}

          {/* Grid de departamentos estilo Edifica - MEJORADO RESPONSIVE */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {departamentosFiltrados.map((depa) => (
              <DepaCard
                key={depa.id}
                depa={depa}
                isVideoPlaying={isVideoPlaying}
                handleVideoToggle={handleVideoToggle}
                onVerProyecto={() => verProyecto(depa)}
              />
            ))} */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {departamentos.map((depa) => (
            <DepaCard
              key={depa.id}
              depa={depa}
              isVideoPlaying={isVideoPlaying}
              handleVideoToggle={handleVideoToggle}
              onVerProyecto={() => verProyecto(depa)}
            />
          ))}
          </div>
        </div>
      </section>

      <AsesoresSection onSelectAsesor={handleSelectAsesor} selectedAsesor={selectedAsesor} />

      <AgendarForm
        clientInfo={clientInfo}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        selectedAsesor={selectedAsesor}
        agendarRef={agendarRef}
      />
    </div>
  )
}

export default Main
