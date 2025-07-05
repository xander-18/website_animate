"use client"

import { useEffect } from "react"
import gsap from "gsap"
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Square,
  Bed,
  Bath,
  Download,
  Phone,
  Mail,
  Clock,
  Building,
  TreePine,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import img from "../assets/img/logos-blackhouse/360.webp"
import plano1 from "../assets/img/logos-blackhouse/plano1.webp"
import estudio1 from "../assets/img/logos-blackhouse/proyectovalle.jpg"
import { FaWhatsapp } from "react-icons/fa"

const DetalleProyecto = ({
  proyecto,
  volverAlHome,
  handleSubmit,
  currentImageGallery,
  setCurrentImageGallery,
  selectedPlano,
  setSelectedPlano,
  detalleRef,
}) => {
  // Animaciones de entrada cuando se monta el componente
  useEffect(() => {
    if (detalleRef.current) {
      gsap.fromTo(detalleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
    }
  }, [detalleRef])

  if (!proyecto) return null

  return (
    <div ref={detalleRef} className="min-h-screen bg-black">
      {/* NAVBAR FIJO PARA VISTA DETALLE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-emerald-400/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={volverAlHome}
            className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Volver</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-bold text-lg">{proyecto.nombre}</span>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-black font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Brochure
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION ESTILO EDIFICA */}
      <section className="relative h-screen overflow-hidden pt-16">
        <div className="absolute inset-0">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src={proyecto.video3d} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* Información principal */}
            <div>
              <div className="inline-block bg-emerald-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-emerald-400 font-semibold text-sm">{proyecto.estado}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider">{proyecto.nombre}</h1>
              <p className="text-emerald-400 text-xl font-semibold mb-6">{proyecto.tipo}</p>
              <p className="text-white/80 text-lg mb-8 max-w-2xl leading-relaxed">{proyecto.descripcion}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <MapPin className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-sm block">Ubicación</span>
                  <span className="text-white font-semibold text-sm">{proyecto.ubicacion}</span>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Square className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-sm block">Área</span>
                  <span className="text-white font-semibold text-sm">{proyecto.area}</span>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Bed className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-sm block">Dormitorios</span>
                  <span className="text-white font-semibold text-sm">{proyecto.dormitorios}</span>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <DollarSign className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-sm block">Desde</span>
                  <span className="text-white font-semibold text-sm">{proyecto.precio}</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                Contactar Ahora
              </button>
            </div>

            {/* Amenidades estilo Edifica */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">ÁREAS COMUNES</h3>
              <div className="grid grid-cols-2 gap-4">
                {proyecto.amenidades.map((amenidad, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/50 transition-all duration-300"
                  >
                    <amenidad.icon className="w-5 h-5 text-emerald-400" />
                    <span className="text-white text-sm">{amenidad.nombre}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISTA PANORÁMICA SECTION */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img src={img || "/placeholder.svg"} alt="Vista panorámica" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-400/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Camera className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Vista Panorámica {proyecto.nombre}</h3>
                <p className="text-white/70">Experimenta las vistas desde tu futuro hogar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS Y TIPOLOGÍAS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              PLANOS
              <span className="block text-emerald-400 text-2xl md:text-3xl font-light mt-2">
                Tipologías disponibles
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Plano actual */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{proyecto.planos[selectedPlano].tipo}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedPlano(selectedPlano > 0 ? selectedPlano - 1 : proyecto.planos.length - 1)}
                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedPlano(selectedPlano < proyecto.planos.length - 1 ? selectedPlano + 1 : 0)}
                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="relative mb-6">
                <img
                  src={plano1 || "/placeholder.svg"}
                  alt={`Plano ${proyecto.planos[selectedPlano].tipo}`}
                  className="w-full h-80 object-contain bg-white/5 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-black/30 p-4 rounded-xl">
                  <Square className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-sm block">ÁREA</span>
                  <span className="text-white font-bold">{proyecto.planos[selectedPlano].area}</span>
                </div>
                <div className="text-center bg-black/30 p-4 rounded-xl">
                  <Bed className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-sm block">DORMITORIOS</span>
                  <span className="text-white font-bold">{proyecto.planos[selectedPlano].dormitorios}</span>
                </div>
                <div className="text-center bg-black/30 p-4 rounded-xl">
                  <Bath className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-sm block">BAÑOS</span>
                  <span className="text-white font-bold">{proyecto.planos[selectedPlano].baños}</span>
                </div>
              </div>

              {/* Selector de planos */}
              <div className="flex gap-2">
                {proyecto.planos.map((plano, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPlano(index)}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      index === selectedPlano ? "bg-emerald-400 text-black" : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {plano.tipo}
                  </button>
                ))}
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="bg-gradient-to-b from-emerald-400/10 to-emerald-600/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20">
              <h3 className="text-2xl font-bold text-white mb-2">¿Interesado en este proyecto?</h3>
              <p className="text-white/70 mb-6">Déjanos tus datos y un asesor se contactará contigo.</p>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombres"
                    className="bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Apellidos"
                    className="bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors duration-300"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors duration-300"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors duration-300"
                />
                <select className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors duration-300">
                  <option value="">Tiempo estimado de compra</option>
                  <option value="inmediato">Inmediato</option>
                  <option value="3-meses">3 meses</option>
                  <option value="6-meses">6 meses</option>
                  <option value="1-año">1 año</option>
                </select>
                <textarea
                  placeholder="¿Tienes algún comentario?"
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-emerald-400 hover:bg-emerald-500 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105"
              >
                ENVIAR
              </button>

              <p className="text-white/50 text-xs mt-4">
                (*) Campos obligatorios. Al enviar este formulario aceptas nuestra política de privacidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN Y MAPA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              UBICACIÓN
              <span className="block text-emerald-400 text-2xl md:text-3xl font-light mt-2">Sala de ventas</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Información de ubicación */}
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                    <div>
                      <span className="text-white/70 text-sm block">Sala de ventas:</span>
                      <span className="text-white font-semibold">{proyecto.salaVentas.direccion}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-emerald-400" />
                    <div>
                      <span className="text-white/70 text-sm block">Horarios:</span>
                      <span className="text-white font-semibold block">
                        L-V: {proyecto.salaVentas.horarios.lunes_viernes}
                      </span>
                      <span className="text-white font-semibold block">
                        S-D: {proyecto.salaVentas.horarios.sabado_domingo}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-emerald-400" />
                    <div>
                      <span className="text-white/70 text-sm block">Teléfono:</span>
                      <span className="text-white font-semibold">{proyecto.salaVentas.telefono}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-emerald-400" />
                    <div>
                      <span className="text-white/70 text-sm block">Email:</span>
                      <span className="text-white font-semibold">{proyecto.salaVentas.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-emerald-400/10 p-6 rounded-xl border border-emerald-400/20">
                  <Building className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-sm block">Servicios</span>
                  <span className="text-white font-semibold text-sm">Cerca del proyecto</span>
                </div>
                <div className="text-center bg-emerald-400/10 p-6 rounded-xl border border-emerald-400/20">
                  <TreePine className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <span className="text-white/70 text-sm block">Parques</span>
                  <span className="text-white font-semibold text-sm">Áreas verdes</span>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="relative h-96 bg-gray-800 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0927456784216!2d-76.235886!3d-9.9262337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c302c999af73%3A0xceac9a3797efef97!2sJir%C3%B3n%20Pedro%20Puelles%20682%2C%20Hu%C3%A1nuco%2010001!5e0!3m2!1ses-419!2spe!4v1751737066522!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-emerald-400 text-black px-4 py-2 rounded-full font-semibold">
                    {proyecto.nombre}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={estudio1 || "/placeholder.svg"}
                alt="Lifestyle"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-2xl" />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {proyecto.nombre}
                <span className="block text-emerald-400 text-2xl font-light mt-2">Estilo de vida premium</span>
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                En {proyecto.nombre} encontrarás el balance perfecto en un entorno urbano y natural. Una ubicación
                estratégica y un diseño excepcional se conjugan en un espacio que te conecta con tu esencia. Vive frente
                al futuro y eleva tu forma de disfrutar la ciudad.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {proyecto.caracteristicas.slice(0, 4).map((caracteristica, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/10 rounded-xl">
                    <caracteristica.icon className="w-6 h-6 text-emerald-400" />
                    <span className="text-white text-sm">{caracteristica.texto}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DE CONTACTO */}
      <section className="py-16 bg-black border-t border-emerald-400/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">¿Listo para conocer tu nuevo hogar?</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Te recordamos que estamos atendiendo a través de todos nuestros canales digitales
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleSubmit}
              className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Llamar
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Descargar Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DetalleProyecto
