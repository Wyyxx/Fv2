import React, { useState } from 'react';
import { GraduationCap, BookOpen, Target, MapPin, Users, ScrollText, Award, Flag } from 'lucide-react';

function App() {
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const [activeObjective, setActiveObjective] = useState<string | null>(null);

  const values = {
    'Excelencia': 'Buscamos la máxima calidad en cada aspecto de nuestra labor educativa, promoviendo el desarrollo integral de nuestros estudiantes.',
    'Responsabilidad': 'Fomentamos el compromiso con las obligaciones académicas y personales, preparando a nuestros estudiantes para ser ciudadanos conscientes.',
    'Respeto': 'Cultivamos un ambiente de consideración mutua, valorando la diversidad y dignidad de cada miembro de nuestra comunidad educativa.',
    'Integridad': 'Promovemos la honestidad y la ética en todas las acciones, formando individuos con principios sólidos.',
    'Compromiso': 'Dedicamos nuestros esfuerzos a la formación de estudiantes preparados para los retos del futuro.'
  };

  const objectives = {
    'Excelencia Académica': 'Mantener los más altos estándares educativos, preparando a nuestros estudiantes para destacar en su educación superior.',
    'Desarrollo Integral': 'Formar estudiantes con habilidades académicas, sociales y emocionales que les permitan enfrentar los retos del futuro.',
    'Innovación Educativa': 'Implementar metodologías de enseñanza modernas y efectivas que faciliten el aprendizaje significativo.',
    'Vinculación Comunitaria': 'Establecer lazos sólidos con la comunidad para enriquecer la experiencia educativa de nuestros estudiantes.'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        >
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <img src="utils/Logo.png" alt="Ortiz Mena Preparatoria" className="h-16" />
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#inicio" className="hover:text-blue-200">Inicio</a>
              <a href="#identidad" className="hover:text-blue-200">Identidad</a>
              <a href="#nosotros" className="hover:text-blue-200">Nosotros</a>
              <a href="#programas" className="hover:text-blue-200">Programas</a>
              <a href="#ubicacion" className="hover:text-blue-200">Ubicación</a>
              <a href="#contacto" className="hover:text-blue-200">Contacto</a>
            </div>
          </nav>
          
          <div className="container mx-auto px-6 py-20 relative text-white">
            <h1 className="text-5xl font-bold mb-4">Preparatoria Ortiz Mena</h1>
            <p className="text-xl mb-8">Formando líderes del mañana con excelencia académica</p>
            <a href="#contacto" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Conoce más
            </a>
          </div>
        </div>
      </header>

      {/* Identity Section */}
      <section id="identidad" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestra Identidad</h2>
          <div className="max-w-4xl mx-auto text-gray-600">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <Award className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-center mb-4">¿Quiénes Somos?</h3>
              <p className="text-center">
                Somos una institución educativa comprometida con la excelencia académica y el desarrollo integral de nuestros estudiantes. 
                Nuestra preparatoria se distingue por formar jóvenes con valores sólidos y habilidades competitivas para su futuro profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ScrollText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misión</h3>
              <p className="text-gray-600">
                Formar estudiantes con excelencia académica y valores sólidos, preparados para enfrentar los retos del futuro.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visión</h3>
              <p className="text-gray-600">
                Ser una institución educativa líder reconocida por su calidad académica y formación integral de estudiantes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <div className="space-y-2">
                {Object.entries(values).map(([value, description]) => (
                  <div 
                    key={value}
                    className="relative"
                    onMouseEnter={() => setActiveValue(value)}
                    onMouseLeave={() => setActiveValue(null)}
                  >
                    <p className="font-semibold text-gray-700 cursor-pointer hover:text-blue-600">{value}</p>
                    {activeValue === value && (
                      <div className="absolute z-10 bg-white shadow-lg rounded-lg p-4 mt-2 text-left">
                        <p className="text-gray-600 text-sm">{description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Objetivos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(objectives).map(([objective, description]) => (
              <div 
                key={objective}
                className="relative"
                onMouseEnter={() => setActiveObjective(objective)}
                onMouseLeave={() => setActiveObjective(null)}
              >
                <div className="bg-gray-50 rounded-lg p-6 text-center h-full cursor-pointer hover:bg-blue-50 transition-colors">
                  <Flag className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
                  <h3 className="font-bold text-lg mb-2">{objective}</h3>
                  {activeObjective === objective && (
                    <div className="absolute z-10 bg-white shadow-lg rounded-lg p-4 mt-2 left-0 right-0">
                      <p className="text-gray-600 text-sm">{description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programas" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Programas</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Programa Académico</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Materias básicas y avanzadas</li>
                <li>• Programas de tutoría personalizada</li>
                <li>• Actividades extracurriculares</li>
                <li>• Preparación para universidad</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Desarrollo Integral</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Actividades deportivas</li>
                <li>• Programas culturales</li>
                <li>• Desarrollo de liderazgo</li>
                <li>• Orientación vocacional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Ubicación</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Dirección</h3>
                  <p className="text-gray-600">
                    Edificio Roka local 10<br />
                    Boulevard Antonio Ortiz Mena y calle Laguna de Frailes<br />
                    Chihuahua, México
                  </p>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d218.82031804339564!2d-106.10020036982682!3d28.655973007600586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1738101833347!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Nombre</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg text-gray-900" />
              </div>
              <div>
                <label className="block mb-2">Correo Electrónico</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg text-gray-900" />
              </div>
              <div>
                <label className="block mb-2">Mensaje</label>
                <textarea className="w-full px-4 py-2 rounded-lg text-gray-900" rows={4}></textarea>
              </div>
              <button type="submit" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Preparatoria Ortiz Mena. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;