import designer1 from "@/assets/designer-1.jpg";
import designer2 from "@/assets/designer-2.jpg";
import designer3 from "@/assets/designer-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import project3 from "@/assets/project-3.jpg";

export const site = {
  name: "Nuvya Interiors",
  tagline: "Interior design for the way you live.",
  phone: "+91 98490 00000",
  email: "studio@nuvyainteriors.com",
  address: "4th Floor, Jubilee Hills, Hyderabad 500033, India",
  instagram: "https://instagram.com",
  pinterest: "https://pinterest.com",
  linkedin: "https://linkedin.com",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Our Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export const designers = [
  {
    name: "Aarohi Mehta",
    label: "Designer 01",
    role: "Creative Director",
    image: designer1,
    bio: "Fifteen years across residential and boutique hospitality, with a practice built on restraint.",
    philosophy:
      "Focused on creating warm, expressive interiors where material, light, and proportion work together.",
  },
  {
    name: "Kabir Rao",
    label: "Designer 02",
    role: "Principal Designer",
    image: designer2,
    bio: "Trained as an architect, he plans homes from the inside out — circulation first, decoration last.",
    philosophy:
      "Passionate about functional planning and timeless contemporary interiors.",
  },
  {
    name: "Ira Nair",
    label: "Designer 03",
    role: "Design Lead",
    image: designer3,
    bio: "Leads styling, colour and finish curation, and knows every craftsperson in the city by name.",
    philosophy:
      "Brings a strong eye for detail, color, textures, and personalized spaces.",
  },
];

export const services = [
  {
    icon: "PenLine",
    title: "Interior Design",
    description: "Complete interior design for apartments and homes.",
  },
  {
    icon: "LayoutGrid",
    title: "Space Planning",
    description: "Smart layouts designed around everyday living.",
  },
  {
    icon: "Armchair",
    title: "Custom Furniture",
    description: "Bespoke furniture designed specifically for each space.",
  },
  {
    icon: "Layers",
    title: "Material & Finish Selection",
    description: "Curated materials, colors, textures, and finishes.",
  },
  {
    icon: "Lamp",
    title: "Lighting Design",
    description: "Layered lighting that enhances mood and functionality.",
  },
  {
    icon: "KeyRound",
    title: "Turnkey Execution",
    description: "End-to-end project coordination and execution.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the client's lifestyle, needs, personality, and aspirations.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Develop the design direction, mood, materials, and spatial strategy.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create detailed layouts, 3D visuals, materials, furniture, and lighting plans.",
  },
  {
    number: "04",
    title: "Execute",
    description: "Coordinate vendors, contractors, materials, and on-site work.",
  },
  {
    number: "05",
    title: "Reveal",
    description:
      "Deliver a finished home that feels personal, functional, and timeless.",
  },
];

export const testimonials = [
  {
    quote:
      "They didn't just design our home. They understood how we live and translated that into every detail.",
    name: "Ananya & Rahul",
    project: "The Warm Minimalist",
    place: "3 BHK Apartment, Hyderabad",
  },
  {
    quote:
      "Our apartment is 1,100 sq ft and it feels twice that. The planning alone was worth every rupee.",
    name: "Nikhil Menon",
    project: "Urban Serenity",
    place: "2 BHK Apartment, Bangalore",
  },
  {
    quote:
      "Every material was explained, sampled and justified. We never once felt out of the loop.",
    name: "Sharanya Iyer",
    project: "The Earthy Home",
    place: "3 BHK Apartment, Hyderabad",
  },
  {
    quote:
      "The site coordination was flawless. Nine weeks, no surprises, and a home we still can't stop looking at.",
    name: "Deepak & Meera",
    project: "Quiet Luxury",
    place: "4 BHK Apartment, Chennai",
  },
  {
    quote:
      "They pushed back when we were wrong, gently. That honesty is why the house works so well.",
    name: "Farhan Qureshi",
    project: "Private Residence",
    place: "3 BHK Apartment, Hyderabad",
  },
  {
    quote:
      "It feels like us — not like a showroom. That was exactly what we asked for.",
    name: "Tara & Vivek",
    project: "Private Residence",
    place: "2 BHK Apartment, Bangalore",
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Homes Designed" },
  { value: 8, suffix: "+ Years", label: "Design Experience" },
  { value: 3, suffix: "", label: "Designers" },
  { value: 100, suffix: "%", label: "Personalized Design" },
];

export const galleryImages = [
  { src: gallery1, alt: "Minimal apartment kitchen in matte beige" },
  { src: hero2, alt: "Dining area with marble table and cane chairs" },
  { src: gallery2, alt: "Study nook with wooden desk and warm light" },
  { src: project3, alt: "Arched niche with terracotta planter" },
  { src: hero3, alt: "Bedroom with wood headboard and linen bedding" },
  { src: gallery5, alt: "Material palette of oak, stone, linen and brass" },
];
