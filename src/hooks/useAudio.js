"use client"

import { useState, useRef, useEffect } from "react"

export const useAudio = (audioSrc) => {
  const [audioStarted, setAudioStarted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  const startBackgroundMusic = () => {
    if (!audioStarted && audioRef.current) {
      audioRef.current.play().catch(console.error)
      setAudioStarted(true)
    }
  }

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

  useEffect(() => {
    const handleFirstClick = () => {
      startBackgroundMusic()
      document.removeEventListener("click", handleFirstClick)
    }

    document.addEventListener("click", handleFirstClick)

    return () => {
      document.removeEventListener("click", handleFirstClick)
    }
  }, [])

  return {
    audioRef,
    audioStarted,
    isMuted,
    toggleAudio,
  }
}
