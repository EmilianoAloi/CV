"use client";

import {
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  GraduationCap,
  Download,
} from "lucide-react";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important; /* moderno */
            margin: 0 !important;
            padding: 0 !important;
          }

          .no-print {
            display: none !important;
          }

          /* contenedor principal sin límites de ancho */
          .print-container {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
            max-width: none !important;
            width: 100% !important;
          }

          /* anulamos el centrado y el ancho limitado */
          .max-w-4xl {
            max-width: 100% !important;
          }
          .mx-auto {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .bg-gradient-to-r {
            width: 100% !important;
            display: block !important;
          }

          /* fondo blanco liso en secciones grises */
          .bg-gray-50 {
            background: white !important;
          }

          @page {
            margin: 0; /* quita bordes blancos extra */
            size: A4;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 py-8 mt-[-37px]  ">
        <div className="max-w-4xl mx-auto mb-6 no-print">
          <div className="bg-white shadow-sm p-4">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Download size={20} />
              Exportar a PDF
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-lg overflow-hidden print-container">
          {/* Header con gradiente full bleed */}
          <div className="relative print-container text-white">
            {/* Fondo absoluto con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-gray-800" />

            {/* Contenido del header */}
            <div className="relative p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-26 h-26 rounded-full overflow-hidden border-4 border-white/20 mx-auto md:mx-0">
                    <img
                      src="/avatar2.png"
                      alt="Emiliano Aloi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold mb-1">EMILIANO ALOI</h1>
                    <h2 className="text-lg font-light opacity-90">
                      Desarrollador Fullstack
                    </h2>
                  </div>
                </div>
                {/* Datos de contacto */}
                <div className="mt-3 md:mt-0 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Buenos Aires, Argentina</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} />
                    <span>+54 9 11 6490 6306</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    <span>emilianoaloi.dev@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-slate-600">
                <a
                  href="https://portfolio-emilianoaloi.vercel.app"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Globe size={14} />
                  <span className="text-xs">Portfolio</span>
                </a>
                <a
                  href="https://github.com/EmilianoAloi"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Github size={14} />
                  <span className="text-xs">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/emilianoaloi"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Linkedin size={14} />
                  <span className="text-xs">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Perfil */}
            <section className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                PERFIL PROFESIONAL
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Actualmente a cargo del diseño y desarrollo de un sistema de
                gestión para Cliker, empresa de fabricación y venta mayorista de
                productos de bazar. Cuento con experiencia en proyectos para
                clientes globales como AstraZeneca, así como en el desarrollo de
                sitios web para pequeños comercios.
              </p>
            </section>

            {/* Experiencia */}
            <section className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                EXPERIENCIA PROFESIONAL
              </h3>
              <div className="space-y-4">
                {/* Cliker */}
                <div className="pl-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <div className="flex items-center gap-1">
                      <h4 className="text-base font-semibold text-gray-800">
                        Cliker
                      </h4>
                      <span className="text-gray-600 font-medium text-sm">
                        - Desarrollador Fullstack
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 flex items-center gap-1">
                      <Calendar size={12} />
                      Noviembre 2024 - Actualidad
                    </span>
                  </div>
                  <div className="text-gray-700 space-y-0.5 text-xs mt-1 w-4/6">
                    Diseño y desarrollo de aplicación web para gestión de
                    proveedores (facturación, pagos y compras). Responsable de
                    arquitectura, modelado de base de datos, desarrollo de APIs,
                    UI/UX e integración con otro sistema existente, además del
                    despliegue a producción.
                  </div>
                </div>

                {/* DOMO */}
                <div className="pl-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <div className="flex items-center gap-1">
                      <h4 className="text-base font-semibold text-gray-800">
                        DOMO
                      </h4>
                      <span className="text-gray-600 font-medium text-sm">
                        - Desarrollador Frontend
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 flex items-center gap-1">
                      <Calendar size={12} />
                      Junio 2024 - Noviembre 2024
                    </span>
                  </div>
                  <div className="text-gray-700 space-y-0.5 text-xs mt-0 w-xl">
                    Desarrollo de sitios web sobre tratamientos para consulta de
                    médicos de AstraZeneca, utilizando React, WordPress y Adobe
                    AEM, a partir de diseños provistos en Adobe XD por el equipo
                    de diseño, integrando un equipo de 8 desarrolladores.
                  </div>
                </div>

                {/* Dragones */}
                <div className="pl-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <div className="flex items-center gap-1">
                      <h4 className="text-base font-semibold text-gray-800">
                        Dragones
                      </h4>
                      <span className="text-gray-600 font-medium text-sm">
                        - Desarrollador Frontend
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 flex items-center gap-1">
                      <Calendar size={12} />
                      Enero 2023 - Diciembre 2023
                    </span>
                  </div>
                  <div className="text-gray-700 space-y-0.5 text-xs mt-0 w-xl">
                    Primera experiencia en el rubro IT, desarrollando sitios web
                    para pequeños comercios con JavaScript, TypeScript, React,
                    Tailwind CSS y Material-UI, entre otras tecnologías, en
                    colaboración con el equipo de diseño.
                  </div>
                </div>

                {/* PhoneFix */}
                <div className="pl-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <div className="flex items-center gap-1">
                      <h4 className="text-base font-semibold text-gray-800">
                        PhoneFix Belgrano
                      </h4>
                      <span className="text-gray-600 font-medium text-sm">
                        - Fundador y Encargado
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 flex items-center gap-1">
                      <Calendar size={12} />
                      Febrero 2016 - Marzo 2022
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs mt-0 w-xl">
                    Negocio dedicado a venta y servicio técnico de productos
                    Apple.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-6 pt-2">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                HABILIDADES TÉCNICAS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    Frontend
                  </h4>
                  <div className="space-y-1">
                    {["JavaScript", "React", "Next.js", "Tailwind CSS"].map(
                      (skill) => (
                        <div
                          key={skill}
                          className="text-gray-700 text-xs border-l-2 border-gray-300 pl-2"
                        >
                          {skill}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    Backend & Database
                  </h4>
                  <div className="space-y-1">
                    {["Typescript", "MySQL", "Sequelize", "Firebase"].map(
                      (skill) => (
                        <div
                          key={skill}
                          className="text-gray-700 text-xs border-l-2 border-gray-300 pl-2"
                        >
                          {skill}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    Herramientas
                  </h4>
                  <div className="space-y-1">
                    {["VS Code", "Git", "GitHub", "Worckbench"].map((skill) => (
                      <div
                        key={skill}
                        className="text-gray-700 text-xs border-l-2 border-gray-300 pl-2"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Educación */}
            <section className="pt-3">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                EDUCACIÓN
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-slate-700 mt-0.5" size={16} />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h4 className="font-semibold text-gray-800 text-sm">
                        Desarrollador C# .NET
                      </h4>
                      <span className="text-xs text-gray-600">
                        Diciembre 2024 - Actualidad
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs">EducacionIT</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="text-slate-700 mt-0.5" size={16} />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h4 className="font-semibold text-gray-800 text-sm">
                        Desarrollador Frontend React
                      </h4>
                      <span className="text-xs text-gray-600">
                        Septiembre 2022 - Junio 2023
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs">Coderhouse</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="text-slate-700 mt-0.5" size={16} />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h4 className="font-semibold text-gray-800 text-sm">
                        Técnico Electrónico
                      </h4>
                      <span className="text-xs text-gray-600">
                        Marzo 2002 - Diciembre 2007
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs">
                      Escuela Técnica Nº 28
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
