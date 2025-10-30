const Discover = () => {
  return (
    <div className="w-full bg-gray-900 text-white">
      <HeroSection />

      <AboutSection />

      <AchievementsSection />

      <BadgesSection />

      <InspirationSection />
    </div>
  );
};

export default Discover;

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-start p-8 md:p-16">
    <img
      src="/1.jpg"
      alt="Paisaje de Myanmar con globos aerostáticos"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

    <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

    <div className="relative z-20 max-w-lg text-left">
      <div className="mb-4">
        <p className="text-xl text-yellow-400 font-bold mb-1">Inicio</p>
        <h1 className="text-6xl font-extrabold text-white mb-4">Viaja</h1>
      </div>

      <p className="text-lg text-white mb-6">
        Explora, acumula puntos y obtén tokens verificables por cada lugar que
        visites
      </p>

      <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300">
        ver más
      </button>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-20 px-8 md:px-16 bg-gray-900">
    <div className="max-w-4xl mx-auto mb-16 text-center">
      <div className="inline-block p-4 bg-white text-gray-900 font-bold text-3xl md:text-5xl rounded-lg">
        Contribuye al turismo sostenible
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
      <div className="md:w-1/2 text-left space-y-8 text-xl md:text-2xl text-gray-300">
        <p>
          <span className="text-white font-semibold">
            Descubre una nueva forma de hacer turismo sostenible.
          </span>{" "}
          Nuestra plataforma te recompensa por visitar lugares turísticos
          responsables con el medio ambiente y la cultura local.
        </p>
        <p>
          A través de un sistema innovador donde cada visita se convierte en un
          logro certificado y verificable. Acumula puntos, desbloquea insignias
          y forma parte de una comunidad comprometida con el turismo
          responsable.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src="/2.png" alt="Mapa y avión" className="w-full max-w-sm" />
      </div>
    </div>
  </section>
);

const AchievementsSection = () => (
  <section className="relative py-20 px-8 md:px-16 overflow-hidden">
    <img
      src="/3.jpg"
      alt="Paisaje de Halong Bay con fotos flotantes"
      className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
    />
    <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

    <div className="relative z-20 max-w-7xl mx-auto text-center">
      <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-16">
        Puntos y Logros
      </h2>

      <div className="bg-gray-800/80 p-8 rounded-xl shadow-2xl">
        <div className="inline-block bg-white p-3 md:p-6 mb-8 transform skew-x-[-15deg] rounded-lg">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 skew-x-[15deg]">
            Gana puntos por cada lugar visitado
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden shadow-lg border-4 border-gray-700"
              >
                <img
                  src={`/placeholder-${i}.jpg`}
                  alt="Viajero"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  </section>
);

// === SECCIÓN 4: Insignias (5.png y 6.jpg) ===
const BadgesSection = () => (
  <section className="py-20 px-8 md:px-16 bg-gray-900">
    <div className="max-w-7xl mx-auto text-center">
      {/* Título de Insignias (Basado en 5.png) */}
      <div className="inline-block relative mb-16">
        <div className="p-4 bg-white text-gray-900 font-bold text-3xl md:text-5xl relative z-10">
          Desbloquea insignias especiales
        </div>
        {/* Efecto de línea/marco de 5.png */}
        <div className="absolute inset-0 border-8 border-white transform translate-x-4 translate-y-4"></div>
      </div>

      {/* Galería de Insignias (Basada en 6.jpg) */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-6 max-w-4xl mx-auto">
        {/* Aquí mapearías tus insignias, usando la imagen 6.jpg como fuente */}
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="w-full aspect-square flex items-center justify-center"
            >
              {/* Usarías la imagen 6.jpg o un crop de ella */}
              <img
                src="/6.jpg"
                alt={`Insignia ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  </section>
);

// === SECCIÓN 5: Inspiración/Viajes (8.jpg, 9.png y 10.jpg) ===
const InspirationSection = () => (
  <section className="py-20 px-8 md:px-16 bg-gray-800">
    {/* Título (Basado en 9.png) */}
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white">
        Cada lugar tiene una historia
      </h2>
      <div className="w-full h-1 bg-white mx-auto my-4 max-w-xs"></div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white">
        que merece ser contada
      </h2>
    </div>

    {/* Bloque de Destino (Basado en 8.jpg) */}
    <div className="flex flex-col md:flex-row items-center bg-gray-900 rounded-xl shadow-2xl overflow-hidden mb-16 max-w-6xl mx-auto">
      <div className="md:w-1/2">
        <img
          src="/8.jpg"
          alt="Hombre haciendo paddle surf"
          className="w-full h-full object-cover min-h-[300px]"
        />
      </div>
      <div className="md:w-1/2 p-8 md:p-12 text-left">
        <h3 className="text-4xl md:text-5xl font-extrabold text-white">
          Cada Destino tiene algo que ofrecer
        </h3>
      </div>
    </div>

    {/* Galería de Fotos (Basado en 10.jpg) */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {/* Usarías las diferentes fotos de 10.jpg */}
      <div className="col-span-2 row-span-2 aspect-square rounded-xl overflow-hidden shadow-lg">
        <img
          src="/10_main.jpg"
          alt="Hombre en tabla de surf"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
        <img
          src="/10_top_right.jpg"
          alt="Tablas de surf en césped"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
        <img
          src="/10_bottom_right.jpg"
          alt="Gente caminando en el bosque"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

// Si estás usando Next.js, recuerda importar React:
// import React from 'react';
