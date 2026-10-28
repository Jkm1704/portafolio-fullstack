import React, { useState } from "react";

function App() {
  const [filtroProyectos, setFiltroProyectos] = useState("todos");
  const [modalProyecto, setModalProyecto] = useState(null);
  const [formContacto, setFormContacto] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const proyectos = [
    {
      id: 1,
      titulo: "Sistema de Gestión TI & Automatización de Reportes Excel",
      categoria: "fullstack",
      descripcionCorta:
        "Plataforma web desacoplada para gestión de inventario TI, préstamos, tableros Kanban y procesamiento masivo de datos CSV a Excel con filtros.",
      descripcionLarga:
        "Desarrollé una solución Full Stack para resolver cuellos de botella en la gestión de activos informáticos y el procesamiento masivo de datos. Incluye un motor de parseo capaz de filtrar miles de registros y exportar plantillas base normativas formateadas en ExcelJS.",
      imagen:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: [
        "React.js",
        "Node.js",
        "Express",
        "Prisma ORM",
        "ExcelJS",
        "Vercel",
        "Render",
      ],
      demoUrl: "https://proyecto-area-tecnologia.vercel.app/",
      githubUrl: "https://github.com/",
      caracteristicas: [
        "Procesador masivo de CSV/Excel con filtros múltiples en tiempo real.",
        "Control de préstamos de equipos e inventario de tecnología.",
        "Tablero Kanban interactivo para flujo de tareas.",
        "Despliegue continuo en arquitectura desacoplada (Vercel + Render).",
      ],
    },
    {
      id: 2,
      titulo: "Atrapa Monedas - Landing Page & Game Demo",
      categoria: "frontend",
      descripcionCorta:
        "Sitio web interactivo estilo pixel-art para un videojuego arcade con demo jugable en navegador, catálogo de personajes y galería multimedia.",
      descripcionLarga:
        "Proyecto frontend interactivo desarrollado con React y HTML5 Canvas que presenta la experiencia completa de un videojuego retro. Ofrece una sección demo totalmente jugable mediante teclado, galería multimedia filtrable y catálogo de personajes.",
      imagen:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      tags: ["React.js", "HTML5 Canvas", "CSS3 Neon Glow", "Vite", "Vercel"],
      demoUrl: "https://v0-website-clone-kappa-ten-72.vercel.app/",
      githubUrl: "https://github.com/",
      caracteristicas: [
        "Mini-juego jugable en navegador integrado con HTML5 Canvas.",
        "Galería de multimedia filtrable (UI, Gameplay, Arte, Trailer).",
        "Diseño temático Pixel-Art con efectos Neón Glow y fuentes retro.",
        "Integración de catálogo de personajes con mecánicas y lore.",
      ],
    },
  ];

  const proyectosFiltrados =
    filtroProyectos === "todos"
      ? proyectos
      : proyectos.filter((p) => p.categoria === filtroProyectos);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    try {
      const res = await fetch("http://localhost:5000/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formContacto),
      });

      if (res.ok) {
        setMensajeEnviado(true);
        setFormContacto({ nombre: "", email: "", mensaje: "" });
      } else {
        alert("Error al enviar mensaje");
      }
    } catch (error) {
      console.error(error);
      alert("No se pudo conectar con el servidor backend");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#e6f1ff]">
      {/* NAVEGACIÓN */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur-md border-b border-[#233554]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#inicio"
            className="text-xl font-bold text-[#64ffda] flex items-center gap-2"
          >
            <span>&gt;_ Desarrollador Full Stack</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-[#64ffda] transition-colors">
              Inicio
            </a>
            <a
              href="#sobre-mi"
              className="hover:text-[#64ffda] transition-colors"
            >
              Sobre Mí
            </a>
            <a
              href="#proyectos"
              className="hover:text-[#64ffda] transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="hover:text-[#64ffda] transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="pt-36 pb-20 px-6 max-w-6xl mx-auto">
        <div className="space-y-6">
          <p className="text-[#64ffda] font-mono text-base">
            Hola, mi nombre es SANTIAGO GALLARDO SICACHA
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#ccd6f6]">
            Desarrollador Web Full Stack.
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
            Construyo soluciones digitales y automatizaciones eficientes.
          </h2>
          <p className="max-w-2xl text-[#8892b0] text-lg leading-relaxed">
            Especializado en la creación de aplicaciones web completas en
            React.js y Node.js, optimización de procesamiento de datos y
            despliegue de arquitectura en la nube.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="px-6 py-3 bg-[#64ffda] text-[#0a192f] font-bold rounded hover:bg-[#64ffda]/80 transition-all"
            >
              Ver Mis Proyectos ➔
            </a>
            <a
              href="#contacto"
              className="px-6 py-3 border border-[#64ffda] text-[#64ffda] font-bold rounded hover:bg-[#64ffda]/10 transition-all"
            >
              Contactar 
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ & STACK */}
      <section
        id="sobre-mi"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-[#233554]"
      >
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-10">
          <span className="text-[#64ffda]"></span> Sobre Mí & Habilidades
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-[#8892b0] leading-relaxed">
            <p>
              Soy un desarrollador apasionado por transformar problemas
              operativos en herramientas digitales intuitivas y rápidas.
            </p>
            <p>
              Tengo experiencia construyendo desde sistemas de inventario y
              plataformas de gestión ágil hasta procesadores masivos de archivos
              Excel e interfaces interactivas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#112240] p-4 rounded-lg border border-[#233554]">
              <h3 className="font-bold text-[#ccd6f6]">Frontend</h3>
              <p className="text-xs text-[#8892b0]">
                React.js, Vite, JavaScript (ES6+), Tailwind CSS, HTML5 Canvas
              </p>
            </div>
            <div className="bg-[#112240] p-4 rounded-lg border border-[#233554]">
              <h3 className="font-bold text-[#ccd6f6]">Backend</h3>
              <p className="text-xs text-[#8892b0]">
                Node.js, Express.js, APIs REST, Multer, ExcelJS
              </p>
            </div>
            <div className="bg-[#112240] p-4 rounded-lg border border-[#233554]">
              <h3 className="font-bold text-[#ccd6f6]">Bases de Datos</h3>
              <p className="text-xs text-[#8892b0]">
                Prisma ORM, SQLite, PostgreSQL
              </p>
            </div>
            <div className="bg-[#112240] p-4 rounded-lg border border-[#233554]">
              <h3 className="font-bold text-[#ccd6f6]">Despliegue</h3>
              <p className="text-xs text-[#8892b0]">
                Vercel, Render, Git, GitHub CI/CD
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-[#233554]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-3xl font-bold text-[#ccd6f6]">
            <span className="text-[#64ffda]"></span> Proyectos Destacados
          </h2>
          <div className="flex gap-2 bg-[#112240] p-1 rounded-lg border border-[#233554] w-fit">
            <button
              onClick={() => setFiltroProyectos("todos")}
              className={`px-4 py-2 rounded text-xs font-bold transition-all ${
                filtroProyectos === "todos"
                  ? "bg-[#64ffda] text-[#0a192f]"
                  : "text-[#8892b0]"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFiltroProyectos("fullstack")}
              className={`px-4 py-2 rounded text-xs font-bold transition-all ${
                filtroProyectos === "fullstack"
                  ? "bg-[#64ffda] text-[#0a192f]"
                  : "text-[#8892b0]"
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setFiltroProyectos("frontend")}
              className={`px-4 py-2 rounded text-xs font-bold transition-all ${
                filtroProyectos === "frontend"
                  ? "bg-[#64ffda] text-[#0a192f]"
                  : "text-[#8892b0]"
              }`}
            >
              Frontend / Juegos
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {proyectosFiltrados.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-[#112240] rounded-xl overflow-hidden border border-[#233554] hover:border-[#64ffda]/50 transition-all flex flex-col"
            >
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-sm text-[#8892b0] mb-4">
                    {proyecto.descripcionCorta}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyecto.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono bg-[#0a192f] text-[#64ffda] px-2.5 py-1 rounded border border-[#64ffda]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#233554]">
                  <button
                    onClick={() => setModalProyecto(proyecto)}
                    className="text-xs font-bold text-[#64ffda] hover:underline"
                  >
                    Ver detalles +
                  </button>
                  <div className="flex items-center gap-3">
                    <a
                      href={proyecto.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#64ffda] font-mono border border-[#64ffda]/40 px-2 py-1 rounded hover:bg-[#64ffda]/10"
                    >
                      Demo 🔗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-20 px-6 max-w-4xl mx-auto border-t border-[#233554]"
      >
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-[#ccd6f6]">
            Ponte en Contacto
          </h2>
          <p className="text-[#8892b0]">
            Actualmente estoy en búsqueda de oportunidades laborales. ¡Envíame un mensaje!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#112240] p-8 rounded-xl border border-[#233554] space-y-6"
        >
          <div>
            <label className="block text-xs font-bold text-[#8892b0] mb-2">
              Nombre
            </label>
            <input
              type="text"
              required
              value={formContacto.nombre}
              onChange={(e) =>
                setFormContacto({ ...formContacto, nombre: e.target.value })
              }
              className="w-full bg-[#0a192f] border border-[#233554] rounded p-3 text-sm text-[#ccd6f6] focus:border-[#64ffda] outline-none"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#8892b0] mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              value={formContacto.email}
              onChange={(e) =>
                setFormContacto({ ...formContacto, email: e.target.value })
              }
              className="w-full bg-[#0a192f] border border-[#233554] rounded p-3 text-sm text-[#ccd6f6] focus:border-[#64ffda] outline-none"
              placeholder="tu.correo@ejemplo.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#8892b0] mb-2">
              Mensaje
            </label>
            <textarea
              required
              rows={4}
              value={formContacto.mensaje}
              onChange={(e) =>
                setFormContacto({ ...formContacto, mensaje: e.target.value })
              }
              className="w-full bg-[#0a192f] border border-[#233554] rounded p-3 text-sm text-[#ccd6f6] focus:border-[#64ffda] outline-none"
              placeholder="Hola, me gustaría hablar sobre una oportunidad..."
            />
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="w-full py-3 bg-[#64ffda] text-[#0a192f] font-bold rounded hover:bg-[#64ffda]/80 transition-all"
          >
            {enviando ? "Enviando..." : "Enviar Mensaje "}
          </button>

          {mensajeEnviado && (
            <div className="p-3 bg-[#64ffda]/10 border border-[#64ffda] text-[#64ffda] rounded text-center text-xs">
              ¡Mensaje enviado con éxito! Te responderé lo antes posible.
            </div>
          )}
        </form>
      </section>

      {/* MODAL DETALLES DE PROYECTO */}
      {modalProyecto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#112240] border border-[#233554] rounded-xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalProyecto(null)}
              className="absolute top-4 right-4 text-[#8892b0] hover:text-[#64ffda] font-bold text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">
              {modalProyecto.titulo}
            </h3>
            <p className="text-sm text-[#8892b0] mb-6 leading-relaxed">
              {modalProyecto.descripcionLarga}
            </p>

            <h4 className="text-xs font-bold text-[#64ffda] uppercase tracking-wider mb-3">
              Características Clave
            </h4>
            <ul className="space-y-2 mb-6">
              {modalProyecto.caracteristicas.map((c, i) => (
                <li
                  key={i}
                  className="text-xs text-[#8892b0] flex items-start gap-2"
                >
                  <span className="text-[#64ffda]">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 pt-4 border-t border-[#233554]">
              <a
                href={modalProyecto.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 bg-[#64ffda] text-[#0a192f] text-center font-bold text-xs rounded hover:bg-[#64ffda]/80 transition-all"
              >
                Ver Demo en Vivo
              </a>
              <a
                href={modalProyecto.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 border border-[#233554] text-[#ccd6f6] text-center font-bold text-xs rounded hover:border-[#64ffda] transition-all"
              >
                Ver Código GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;