import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

export type Room = { name: string; image: string; note: string };

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: string;
  style: string;
  year: string;
  area: string;
  excerpt: string;
  overview: string;
  concept: string;
  cover: string;
  hero: string;
  rooms: Room[];
};

export const projects: Project[] = [
  {
    slug: "the-warm-minimalist",
    name: "The Warm Minimalist",
    location: "Hyderabad",
    type: "3 BHK Apartment",
    style: "Warm Minimalism",
    year: "2025",
    area: "1,860 sq ft",
    excerpt:
      "A pared-back home where oak, lime plaster and linen do all the talking.",
    overview:
      "Designed as a calm retreat within the energy of the city, this 3 BHK apartment combines warm natural materials, muted tones, and functional planning.",
    concept:
      "We removed one wall to let the living and dining breathe as a single volume, then anchored it with a full-height oak slat wall. Every surface was chosen for how it ages — travertine, unlacquered brass, handloom cotton.",
    cover: project1,
    hero: hero1,
    rooms: [
      { name: "Living Room", image: hero1, note: "Sunken seating around a travertine plinth table." },
      { name: "Dining Area", image: hero2, note: "Oval marble table under twin paper pendants." },
      { name: "Kitchen", image: gallery1, note: "Matte beige cabinetry with brushed brass fittings." },
      { name: "Master Bedroom", image: hero3, note: "Wood headboard wall with integrated sconces." },
      { name: "Study Nook", image: gallery2, note: "A quiet corner carved out of the passage." },
      { name: "Material Palette", image: gallery5, note: "Oak, travertine, linen, clay, brass." },
    ],
  },
  {
    slug: "urban-serenity",
    name: "Urban Serenity",
    location: "Bangalore",
    type: "2 BHK Apartment",
    style: "Contemporary",
    year: "2025",
    area: "1,120 sq ft",
    excerpt:
      "A compact apartment planned for two, with storage hidden in every plane.",
    overview:
      "A young couple's first home, planned so that nothing feels tight. Low furniture, long sightlines and a soft grey-beige palette make 1,120 sq ft read considerably larger.",
    concept:
      "Storage disappears into full-height joinery finished in the same tone as the walls. The balcony was pulled into the living room visually with a continuous floor and sheer drapery.",
    cover: project2,
    hero: project2,
    rooms: [
      { name: "Living Room", image: project2, note: "Modular seating with a jute floor field." },
      { name: "Dining Area", image: hero2, note: "Compact marble table doubling as a work surface." },
      { name: "Kitchen", image: gallery1, note: "Efficient L-shaped layout with concealed appliances." },
      { name: "Bedroom", image: hero3, note: "Warm wood and layered linen." },
    ],
  },
  {
    slug: "the-earthy-home",
    name: "The Earthy Home",
    location: "Hyderabad",
    type: "3 BHK Apartment",
    style: "Organic Modern",
    year: "2024",
    area: "1,940 sq ft",
    excerpt: "Clay plaster, arched niches and handmade objects throughout.",
    overview:
      "A home built around texture. Lime-plastered walls, terracotta accents and rattan furniture bring a handmade warmth rarely found in a high-rise apartment.",
    concept:
      "Arched openings soften an otherwise orthogonal plan. Colour is drawn entirely from earth — ochre, clay, sand — and lighting is kept low and warm to hold that palette after dark.",
    cover: project3,
    hero: project3,
    rooms: [
      { name: "Entrance & Living", image: project3, note: "Arched niche with a terracotta urn." },
      { name: "Kitchen", image: gallery1, note: "Clay tile backsplash and open teak shelving." },
      { name: "Master Bedroom", image: hero3, note: "Textured plaster headboard wall." },
      { name: "Material Palette", image: gallery5, note: "Terracotta, lime plaster, cane, oak." },
    ],
  },
  {
    slug: "quiet-luxury",
    name: "Quiet Luxury",
    location: "Chennai",
    type: "4 BHK Apartment",
    style: "Modern Luxury",
    year: "2024",
    area: "2,760 sq ft",
    excerpt: "Book-matched stone, brass detailing and restrained drama.",
    overview:
      "A family apartment where luxury is expressed through material quality rather than ornament. A single book-matched marble wall does the work of an entire feature scheme.",
    concept:
      "The plan was reorganised around a long central spine. Deep taupe upholstery, herringbone oak flooring and layered lighting keep the scale generous but never cold.",
    cover: project4,
    hero: project4,
    rooms: [
      { name: "Living Room", image: project4, note: "Book-matched marble with brushed brass sconces." },
      { name: "Dining Area", image: hero2, note: "Sculptural pendants over a stone table." },
      { name: "Master Bedroom", image: hero3, note: "Full-height wood panelling and linen drapes." },
      { name: "Study", image: gallery2, note: "A private corner for reading and work." },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
