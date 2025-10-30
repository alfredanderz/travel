export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Nuestra <span className="text-yellow-600">Misión</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Estamos redefiniendo la manera de viajar, convirtiendo cada aventura
            en un acto de responsabilidad y recompensa.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
          <div className="lg:col-span-2 bg-white shadow-xl rounded-lg p-8 transform hover:scale-[1.01] transition duration-300">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-yellow-500 mr-3 text-4xl">🌍</span> Turismo
              Responsable
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              En **[Nombre de tu Plataforma]**, creemos que el turismo puede ser
              una fuerza poderosa para el bien. Nuestro objetivo es **conectar a
              los viajeros** con destinos que priorizan el medio ambiente y la
              cultura local. Cada punto que acumulas y cada insignia que
              desbloqueas es una prueba de tu compromiso con un impacto
              positivo.
            </p>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed font-semibold">
              No solo visitas; contribuyes, aprendes y eres recompensado por
              hacerlo bien.
            </p>
          </div>

          <div className="lg:col-span-1 bg-yellow-500/20 border-l-4 border-yellow-600 p-6 rounded-lg shadow-inner">
            <h4 className="text-xl font-bold text-yellow-800 mb-3">
              Nuestros Pilares
            </h4>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center">
                <span className="text-yellow-600 mr-2 text-2xl">✓</span>{" "}
                Autenticidad cultural
              </li>
              <li className="flex items-center">
                <span className="text-yellow-600 mr-2 text-2xl">✓</span>{" "}
                Sostenibilidad ambiental
              </li>
              <li className="flex items-center">
                <span className="text-yellow-600 mr-2 text-2xl">✓</span>{" "}
                Innovación con tecnología *blockchain*
              </li>
              <li className="flex items-center">
                <span className="text-yellow-600 mr-2 text-2xl">✓</span>{" "}
                Recompensas verificables (Tokens)
              </li>
            </ul>
          </div>
        </section>

        <section className="text-center pt-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Únete a la Comunidad de Viajeros Conscientes
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Tu próxima aventura está esperando. Empieza a ganar puntos y a hacer
            historia hoy.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-105">
            Empezar a Explorar
          </button>
        </section>
      </div>
    </div>
  );
}
