"use client"

import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold tracking-wider">blackhouse</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-300 hover:text-white transition-colors duration-200">
              Servicios
            </a>
            <a href="#proyectos" className="text-gray-300 hover:text-white transition-colors duration-200">
              Proyectos
            </a>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              <Phone size={18} />
              <span className="text-sm">+123 456 7890</span>
            </a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200">
              Cotizar Proyecto
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
              <a
                href="#servicios"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Servicios
              </a>
              <a
                href="#proyectos"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Proyectos
              </a>
              <div className="border-t border-gray-700 pt-3 mt-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <Phone size={18} />
                  <span>+123 456 7890</span>
                </a>
                <button className="w-full mt-2 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200">
                  Cotizar Proyecto
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
