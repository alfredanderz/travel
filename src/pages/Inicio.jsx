export default function Inicio() {
  return (
    <>
      {/* 1. Fondo de Imagen a Pantalla Completa (Fijo) */}
      <div className="fixed inset-0 z-0">
        <img
          src="/globo.png"
          alt="Globo de viaje - Fondo"
          // Clases de Tailwind para que la imagen cubra toda la ventana
          className="w-full h-full object-cover"
        />
        {/* Opcional: Capa oscura para que el texto resalte mejor */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* 2. Contenedor de Contenido (Texto) con Scroll */}
      <div className="relative z-10 min-h-screen">
        <div className="p-6 text-white">
          {" "}
          {/* Agregamos text-white para que se vea sobre la imagen */}
          {/* Título */}
          <h1 className="text-2xl font-bold mb-6">¡Viaja y Explora!</h1>
          {/* Párrafo */}
          <p style={{ fontSize: "22px" }}>
            Explora, acumula puntos y obtén tokens verificables por cada lugar
            que visites
          </p>
        </div>

        {/* 3. Contenido de Relleno para Habilitar el Scroll */}
        {/* Este div simula contenido adicional. Bórralo si tienes contenido real. */}
        <div className="mt-96 pt-96 bg-white/70 p-6">
          <p className="text-black">
            Este es contenido que aparecerá después y que permite el scroll. Si
            el contenido excede la altura de la pantalla, la barra de scroll se
            habilitará.
          </p>
          <div style={{ height: "50vh" }}></div>{" "}
          {/* Más espacio para asegurar el scroll */}
        </div>
      </div>
    </>
  );
}
