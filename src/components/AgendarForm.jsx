import { Calendar, Phone, Mail, User } from "lucide-react"

const AgendarForm = ({
  clientInfo,
  handleInputChange,
  handleSubmit,
  selectedBudget,
  agendarRef,
}) => (
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
)

export default AgendarForm