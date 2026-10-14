export interface MenuItem {
  id: string;
  name: string;
  category: 'south-indian' | 'breakfast' | 'dosa-specials' | 'thalis' | 'north-indian' | 'breads';
  description: string;
  tag?: string;
  isSpecial?: boolean;
  image?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  source: 'Google' | 'Zomato' | 'Swiggy';
  rating: number;
  date: string;
  comment: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
  imageUrl: string;
  caption: string;
}

export const RESTAURANT_INFO = {
  name: "Aishwaryam Restaurant",
  tagline: "Tradition on Every Plate.",
  shortDescription: "Pure Vegetarian, South Indian & Multi-Cuisine dining experience on Hingna Road, Nagpur.",
  category: "Pure Vegetarian, South Indian and Multi-Cuisine Restaurant",
  address: "Plot No. 5, Ground Floor, Nilkamal Society, Pillar No. 92, Hingna Road, near Rajiv Nagar Metro Station, Nagpur, Maharashtra 440036, India",
  phone: "+91 82086 59487",
  phoneClean: "+918208659487",
  instagram: "@aishwaryam_restaurant_",
  instagramUrl: "https://www.instagram.com/aishwaryam_restaurant_/",
  mapsUrl: "https://www.google.com/maps/place/Aishwaryam+Restaurant/@21.1195026,79.0216309,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c13d062790cf:0x9d8421786183d79f!8m2!3d21.1195026!4d79.0216309",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.821731633519!2d79.0194422!3d21.1195026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c13d062790cf%3A0x9d8421786183d79f!2sAishwaryam%20Restaurant!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  ratings: {
    google: { rating: 4.5, count: 101, label: "4.5★ on Google · 101 verified reviews" },
    swiggy: { rating: 4.4, count: "500+", label: "4.4★ on Swiggy" },
    zomato: { rating: 4.1, count: "300+", label: "4.1★ on Zomato" }
  },
  operatingHours: {
    display: "7:00 AM – 11:00 PM (Provisional)",
    note: "Open all days for breakfast, lunch & dinner. Subject to seasonal restaurant confirmation."
  }
};

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Offerings' },
  { id: 'south-indian', label: 'South Indian' },
  { id: 'breakfast', label: 'Breakfast Favourites' },
  { id: 'dosa-specials', label: 'Dosa Specials' },
  { id: 'thalis', label: 'Indian Meals & Thalis' },
  { id: 'north-indian', label: 'North Indian Favourites' },
  { id: 'breads', label: 'Breads & Accompaniments' },
] as const;

export const SIGNATURE_DISHES = [
  {
    id: "sig-1",
    name: "Aishwaryam Special Dosa",
    eyebrow: "House Signature",
    description: "Crispy, golden fermented crepe roasted slowly with aromatic ghee, served with house-blend gun powder podi, fresh coconut chutneys, and piping-hot vegetable sambar.",
    image: "/images/food/special-dosa.jpg",
    badge: "Specialty"
  },
  {
    id: "sig-2",
    name: "Traditional Vegetarian Thali",
    eyebrow: "Comforting Daily Feast",
    description: "A balanced Indian platter with seasonal subzis, dal tadka, steamed fragrant basmati rice, warm phulkas/tawa roti, cooling raita, papad, and sweet delicacy.",
    image: "/images/food/veg-thali.jpg",
    badge: "Daily Favourite"
  },
  {
    id: "sig-3",
    name: "Punjabi Chhole Bhature",
    eyebrow: "North Indian Classic",
    description: "Golden puffed bhature paired with rich, slow-simmered spiced chickpeas, served with tangy pickled onions and zesty green chillies.",
    image: "/images/food/chhole-bhature.jpg",
    badge: "Guest Favourite"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m-1",
    name: "Aishwaryam Special Dosa",
    category: "dosa-specials",
    description: "Signature crisp roasted dosa layered with special house masala, pure ghee, served with tri-color chutneys & vegetable sambar.",
    tag: "Chef's Signature",
    isSpecial: true,
    image: "/images/food/special-dosa.jpg"
  },
  {
    id: "m-2",
    name: "Traditional Vegetarian Thali",
    category: "thalis",
    description: "Wholesome complete meal featuring seasonal curries, dal tadka, steamed rice, fresh tawa rotis, papad, curd, and dessert.",
    tag: "Complete Meal",
    isSpecial: true,
    image: "/images/food/veg-thali.jpg"
  },
  {
    id: "m-3",
    name: "Chhole Bhature",
    category: "north-indian",
    description: "Crisp puffed bhature served with fragrant Punjabi spiced chickpea curry, pickled onions, and fresh lemon relish.",
    tag: "All-Time Classic",
    isSpecial: true,
    image: "/images/food/chhole-bhature.jpg"
  },
  {
    id: "m-4",
    name: "Masala Dosa",
    category: "south-indian",
    description: "Crispy fermented crepe folded over seasoned potato mash tempered with mustard seeds and curry leaves.",
    tag: "Bestseller",
    image: "/images/food/special-dosa.jpg"
  },
  {
    id: "m-5",
    name: "Steamed Idli Platter",
    category: "breakfast",
    description: "Fluffy, cloud-soft steamed rice and lentil cakes served in steaming vegetable sambar with coconut chutney.",
    tag: "Morning Special",
    image: "/images/food/idli-sambar.jpg"
  },
  {
    id: "m-6",
    name: "Crispy Medu Vada",
    category: "breakfast",
    description: "Golden savory black gram donuts infused with crushed black pepper, cumin, and fresh curry leaves.",
    tag: "Light & Crisp",
    image: "/images/food/idli-sambar.jpg"
  },
  {
    id: "m-7",
    name: "Onion Rava Dosa",
    category: "dosa-specials",
    description: "Lacy, ultra-crisp semolina crepe studded with caramelized shallots, green chillies, and ginger.",
    tag: "Extra Crispy",
    image: "/images/food/special-dosa.jpg"
  },
  {
    id: "m-8",
    name: "Mysore Masala Dosa",
    category: "dosa-specials",
    description: "Crispy dosa layered with spicy red garlic-chilli chutney and rolled around spiced potato bhaji.",
    tag: "Fiery Touch",
    image: "/images/food/special-dosa.jpg"
  },
  {
    id: "m-9",
    name: "Fresh Tawa Roti with Pure Ghee",
    category: "breads",
    description: "Soft, handcrafted 100% whole wheat flatbread made fresh on the griddle with clarified butter.",
    tag: "Homestyle",
    image: "/images/food/tawa-roti.jpg"
  },
  {
    id: "m-10",
    name: "Paneer Butter Masala",
    category: "north-indian",
    description: "Tender cottage cheese cubes simmered in a luscious tomato and cashew nut gravy with kasuri methi.",
    tag: "North Indian",
    image: "/images/food/veg-thali.jpg"
  },
  {
    id: "m-11",
    name: "Dal Tadka with Jeera Rice",
    category: "thalis",
    description: "Yellow lentils tempered with ghee, roasted garlic, and cumin, served alongside fragrant cumin basmati rice.",
    tag: "Comfort Food",
    image: "/images/food/veg-thali.jpg"
  },
  {
    id: "m-12",
    name: "Butter Tawa Roti & Paratha",
    category: "breads",
    description: "Warm layered parathas and soft tawa rotis brushed with butter to accompany rich gravies.",
    tag: "Fresh Flatbread",
    image: "/images/food/tawa-roti.jpg"
  }
];

export const RESTAURANT_STATS = [
  { value: "100%", label: "Shuddh Shakahari", sub: "Dedicated Pure Veg Kitchen" },
  { value: "4.5★", label: "Google Rated", sub: "101+ Verified Local Diners" },
  { value: "30+", label: "Daily Delicacies", sub: "Fresh Batters & Homestyle Gravies" },
  { value: "Pillar 92", label: "Hingna Road", sub: "Near Rajiv Nagar Metro Station" }
];

export const WHAT_WE_OFFER_POINTS = [
  {
    id: "offer-1",
    icon: "Utensils",
    title: "Authentic Taste",
    desc: "Naturally fermented batters, roasted pure ghee dosas, and slow-simmered daily curries."
  },
  {
    id: "offer-2",
    icon: "ShieldCheck",
    title: "Pure Veg Kitchen",
    desc: "100% Shuddh Shakahari premises ensuring pristine cleanliness, hygiene, and trusted ingredients."
  },
  {
    id: "offer-3",
    icon: "Wallet",
    title: "Pocket-Friendly Menu",
    desc: "Hearty portions and honest pricing so families, professionals, and students dine happily every day."
  },
  {
    id: "offer-4",
    icon: "Users",
    title: "Family-Friendly Ambiance",
    desc: "A warm, comfortable dining hall filled with hospitality, prompt service, and welcoming smiles."
  },
  {
    id: "offer-5",
    icon: "Sparkles",
    title: "Freshly Made Daily",
    desc: "Coconut chutneys ground fresh every morning and soft tawa rotis prepared hot off the griddle."
  }
];

export const WHY_VISIT_POINTS = [
  {
    id: "f-1",
    title: "South Indian Favourites",
    subtitle: "Authentic Fermented Batters & Slow-Simmered Sambars",
    description: "Crispy dosas roasted with ghee, melt-in-mouth idlis, and freshly ground coconut chutneys made with traditional recipes daily."
  },
  {
    id: "f-2",
    title: "Pure Vegetarian Variety",
    subtitle: "100% Shuddh Shakahari Menu",
    description: "From wholesome multi-course Indian thalis to hearty North Indian curries and fresh tawa rotis, crafted for every member of the family."
  },
  {
    id: "f-3",
    title: "Everyday Honest Value",
    subtitle: "Generous Portions & Fair Pricing",
    description: "Consistently rated by diners on Google and food platforms for satisfying portion sizes, clean quality, and true pocket-friendly dining."
  },
  {
    id: "f-4",
    title: "Meals Together",
    subtitle: "Welcoming Nagpur Hospitality",
    description: "A comfortable, family-friendly atmosphere with swift, courteous service conveniently located right next to Rajiv Nagar Metro Station."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-ext",
    title: "Aishwaryam Restaurant Facade & Entrance",
    category: "Restaurant Exterior",
    aspect: "landscape",
    imageUrl: "/images/restaurant/exterior.jpg",
    caption: "Our welcoming restaurant entrance and signboard at Plot No. 5, Pillar 92, Hingna Road."
  },
  {
    id: "g-0",
    title: "Aishwaryam Dining Hall & Ambiance",
    category: "Restaurant Interior",
    aspect: "landscape",
    imageUrl: "/images/restaurant/interior-01.jpg",
    caption: "Clean, spacious, comfortable family dining ambiance at Hingna Road, Nagpur."
  },
  {
    id: "g-1",
    title: "Crisp Golden Ghee Dosa",
    category: "South Indian",
    aspect: "landscape",
    imageUrl: "/images/food/special-dosa.jpg",
    caption: "Slow-roasted dosa served with tempered coconut chutney & aromatic vegetable sambar."
  },
  {
    id: "g-2",
    title: "Wholesome Vegetarian Thali",
    category: "Indian Meals",
    aspect: "portrait",
    imageUrl: "/images/food/veg-thali.jpg",
    caption: "A comforting variety of curries, lentils, seasonal greens, rice, and fresh flatbreads."
  },
  {
    id: "g-3",
    title: "Fluffy Punjabi Chhole Bhature",
    category: "North Indian",
    aspect: "landscape",
    imageUrl: "/images/food/chhole-bhature.jpg",
    caption: "Golden puffed bhature paired with spiced chickpea curry and tangy accompaniments."
  },
  {
    id: "g-4",
    title: "Soft Steamed Idlis & Vada",
    category: "Breakfast",
    aspect: "square",
    imageUrl: "/images/food/idli-sambar.jpg",
    caption: "Piping-hot South Indian breakfast with fresh coconut chutneys and lentil stew."
  }
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Rahul M.",
    source: "Google",
    rating: 5,
    date: "Verified Google Review",
    comment: "The South Indian dosas here are crispy, non-greasy, and served piping hot with great chutneys. The staff is quick and friendly. Perfect spot on Hingna Road."
  },
  {
    id: "rev-2",
    author: "Sneha Kulkarni",
    source: "Google",
    rating: 5,
    date: "Verified Google Review",
    comment: "Came with family for dinner. The vegetarian thali is very satisfying and feels like home-cooked food. Affordable pricing and clean dining space."
  },
  {
    id: "rev-3",
    author: "Amitabh Deshmukh",
    source: "Google",
    rating: 4.5,
    date: "Verified Google Review",
    comment: "Very convenient location right near Rajiv Nagar Metro Pillar 92. Chhole Bhature and breakfast items are consistently good. Definitely coming back."
  },
  {
    id: "rev-4",
    author: "Pooja V.",
    source: "Google",
    rating: 5,
    date: "Verified Google Review",
    comment: "One of the best pure vegetarian dining choices around Hingna Road. Fast service even during peak hours, and the food tastes fresh and wholesome."
  }
];
