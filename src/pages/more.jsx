import React from "react";

// Array de las imágenes que proporcionaste.
// Asume que están en /public con sus nombres exactos.
const travelImages = [
  {
    id: 1,
    src: "/a1.jpg",
    alt: "Caminata en el bosque con amigos",
    colSpan: "col-span-2",
  },
  {
    id: 2,
    src: "/a2.jpg",
    alt: "Selfie divertida en una pista",
    colSpan: "col-span-1",
  },
  {
    id: 3,
    src: "/a3.jpg",
    alt: "Noche de gala con amigos",
    colSpan: "col-span-1",
  },
  {
    id: 4,
    src: "/a4.jpg",
    alt: "Paddleboarding de cerca en el agua",
    colSpan: "col-span-2",
  },
  {
    id: 5,
    src: "/a8.jpg",
    alt: "Relajado en el borde de la piscina",
    colSpan: "col-span-1",
  },
  {
    id: 6,
    src: "/a10.jpg",
    alt: "Paddleboarding en el lago",
    colSpan: "col-span-1",
  },
  {
    id: 7,
    src: "/a9.jpg",
    alt: "Chico con sombrero y pinzas de ropa",
    colSpan: "col-span-2",
  },
  {
    id: 8,
    src: "/thejimmyjensen_516254652_17995445477804697_807237307470990204_n.jpg",
    alt: "Entrenamiento funcional al aire libre",
    colSpan: "col-span-1",
  },
  {
    id: 9,
    src: "/a6.jpg",
    alt: "Tablas de paddle surf sobre césped",
    colSpan: "col-span-1",
  },
  // a5.jpg (Biblia) la he omitido ya que el tema es "viajes y espontaneidad"
];

export default function MorePhotos() {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      {/* --- Encabezado Atrevido y Fresco --- */}
      <header className="text-center mb-16 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight">
          #<span className="text-pink-600">Travel</span>Vibes ⚡️
        </h1>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto italic font-medium">
          "La vida es corta, los vuelos no deberían serlo. Actitud espontánea y
          destinos inesperados."
        </p>
      </header>

      {/* --- Galería de Fotos (Grid Dinámico) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {travelImages.map((image, index) => (
            <div
              key={image.id}
              // Diseño de mosaico:
              // Alterna entre celdas que abarcan 2 columnas y 1 columna.
              className={`
                ${image.colSpan} 
                row-span-1 
                h-72 
                rounded-xl 
                overflow-hidden 
                shadow-2xl 
                transform 
                hover:scale-[1.03] 
                transition 
                duration-500 
                ease-in-out
                
                ${
                  index === 3 || index === 7 ? "md:row-span-2 md:h-[40rem]" : ""
                }
              `}
            >
              {/* La imagen */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- Llamada a la Acción (CTA) --- */}
      <div className="text-center mt-16">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl transition duration-300 transform hover:rotate-2">
          ¡Más Locuras!
        </button>
      </div>
    </div>
  );
}
