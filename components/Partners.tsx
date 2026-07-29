// src/components/Partners.tsx
export default function Partners() {
  return (
    <section className="bg-gradient-to-r from-violet-100 via-fuchsia-50 to-violet-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-violet-600">
          Con la Confianza de los l&iacute;deres del Sector
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 md:gap-x-20">
          {/* Apple */}
          <div className="flex items-center gap-2 text-gray-600 transition-all hover:text-gray-900 hover:scale-105">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.32-2.48 3.96-2.48 1.26 0 2.43.74 3.28.74.84 0 2.17-.91 3.66-.78 1.42.11 2.48.75 3.19 1.85-2.89 1.55-2.42 5.24.4 6.42-.56 1.45-1.28 2.9-2.48 4.36zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-lg font-semibold">Apple</span>
          </div>

          {/* Microsoft */}
          <div className="flex items-center gap-2 text-gray-600 transition-all hover:text-gray-900 hover:scale-105">
            <svg className="h-7 w-7" viewBox="0 0 23 23" fill="currentColor">
              <path d="M0 0h11v11H0V0zm12 0h11v11H12V0zM0 12h11v11H0V12zm12 0h11v11H12V12z" />
            </svg>
            <span className="text-lg font-semibold">Microsoft</span>
          </div>

          {/* Google */}
          <div className="flex items-center gap-2 text-gray-600 transition-all hover:text-gray-900 hover:scale-105">
            <svg className="h-7 w-7" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-lg font-semibold">Google</span>
          </div>

          {/* Accenture-style */}
          <div className="flex items-center gap-2 text-gray-600 transition-all hover:text-violet-600 hover:scale-105">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-violet-600 text-sm font-bold text-white">
              A
            </div>
            <span className="text-lg font-semibold">Accenture</span>
          </div>

          {/* Figma */}
          <div className="flex items-center gap-2 text-gray-600 transition-all hover:text-violet-600 hover:scale-105">
            <svg className="h-7 w-7" viewBox="0 0 38 57" fill="none">
              <path
                d="M19 28.5C19 23.2533 23.2533 19 28.5 19H38V28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
                fill="#1ABCFE"
              />
              <path
                d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
                fill="#0ACF83"
              />
              <path
                d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
                fill="#FF7262"
              />
              <path
                d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
                fill="#F24E1E"
              />
              <path
                d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
                fill="#A259FF"
              />
            </svg>
            <span className="text-lg font-semibold">Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
}