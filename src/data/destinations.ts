export interface Destination {
  id: string;
  name: string;
  desc: string;
  longDesc: string;
  location: string;
  price: number;
  currency: "USD";
  checkIn: Date;
  checkOut: Date;
  guests: number;
  stars: number;
  reviews: number;
  image: string;
  heroImage: string;
  amenities: string[];
  rooms: { type: string; price: number; desc: string }[];
  guestReviews: {
    name: string;
    date: Date;
    rating: number;
    text: string;
  }[];
}

export const destinations: Destination[] = [
  {
    id: "tokyo",
    name: "Tokyo, Japan",
    desc: "A dazzling metropolis where ancient temples stand alongside neon-lit skyscrapers. Explore centuries of history, world-class cuisine, and cutting-edge technology.",
    longDesc:
      "Tokyo seamlessly blends ultra-modern innovation with centuries-old tradition. Wander through the serene Meiji Shrine before diving into the electric energy of Shibuya Crossing. Sample exquisite sushi at Tsukiji, browse quirky boutiques in Harajuku, and soak in panoramic city views from Tokyo Skytree. Whether you seek tranquil gardens or vibrant nightlife, Tokyo delivers an unforgettable experience.",
    location: "Shinjuku, Tokyo, Japan",
    price: 1249,
    currency: "USD",
    checkIn: new Date("2026-04-15"),
    checkOut: new Date("2026-04-22"),
    guests: 2,
    stars: 4.8,
    reviews: 2347,
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=600&fit=crop",
    amenities: ["wifi", "pool", "spa", "restaurant", "gym", "airport-shuttle"],
    rooms: [
      { type: "Standard", price: 1249, desc: "Comfortable room with city views and modern amenities." },
      { type: "Deluxe", price: 1749, desc: "Spacious room with premium furnishings and panoramic windows." },
      { type: "Suite", price: 2499, desc: "Luxurious suite with separate living area and skyline views." },
    ],
    guestReviews: [
      { name: "Sarah M.", date: new Date("2026-01-12"), rating: 5, text: "Absolutely stunning hotel! The view from our room was breathtaking and the staff went above and beyond." },
      { name: "James K.", date: new Date("2025-12-28"), rating: 4, text: "Great location near Shinjuku station. The spa was wonderful. Only minor issue was slow elevator during peak hours." },
      { name: "Yuki T.", date: new Date("2025-11-15"), rating: 5, text: "Perfect stay from start to finish. The restaurant served the best tempura I have ever had." },
      { name: "Linda R.", date: new Date("2025-10-22"), rating: 4, text: "Beautiful property with excellent amenities. The pool area was a nice surprise for a city hotel." },
    ],
  },
  {
    id: "santorini",
    name: "Santorini, Greece",
    desc: "White-washed villages perched on volcanic cliffs overlooking the Aegean Sea. Legendary sunsets, local wines, and Mediterranean charm at every turn.",
    longDesc:
      "Santorini is a jewel of the Cyclades, famous for its dramatic caldera views, blue-domed churches, and sunsets that paint the sky in shades of gold and crimson. Explore the cliffside village of Oia, taste wines from volcanic vineyards, relax on unique red and black sand beaches, and discover ancient ruins at Akrotiri. Every corner of this island offers a postcard-perfect moment.",
    location: "Oia, Santorini, Greece",
    price: 1879,
    currency: "USD",
    checkIn: new Date("2026-06-01"),
    checkOut: new Date("2026-06-08"),
    guests: 2,
    stars: 4.9,
    reviews: 1823,
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&h=600&fit=crop",
    amenities: ["wifi", "pool", "spa", "restaurant", "gym", "airport-shuttle"],
    rooms: [
      { type: "Standard", price: 1879, desc: "Cozy cave-style room with caldera views." },
      { type: "Deluxe", price: 2579, desc: "Elegant room with private terrace and infinity pool access." },
      { type: "Suite", price: 3299, desc: "Romantic suite with private plunge pool and sunset views." },
    ],
    guestReviews: [
      { name: "Marco D.", date: new Date("2025-09-18"), rating: 5, text: "The most romantic place we have ever visited. The sunset from our terrace was unforgettable." },
      { name: "Emily W.", date: new Date("2025-08-05"), rating: 5, text: "Incredible service and the views are even better than the photos. Will definitely return!" },
      { name: "Chen L.", date: new Date("2025-07-22"), rating: 4, text: "Amazing property. The restaurant was superb. Only wish the gym was a bit larger." },
    ],
  },
  {
    id: "kyoto",
    name: "Kyoto, Japan",
    desc: "The cultural heart of Japan, home to over two thousand temples and shrines. Stroll through bamboo groves, attend a tea ceremony, and witness geisha culture.",
    longDesc:
      "Kyoto is where Japan's soul resides. Walk beneath the iconic vermillion torii gates of Fushimi Inari, lose yourself in the ethereal Arashiyama Bamboo Grove, and find peace in the Zen rock gardens of Ryoan-ji. Each season transforms the city — cherry blossoms in spring, fiery maples in autumn. Traditional ryokan inns, kaiseki cuisine, and the art of the tea ceremony await.",
    location: "Higashiyama, Kyoto, Japan",
    price: 1099,
    currency: "USD",
    checkIn: new Date("2026-05-10"),
    checkOut: new Date("2026-05-17"),
    guests: 1,
    stars: 4.7,
    reviews: 1956,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=600&fit=crop",
    amenities: ["wifi", "spa", "restaurant", "gym", "airport-shuttle"],
    rooms: [
      { type: "Standard", price: 1099, desc: "Traditional tatami room with garden views." },
      { type: "Deluxe", price: 1549, desc: "Upgraded room with private onsen bath." },
      { type: "Suite", price: 2199, desc: "Premium suite blending traditional and modern design." },
    ],
    guestReviews: [
      { name: "Aiko N.", date: new Date("2026-01-03"), rating: 5, text: "A perfect blend of tradition and comfort. The garden was so peaceful I never wanted to leave." },
      { name: "David H.", date: new Date("2025-11-20"), rating: 4, text: "Wonderful cultural experience. The staff arranged a private tea ceremony for us which was magical." },
      { name: "Sophie B.", date: new Date("2025-10-14"), rating: 5, text: "The most authentic stay I have had in Japan. Waking up to the temple bells was surreal." },
    ],
  },
  {
    id: "paris",
    name: "Paris, France",
    desc: "The City of Light beckons with iconic landmarks, world-renowned museums, and a cafe culture that turns every meal into an occasion.",
    longDesc:
      "Paris captivates with its timeless elegance. Ascend the Eiffel Tower at dusk, wander the halls of the Louvre, and stroll along the Seine past Notre-Dame. Indulge in buttery croissants at a sidewalk cafe, explore the artistic enclave of Montmartre, and shop along the Champs-Elysées. From haute cuisine to hidden bistros, Paris is a feast for every sense.",
    location: "Le Marais, Paris, France",
    price: 1599,
    currency: "USD",
    checkIn: new Date("2026-07-05"),
    checkOut: new Date("2026-07-12"),
    guests: 2,
    stars: 4.6,
    reviews: 3102,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=600&fit=crop",
    amenities: ["wifi", "pool", "spa", "restaurant", "gym", "airport-shuttle"],
    rooms: [
      { type: "Standard", price: 1599, desc: "Charming Parisian room with classic decor." },
      { type: "Deluxe", price: 2199, desc: "Spacious room with Eiffel Tower views." },
      { type: "Suite", price: 2999, desc: "Grand suite with balcony and luxury amenities." },
    ],
    guestReviews: [
      { name: "Pierre L.", date: new Date("2025-12-10"), rating: 5, text: "Magnifique! The location in Le Marais was perfect for exploring the city on foot." },
      { name: "Rachel G.", date: new Date("2025-11-28"), rating: 4, text: "Lovely hotel with great character. The concierge recommended amazing restaurants." },
      { name: "Tom S.", date: new Date("2025-10-05"), rating: 4, text: "Excellent breakfast and very comfortable beds. A bit noisy at night but worth it for the location." },
      { name: "Maria V.", date: new Date("2025-09-15"), rating: 5, text: "Everything was perfect. The spa treatment after a long day of sightseeing was heavenly." },
    ],
  },
  {
    id: "bali",
    name: "Bali, Indonesia",
    desc: "Lush rice terraces, sacred water temples, and pristine beaches make Bali an island paradise. Find serenity in Ubud or surf the breaks of Uluwatu.",
    longDesc:
      "Bali enchants visitors with its spiritual energy and natural beauty. Trek through the emerald Tegallalang rice terraces, witness a traditional Kecak dance at sunset, and cleanse your spirit at the holy Tirta Empul temple. From the artistic hub of Ubud to the beach clubs of Seminyak, Bali offers a rich tapestry of experiences — yoga retreats, world-class surfing, and cuisine that surprises at every meal.",
    location: "Ubud, Bali, Indonesia",
    price: 899,
    currency: "USD",
    checkIn: new Date("2026-08-01"),
    checkOut: new Date("2026-08-10"),
    guests: 4,
    stars: 4.5,
    reviews: 2789,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=600&fit=crop",
    amenities: ["wifi", "pool", "spa", "restaurant", "gym", "airport-shuttle"],
    rooms: [
      { type: "Standard", price: 899, desc: "Tropical garden bungalow with private patio." },
      { type: "Deluxe", price: 1299, desc: "Rice terrace view villa with outdoor shower." },
      { type: "Suite", price: 1899, desc: "Private pool villa surrounded by lush jungle." },
    ],
    guestReviews: [
      { name: "Wayan P.", date: new Date("2026-01-08"), rating: 5, text: "Paradise found! The private pool villa exceeded all expectations. Staff treated us like family." },
      { name: "Jessica A.", date: new Date("2025-12-15"), rating: 4, text: "Beautiful resort in the heart of Ubud. The yoga sessions at sunrise were life-changing." },
      { name: "Michael B.", date: new Date("2025-11-02"), rating: 5, text: "Best value luxury resort we have ever stayed at. The Balinese cooking class was a highlight." },
    ],
  },
  {
    id: "new-york",
    name: "New York, USA",
    desc: "The city that never sleeps offers Broadway shows, world-class dining, and iconic landmarks from Central Park to the Statue of Liberty.",
    longDesc:
      "New York City pulses with an energy unlike anywhere else on Earth. Catch a Broadway show in the Theater District, stroll through Central Park, and take in skyline views from the Top of the Rock. Explore world-class museums like the Met and MoMA, savor cuisine from every corner of the globe, and experience neighborhoods — from the cobblestone streets of SoHo to the buzz of Times Square — each with its own distinct personality.",
    location: "Midtown Manhattan, New York, USA",
    price: 1749,
    currency: "USD",
    checkIn: new Date("2026-09-15"),
    checkOut: new Date("2026-09-22"),
    guests: 3,
    stars: 4.4,
    reviews: 4521,
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=600&fit=crop",
    amenities: ["wifi", "pool", "spa", "restaurant", "gym", "airport-shuttle"],
    rooms: [
      { type: "Standard", price: 1749, desc: "Modern room with Manhattan skyline views." },
      { type: "Deluxe", price: 2349, desc: "Corner room with floor-to-ceiling windows and city panorama." },
      { type: "Suite", price: 3199, desc: "Executive suite with separate lounge and Central Park views." },
    ],
    guestReviews: [
      { name: "Alex T.", date: new Date("2025-12-20"), rating: 4, text: "Great location in Midtown, walking distance to everything. The rooftop bar was fantastic." },
      { name: "Nina K.", date: new Date("2025-11-10"), rating: 5, text: "Best hotel experience in NYC! The concierge got us impossible Broadway tickets." },
      { name: "Robert J.", date: new Date("2025-10-30"), rating: 4, text: "Excellent amenities and service. The gym was well-equipped for morning workouts." },
      { name: "Priya S.", date: new Date("2025-09-25"), rating: 4, text: "Wonderful stay overall. Room was spotless and the restaurant downstairs had amazing pasta." },
    ],
  },
];

export function getDestination(id: string) {
  return destinations.find((d) => d.id === id);
}
