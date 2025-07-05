"use client"

import { useState } from "react"

export const useForm = () => {
  const [selectedBudget, setSelectedBudget] = useState("")
  const [clientInfo, setClientInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
    presupuesto: "",
  })

  const handleBudgetSelect = (budget) => {
    setSelectedBudget(budget)
    setClientInfo({ ...clientInfo, presupuesto: budget })
  }

  const handleInputChange = (field, value) => {
    setClientInfo({ ...clientInfo, [field]: value })
  }

  const handleSubmit = () => {
    const mensaje = `Hola! Estoy interesado en los departamentos BLACKHOUSE. Mis datos:
• Nombre: ${clientInfo.nombre}
• Teléfono: ${clientInfo.telefono}
• Email: ${clientInfo.email}
• Presupuesto: ${clientInfo.presupuesto}

Me gustaría agendar una cita para conocer más detalles.`

    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  return {
    selectedBudget,
    clientInfo,
    handleBudgetSelect,
    handleInputChange,
    handleSubmit,
  }
}
