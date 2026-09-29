export type Creative = {
  slug: string;
  name: string;
  discipline: string;
  category: string;
  location: string;
  email: string;
  instagram: string;
  bio: string;
  photo: string;
  work: string[];
  label: string;
};

export const creatives: Creative[] = [
  {
    slug: "mara-james",
    name: "Mara James",
    discipline: "Illustrator & muralist",
    category: "Illustration",
    location: "New Haven, CT",
    email: "hello@marajames.studio",
    instagram: "@maramakesmarks",
    bio: "I make big, colorful things for walls and small, weird things for paper. Usually found drawing plants that look a little bit like people. Available for murals, commissions, and a good studio visit.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    work: ["https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=850&q=85", "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=850&q=85"],
    label: "DRAWING THINGS",
  },
  {
    slug: "eli-rivera",
    name: "Eli Rivera",
    discipline: "Photographer & darkroom nerd",
    category: "Photography",
    location: "Hartford, CT",
    email: "eli@rivera.photo",
    instagram: "@eli_onfilm",
    bio: "Portraits, late-night diners, and the in-between bits of everyday life. I shoot on film whenever I can and love working with musicians, makers, and people with a story to tell.",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
    work: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=850&q=85", "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=850&q=85"],
    label: "ON 35MM FILM",
  },
  {
    slug: "nina-park",
    name: "Nina Park",
    discipline: "Graphic designer & type person",
    category: "Design",
    location: "Bridgeport, CT",
    email: "work@ninapark.design",
    instagram: "@nina.draws.type",
    bio: "Identity systems for projects with a point of view. I like wonky lettering, very good snacks, and making the complicated feel simple. Open to freelance and collaborative projects.",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=85",
    work: ["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=850&q=85", "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=850&q=85"],
    label: "MADE BY HAND",
  },
  {
    slug: "jo-morales",
    name: "Jo Morales",
    discipline: "Ceramic artist & teacher",
    category: "Ceramics",
    location: "New London, CT",
    email: "jo@softshape.studio",
    instagram: "@softshape.studio",
    bio: "Soft shapes, lopsided mugs, and little objects that make a home feel like yours. I run small, friendly pottery classes out of my sunny New London studio.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
    work: ["https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=850&q=85", "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=850&q=85"],
    label: "CLAY ALL DAY",
  },
  {
    slug: "sam-kim",
    name: "Sam Kim",
    discipline: "Musician & sound artist",
    category: "Music",
    location: "Middletown, CT",
    email: "sam@smallnoises.fm",
    instagram: "@smallnoises.fm",
    bio: "Making gentle noise with old synths, found objects, and whatever is humming in the room. I score short films, play small venues, and collaborate with visual artists.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85",
    work: ["https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=850&q=85", "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=850&q=85"],
    label: "SOMEWHERE LIVE",
  },
  {
    slug: "tess-walker",
    name: "Tess Walker",
    discipline: "Textile artist & sewist",
    category: "Textiles",
    location: "Stamford, CT",
    email: "tess@patchwork.world",
    instagram: "@patchwork.world",
    bio: "Upcycled clothes and one-of-a-kind quilts made from fabric with a past. I take custom commissions and host monthly mending circles. Bring your jeans and your unfinished projects.",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
    work: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=850&q=85", "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=850&q=85"],
    label: "PATCHED UP",
  },
];

export const categories = [...new Set(creatives.map((creative) => creative.category))];
export const locations = [...new Set(creatives.map((creative) => creative.location.replace(", CT", "")))];