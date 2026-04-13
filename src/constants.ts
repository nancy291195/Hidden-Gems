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
  }
];

export const COMING_SOON_COUNTRIES = [
  { name: "Iceland", flag: "🇮🇸", mapX: 45, mapY: 15 },
  { name: "Vietnam", flag: "🇻🇳", mapX: 80, mapY: 48 },
  { name: "Portugal", flag: "🇵🇹", mapX: 44, mapY: 32 },
  { name: "Chile", flag: "🇨🇱", mapX: 30, mapY: 80 },
  { name: "Namibia", flag: "🇳🇦", mapX: 52, mapY: 75 }
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
