import { getGT } from "gt-next/server";

/**
 * All translatable destination strings as literal gt() calls
 * so the compiler can extract them for translation.
 */
export async function getTranslatedStrings() {
  const gt = await getGT();

  return {
    // Destination names
    "Tokyo, Japan": gt("Tokyo, Japan"),
    "Santorini, Greece": gt("Santorini, Greece"),
    "Kyoto, Japan": gt("Kyoto, Japan"),
    "Paris, France": gt("Paris, France"),
    "Bali, Indonesia": gt("Bali, Indonesia"),
    "New York, USA": gt("New York, USA"),

    // Destination locations
    "Shinjuku, Tokyo, Japan": gt("Shinjuku, Tokyo, Japan"),
    "Oia, Santorini, Greece": gt("Oia, Santorini, Greece"),
    "Higashiyama, Kyoto, Japan": gt("Higashiyama, Kyoto, Japan"),
    "Le Marais, Paris, France": gt("Le Marais, Paris, France"),
    "Ubud, Bali, Indonesia": gt("Ubud, Bali, Indonesia"),
    "Midtown Manhattan, New York, USA": gt("Midtown Manhattan, New York, USA"),

    // Short descriptions
    "A dazzling metropolis where ancient temples stand alongside neon-lit skyscrapers. Explore centuries of history, world-class cuisine, and cutting-edge technology.":
      gt("A dazzling metropolis where ancient temples stand alongside neon-lit skyscrapers. Explore centuries of history, world-class cuisine, and cutting-edge technology."),
    "White-washed villages perched on volcanic cliffs overlooking the Aegean Sea. Legendary sunsets, local wines, and Mediterranean charm at every turn.":
      gt("White-washed villages perched on volcanic cliffs overlooking the Aegean Sea. Legendary sunsets, local wines, and Mediterranean charm at every turn."),
    "The cultural heart of Japan, home to over two thousand temples and shrines. Stroll through bamboo groves, attend a tea ceremony, and witness geisha culture.":
      gt("The cultural heart of Japan, home to over two thousand temples and shrines. Stroll through bamboo groves, attend a tea ceremony, and witness geisha culture."),
    "The City of Light beckons with iconic landmarks, world-renowned museums, and a cafe culture that turns every meal into an occasion.":
      gt("The City of Light beckons with iconic landmarks, world-renowned museums, and a cafe culture that turns every meal into an occasion."),
    "Lush rice terraces, sacred water temples, and pristine beaches make Bali an island paradise. Find serenity in Ubud or surf the breaks of Uluwatu.":
      gt("Lush rice terraces, sacred water temples, and pristine beaches make Bali an island paradise. Find serenity in Ubud or surf the breaks of Uluwatu."),
    "The city that never sleeps offers Broadway shows, world-class dining, and iconic landmarks from Central Park to the Statue of Liberty.":
      gt("The city that never sleeps offers Broadway shows, world-class dining, and iconic landmarks from Central Park to the Statue of Liberty."),

    // Long descriptions
    "Tokyo seamlessly blends ultra-modern innovation with centuries-old tradition. Wander through the serene Meiji Shrine before diving into the electric energy of Shibuya Crossing. Sample exquisite sushi at Tsukiji, browse quirky boutiques in Harajuku, and soak in panoramic city views from Tokyo Skytree. Whether you seek tranquil gardens or vibrant nightlife, Tokyo delivers an unforgettable experience.":
      gt("Tokyo seamlessly blends ultra-modern innovation with centuries-old tradition. Wander through the serene Meiji Shrine before diving into the electric energy of Shibuya Crossing. Sample exquisite sushi at Tsukiji, browse quirky boutiques in Harajuku, and soak in panoramic city views from Tokyo Skytree. Whether you seek tranquil gardens or vibrant nightlife, Tokyo delivers an unforgettable experience."),
    "Santorini is a jewel of the Cyclades, famous for its dramatic caldera views, blue-domed churches, and sunsets that paint the sky in shades of gold and crimson. Explore the cliffside village of Oia, taste wines from volcanic vineyards, relax on unique red and black sand beaches, and discover ancient ruins at Akrotiri. Every corner of this island offers a postcard-perfect moment.":
      gt("Santorini is a jewel of the Cyclades, famous for its dramatic caldera views, blue-domed churches, and sunsets that paint the sky in shades of gold and crimson. Explore the cliffside village of Oia, taste wines from volcanic vineyards, relax on unique red and black sand beaches, and discover ancient ruins at Akrotiri. Every corner of this island offers a postcard-perfect moment."),
    "Kyoto is where Japan's soul resides. Walk beneath the iconic vermillion torii gates of Fushimi Inari, lose yourself in the ethereal Arashiyama Bamboo Grove, and find peace in the Zen rock gardens of Ryoan-ji. Each season transforms the city — cherry blossoms in spring, fiery maples in autumn. Traditional ryokan inns, kaiseki cuisine, and the art of the tea ceremony await.":
      gt("Kyoto is where Japan's soul resides. Walk beneath the iconic vermillion torii gates of Fushimi Inari, lose yourself in the ethereal Arashiyama Bamboo Grove, and find peace in the Zen rock gardens of Ryoan-ji. Each season transforms the city — cherry blossoms in spring, fiery maples in autumn. Traditional ryokan inns, kaiseki cuisine, and the art of the tea ceremony await."),
    "Paris captivates with its timeless elegance. Ascend the Eiffel Tower at dusk, wander the halls of the Louvre, and stroll along the Seine past Notre-Dame. Indulge in buttery croissants at a sidewalk cafe, explore the artistic enclave of Montmartre, and shop along the Champs-Elysées. From haute cuisine to hidden bistros, Paris is a feast for every sense.":
      gt("Paris captivates with its timeless elegance. Ascend the Eiffel Tower at dusk, wander the halls of the Louvre, and stroll along the Seine past Notre-Dame. Indulge in buttery croissants at a sidewalk cafe, explore the artistic enclave of Montmartre, and shop along the Champs-Elysées. From haute cuisine to hidden bistros, Paris is a feast for every sense."),
    "Bali enchants visitors with its spiritual energy and natural beauty. Trek through the emerald Tegallalang rice terraces, witness a traditional Kecak dance at sunset, and cleanse your spirit at the holy Tirta Empul temple. From the artistic hub of Ubud to the beach clubs of Seminyak, Bali offers a rich tapestry of experiences — yoga retreats, world-class surfing, and cuisine that surprises at every meal.":
      gt("Bali enchants visitors with its spiritual energy and natural beauty. Trek through the emerald Tegallalang rice terraces, witness a traditional Kecak dance at sunset, and cleanse your spirit at the holy Tirta Empul temple. From the artistic hub of Ubud to the beach clubs of Seminyak, Bali offers a rich tapestry of experiences — yoga retreats, world-class surfing, and cuisine that surprises at every meal."),
    "New York City pulses with an energy unlike anywhere else on Earth. Catch a Broadway show in the Theater District, stroll through Central Park, and take in skyline views from the Top of the Rock. Explore world-class museums like the Met and MoMA, savor cuisine from every corner of the globe, and experience neighborhoods — from the cobblestone streets of SoHo to the buzz of Times Square — each with its own distinct personality.":
      gt("New York City pulses with an energy unlike anywhere else on Earth. Catch a Broadway show in the Theater District, stroll through Central Park, and take in skyline views from the Top of the Rock. Explore world-class museums like the Met and MoMA, savor cuisine from every corner of the globe, and experience neighborhoods — from the cobblestone streets of SoHo to the buzz of Times Square — each with its own distinct personality."),

    // Amenity labels
    "Free Wi-Fi": gt("Free Wi-Fi"),
    "Swimming Pool": gt("Swimming Pool"),
    "Spa & Wellness": gt("Spa & Wellness"),
    "Restaurant": gt("Restaurant"),
    "Fitness Center": gt("Fitness Center"),
    "Airport Shuttle": gt("Airport Shuttle"),

    // Room types
    "Standard": gt("Standard"),
    "Deluxe": gt("Deluxe"),
    "Suite": gt("Suite"),

    // Room descriptions - Tokyo
    "Comfortable room with city views and modern amenities.": gt("Comfortable room with city views and modern amenities."),
    "Spacious room with premium furnishings and panoramic windows.": gt("Spacious room with premium furnishings and panoramic windows."),
    "Luxurious suite with separate living area and skyline views.": gt("Luxurious suite with separate living area and skyline views."),
    // Santorini
    "Cozy cave-style room with caldera views.": gt("Cozy cave-style room with caldera views."),
    "Elegant room with private terrace and infinity pool access.": gt("Elegant room with private terrace and infinity pool access."),
    "Romantic suite with private plunge pool and sunset views.": gt("Romantic suite with private plunge pool and sunset views."),
    // Kyoto
    "Traditional tatami room with garden views.": gt("Traditional tatami room with garden views."),
    "Upgraded room with private onsen bath.": gt("Upgraded room with private onsen bath."),
    "Premium suite blending traditional and modern design.": gt("Premium suite blending traditional and modern design."),
    // Paris
    "Charming Parisian room with classic decor.": gt("Charming Parisian room with classic decor."),
    "Spacious room with Eiffel Tower views.": gt("Spacious room with Eiffel Tower views."),
    "Grand suite with balcony and luxury amenities.": gt("Grand suite with balcony and luxury amenities."),
    // Bali
    "Tropical garden bungalow with private patio.": gt("Tropical garden bungalow with private patio."),
    "Rice terrace view villa with outdoor shower.": gt("Rice terrace view villa with outdoor shower."),
    "Private pool villa surrounded by lush jungle.": gt("Private pool villa surrounded by lush jungle."),
    // New York
    "Modern room with Manhattan skyline views.": gt("Modern room with Manhattan skyline views."),
    "Corner room with floor-to-ceiling windows and city panorama.": gt("Corner room with floor-to-ceiling windows and city panorama."),
    "Executive suite with separate lounge and Central Park views.": gt("Executive suite with separate lounge and Central Park views."),

    // Guest review texts
    "Absolutely stunning hotel! The view from our room was breathtaking and the staff went above and beyond.":
      gt("Absolutely stunning hotel! The view from our room was breathtaking and the staff went above and beyond."),
    "Great location near Shinjuku station. The spa was wonderful. Only minor issue was slow elevator during peak hours.":
      gt("Great location near Shinjuku station. The spa was wonderful. Only minor issue was slow elevator during peak hours."),
    "Perfect stay from start to finish. The restaurant served the best tempura I have ever had.":
      gt("Perfect stay from start to finish. The restaurant served the best tempura I have ever had."),
    "Beautiful property with excellent amenities. The pool area was a nice surprise for a city hotel.":
      gt("Beautiful property with excellent amenities. The pool area was a nice surprise for a city hotel."),
    "The most romantic place we have ever visited. The sunset from our terrace was unforgettable.":
      gt("The most romantic place we have ever visited. The sunset from our terrace was unforgettable."),
    "Incredible service and the views are even better than the photos. Will definitely return!":
      gt("Incredible service and the views are even better than the photos. Will definitely return!"),
    "Amazing property. The restaurant was superb. Only wish the gym was a bit larger.":
      gt("Amazing property. The restaurant was superb. Only wish the gym was a bit larger."),
    "A perfect blend of tradition and comfort. The garden was so peaceful I never wanted to leave.":
      gt("A perfect blend of tradition and comfort. The garden was so peaceful I never wanted to leave."),
    "Wonderful cultural experience. The staff arranged a private tea ceremony for us which was magical.":
      gt("Wonderful cultural experience. The staff arranged a private tea ceremony for us which was magical."),
    "The most authentic stay I have had in Japan. Waking up to the temple bells was surreal.":
      gt("The most authentic stay I have had in Japan. Waking up to the temple bells was surreal."),
    "Magnifique! The location in Le Marais was perfect for exploring the city on foot.":
      gt("Magnifique! The location in Le Marais was perfect for exploring the city on foot."),
    "Lovely hotel with great character. The concierge recommended amazing restaurants.":
      gt("Lovely hotel with great character. The concierge recommended amazing restaurants."),
    "Excellent breakfast and very comfortable beds. A bit noisy at night but worth it for the location.":
      gt("Excellent breakfast and very comfortable beds. A bit noisy at night but worth it for the location."),
    "Everything was perfect. The spa treatment after a long day of sightseeing was heavenly.":
      gt("Everything was perfect. The spa treatment after a long day of sightseeing was heavenly."),
    "Paradise found! The private pool villa exceeded all expectations. Staff treated us like family.":
      gt("Paradise found! The private pool villa exceeded all expectations. Staff treated us like family."),
    "Beautiful resort in the heart of Ubud. The yoga sessions at sunrise were life-changing.":
      gt("Beautiful resort in the heart of Ubud. The yoga sessions at sunrise were life-changing."),
    "Best value luxury resort we have ever stayed at. The Balinese cooking class was a highlight.":
      gt("Best value luxury resort we have ever stayed at. The Balinese cooking class was a highlight."),
    "Great location in Midtown, walking distance to everything. The rooftop bar was fantastic.":
      gt("Great location in Midtown, walking distance to everything. The rooftop bar was fantastic."),
    "Best hotel experience in NYC! The concierge got us impossible Broadway tickets.":
      gt("Best hotel experience in NYC! The concierge got us impossible Broadway tickets."),
    "Excellent amenities and service. The gym was well-equipped for morning workouts.":
      gt("Excellent amenities and service. The gym was well-equipped for morning workouts."),
    "Wonderful stay overall. Room was spotless and the restaurant downstairs had amazing pasta.":
      gt("Wonderful stay overall. Room was spotless and the restaurant downstairs had amazing pasta."),
  } as Record<string, string>;
}
