// Using the sample data provided by the user as the primary source for now.
// If an API is implemented later, fetching logic can be added in the Testimonials component.
export const testimonialsData = [
  {
    id: 1,
    name: "María González",
    role: "Empresaria - Madrid",
    content: "Gracias a ConsultGlobalLex, resolví un tema fiscal complejo en tiempo récord. Profesionalismo total.",
    image: "/images/testimonials/maria-gonzalez.jpg", // Relative path for public folder
    initials: "MG", // Added initials for fallback
    rating: 5 // Assuming 5 stars
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    role: "Autónomo - Barcelona",
    content: "Me asesoraron legalmente con una cercanía y claridad que nunca había encontrado en otros despachos.",
    image: "/images/testimonials/carlos-ruiz.jpg", // Relative path for public folder
    initials: "CR", // Added initials for fallback
    rating: 5 // Assuming 5 stars
  },
  {
    id: 3,
    name: "Lucía Fernández",
    role: "Directora de RRHH - Valencia",
    content: "El servicio fue impecable. Atención rápida, humana y efectiva. Recomiendo ConsultGlobalLex sin dudar.",
    image: "/images/testimonials/lucia-fernandez.jpg", // Relative path for public folder
    initials: "LF", // Added initials for fallback
    rating: 5 // Assuming 5 stars
  }
];