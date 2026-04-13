export interface Guide {
  id: string;
  name: string;
  country: string;
  speciality: string;
  promise: string;
  topHiddenGems: string[];
  bestFor: string[];
  toursFrom: number;
  rating: number;
  reviews: number;
  flag: string;
  image: string;
}

export const GUIDES: Guide[] = [
  {
    id: "bashir",
    name: "Bashir Choucair",
    country: "Lebanon",
    flag: "🇱🇧",
    speciality: "Hidden waterfalls, sea caves, Akkar forests, stargazing",
    promise: "I promise you will stand somewhere in Lebanon that no other tourist has visited that day.",
    topHiddenGems: ["Baatara Gorge base hike", "Al Ezer Iron Oak Forest (Milky Way)", "Yahchouch Valley", "Anfeh salt pans"],
    bestFor: ["Nature lovers", "Photographers", "Adventure seekers"],
    toursFrom: 70,
    rating: 4.98,
    reviews: 312,
    image: "https://picsum.photos/seed/lebanon-guide/400/600"
  },
  {
    id: "yasmine",
    name: "Yasmine El Fassi",
    country: "Morocco",
    flag: "🇲🇦",
    speciality: "Secret Fès medina, Berber villages, Sahara edge oases",
    promise: "Every traveller returns home with a story that starts with 'I found a place no one had heard of.'",
    topHiddenGems: ["12th-century unmarked Fès foundries", "Atlas Berber communities with no tourism infrastructure"],
    bestFor: ["Culture seekers", "History buffs", "Slow travellers"],
    toursFrom: 75,
    rating: 4.96,
    reviews: 187,
    image: "https://picsum.photos/seed/morocco-guide/400/600"
  },
  {
    id: "kenji",
    name: "Kenji Mori",
    country: "Japan",
    flag: "🇯🇵",
    speciality: "Rural Tohoku villages, hidden onsen, forgotten samurai trails",
    promise: "I will take you somewhere in Japan that your Japanese friends have never visited. Guaranteed.",
    topHiddenGems: ["Disappearing mountain villages in Tohoku", "unlisted onsen accessible only on foot"],
    bestFor: ["Culture immersion", "Small groups (max 4)", "Multi-day experiences"],
    toursFrom: 110,
    rating: 5.0,
    reviews: 94,
    image: "https://picsum.photos/seed/japan-guide/400/600"
  },
  {
    id: "nino",
    name: "Nino Kvaratskhelia",
    country: "Georgia",
    flag: "🇬🇪",
    speciality: "Svaneti medieval towers, Tusheti wilderness, ancient wine qvevri",
    promise: "You will sleep in a medieval tower house and wake up to a mountain view that doesn't exist on Instagram.",
    topHiddenGems: ["Lost villages of Tusheti accessible only by mountain road", "wine buried underground since 1987"],
    bestFor: ["Adventure travellers", "History lovers", "Off-grid experiences"],
    toursFrom: 90,
    rating: 4.97,
    reviews: 143,
    image: "https://picsum.photos/seed/georgia-guide/400/600"
  },
  {
    id: "carlos",
    name: "Carlos Quispe",
    country: "Peru",
    flag: "🇵🇪",
    speciality: "Undocumented Incan sites, Sacred Valley secrets, Amazon edge",
    promise: "At least one stop on every tour is a site that does not appear on any tourist map.",
    topHiddenGems: ["14 Incan sites he personally discovered, never listed anywhere"],
    bestFor: ["Archaeology lovers", "Hikers", "Authentic Quechua cultural immersion"],
    toursFrom: 95,
    rating: 4.99,
    reviews: 211,
    image: "https://picsum.photos/seed/peru-guide/400/600"
  },
  {
    id: "tigist",
    name: "Tigist Haile",
    country: "Ethiopia",
    flag: "🇪🇹",
    speciality: "Tigray rock churches, Simien trails, Omo Valley community access",
    promise: "I will take you to a ceremony or community that no travel platform has ever listed.",
    topHiddenGems: ["Cliff rock churches only accessible with local religious permission", "Omo Valley tribes with ethical community access"],
    bestFor: ["Spiritual travellers", "Cultural immersion", "Small ethical groups (max 4)"],
    toursFrom: 90,
    rating: 4.95,
    reviews: 76,
    image: "https://picsum.photos/seed/ethiopia-guide/400/600"
  }
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
Tours from: $${g.toursFrom}/person | Rating: ${g.rating} (${g.reviews} reviews)
`).join("\n")}

## RULES
- Always recommend a specific guide, never stay vague
- Mention at least one concrete hidden gem by name
- If a traveller asks about a country not yet on the platform, say "We don't have a guide there yet — but if you know a local who'd be perfect, they can apply at localens.com/guides"
- Never fabricate guide information beyond what's in the database above
- Keep responses under 120 words unless the traveller asks for more detail
- End every recommendation with a call to action: "Want to see their tour packages?" or "Shall I tell you more about what they'll show you?"`;
