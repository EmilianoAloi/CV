import { Mail, Phone, Globe, Github, Linkedin, MapPin, Calendar, Building2, GraduationCap } from "lucide-react"

export default function CVVersion2() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="relative">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/30 mx-auto md:mx-0 shadow-lg">
                  <img src="/professional-headshot-of-a-male-developer-with-con.png" alt="Emiliano Aloi" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2 tracking-tight">EMILIANO ALOI</h1>
                <h2 className="text-xl font-light opacity-90 mb-2">Desarrollador Fullstack</h2>
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm opacity-80">
                  <MapPin size={14} />
                  <span>Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-slate-300" />
                <span>+54 9 11 6490 6306</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-slate-300" />
                <span>Emilianoaloi.dev@gmail.com</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://portfolio-emilianoaloi.vercel.app"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 text-sm"
                >
                  <Globe size={14} />
                  <span>Portfolio</span>
                </a>
                <a
                  href="https://github.com/EmilianoAloi"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 text-sm"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/emilianoaloi"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-200 text-sm"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Perfil */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-slate-800 rounded-full"></div>
              PERFIL PROFESIONAL
            </h3>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-800">
              <p className="text-slate-700 leading-relaxed text-lg">
                Desarrollador Web con fuerte orientación Frontend y más de un año de experiencia trabajando en agencias
                de marketing. Me especializo en maquetado, creación de componentes interactivos e integración de APIs
                REST. Actualmente ampliando mis conocimientos en desarrollo Backend con C# .NET en EducacionIT.
              </p>
            </div>
          </section>

          {/* Experiencia */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-slate-800 rounded-full"></div>
              EXPERIENCIA PROFESIONAL
            </h3>
            <div className="space-y-8">
              {/* DOMO */}
              <div className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-800 rounded-full"></div>
                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-slate-800">Desarrollador Frontend</h4>
                    <span className="text-sm text-slate-600 flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      Junio 2024 - Noviembre 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 size={18} className="text-slate-500" />
                    <span className="text-slate-600 font-medium">DOMO (ARG) - Agencia de Marketing</span>
                  </div>
                  <ul className="text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      Desarrollo y optimización de proyectos web en React, WordPress y AEM para AstraZeneca
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      Integración del equipo Frontend junto a 7 desarrolladores
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      Participación en reuniones diarias para planificación y seguimiento de tareas
                    </li>
                  </ul>
                </div>
              </div>

              {/* Black Nexus */}
              <div className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-800 rounded-full"></div>
                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-slate-800">Desarrollador Fullstack</h4>
                    <span className="text-sm text-slate-600 flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      Enero 2024 - Abril 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 size={18} className="text-slate-500" />
                    <span className="text-slate-600 font-medium">Black Nexus SPA (CHI) - Proyecto Freelance</span>
                  </div>
                  <ul className="text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      Desarrollo de POS (Point of Sale) para cafetería con JavaScript, Next.js y Tailwind CSS
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      Desarrollo de APIs Backend utilizando Django y PostgreSQL
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      Trabajo colaborativo con Git y GitHub
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dragones */}
              <div className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-800 rounded-full"></div>
                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-slate-800">Desarrollador Frontend</h4>
                    <span className="text-sm text-slate-600 flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      Enero 2023 - Diciembre 2023
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 size={18} className="text-slate-500" />
                    <span className="text-slate-600 font-medium">Dragones (ARG) - Agencia de Marketing</span>
                  </div>
                  <ul className="text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      Desarrollo de aplicaciones con JavaScript, TypeScript, React, Tailwind CSS y Material-UI
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      Implementación de mejoras de performance en aplicaciones existentes
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      Colaboración estrecha con el equipo de diseñadores
                    </li>
                  </ul>
                </div>
              </div>

              {/* PhoneFix */}
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-400 rounded-full"></div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-slate-800">Fundador y Encargado</h4>
                    <span className="text-sm text-slate-600 flex items-center gap-1 bg-slate-200 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      Febrero 2016 - Marzo 2022
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 size={18} className="text-slate-500" />
                    <span className="text-slate-600 font-medium">PhoneFix Belgrano (ARG)</span>
                  </div>
                  <p className="text-slate-700">Negocio dedicado a venta y servicio técnico de productos Apple.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Habilidades */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-slate-800 rounded-full"></div>
              HABILIDADES TÉCNICAS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-800 mb-4 text-lg">Frontend</h4>
                <div className="space-y-2">
                  {["JavaScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Material UI", "SASS"].map(
                    (skill) => (
                      <div key={skill} className="flex items-center gap-3 text-slate-700">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span>{skill}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-800 mb-4 text-lg">Backend & Database</h4>
                <div className="space-y-2">
                  {["C# .NET", "MySQL", "Firebase", "PostgreSQL"].map((skill) => (
                    <div key={skill} className="flex items-center gap-3 text-slate-700">
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-800 mb-4 text-lg">Herramientas</h4>
                <div className="space-y-2">
                  {["VS Code", "Git", "GitHub"].map((skill) => (
                    <div key={skill} className="flex items-center gap-3 text-slate-700">
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Educación */}
          <section>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-slate-800 rounded-full"></div>
              EDUCACIÓN
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white border border-slate-200 rounded-lg p-6">
                <GraduationCap className="text-slate-600 mt-1" size={24} />
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <h4 className="font-semibold text-slate-800 text-lg">Desarrollador C# .NET</h4>
                    <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      Diciembre 2024 - Actualidad
                    </span>
                  </div>
                  <p className="text-slate-600 font-medium">EducacionIT</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border border-slate-200 rounded-lg p-6">
                <GraduationCap className="text-slate-600 mt-1" size={24} />
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <h4 className="font-semibold text-slate-800 text-lg">Desarrollador Frontend React</h4>
                    <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      Septiembre 2022 - Junio 2023
                    </span>
                  </div>
                  <p className="text-slate-600 font-medium">Coderhouse</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border border-slate-200 rounded-lg p-6">
                <GraduationCap className="text-slate-600 mt-1" size={24} />
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <h4 className="font-semibold text-slate-800 text-lg">Técnico Electrónico</h4>
                    <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      Marzo 2002 - Diciembre 2007
                    </span>
                  </div>
                  <p className="text-slate-600 font-medium">Escuela Técnica Nº 28</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
