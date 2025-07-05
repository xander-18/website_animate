"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis"

gsap.registerPlugin(ScrollTrigger)

export const useAnimations = (
  containerRef,
  textRef,
  leftRef,
  rightRef,
  backgroundVideoRef,
  videoOverlayRef,
  galleryRef,
  presupuestoRef,
  agendarRef,
  setIntroComplete,
  animationsInitialized,
  setAnimationsInitialized,
) => {
  useEffect(() => {
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
    const letters = textRef.current?.querySelectorAll(".letter")
    const tl = gsap.timeline()

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
          galleryRef.current?.querySelector("h2"),
          { opacity: 0, y: 50, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 3.5, ease: "power1.out" },
        )

        // Animar las tarjetas de departamentos
        gsap.fromTo(
          ".depa-card",
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 2.5,
            stagger: 0.3,
            ease: "power1.out",
            delay: 0.5,
          },
        )
      },
    })

    // Animaciones para las secciones de presupuesto y agenda
    ScrollTrigger.create({
      trigger: presupuestoRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(
          presupuestoRef.current?.children,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 2.8,
            stagger: 0.6,
            ease: "power1.out",
          },
        )
      },
    })

    ScrollTrigger.create({
      trigger: agendarRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(
          agendarRef.current?.children,
          { opacity: 0, y: 35, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 3,
            stagger: 0.4,
            ease: "power1.out",
          },
        )
      },
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [animationsInitialized])
}
