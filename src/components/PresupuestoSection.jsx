const presupuestos = [
  { range: "$70,000 - $90,000", desc: "Estudios disponibles", popular: false },
  { range: "$90,000 - $130,000", desc: "Mayor selección", popular: true },
  { range: "$130,000+", desc: "Opciones premium", popular: false },
]

const PresupuestoSection = ({
  presupuestoRef,
  selectedBudget,
  handleBudgetSelect,
}) => (
  <section
    ref={presupuestoRef}
    className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-6 flex items-center"
  >
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-16 tracking-wider">TU PRESUPUESTO</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {presupuestos.map((budget, index) => (
          <div
            key={index}
            onClick={() => handleBudgetSelect(budget.range)}
            className={`relative cursor-pointer transform transition-all duration-1000 hover:scale-105 ${selectedBudget === budget.range ? "scale-105" : ""}`}
          >
            {budget.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                MÁS POPULAR
              </div>
            )}
            <div
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 ${selectedBudget === budget.range ? "border-emerald-400 bg-emerald-400/20" : "border-white/20"} transition-all duration-1000`}
            >
              <h3 className="text-2xl font-bold text-white text-center mb-4">{budget.range}</h3>
              <p className="text-white/80 text-center text-lg">{budget.desc}</p>
              <div className="mt-6 text-center">
                <div
                  className={`inline-block w-4 h-4 rounded-full border-2 transition-all duration-1000 ${selectedBudget === budget.range ? "bg-emerald-400 border-emerald-400" : "border-white/40"}`}
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
)

export default PresupuestoSection