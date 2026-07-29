// src/components/SearchCourses.tsx
import Link from "next/link";

export default function SearchCourses() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title + Search Bar */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Buscar Cursos
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Encuentra el curso perfecto para tus objetivos profesionales.
          </p>

          {/* Search Input */}
          <div className="mt-8 mx-auto max-w-2xl">
            <div className="flex rounded-full bg-white shadow-lg ring-1 ring-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-violet-500 transition">
              <div className="flex items-center pl-5 text-gray-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar Cursos..."
                className="w-full border-0 bg-transparent py-4 pl-3 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 text-base"
              />
              <button
                type="button"
                className="m-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:scale-105 active:scale-100"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid: Students photos + Benefits */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Students photos grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 shadow-md ring-1 ring-black/5 transition hover:shadow-xl hover:scale-[1.02]"
              >
                {/* Placeholder for student photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-violet-300 to-fuchsia-300 flex items-center justify-center">
                    <svg
                      className="h-10 w-10 text-white/80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>

          {/* Right - Gain for our Online Learning */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Gana con nuestro{" "}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Aprendizaje en Línea
              </span>
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Un sistema educativo totalmente nuevo que cambiará tu vida para siempre. Únete a miles de estudiantes que ya aprenden con nosotros.
            </p>

            <ul className="mt-8 space-y-5">
              {/* Online Degree */}
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                  <svg
                    className="h-5 w-5 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    T&iacute;tulo en L&iacute;nea
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Obtén Certificado reconocido completamente en línea de los mejores expertos.
                  </p>
                </div>
              </li>

              {/* Certification */}
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fuchsia-100">
                  <svg
                    className="h-5 w-5 text-fuchsia-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Certification
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Get industry-recognized certificates after completing courses.
                  </p>
                </div>
              </li>

              {/* Placements */}
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                  <svg
                    className="h-5 w-5 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Colocaciones
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Te ofrecemos un servicio de apoyo especializado para ayudarte a conseguir el trabajo de tus sueños.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="#courses"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:scale-105 active:scale-100"
              >
                Explorar Todos los Cursos
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}