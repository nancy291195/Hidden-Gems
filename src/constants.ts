export interface TourPackage {
  name: string;
  duration: string;
  price: number;
  included: string[];
}

export interface Review {
  userName: string;
  userFlag: string;
  rating: number;
  date: string;
  comment: string;
}

export interface PhotoPlaceholder {
  caption: string;
  gradient: string;
  url: string;
}

export interface Guide {
  id: string;
  name: string;
  country: string;
  region: string;
  flag: string;
  speciality: string;
  promise: string;
  bio: string;
  languages: string[];
  experienceYears: number;
  certifications: string[];
  topHiddenGems: string[];
  bestFor: string[];
  toursFrom: number;
  rating: number;
  reviewsCount: number;
  image: string;
  themeColor: string;
  mapX: number; // 0-100 percentage
  mapY: number; // 0-100 percentage
  lat: number;
  lng: number;
  photos: PhotoPlaceholder[];
  tours: TourPackage[];
  reviews: Review[];
}

export const GUIDES: Guide[] = [
  {
    id: "bashir",
    name: "Bashir Choucair",
    country: "Lebanon",
    region: "Mount Lebanon & Akkar",
    flag: "🇱🇧",
    speciality: "Hidden waterfalls, sea caves, Akkar forests, stargazing",
    promise: "I promise you will stand somewhere in Lebanon that no other tourist has visited that day.",
    bio: "Born in the rugged mountains of Chouf, Bashir has spent two decades mapping the undocumented trails of Lebanon. He specializes in high-altitude forest ecosystems and coastal geological wonders. His deep connection to the land allows him to navigate areas that remain invisible to mainstream tourism. Bashir is a passionate advocate for environmental preservation in the Levant.",
    languages: ["Arabic", "English", "French"],
    experienceYears: 15,
    certifications: ["Mountain Rescue Certified", "National Geographic Contributor", "Lebanese Wilderness Society Member"],
    topHiddenGems: ["Baatara Gorge base hike", "Al Ezer Iron Oak Forest (Milky Way)", "Yahchouch Valley", "Anfeh salt pans"],
    bestFor: ["Nature lovers", "Photographers", "Adventure seekers"],
    toursFrom: 70,
    rating: 4.98,
    reviewsCount: 312,
    image: "https://picsum.photos/seed/bashir-guide/800/1000",
    themeColor: "from-red-600 to-green-700",
    mapX: 58,
    mapY: 34,
    lat: 33.8547,
    lng: 35.8623,
    photos: [
      { caption: "Dawn light on a waterfall no map has named", gradient: "bg-linear-to-br from-blue-400 to-green-500", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091654/baakline-new_miejja.jpg" },
      { caption: "The Milky Way over the Iron Oak forest", gradient: "bg-linear-to-br from-indigo-900 to-purple-800", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091654/12239979_10206399522081764_4501778728570353190_n_dfru6j.jpg" },
      { caption: "Silent sea caves at the edge of Batroun", gradient: "bg-linear-to-br from-cyan-600 to-blue-800", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091654/b2_tpupga.jpg" },
      { caption: "Mist rolling through the Akkar cedar groves", gradient: "bg-linear-to-br from-slate-400 to-emerald-700", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091654/C%C3%A8dre_du_Liban_Barouk_2005_zrijlc.jpg" }
    ],
    tours: [
      { name: "The Akkar Deep Forest Expedition", duration: "10 hours", price: 85, included: ["Transport", "Traditional Lunch", "Photography Tips"] },
      { name: "Coastal Caves & Salt Pans", duration: "6 hours", price: 70, included: ["Boat Access", "Snacks", "Local History Guide"] }
    ],
    reviews: [
      { userName: "Sarah", userFlag: "🇬🇧", rating: 5, date: "March 2026", comment: "Bashir took us to a sea cave I've never seen mentioned anywhere online. The light inside was something I'll never forget. Completely worth every penny." },
      { userName: "Marc", userFlag: "🇫🇷", rating: 5, date: "January 2026", comment: "The Akkar forest felt like another planet. Bashir's knowledge of the local flora is incredible. We didn't see a single other tourist all day." },
      { userName: "Elena", userFlag: "🇩🇪", rating: 4, date: "November 2025", comment: "A challenging but rewarding hike. Bashir is a true professional and made us feel safe even on the steepest trails." }
    ]
  },
  {
    id: "yasmine",
    name: "Yasmine El Fassi",
    country: "Morocco",
    region: "Fès & Middle Atlas",
    flag: "🇲🇦",
    speciality: "Secret Fès medina, Berber villages, Sahara edge oases",
    promise: "Every traveller returns home with a story that starts with 'I found a place no one had heard of.'",
    bio: "Yasmine is a third-generation storyteller from the heart of the Fès Medina. She has spent years building relationships with remote Berber communities in the Atlas Mountains, gaining access to villages that remain closed to standard tour operators. Her tours focus on the intersection of ancient craftsmanship and modern Moroccan identity. She believes that the best way to see Morocco is through the eyes of its artisans.",
    languages: ["Arabic", "French", "English", "Berber"],
    experienceYears: 12,
    certifications: ["Licensed National Guide", "UNESCO Heritage Specialist", "Featured in Condé Nast Traveler"],
    topHiddenGems: ["12th-century unmarked Fès foundries", "Atlas Berber communities with no tourism infrastructure"],
    bestFor: ["Culture seekers", "History buffs", "Slow travellers"],
    toursFrom: 75,
    rating: 4.96,
    reviewsCount: 187,
    image: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091653/morocco-desert-tour-800x552_mjyb23.jpg",
    themeColor: "from-orange-600 to-red-800",
    mapX: 46,
    mapY: 38,
    lat: 34.0331,
    lng: -5.0003,
    photos: [
      { caption: "The hidden copper foundries of the deep Medina", gradient: "bg-linear-to-br from-orange-500 to-amber-800", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091654/ac8842fd-496a-440b-acfb-66a10fbcab55_explore-the-hidden-gems-and-main-sites-of-the-fes-medina_grp8ec.png" },
      { caption: "A tea ceremony in a village with no roads", gradient: "bg-linear-to-br from-emerald-500 to-yellow-600", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091654/2385_qzrdep.jpg" },
      { caption: "Sunset over the forgotten oases of the Draa", gradient: "bg-linear-to-br from-rose-600 to-indigo-900", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091653/68ce995abf72d4300ed5846f_Draa_Valley_Morocco_zfztxm.jpg" },
      { caption: "Intricate zellige patterns in a private riad", gradient: "bg-linear-to-br from-blue-500 to-teal-400", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091653/zellige-morocco-fez-tetouan-mosaic-courtyard-scaled-e1763233745162_yycqhx.jpg" }
    ],
    tours: [
      { name: "The Artisan's Secret Medina", duration: "5 hours", price: 75, included: ["Tea Service", "Workshop Access", "History Talk"] },
      { name: "Atlas High Plateau Journey", duration: "2 days", price: 220, included: ["Homestay", "All Meals", "Mule Transport"] }
    ],
    reviews: [
      { userName: "James", userFlag: "🇺🇸", rating: 5, date: "February 2026", comment: "Yasmine's connections are unreal. We were invited into a family home for tea in a village that felt frozen in time." },
      { userName: "Chloe", userFlag: "🇨🇦", rating: 5, date: "December 2025", comment: "The Medina can be overwhelming, but with Yasmine, we found quiet corners and incredible artisans we never would have seen alone." },
      { userName: "Ahmed", userFlag: "🇦🇪", rating: 5, date: "October 2025", comment: "A truly authentic experience. No tourist traps, just real people and real stories." }
    ]
  },
  {
    id: "kenji",
    name: "Kenji Mori",
    country: "Japan",
    region: "Tohoku & Rural Honshu",
    flag: "🇯🇵",
    speciality: "Rural Tohoku villages, hidden onsen, forgotten samurai trails",
    promise: "I will take you somewhere in Japan that your Japanese friends have never visited. Guaranteed.",
    bio: "Kenji is a former history professor who left the city to preserve the disappearing traditions of rural Tohoku. He specializes in 'Satoyama'—the traditional borderland between mountains and arable land. His tours often involve multi-day treks along ancient pilgrimage routes that have been reclaimed by the forest. Kenji works closely with local elders to document oral histories and maintain unlisted mountain shrines.",
    languages: ["Japanese", "English"],
    experienceYears: 20,
    certifications: ["Wilderness First Aid", "Tohoku Heritage Ambassador", "Published Author on Rural Japan"],
    topHiddenGems: ["Disappearing mountain villages in Tohoku", "unlisted onsen accessible only on foot"],
    bestFor: ["Culture immersion", "Small groups (max 4)", "Multi-day experiences"],
    toursFrom: 110,
    rating: 5.0,
    reviewsCount: 94,
    image: "https://picsum.photos/seed/kenji-guide/800/1000",
    themeColor: "from-slate-800 to-red-900",
    mapX: 88,
    mapY: 35,
    lat: 38.2682,
    lng: 140.8694,
    photos: [
      { caption: "Steam rising from a nameless mountain spring", gradient: "bg-linear-to-br from-slate-200 to-blue-400", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091653/e1629b9017c5290edd_hellsteaming_alamy_dwii69.jpg" },
      { caption: "The last thatched roof in a valley of ghosts", gradient: "bg-linear-to-br from-stone-500 to-emerald-900", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091653/shirakawa-go-15_astkiy.jpg" },
      { caption: "Moss-covered Jizo statues on a forgotten trail", gradient: "bg-linear-to-br from-green-600 to-slate-700", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091653/de6dd22b5fdfdab14869dec1a291f909_s0mcue.png" },
      { caption: "Winter silence in the deep Tohoku woods", gradient: "bg-linear-to-br from-white to-slate-300", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091653/7_ynjrog.jpg" }
    ],
    tours: [
      { name: "The Samurai Pilgrimage", duration: "3 days", price: 450, included: ["Ryokan Stay", "Traditional Meals", "Gear"] },
      { name: "Hidden Onsen & Village Life", duration: "8 hours", price: 110, included: ["Onsen Entry", "Local Bento", "Transport"] }
    ],
    reviews: [
      { userName: "Yuki", userFlag: "🇯🇵", rating: 5, date: "January 2026", comment: "Even as a Japanese person, I was shocked by the places Kenji showed me. I felt like I was in a different century." },
      { userName: "David", userFlag: "🇦🇺", rating: 5, date: "November 2025", comment: "The hike was tough but the reward—a private onsen in the middle of nowhere—was the highlight of my life." },
      { userName: "Sophie", userFlag: "🇫🇷", rating: 5, date: "September 2025", comment: "Kenji's stories bring the landscape to life. He is more than a guide, he is a guardian of history." }
    ]
  },
  {
    id: "nino",
    name: "Nino Kvaratskhelia",
    country: "Georgia",
    region: "Svaneti & Tusheti",
    flag: "🇬🇪",
    speciality: "Svaneti medieval towers, Tusheti wilderness, ancient wine qvevri",
    promise: "You will sleep in a medieval tower house and wake up to a mountain view that doesn't exist on Instagram.",
    bio: "Nino was raised in the shadow of the Great Caucasus mountains. A descendant of Svaneti tower builders, she has dedicated her life to preserving the unique cultural heritage of Georgia's high-altitude regions. She is an expert in ancient winemaking techniques and traditional polyphonic singing. Nino's tours are designed for those who want to disconnect from the modern world and experience the raw, untamed beauty of the Georgian wilderness.",
    languages: ["Georgian", "Russian", "English"],
    experienceYears: 10,
    certifications: ["Mountain Guide Association Member", "Cultural Heritage Consultant", "Featured in BBC Travel"],
    topHiddenGems: ["Lost villages of Tusheti accessible only by mountain road", "wine buried underground since 1987"],
    bestFor: ["Adventure travellers", "History lovers", "Off-grid experiences"],
    toursFrom: 90,
    rating: 4.97,
    reviewsCount: 143,
    image: "https://picsum.photos/seed/nino-guide/800/1000",
    themeColor: "from-red-700 to-amber-900",
    mapX: 61,
    mapY: 31,
    lat: 42.3154,
    lng: 43.3569,
    photos: [
      { caption: "Shadows of Svaneti towers at twilight", gradient: "bg-linear-to-br from-slate-700 to-indigo-950", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/936565aebe25858d7b_1273975_10151856021223904_1884326485_o_pbyc6l.jpg" },
      { caption: "The wild horses of the Tusheti plains", gradient: "bg-linear-to-br from-yellow-600 to-emerald-800", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/Lead-pic-750x430-1_xkd5uv.jpg" },
      { caption: "Opening a qvevri buried for thirty years", gradient: "bg-linear-to-br from-orange-900 to-red-950", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/Marani-1200-x-475_qnmrzk.jpg" },
      { caption: "Glacial peaks reflecting in a mountain tarn", gradient: "bg-linear-to-br from-cyan-200 to-blue-600", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/gcSpk2Nd5VPYQqjkc5FHvr_smedium_g3mmzm.jpg" }
    ],
    tours: [
      { name: "Medieval Tower Homestay", duration: "2 days", price: 180, included: ["Tower Stay", "Traditional Feast", "Singing Lesson"] },
      { name: "Tusheti Wilderness Trek", duration: "4 days", price: 380, included: ["Horses", "Camping Gear", "All Food"] }
    ],
    reviews: [
      { userName: "Lukas", userFlag: "🇦🇹", rating: 5, date: "February 2026", comment: "Sleeping in a 10th-century tower was an experience I can't describe. Nino is the perfect host and guide." },
      { userName: "Anna", userFlag: "🇵🇱", rating: 5, date: "December 2025", comment: "The wine tasting in the village was so authentic. We felt like family, not tourists." },
      { userName: "Tom", userFlag: "🇬🇧", rating: 5, date: "October 2025", comment: "Tusheti is the last wild place in Europe. Nino knows every rock and every story." }
    ]
  },
  {
    id: "carlos",
    name: "Carlos Quispe",
    country: "Peru",
    region: "Sacred Valley & Amazonia",
    flag: "🇵🇪",
    speciality: "Undocumented Incan sites, Sacred Valley secrets, Amazon edge",
    promise: "At least one stop on every tour is a site that does not appear on any tourist map.",
    bio: "Carlos is a Quechua-speaking archaeologist who has spent his career exploring the 'white spaces' on the maps of the Sacred Valley. He has personally identified over a dozen minor Incan sites that remain undocumented by the government. His tours combine rigorous historical analysis with deep spiritual respect for the Andean landscape. Carlos works with local farming communities to ensure that tourism benefits the people who have lived on this land for millennia.",
    languages: ["Spanish", "Quechua", "English"],
    experienceYears: 18,
    certifications: ["Professional Archaeologist", "Sacred Valley Conservation Lead", "National Geographic Explorer"],
    topHiddenGems: ["14 Incan sites he personally discovered, never listed anywhere"],
    bestFor: ["Archaeology lovers", "Hikers", "Authentic Quechua cultural immersion"],
    toursFrom: 95,
    rating: 4.99,
    reviewsCount: 211,
    image: "https://picsum.photos/seed/carlos-guide/800/1000",
    themeColor: "from-red-600 to-amber-600",
    mapX: 28,
    mapY: 68,
    lat: -13.5319,
    lng: -71.9675,
    photos: [
      { caption: "An Incan altar hidden by centuries of vines", gradient: "bg-linear-to-br from-emerald-800 to-stone-600", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/qenqo-temple_tm6wly.jpg" },
      { caption: "The first light hitting an undocumented peak", gradient: "bg-linear-to-br from-orange-400 to-rose-700", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/hq720_peqj8z.jpg" },
      { caption: "Quechua weavers working with ancient dyes", gradient: "bg-linear-to-br from-pink-600 to-purple-800", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/the-ancient-art-of-fiber-dyeing-in-peru-conts_2_jxmq8u.jpg" },
      { caption: "The mist rising where the Andes meet the jungle", gradient: "bg-linear-to-br from-teal-500 to-slate-600", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/biodiversidad-de-la-selva-alta-peruana_c2gb5u.jpg" }
    ],
    tours: [
      { name: "The Lost Altar Trek", duration: "7 hours", price: 95, included: ["Lunch", "Archaeology Kit", "Transport"] },
      { name: "Sacred Valley Spiritual Journey", duration: "12 hours", price: 150, included: ["Ceremony", "Private Access", "Meals"] }
    ],
    reviews: [
      { userName: "Mateo", userFlag: "🇪🇸", rating: 5, date: "March 2026", comment: "Carlos showed us an Incan site that felt like it was discovered yesterday. No crowds, just history." },
      { userName: "Isabella", userFlag: "🇮🇹", rating: 5, date: "January 2026", comment: "Learning about the Quechua culture from someone so passionate was a privilege." },
      { userName: "Liam", userFlag: "🇮🇪", rating: 5, date: "November 2025", comment: "The hike was incredible. Carlos's knowledge of archaeology is mind-blowing." }
    ]
  },
  {
    id: "tigist",
    name: "Tigist Haile",
    country: "Ethiopia",
    region: "Tigray & Simien Mountains",
    flag: "🇪🇹",
    speciality: "Tigray rock churches, Simien trails, Omo Valley community access",
    promise: "I will take you to a ceremony or community that no travel platform has ever listed.",
    bio: "Tigist is a pioneer of ethical community-based tourism in Ethiopia. With a background in social anthropology, she has spent a decade building trust with remote religious and tribal communities. She specializes in the rock-hewn churches of Tigray, many of which require local ecclesiastical permission to enter. Tigist's tours are deeply immersive, focusing on the living traditions and spiritual resilience of the Ethiopian people.",
    languages: ["Amharic", "Tigrinya", "English", "Italian"],
    experienceYears: 11,
    certifications: ["Ethical Tourism Consultant", "Tigray Heritage Guard", "Featured in Al Jazeera"],
    topHiddenGems: ["Cliff rock churches only accessible with local religious permission", "Omo Valley tribes with ethical community access"],
    bestFor: ["Spiritual travellers", "Cultural immersion", "Small ethical groups (max 4)"],
    toursFrom: 90,
    rating: 4.95,
    reviewsCount: 76,
    image: "https://picsum.photos/seed/tigist-guide/800/1000",
    themeColor: "from-yellow-500 via-red-600 to-green-700",
    mapX: 59,
    mapY: 52,
    lat: 14.1275,
    lng: 38.7210,
    photos: [
      { caption: "The sheer climb to a 6th-century rock church", gradient: "bg-linear-to-br from-orange-700 to-stone-800", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/Maryam-Shewito-exterior-architectural-review-ethiopia-stone_psg5oy.jpg" },
      { caption: "A hidden ceremony in the Omo Valley", gradient: "bg-linear-to-br from-amber-500 to-red-800", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/Omo-Valley_Gilad-Fiskus_Hidden-Compass-5-scaled-1-2488x1660_rtqu17.jpg" },
      { caption: "The jagged peaks of the Simien at dawn", gradient: "bg-linear-to-br from-slate-400 to-indigo-900", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/ethiopia-landscape7-TSM03_R_ki2nqu.jpg" },
      { caption: "Ancient manuscripts in a mountain monastery", gradient: "bg-linear-to-br from-yellow-600 to-amber-950", url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/66f635c4-0f6d-4369-9d72-2f244a099f96_1061x585_tn6rvv.jpg" }
    ],
    tours: [
      { name: "Tigray Rock Church Pilgrimage", duration: "10 hours", price: 120, included: ["Permits", "Local Guide", "Lunch"] },
      { name: "Simien Wilderness Trail", duration: "3 days", price: 320, included: ["Camping", "Scout", "All Food"] }
    ],
    reviews: [
      { userName: "Daniel", userFlag: "🇩🇪", rating: 5, date: "February 2026", comment: "Tigist got us into a church that I'm sure no other tourist saw that month. It was a spiritual experience." },
      { userName: "Rachel", userFlag: "🇺🇸", rating: 5, date: "December 2025", comment: "The community access Tigist provides is respectful and genuine. We felt like welcome guests." },
      { userName: "Luca", userFlag: "🇮🇹", rating: 5, date: "October 2025", comment: "Ethiopia is beautiful and Tigist is the best person to show it to you. Her knowledge is vast." }
    ]
  },
  {
    id: "nidal",
    name: "Nidal Majdalani",
    country: "Lebanon",
    region: "Hermel, Bekaa Valley & Akkar",
    flag: "🇱🇧",
    speciality: "Wilderness explorer & heritage researcher",
    promise: "I will take you somewhere in Lebanon where the night sky makes you forget the modern world exists. And during the day, I'll show you a pyramid that archaeologists haven't finished explaining.",
    bio: "Born in the Bekaa Valley, Nidal has spent over a decade documenting Lebanon's most overlooked northern territories — Hermel, Akkar, and the upper Bekaa. A heritage researcher by training, he has located and mapped prehistoric megalithic tomb sites in Menjez that appear in no tourist guide. He runs the only dark-sky camping experience in Lebanon, in a remote juniper forest above Hermel where the Milky Way is visible to the naked eye. He also organises Assi River rafting expeditions and visits to the mysterious Hermel pyramid.",
    languages: ["Arabic", "French", "English"],
    experienceYears: 12,
    certifications: ["Heritage Researcher", "Wilderness First Aid", "Dark Sky Advocate"],
    topHiddenGems: ["Menjez Megalithic Tombs", "Hermel Pyramid", "Upper Bekaa Wilderness"],
    bestFor: ["Stargazers", "History buffs", "Adventure seekers"],
    toursFrom: 65,
    rating: 4.94,
    reviewsCount: 89,
    image: "https://picsum.photos/seed/nidal-guide/800/1000",
    themeColor: "from-emerald-800 to-slate-900",
    mapX: 59,
    mapY: 33,
    lat: 34.3933,
    lng: 36.3833,
    photos: [
      { caption: "The Milky Way over Hermel's juniper forests", gradient: "bg-linear-to-br from-indigo-950 to-black", url: "https://picsum.photos/seed/hermel-stars/1200/800" },
      { caption: "The mysterious Hermel pyramid at sunset", gradient: "bg-linear-to-br from-orange-800 to-stone-900", url: "https://picsum.photos/seed/hermel-pyramid/1200/800" }
    ],
    tours: [
      { name: "Hermel Dark Sky Camp & Pyramid", duration: "Overnight", price: 90, included: ["Camping Gear", "Dinner & Breakfast", "Guided Stargazing"] },
      { name: "Assi River Rafting & Heritage Day", duration: "Full Day", price: 75, included: ["Rafting Gear", "Lunch", "Heritage Tour"] },
      { name: "Menjez Megalithic Tombs & Akkar Forests", duration: "Full Day", price: 65, included: ["Transport", "Picnic", "Expert Talk"] }
    ],
    reviews: []
  },
  {
    id: "rania",
    name: "Rania Khoury",
    country: "Lebanon",
    region: "South Lebanon, Chouf & Coastal hidden spots",
    flag: "🇱🇧",
    speciality: "Coastal & village culture guide",
    promise: "You will eat in someone's home, swim in a pool fed by a spring, and sit under an olive tree that was alive when Rome was an empire.",
    bio: "Rania grew up between Beirut and the Chouf mountains and has been guiding small groups since 2018, specialising in Lebanon's southern coast and the Koura district. She is one of the few guides who takes visitors to Anfeh's Phoenician salt pans at dawn, the ancient olive groves of Amioun, and the hidden waterfalls of the Chouf hills. She combines her tours with deep dives into Lebanese village food culture.",
    languages: ["Arabic", "French", "English"],
    experienceYears: 8,
    certifications: ["Cultural Heritage Guide", "Food Safety Certified"],
    topHiddenGems: ["Anfeh salt pans", "Amioun olive groves", "Chouf hidden springs"],
    bestFor: ["Foodies", "Culture lovers", "Slow travellers"],
    toursFrom: 55,
    rating: 4.91,
    reviewsCount: 67,
    image: "https://picsum.photos/seed/rania-guide/800/1000",
    themeColor: "from-blue-600 to-emerald-700",
    mapX: 57,
    mapY: 35,
    lat: 33.5611,
    lng: 35.3889,
    photos: [
      { caption: "Dawn at the Phoenician salt pans of Anfeh", gradient: "bg-linear-to-br from-cyan-400 to-blue-600", url: "https://picsum.photos/seed/anfeh-salt/1200/800" },
      { caption: "Ancient olive groves in the heart of Koura", gradient: "bg-linear-to-br from-emerald-600 to-yellow-700", url: "https://picsum.photos/seed/olive-groves/1200/800" }
    ],
    tours: [
      { name: "Anfeh Coast & Salt Pans Dawn Tour", duration: "Half Day", price: 55, included: ["Breakfast", "Local Guide"] },
      { name: "Chouf Waterfalls & Village Food", duration: "Full Day", price: 65, included: ["Home-cooked Lunch", "Transport"] },
      { name: "Koura Ancient Olive Groves & Byzantine Churches", duration: "Full Day", price: 60, included: ["Olive Oil Tasting", "Entry Fees"] }
    ],
    reviews: []
  },
  {
    id: "hamza",
    name: "Hamza Benali",
    country: "Morocco",
    region: "Marrakech hinterland & High Atlas villages",
    flag: "🇲🇦",
    speciality: "Mountain village & artisan guide",
    promise: "I will show you the Marrakech that exists behind the souvenir stalls, and the Atlas that exists above the cloud line. Neither one appears on the first page of Google.",
    bio: "Hamza was born in a small Berber village in the High Atlas and moved to Marrakech as a teenager. He bridges both worlds — knowing the city's hidden medina quarters that tourists walk past, and the mountain villages above the snowline that no tour bus reaches. He specialises in taking small groups to working artisan workshops.",
    languages: ["Tamazight", "Arabic", "French", "English"],
    experienceYears: 14,
    certifications: ["Licensed Mountain Guide", "Artisan Heritage Specialist"],
    topHiddenGems: ["High Atlas mule trails", "Hidden Medina workshops"],
    bestFor: ["Adventure seekers", "Art lovers", "Culture seekers"],
    toursFrom: 70,
    rating: 4.93,
    reviewsCount: 112,
    image: "https://picsum.photos/seed/hamza-guide/800/1000",
    themeColor: "from-orange-700 to-stone-800",
    mapX: 45,
    mapY: 39,
    lat: 31.6295,
    lng: -7.9811,
    photos: [
      { caption: "A village perched high in the Atlas mountains", gradient: "bg-linear-to-br from-slate-400 to-orange-900", url: "https://picsum.photos/seed/atlas-village/1200/800" },
      { caption: "Working with master weavers in the Medina", gradient: "bg-linear-to-br from-red-800 to-amber-900", url: "https://picsum.photos/seed/artisan-workshop/1200/800" }
    ],
    tours: [
      { name: "Hidden Marrakech Artisan Day", duration: "Full Day", price: 70, included: ["Lunch", "Workshop Access"] },
      { name: "High Atlas Village Trek", duration: "2 Days", price: 180, included: ["Mule Support", "Camping Gear", "All Meals"] },
      { name: "Berber Family Stay & Cooking", duration: "Overnight", price: 130, included: ["Cooking Class", "Accommodation", "All Meals"] }
    ],
    reviews: []
  },
  {
    id: "fatima",
    name: "Fatima Ouzine",
    country: "Morocco",
    region: "Northern Morocco — Chefchaouen hinterland & Rif Mountains",
    flag: "🇲🇦",
    speciality: "Rif Mountain & coastal heritage guide",
    promise: "The blue city is beautiful. But the mountains above it are another world. I will show you both — and I'll show you the parts that the photographers haven't found yet.",
    bio: "Fatima grew up in the hills above Chefchaouen and knows the Rif Mountains the way most people know their own neighbourhood. She leads travellers beyond the famous blue streets into the farming villages above, where the landscape is wild, the people are warm, and no tour group has ever arrived.",
    languages: ["Tarifit", "Arabic", "Spanish", "English"],
    experienceYears: 10,
    certifications: ["Regional Heritage Guide", "Wilderness First Aid"],
    topHiddenGems: ["Rif Mountain off-grid villages", "Coastal Phoenician sites"],
    bestFor: ["Hikers", "History buffs", "Nature lovers"],
    toursFrom: 60,
    rating: 4.90,
    reviewsCount: 78,
    image: "https://picsum.photos/seed/fatima-guide/800/1000",
    themeColor: "from-blue-500 to-emerald-800",
    mapX: 47,
    mapY: 37,
    lat: 35.1714,
    lng: -5.2697,
    photos: [
      { caption: "Wild peaks of the Rif Mountains", gradient: "bg-linear-to-br from-emerald-700 to-blue-900", url: "https://picsum.photos/seed/rif-mountains/1200/800" },
      { caption: "Forgotten Phoenician ruins on the coast", gradient: "bg-linear-to-br from-cyan-600 to-stone-700", url: "https://picsum.photos/seed/phoenician-ruins/1200/800" }
    ],
    tours: [
      { name: "Rif Mountain Hidden Villages", duration: "Full Day", price: 60, included: ["Village Lunch", "Transport"] },
      { name: "Chefchaouen Beyond the Blue", duration: "Half Day", price: 55, included: ["History Talk", "Hidden Trails"] },
      { name: "Tangier Heritage & Coastal Ruins", duration: "Full Day", price: 70, included: ["Entry Fees", "Lunch"] }
    ],
    reviews: []
  },
  {
    id: "yuki",
    name: "Yuki Tanaka",
    country: "Japan",
    region: "Kyoto countryside & Nara deep mountains",
    flag: "🇯🇵",
    speciality: "Ancient Japan forest & temple guide",
    promise: "Japan's most sacred places are not the famous ones. I will take you to the ones that even the Japanese don't know about, at the hour of day when the forest belongs only to you.",
    bio: "Yuki was raised in a family of Shinto priests near Nara and has an intimate understanding of Japan's sacred landscape. She leads small groups to cedar forests so ancient they predate recorded history, to mountain temples that receive fewer than 100 visitors a year, and to Shinto ceremonies that are not listed in any travel publication.",
    languages: ["Japanese", "English"],
    experienceYears: 16,
    certifications: ["Shinto Heritage Specialist", "Forest Therapy Guide"],
    topHiddenGems: ["Hidden Nara mountain temples", "Ancient cedar forests"],
    bestFor: ["Spiritual seekers", "Nature lovers", "Early birds"],
    toursFrom: 95,
    rating: 4.98,
    reviewsCount: 156,
    image: "https://picsum.photos/seed/yuki-guide/800/1000",
    themeColor: "from-emerald-900 to-slate-900",
    mapX: 87,
    mapY: 36,
    lat: 34.6851,
    lng: 135.8048,
    photos: [
      { caption: "Dawn mist in an ancient cedar forest", gradient: "bg-linear-to-br from-slate-400 to-emerald-950", url: "https://picsum.photos/seed/cedar-forest/1200/800" },
      { caption: "A mountain temple untouched by time", gradient: "bg-linear-to-br from-stone-500 to-indigo-900", url: "https://picsum.photos/seed/mountain-temple/1200/800" }
    ],
    tours: [
      { name: "Sacred Forest Dawn Walk", duration: "Half Day", price: 95, included: ["Traditional Breakfast", "Meditation Session"] },
      { name: "Hidden Nara Mountain Temples", duration: "Full Day", price: 130, included: ["Temple Entry", "Monk-style Lunch"] },
      { name: "Ancient Pilgrimage Trail", duration: "2 Days", price: 280, included: ["Temple Stay", "All Meals", "Guide"] }
    ],
    reviews: []
  },
  {
    id: "takeshi",
    name: "Takeshi Yamamoto",
    country: "Japan",
    region: "Okinawa & southern island chains",
    flag: "🇯🇵",
    speciality: "Island & underwater heritage guide",
    promise: "I will take you to an island where the last tourist visited six months ago, and to underwater stones that no historian has fully explained. Both will stay with you forever.",
    bio: "Born on a small island in the Ryukyu chain, Takeshi has spent his life between the islands and the sea. He guides travellers through the lesser-known islands south of Okinawa — islands with no hotels, no tourist infrastructure, and communities that maintain Ryukyu traditions.",
    languages: ["Japanese", "Okinawan dialect", "English"],
    experienceYears: 12,
    certifications: ["PADI Divemaster", "Ryukyu Heritage Specialist"],
    topHiddenGems: ["Yonaguni underwater ruins", "Remote Ryukyu islands"],
    bestFor: ["Divers", "Island hoppers", "History lovers"],
    toursFrom: 120,
    rating: 4.96,
    reviewsCount: 63,
    image: "https://picsum.photos/seed/takeshi-guide/800/1000",
    themeColor: "from-cyan-600 to-blue-900",
    mapX: 86,
    mapY: 42,
    lat: 26.2124,
    lng: 127.6809,
    photos: [
      { caption: "The mysterious underwater ruins of Yonaguni", gradient: "bg-linear-to-br from-blue-900 to-teal-950", url: "https://picsum.photos/seed/yonaguni/1200/800" },
      { caption: "Crystal clear waters of a remote Ryukyu beach", gradient: "bg-linear-to-br from-cyan-400 to-blue-600", url: "https://picsum.photos/seed/ryukyu-beach/1200/800" }
    ],
    tours: [
      { name: "Remote Ryukyu Island Day", duration: "Full Day", price: 120, included: ["Boat Transport", "Local Lunch", "Snorkel Gear"] },
      { name: "Yonaguni Underwater Ruins Snorkel", duration: "Full Day", price: 160, included: ["Boat Access", "Diving Gear", "Expert Briefing"] },
      { name: "Island Community & Ryukyu Culture", duration: "2 Days", price: 200, included: ["Homestay", "All Meals", "Cultural Workshop"] }
    ],
    reviews: []
  },
  {
    id: "mariam",
    name: "Mariam Beridze",
    country: "Georgia",
    region: "Tbilisi old city & Kartli wine region",
    flag: "🇬🇪",
    speciality: "Urban heritage & wine culture guide",
    promise: "Tbilisi has layers that most visitors never see. I will take you underground, into courtyards, and back 8,000 years — all in one day.",
    bio: "Mariam was born in the old city of Tbilisi and has watched tourists walk past some of its most extraordinary hidden spaces for years. She now dedicates her work to showing small groups the Tbilisi that exists behind the renovated facades — cave dwellings, courtyard communities, and underground natural wine bars.",
    languages: ["Georgian", "Russian", "English"],
    experienceYears: 11,
    certifications: ["National Heritage Guide", "Sommelier Certified"],
    topHiddenGems: ["Tbilisi cave dwellings", "Kartli natural vineyards"],
    bestFor: ["Wine lovers", "Urban explorers", "History buffs"],
    toursFrom: 75,
    rating: 4.92,
    reviewsCount: 108,
    image: "https://picsum.photos/seed/mariam-guide/800/1000",
    themeColor: "from-purple-800 to-red-900",
    mapX: 62,
    mapY: 32,
    lat: 41.7151,
    lng: 44.8271,
    photos: [
      { caption: "A hidden courtyard in the heart of Old Tbilisi", gradient: "bg-linear-to-br from-amber-600 to-stone-800", url: "https://picsum.photos/seed/tbilisi-courtyard/1200/800" },
      { caption: "Ancient qvevri in a family-run Kartli vineyard", gradient: "bg-linear-to-br from-red-900 to-orange-950", url: "https://picsum.photos/seed/kartli-wine/1200/800" }
    ],
    tours: [
      { name: "Hidden Tbilisi Deep Walk", duration: "Full Day", price: 75, included: ["Wine Tasting", "History Talk"] },
      { name: "Natural Wine & Old Vine Kartli", duration: "Full Day", price: 90, included: ["Vineyard Visit", "Traditional Lunch"] },
      { name: "Tbilisi Cave Dwellings & Silk Road", duration: "Full Day", price: 85, included: ["Entry Fees", "Transport"] }
    ],
    reviews: []
  },
  {
    id: "davit",
    name: "Davit Chikvanaia",
    country: "Georgia",
    region: "Racha & Imereti — western Georgia highlands",
    flag: "🇬🇪",
    speciality: "Western Georgia wilderness & cave guide",
    promise: "Western Georgia is a secret that even most Georgians keep to themselves. I will take you deeper into it than any guide has taken you before.",
    bio: "Davit grew up in the Racha region of western Georgia — one of the least visited and most spectacular parts of the Caucasus. He leads travellers through highland meadows accessible only by 4WD or foot, to medieval churches hidden in forests, and beyond the tourist sections of the Prometheus Cave system.",
    languages: ["Georgian", "Russian", "English"],
    experienceYears: 9,
    certifications: ["Mountain Rescue Certified", "Speleology Specialist"],
    topHiddenGems: ["Racha highlands", "Prometheus Cave deep chambers"],
    bestFor: ["Adventure seekers", "Campers", "Nature lovers"],
    toursFrom: 80,
    rating: 4.89,
    reviewsCount: 54,
    image: "https://picsum.photos/seed/davit-guide/800/1000",
    themeColor: "from-emerald-800 to-blue-900",
    mapX: 60,
    mapY: 31,
    lat: 42.5167,
    lng: 43.4167,
    photos: [
      { caption: "Wild camping in the Racha highlands", gradient: "bg-linear-to-br from-indigo-900 to-emerald-950", url: "https://picsum.photos/seed/racha-camping/1200/800" },
      { caption: "Deep inside the unmapped chambers of Prometheus Cave", gradient: "bg-linear-to-br from-slate-800 to-blue-950", url: "https://picsum.photos/seed/cave-exploration/1200/800" }
    ],
    tours: [
      { name: "Racha Highland Wild Camp", duration: "Overnight", price: 80, included: ["Camping Gear", "All Meals", "4WD Transport"] },
      { name: "Prometheus Cave Deep Exploration", duration: "Full Day", price: 90, included: ["Safety Gear", "Expert Guide"] },
      { name: "Imereti Medieval Churches & Villages", duration: "Full Day", price: 75, included: ["Lunch", "Transport"] }
    ],
    reviews: []
  },
  {
    id: "rosa",
    name: "Rosa Mamani",
    country: "Peru",
    region: "Lake Titicaca islands & Puno altiplano",
    flag: "🇵🇪",
    speciality: "Altiplano & island community guide",
    promise: "I will take you to an island on the highest lake in the world where people live exactly as they did 500 years ago. And they will feed you.",
    bio: "Rosa is Aymara, born on the shores of Lake Titicaca. She guides travellers beyond the well-known Uros floating islands to the smaller, rarely visited communities on Taquile and Anapia islands — places where the Aymara language and textile traditions are still fully alive.",
    languages: ["Aymara", "Quechua", "Spanish", "English"],
    experienceYears: 15,
    certifications: ["Aymara Heritage Specialist", "Community Tourism Lead"],
    topHiddenGems: ["Anapia Island", "Pre-Inca Altiplano ruins"],
    bestFor: ["Culture seekers", "Textile lovers", "Slow travellers"],
    toursFrom: 85,
    rating: 4.97,
    reviewsCount: 88,
    image: "https://picsum.photos/seed/rosa-guide/800/1000",
    themeColor: "from-red-700 to-blue-800",
    mapX: 29,
    mapY: 70,
    lat: -15.8402,
    lng: -70.0212,
    photos: [
      { caption: "Traditional weaving on the shores of Titicaca", gradient: "bg-linear-to-br from-pink-600 to-blue-800", url: "https://picsum.photos/seed/titicaca-weaving/1200/800" },
      { caption: "A hidden pre-Inca site on the Altiplano", gradient: "bg-linear-to-br from-orange-700 to-stone-800", url: "https://picsum.photos/seed/altiplano-ruins/1200/800" }
    ],
    tours: [
      { name: "Titicaca Hidden Island Communities", duration: "Full Day", price: 85, included: ["Boat Transport", "Family Lunch"] },
      { name: "Altiplano Pre-Inca Trail", duration: "Full Day", price: 95, included: ["Picnic", "Transport"] },
      { name: "Aymara Textile & Ceremony Day", duration: "Full Day", price: 80, included: ["Workshop", "Lunch"] }
    ],
    reviews: []
  },
  {
    id: "miguel",
    name: "Miguel Condori",
    country: "Peru",
    region: "Northern Peru — Chachapoyas & Kuelap highlands",
    flag: "🇵🇪",
    speciality: "Cloud forest & lost civilisation guide",
    promise: "The Inca built Machu Picchu. But there was another civilisation in the clouds above them that most people have never heard of. I will take you there.",
    bio: "Miguel was born near Chachapoyas and has been exploring the cloud forest ruins of northern Peru since childhood. He specialises in the Chachapoya civilisation — an ancient culture that predates and rivalled the Inca, and whose cliff sarcophagi remain almost entirely off the tourist circuit.",
    languages: ["Spanish", "English"],
    experienceYears: 18,
    certifications: ["Archaeological Guide", "Wilderness First Aid"],
    topHiddenGems: ["Kuelap fortress", "Chachapoya sarcophagi"],
    bestFor: ["History lovers", "Hikers", "Adventure seekers"],
    toursFrom: 110,
    rating: 4.95,
    reviewsCount: 71,
    image: "https://picsum.photos/seed/miguel-guide/800/1000",
    themeColor: "from-emerald-700 to-stone-800",
    mapX: 27,
    mapY: 65,
    lat: -6.2294,
    lng: -77.8728,
    photos: [
      { caption: "The massive stone walls of Kuelap fortress", gradient: "bg-linear-to-br from-stone-600 to-emerald-900", url: "https://picsum.photos/seed/kuelap/1200/800" },
      { caption: "Ancient sarcophagi perched on a sheer cliff", gradient: "bg-linear-to-br from-slate-500 to-stone-800", url: "https://picsum.photos/seed/sarcophagi/1200/800" }
    ],
    tours: [
      { name: "Kuelap & Hidden Chachapoya Ruins", duration: "Full Day", price: 110, included: ["Lunch", "Entry Fees"] },
      { name: "Cloud Forest Sarcophagi Cliff Trek", duration: "Full Day", price: 130, included: ["Transport", "Picnic"] },
      { name: "Northern Peru 3-Day Expedition", duration: "3 Days", price: 380, included: ["Accommodation", "All Meals", "Transport"] }
    ],
    reviews: []
  },
  {
    id: "yonas",
    name: "Yonas Tesfaye",
    country: "Ethiopia",
    region: "Gondar & Blue Nile highlands",
    flag: "🇪🇹",
    speciality: "Royal heritage & highland trail guide",
    promise: "Ethiopia had an emperor and a royal court when most of Europe was still in the dark ages. I will take you to the castles they left behind, and to the monks who still guard what came before.",
    bio: "Yonas was raised in Gondar, the former royal capital of Ethiopia. He specialises in access to Ethiopian Orthodox monasteries on islands in Lake Tana that are closed to most visitors, and in multi-day treks along the Blue Nile gorge — one of Africa's most dramatic landscapes.",
    languages: ["Amharic", "Tigrinya", "English"],
    experienceYears: 14,
    certifications: ["Heritage Specialist", "Mountain Guide"],
    topHiddenGems: ["Gondar royal castles", "Blue Nile gorge"],
    bestFor: ["History buffs", "Hikers", "Spiritual travellers"],
    toursFrom: 85,
    rating: 4.93,
    reviewsCount: 49,
    image: "https://picsum.photos/seed/yonas-guide/800/1000",
    themeColor: "from-red-800 to-emerald-900",
    mapX: 60,
    mapY: 51,
    lat: 12.6000,
    lng: 37.4667,
    photos: [
      { caption: "The royal castles of Gondar at sunset", gradient: "bg-linear-to-br from-orange-800 to-stone-900", url: "https://picsum.photos/seed/gondar-castles/1200/800" },
      { caption: "The dramatic depths of the Blue Nile gorge", gradient: "bg-linear-to-br from-stone-500 to-blue-900", url: "https://picsum.photos/seed/blue-nile/1200/800" }
    ],
    tours: [
      { name: "Gondar Royal Heritage & Hidden Churches", duration: "Full Day", price: 85, included: ["Entry Fees", "Lunch"] },
      { name: "Blue Nile Gorge Trek", duration: "2 Days", price: 120, included: ["Camping Gear", "All Meals"] },
      { name: "Lake Tana Monastery Island Access", duration: "Full Day", price: 95, included: ["Boat Transport", "Permits"] }
    ],
    reviews: []
  },
  {
    id: "almaz",
    name: "Almaz Girma",
    country: "Ethiopia",
    region: "Harar & eastern Ethiopia",
    flag: "🇪🇹",
    speciality: "Walled city & wildlife guide",
    promise: "I will sit you down in a courtyard that has hosted coffee ceremonies since the 13th century. And later, I will watch you feed raw meat to a wild hyena by hand.",
    bio: "Almaz grew up in Harar — one of the oldest walled cities in Africa. She guides travellers through Harar's 368 alleyways, into Harari households that have practised the same coffee ceremonies for centuries, and to the city's most extraordinary ritual — the nightly wild hyena feeding.",
    languages: ["Harari", "Amharic", "Somali", "English"],
    experienceYears: 9,
    certifications: ["Cultural Heritage Guide", "Wildlife Safety Certified"],
    topHiddenGems: ["Harar old city", "Hyena feeding ceremony"],
    bestFor: ["Culture seekers", "Animal lovers", "Urban explorers"],
    toursFrom: 80,
    rating: 4.91,
    reviewsCount: 38,
    image: "https://picsum.photos/seed/almaz-guide/800/1000",
    themeColor: "from-amber-600 to-red-900",
    mapX: 61,
    mapY: 53,
    lat: 9.3111,
    lng: 42.1278,
    photos: [
      { caption: "The colorful alleyways of Harar's walled city", gradient: "bg-linear-to-br from-pink-500 to-amber-600", url: "https://picsum.photos/seed/harar-alley/1200/800" },
      { caption: "The ancient ritual of hyena feeding", gradient: "bg-linear-to-br from-indigo-900 to-black", url: "https://picsum.photos/seed/hyena-feeding/1200/800" }
    ],
    tours: [
      { name: "Harar Old City Deep Walk", duration: "Full Day", price: 80, included: ["Coffee Ceremony", "Lunch"] },
      { name: "Hyena Feeding Ceremony Night Experience", duration: "Evening", price: 90, included: ["Transport", "Safety Briefing"] },
      { name: "Eastern Highlands Trade Route Day", duration: "Full Day", price: 85, included: ["Transport", "Picnic"] }
    ],
    reviews: []
  },
  {
    id: "sofia",
    name: "Sofia Rodrigues",
    country: "Portugal",
    region: "Alentejo plains & Atlantic coast villages",
    flag: "🇵🇹",
    speciality: "Rural Portugal & cork forest guide",
    promise: "Portugal is famous for its coast. But its interior holds stone circles older than Stonehenge and villages where nothing has changed in a century. I will take you there.",
    bio: "Sofia was born in a small Alentejo village and grew up between cork forests and Roman ruins. She takes travellers beyond Lisbon and the Algarve into the vast, silent interior of Portugal — to villages of whitewashed houses and megalithic stone circles.",
    languages: ["Portuguese", "Spanish", "English"],
    experienceYears: 12,
    certifications: ["Regional Heritage Guide", "Sustainable Tourism Certified"],
    topHiddenGems: ["Alentejo megalithic stones", "Hidden Atlantic beaches"],
    bestFor: ["Nature lovers", "History buffs", "Slow travellers"],
    toursFrom: 70,
    rating: 4.97,
    reviewsCount: 134,
    image: "https://picsum.photos/seed/sofia-guide/800/1000",
    themeColor: "from-blue-800 to-emerald-900",
    mapX: 44,
    mapY: 32,
    lat: 38.5714,
    lng: -7.9135,
    photos: [
      { caption: "Ancient megalithic stones in the Alentejo plains", gradient: "bg-linear-to-br from-stone-400 to-emerald-900", url: "https://picsum.photos/seed/alentejo-stones/1200/800" },
      { caption: "A hidden cove on the wild Atlantic coast", gradient: "bg-linear-to-br from-blue-600 to-cyan-900", url: "https://picsum.photos/seed/portugal-beach/1200/800" }
    ],
    tours: [
      { name: "Alentejo Megalithic & Village Day", duration: "Full Day", price: 70, included: ["Lunch", "Entry Fees"] },
      { name: "Atlantic Cliff Trail & Hidden Beach", duration: "Half Day", price: 65, included: ["Picnic", "Transport"] },
      { name: "Cork Forest & Olive Estate", duration: "Full Day", price: 80, included: ["Tasting", "Estate Tour"] }
    ],
    reviews: []
  },
  {
    id: "joao",
    name: "João Ferreira",
    country: "Portugal",
    region: "Douro Valley & Trás-os-Montes",
    flag: "🇵🇹",
    speciality: "Wild north Portugal & ancient wine guide",
    promise: "Trás-os-Montes is a place most Portuguese people have never visited. There are wolves in the forest and pre-Roman villages in the mountains. I will take you to both.",
    bio: "João is from Trás-os-Montes — the 'land beyond the mountains' in Portugal's wild northeast. He leads travellers through schist villages built directly into the rock and to Douro wine terraces so steep they can only be harvested by hand.",
    languages: ["Portuguese", "English"],
    experienceYears: 15,
    certifications: ["Mountain Guide", "Douro Wine Expert"],
    topHiddenGems: ["Schist villages", "Iberian wolf territory"],
    bestFor: ["Adventure seekers", "Wine lovers", "Wildlife enthusiasts"],
    toursFrom: 85,
    rating: 4.94,
    reviewsCount: 97,
    image: "https://picsum.photos/seed/joao-guide/800/1000",
    themeColor: "from-orange-800 to-stone-900",
    mapX: 45,
    mapY: 31,
    lat: 41.1579,
    lng: -8.6291,
    photos: [
      { caption: "A schist village built into the mountain rock", gradient: "bg-linear-to-br from-stone-600 to-slate-900", url: "https://picsum.photos/seed/schist-village/1200/800" },
      { caption: "Steep wine terraces of the Douro Valley", gradient: "bg-linear-to-br from-emerald-700 to-orange-900", url: "https://picsum.photos/seed/douro-valley/1200/800" }
    ],
    tours: [
      { name: "Schist Village & Ancient Terraces", duration: "Full Day", price: 85, included: ["Wine Tasting", "Lunch"] },
      { name: "Montesinho Wolf Territory Trek", duration: "Full Day", price: 95, included: ["Safety Gear", "Picnic"] },
      { name: "Douro Wild Valley 2-Day", duration: "2 Days", price: 210, included: ["Accommodation", "All Meals"] }
    ],
    reviews: []
  },
  {
    id: "valentina",
    name: "Valentina Torres",
    country: "Colombia",
    region: "Coffee region & Andes cloud forest",
    flag: "🇨🇴",
    speciality: "Coffee culture & cloud forest guide",
    promise: "I will take you to a coffee finca where the family has been farming the same mountain since 1890, and into a forest so full of hummingbirds that they will land on your hand.",
    bio: "Valentina was born in the coffee region of Quindío and grew up on her family's coffee finca. She takes small groups to family-owned coffee farms that have never hosted a commercial tour and into cloud forests full of hummingbirds.",
    languages: ["Spanish", "English"],
    experienceYears: 10,
    certifications: ["Coffee Quality Expert", "Bird Watching Guide"],
    topHiddenGems: ["Private coffee fincas", "Hummingbird sanctuaries"],
    bestFor: ["Coffee lovers", "Bird watchers", "Nature lovers"],
    toursFrom: 75,
    rating: 4.98,
    reviewsCount: 143,
    image: "https://picsum.photos/seed/valentina-guide/800/1000",
    themeColor: "from-amber-600 to-emerald-900",
    mapX: 28,
    mapY: 55,
    lat: 4.6243,
    lng: -75.6378,
    photos: [
      { caption: "A hummingbird in the misty cloud forest", gradient: "bg-linear-to-br from-teal-400 to-emerald-900", url: "https://picsum.photos/seed/hummingbird/1200/800" },
      { caption: "The towering wax palms of Cocora Valley", gradient: "bg-linear-to-br from-emerald-500 to-blue-400", url: "https://picsum.photos/seed/cocora/1200/800" }
    ],
    tours: [
      { name: "Family Coffee Finca Immersion", duration: "Full Day", price: 75, included: ["Coffee Tasting", "Lunch"] },
      { name: "Cloud Forest & Hummingbird Trail", duration: "Full Day", price: 80, included: ["Binoculars", "Picnic"] },
      { name: "Cocora Valley Hidden Trail", duration: "Full Day", price: 70, included: ["Transport", "Lunch"] }
    ],
    reviews: []
  },
  {
    id: "andres",
    name: "Andrés Medina",
    country: "Colombia",
    region: "Caribbean coast — beyond Cartagena",
    flag: "🇨🇴",
    speciality: "Lost Caribbean coast & indigenous guide",
    promise: "The Caribbean coast of Colombia extends far beyond Cartagena. I will take you to a beach with no name and to a community that has chosen to remain invisible to the modern world.",
    bio: "Andrés grew up in Santa Marta and has spent 15 years exploring Colombia's Caribbean coast. He has established relationships with Kogui indigenous communities in the Sierra Nevada and arranges respectful, small-group visits.",
    languages: ["Spanish", "English"],
    experienceYears: 15,
    certifications: ["Indigenous Culture Specialist", "Kayak Instructor"],
    topHiddenGems: ["Kogui communities", "Hidden Caribbean beaches"],
    bestFor: ["Adventure seekers", "Culture seekers", "Beach lovers"],
    toursFrom: 80,
    rating: 4.95,
    reviewsCount: 89,
    image: "https://picsum.photos/seed/andres-guide/800/1000",
    themeColor: "from-cyan-600 to-amber-700",
    mapX: 29,
    mapY: 53,
    lat: 11.2408,
    lng: -74.1990,
    photos: [
      { caption: "A pristine beach with no name", gradient: "bg-linear-to-br from-cyan-400 to-blue-600", url: "https://picsum.photos/seed/colombia-beach/1200/800" },
      { caption: "Meeting with the Kogui in the Sierra Nevada", gradient: "bg-linear-to-br from-emerald-800 to-stone-800", url: "https://picsum.photos/seed/kogui/1200/800" }
    ],
    tours: [
      { name: "Kogui Community & Sierra Nevada", duration: "Full Day", price: 80, included: ["Community Gift", "Lunch"] },
      { name: "Mangrove Kayak & Hidden Beach", duration: "Full Day", price: 75, included: ["Kayak Gear", "Picnic"] },
      { name: "Lost Caribbean Trail", duration: "Full Day", price: 95, included: ["Boat Access", "Lunch"] }
    ],
    reviews: []
  },
  {
    id: "arben",
    name: "Arben Hoxha",
    country: "Albania",
    region: "Albanian Alps & Theth valley",
    flag: "🇦🇱",
    speciality: "Albanian Alps wilderness guide",
    promise: "The Albanian Alps are what the Swiss Alps looked like before the tourists arrived. Stone towers, ancient law, silence, and mountains that go on forever. I will take you there.",
    bio: "Arben was born in Shkodër and has been guiding in the Albanian Alps for over a decade. He takes small groups into the Theth and Valbona valleys where stone tower houses still stand intact.",
    languages: ["Albanian", "Italian", "English"],
    experienceYears: 12,
    certifications: ["Mountain Guide", "First Aid Certified"],
    topHiddenGems: ["Theth valley", "Blood feud towers"],
    bestFor: ["Hikers", "Adventure seekers", "History buffs"],
    toursFrom: 60,
    rating: 4.96,
    reviewsCount: 67,
    image: "https://picsum.photos/seed/arben-guide/800/1000",
    themeColor: "from-red-900 to-stone-800",
    mapX: 51,
    mapY: 33,
    lat: 42.3917,
    lng: 19.7750,
    photos: [
      { caption: "The dramatic peaks of the Accursed Mountains", gradient: "bg-linear-to-br from-slate-400 to-indigo-900", url: "https://picsum.photos/seed/albanian-alps/1200/800" },
      { caption: "A traditional stone tower in Theth", gradient: "bg-linear-to-br from-stone-600 to-slate-900", url: "https://picsum.photos/seed/stone-tower/1200/800" }
    ],
    tours: [
      { name: "Theth Valley Hidden Walk", duration: "Full Day", price: 60, included: ["Lunch", "History Talk"] },
      { name: "Accursed Mountains 2-Day Trek", duration: "2 Days", price: 140, included: ["Guesthouse Stay", "All Meals"] },
      { name: "Blood Feud Towers & Mountain Culture", duration: "Full Day", price: 65, included: ["Entry Fees", "Lunch"] }
    ],
    reviews: []
  },
  {
    id: "elona",
    name: "Elona Bushati",
    country: "Albania",
    region: "Albanian Riviera & ancient Butrint",
    flag: "🇦🇱",
    speciality: "Coastal & ancient civilisation guide",
    promise: "Albania has 500 km of coast and most of it has no sunloungers yet. I will show you the beaches, the ruins, and the city of a thousand windows before everyone else arrives.",
    bio: "Elona grew up in Sarandë and has watched the Albanian Riviera slowly appear on travellers' maps. She guides visitors to the coves and beaches that the new tourism wave hasn't reached yet.",
    languages: ["Albanian", "Greek", "English"],
    experienceYears: 8,
    certifications: ["Heritage Guide", "Coastal Safety Certified"],
    topHiddenGems: ["Butrint ruins", "Berat old city"],
    bestFor: ["Beach lovers", "History buffs", "Culture seekers"],
    toursFrom: 55,
    rating: 4.92,
    reviewsCount: 51,
    image: "https://picsum.photos/seed/elona-guide/800/1000",
    themeColor: "from-cyan-600 to-blue-800",
    mapX: 52,
    mapY: 34,
    lat: 39.8750,
    lng: 20.0000,
    photos: [
      { caption: "The ancient ruins of Butrint", gradient: "bg-linear-to-br from-emerald-800 to-stone-700", url: "https://picsum.photos/seed/butrint/1200/800" },
      { caption: "Crystal clear coves of the Albanian Riviera", gradient: "bg-linear-to-br from-cyan-400 to-blue-600", url: "https://picsum.photos/seed/albania-cove/1200/800" }
    ],
    tours: [
      { name: "Albanian Riviera Hidden Coves", duration: "Full Day", price: 55, included: ["Boat Access", "Picnic"] },
      { name: "Butrint Ancient City & Blue Eye", duration: "Full Day", price: 65, included: ["Entry Fees", "Transport"] },
      { name: "Berat Ottoman Heritage Walk", duration: "Full Day", price: 60, included: ["Lunch", "History Talk"] }
    ],
    reviews: []
  },
  {
    id: "made",
    name: "Made Suastika",
    country: "Indonesia",
    region: "Bali interior & East Java volcanoes",
    flag: "🇮🇩",
    speciality: "Bali spiritual & highland guide",
    promise: "The Bali you think you know is the southern 10%. I will take you to the 90% that the tourists haven't found — where the ceremonies are real and the silence is complete.",
    bio: "Made was born into a Balinese Hindu priest family in Ubud's highland villages. He guides travellers away from Bali's southern tourist circuit into the island's interior.",
    languages: ["Balinese", "Indonesian", "English"],
    experienceYears: 18,
    certifications: ["Spiritual Heritage Guide", "Volcano Trekking Specialist"],
    topHiddenGems: ["Hidden rice terraces", "Water temple ceremonies"],
    bestFor: ["Spiritual seekers", "Nature lovers", "Hikers"],
    toursFrom: 65,
    rating: 4.97,
    reviewsCount: 178,
    image: "https://picsum.photos/seed/made-guide/800/1000",
    themeColor: "from-emerald-800 to-red-900",
    mapX: 84,
    mapY: 59,
    lat: -8.4095,
    lng: 115.1889,
    photos: [
      { caption: "A sacred ceremony at a hidden water temple", gradient: "bg-linear-to-br from-teal-500 to-emerald-900", url: "https://picsum.photos/seed/bali-ceremony/1200/800" },
      { caption: "The sulfurous crater of Ijen volcano", gradient: "bg-linear-to-br from-cyan-400 to-blue-900", url: "https://picsum.photos/seed/ijen/1200/800" }
    ],
    tours: [
      { name: "Bali Highland Ceremony & Village", duration: "Full Day", price: 65, included: ["Ceremony Access", "Lunch"] },
      { name: "Hidden Rice Terrace Dawn Walk", duration: "Half Day", price: 55, included: ["Breakfast", "Guide"] },
      { name: "East Java Volcano Farmer Route", duration: "Overnight", price: 120, included: ["Transport", "All Meals", "Safety Gear"] }
    ],
    reviews: []
  },
  {
    id: "rizky",
    name: "Rizky Pratama",
    country: "Indonesia",
    region: "Sulawesi & Flores — eastern Indonesia",
    flag: "🇮🇩",
    speciality: "Eastern Indonesia islands & culture guide",
    promise: "Eastern Indonesia makes Bali look crowded. I will take you to a funeral that celebrates death with music and buffalo, and to an island where you will be the only visitor.",
    bio: "Rizky grew up between Makassar and Flores and has spent years exploring eastern Indonesia's islands. He arranges access to Toraja funeral ceremonies and leads boat expeditions.",
    languages: ["Indonesian", "Torajan", "English"],
    experienceYears: 12,
    certifications: ["Cultural Anthropology Specialist", "Boat Safety Certified"],
    topHiddenGems: ["Toraja death ceremonies", "Remote Komodo islands"],
    bestFor: ["Culture seekers", "Adventure seekers", "Island hoppers"],
    toursFrom: 90,
    rating: 4.94,
    reviewsCount: 82,
    image: "https://picsum.photos/seed/rizky-guide/800/1000",
    themeColor: "from-orange-800 to-red-900",
    mapX: 86,
    mapY: 61,
    lat: -2.9896,
    lng: 119.8962,
    photos: [
      { caption: "The unique architecture of Toraja houses", gradient: "bg-linear-to-br from-orange-700 to-stone-900", url: "https://picsum.photos/seed/toraja/1200/800" },
      { caption: "A Komodo dragon on a deserted beach", gradient: "bg-linear-to-br from-stone-500 to-emerald-900", url: "https://picsum.photos/seed/komodo/1200/800" }
    ],
    tours: [
      { name: "Toraja Ceremony Access & Village", duration: "2 Days", price: 90, included: ["Homestay", "All Meals"] },
      { name: "Komodo Off-Trail Island Expedition", duration: "Full Day", price: 130, included: ["Boat Access", "Lunch", "Park Fees"] },
      { name: "Flores Traditional Village Circuit", duration: "2 Days", price: 110, included: ["Transport", "All Meals"] }
    ],
    reviews: []
  },
  {
    id: "zawadi",
    name: "Zawadi Mwangi",
    country: "Tanzania",
    region: "Zanzibar hinterland & Stone Town",
    flag: "🇹🇿",
    speciality: "Zanzibar heritage & spice guide",
    promise: "Stone Town has been a crossroads of Africa, Arabia, India, and Europe for a thousand years. Most visitors see the surface. I will take you into the layers.",
    bio: "Zawadi was born in Stone Town, Zanzibar. She guides travellers through the hidden quarters of Stone Town — the coral-stone alleyways, the carved door workshops, the rooftop terraces.",
    languages: ["Swahili", "Arabic", "English"],
    experienceYears: 15,
    certifications: ["UNESCO Heritage Guide", "Spice Specialist"],
    topHiddenGems: ["Stone Town hidden quarters", "Family spice farms"],
    bestFor: ["History buffs", "Foodies", "Culture seekers"],
    toursFrom: 70,
    rating: 4.96,
    reviewsCount: 91,
    image: "https://picsum.photos/seed/zawadi-guide/800/1000",
    themeColor: "from-blue-800 to-emerald-900",
    mapX: 59,
    mapY: 64,
    lat: -6.1659,
    lng: 39.2026,
    photos: [
      { caption: "Intricate carved doors of Old Stone Town", gradient: "bg-linear-to-br from-stone-600 to-amber-900", url: "https://picsum.photos/seed/stonetown/1200/800" },
      { caption: "A traditional dhow sailing at dawn", gradient: "bg-linear-to-br from-cyan-400 to-blue-900", url: "https://picsum.photos/seed/dhow/1200/800" }
    ],
    tours: [
      { name: "Stone Town Hidden Quarters Walk", duration: "Full Day", price: 70, included: ["Lunch", "History Talk"] },
      { name: "Family Spice Farm & Swahili Cooking", duration: "Full Day", price: 65, included: ["Cooking Class", "Lunch"] },
      { name: "Dawn Dhow & North Coast Sandbank", duration: "Full Day", price: 80, included: ["Boat Access", "Breakfast"] }
    ],
    reviews: []
  },
  {
    id: "baraka",
    name: "Baraka Kimaro",
    country: "Tanzania",
    region: "Northern Tanzania — beyond the Serengeti",
    flag: "🇹🇿",
    speciality: "Northern wilderness & Maasai culture guide",
    promise: "The Serengeti is magnificent. But I will take you somewhere in Tanzania where there is no other vehicle, no lodge in sight, and the wildlife has never learned to be afraid of people.",
    bio: "Baraka is Maasai, born in a boma near Ngorongoro. He leads travellers on walking safaris through Tanzania's lesser-known parks and conservation areas.",
    languages: ["Maa", "Swahili", "English"],
    experienceYears: 18,
    certifications: ["Maasai Heritage Lead", "Walking Safari Specialist"],
    topHiddenGems: ["Ngorongoro hidden trails", "Maasai communities"],
    bestFor: ["Wildlife enthusiasts", "Adventure seekers", "Culture seekers"],
    toursFrom: 95,
    rating: 4.93,
    reviewsCount: 63,
    image: "https://picsum.photos/seed/baraka-guide/800/1000",
    themeColor: "from-emerald-800 to-stone-900",
    mapX: 58,
    mapY: 66,
    lat: -3.2333,
    lng: 35.4833,
    photos: [
      { caption: "A walking safari in the Maasai Steppe", gradient: "bg-linear-to-br from-emerald-700 to-orange-900", url: "https://picsum.photos/seed/maasai-steppe/1200/800" },
      { caption: "Elephants in the wild Tarangire wilderness", gradient: "bg-linear-to-br from-stone-500 to-emerald-900", url: "https://picsum.photos/seed/tarangire/1200/800" }
    ],
    tours: [
      { name: "Tarangire Walking Safari", duration: "Full Day", price: 95, included: ["Safety Scout", "Lunch"] },
      { name: "Maasai Community & Steppe Walk", duration: "Full Day", price: 85, included: ["Community Gift", "Lunch"] },
      { name: "Kilimanjaro North Slope Hidden Trail", duration: "Full Day", price: 110, included: ["Transport", "Picnic"] }
    ],
    reviews: []
  }
];

export interface HiddenGem {
  id: string;
  flag: string;
  gradient: string;
  url: string;
  description: string;
  country: string;
}

export const HIDDEN_GEMS: HiddenGem[] = [
  {
    id: "1",
    flag: "🇱🇧",
    gradient: "bg-linear-to-br from-emerald-900 via-green-800 to-teal-950",
    url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091654/baakline-new_miejja.jpg",
    description: "A waterfall that drops into silence",
    country: "Lebanon"
  },
  {
    id: "2",
    flag: "🇲🇦",
    gradient: "bg-linear-to-br from-orange-400 via-amber-600 to-red-800",
    url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091654/2385_qzrdep.jpg",
    description: "A village that forgot the modern world",
    country: "Morocco"
  },
  {
    id: "3",
    flag: "🇯🇵",
    gradient: "bg-linear-to-br from-blue-100 via-slate-300 to-indigo-400",
    url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091653/shirakawa-go-15_astkiy.jpg",
    description: "The last thatched roof in a valley of ghosts",
    country: "Japan"
  },
  {
    id: "4",
    flag: "🇬🇪",
    gradient: "bg-linear-to-br from-purple-900 via-slate-800 to-indigo-950",
    url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/936565aebe25858d7b_1273975_10151856021223904_1884326485_o_pbyc6l.jpg",
    description: "The shadow of a tower built for a forgotten king",
    country: "Georgia"
  },
  {
    id: "5",
    flag: "🇵🇪",
    gradient: "bg-linear-to-br from-red-800 via-orange-900 to-stone-900",
    url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/qenqo-temple_tm6wly.jpg",
    description: "An altar where the sun is tied to the earth",
    country: "Peru"
  },
  {
    id: "6",
    flag: "🇪🇹",
    gradient: "bg-linear-to-br from-yellow-600 via-green-800 to-emerald-950",
    url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091652/Maryam-Shewito-exterior-architectural-review-ethiopia-stone_psg5oy.jpg",
    description: "A church carved from a single breath of stone",
    country: "Ethiopia"
  },
  {
    id: "7",
    flag: "🇱🇧",
    gradient: "bg-linear-to-br from-blue-900 via-indigo-950 to-black",
    url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091654/b2_tpupga.jpg",
    description: "A cave where the sea speaks in whispers",
    country: "Lebanon"
  },
  {
    id: "8",
    flag: "🇲🇦",
    gradient: "bg-linear-to-br from-rose-400 via-pink-600 to-purple-900",
    url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091653/68ce995abf72d4300ed5846f_Draa_Valley_Morocco_zfztxm.jpg",
    description: "The last oasis before the sand becomes the sky",
    country: "Morocco"
  },
  {
    id: "9",
    flag: "🇯🇵",
    gradient: "bg-linear-to-br from-cyan-900 via-teal-950 to-black",
    url: "https://res.cloudinary.com/drfswzxab/image/upload/q_auto/f_auto/v1776091653/e1629b9017c5290edd_hellsteaming_alamy_dwii69.jpg",
    description: "Steam rising from a nameless mountain spring",
    country: "Japan"
  },
  {
    id: "10",
    flag: "🇵🇹",
    gradient: "bg-linear-to-br from-stone-400 via-emerald-900 to-slate-900",
    url: "https://picsum.photos/seed/alentejo-stones/800/600",
    description: "Stone circles older than Stonehenge",
    country: "Portugal"
  },
  {
    id: "11",
    flag: "🇨🇴",
    gradient: "bg-linear-to-br from-teal-400 via-emerald-900 to-blue-900",
    url: "https://picsum.photos/seed/cocora/800/600",
    description: "Towering palms in a valley of clouds",
    country: "Colombia"
  },
  {
    id: "12",
    flag: "🇦🇱",
    gradient: "bg-linear-to-br from-stone-600 via-slate-900 to-black",
    url: "https://picsum.photos/seed/stone-tower/800/600",
    description: "A tower built for silence and safety",
    country: "Albania"
  },
  {
    id: "13",
    flag: "🇮🇩",
    gradient: "bg-linear-to-br from-teal-500 via-emerald-900 to-green-950",
    url: "https://picsum.photos/seed/bali-ceremony/800/600",
    description: "A ceremony where the water is sacred",
    country: "Indonesia"
  },
  {
    id: "14",
    flag: "🇹🇿",
    gradient: "bg-linear-to-br from-stone-600 via-amber-900 to-orange-950",
    url: "https://picsum.photos/seed/stonetown/800/600",
    description: "Alleyways that hold a thousand years of stories",
    country: "Tanzania"
  }
];

export const COMING_SOON_COUNTRIES = [
  { name: "Iceland", flag: "🇮🇸", mapX: 45, mapY: 15, lat: 64.9631, lng: -19.0208 },
  { name: "Vietnam", flag: "🇻🇳", mapX: 80, mapY: 48, lat: 14.0583, lng: 108.2772 },
  { name: "Chile", flag: "🇨🇱", mapX: 30, mapY: 80, lat: -35.6751, lng: -71.5430 },
  { name: "Namibia", flag: "🇳🇦", mapX: 52, mapY: 75, lat: -22.9576, lng: 18.4904 }
];

export const SYSTEM_PROMPT = `You are the AI Match assistant inside the Localens app. Your goal is to connect travellers with verified local guides who offer hidden gem experiences.

## YOUR ROLE
When a traveller describes their dream trip, you:
1. Ask 1–2 clarifying questions if needed (travel style, group size, budget range)
2. Match them to the best local guide from the database below
3. Describe why that guide is the perfect match in a warm, specific, exciting way
4. Highlight 1–2 specific hidden gems that guide will show them
5. Invite them to explore the guide's profile or ask follow-up questions

## YOUR TONE
Warm, inspiring, specific. Never generic. Speak like a knowledgeable friend who has travelled everywhere. Never use phrases like "Great choice!" or "Absolutely!". Be direct and vivid.

## GUIDE DATABASE
${GUIDES.map(g => `
### ${g.name} — ${g.flag} ${g.country}
Speciality: ${g.speciality}
Promise: "${g.promise}"
Top hidden gems: ${g.topHiddenGems.join(", ")}
Best for: ${g.bestFor.join(", ")}
Tours from: $${g.toursFrom}/person | Rating: ${g.rating} (${g.reviewsCount} reviews)
`).join("\n")}

## RULES
- Always recommend a specific guide, never stay vague
- Mention at least one concrete hidden gem by name
- If a traveller asks about a country not yet on the platform, say "We don't have a guide there yet — but if you know a local who'd be perfect, they can apply at localens.com/guides"
- Never fabricate guide information beyond what's in the database above
- Keep responses under 120 words unless the traveller asks for more detail
- End every recommendation with a call to action: "Want to see their tour packages?" or "Shall I tell you more about what they'll show you?"
- If you recommend a guide, you MUST include a special tag at the very end of your response in the format: [MATCH:guide_id]. For example: [MATCH:bashir]. Only include ONE match per response.`;
