export interface Artist {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  spotifyArtistId?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
  year: number;
  spotifyAlbumId?: string;
}

export const NDL_DATA: { artists: Artist[]; albums: Album[] } = {
  artists: [
    { id: "1", name: "SOLO", role: "Rapper / Lyricist", image: "https://images.unsplash.com/photo-1520859092317-4663d8a317af?q=80&w=1000", bio: "NDL-ийн үндсэн реппер. Түүний үг хурц бөгөөд утга агуулгатай.", spotifyArtistId: "0Y5tJX1MQlPlqiwlOH1tJY" },
    { id: "2", name: "BEATSMITH", role: "Main Producer", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000", bio: "Лебелийн бүх хөгжмийн найруулгыг хариуцдаг мастер.", spotifyArtistId: "1Xyo4u8uXC1ZmMpatF05PJ" },
    { id: "3", name: "LUNA", role: "Vocalist", image: "https://images.unsplash.com/photo-1516575307444-593466374891?q=80&w=1000", bio: "Зөөлөн хоолой, гүн мэдрэмж.", spotifyArtistId: "6qqNVTkY8uBg9cP3Jd7DAH" },
    { id: "4", name: "VIBE", role: "DJ / Visual Artist", image: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=1000", bio: "Label-ийн өнгө төрх болон шоуны vibe-ыг тодорхойлогч.", spotifyArtistId: "4dpARuHxo51G3z768sgnrY" },
    { id: "5", name: "K-PULSE", role: "Beatmaker", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000", bio: "Шинэ үеийн trap болон drill хөгжмийн төлөөлөл.", spotifyArtistId: "7dGJo4pcD2V6oG8kP0tJRR" },
    { id: "6", name: "IRIS", role: "R&B Artist", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000", bio: "Modern R&B төрлөөр дагнадаг уран бүтээлч.", spotifyArtistId: "5K4W6rqBFWDnAN6FQUkS6x" }
  ],
  albums: [
    { id: "a1", title: "Genesis", artist: "SOLO", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000", year: 2024, spotifyAlbumId: "4aawyAB9vmqN3uQ7FjRGTy" },
    { id: "a2", title: "Midnight City", artist: "LUNA", cover: "https://images.unsplash.com/photo-1514525253361-bee8a4874093?q=80&w=1000", year: 2024, spotifyAlbumId: "2ODvWsOgouMbaA5xf0RkJe" },
    { id: "a3", title: "Analog Dreams", artist: "BEATSMITH", cover: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=1000", year: 2023, spotifyAlbumId: "3mH6qwIy9crq0I9YQbOuDf" },
    { id: "a4", title: "Dark Pulse", artist: "K-PULSE", cover: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000", year: 2024, spotifyAlbumId: "1A2GTWGtFfWp7KSQTwWOyo" },
    { id: "a5", title: "Neon Soul", artist: "IRIS", cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1000", year: 2023, spotifyAlbumId: "0ETFjACtuP2ADo6LFhL6HN" },
    { id: "a6", title: "The Mixtape Vol. 1", artist: "NDL Records", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000", year: 2024, spotifyAlbumId: "7ycBtnsMtyVbbwTfJwRjSP" },
    { id: "a7", title: "Lost Files", artist: "VIBE", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000", year: 2022, spotifyAlbumId: "0JGOiO34nwfUdDrD612dOp" },
    { id: "a8", title: "Summer Waves", artist: "LUNA", cover: "https://images.unsplash.com/photo-1420161907993-e29899f36bc4?q=80&w=1000", year: 2024, spotifyAlbumId: "6JWc4iAiJ9FjyK0B59ABb4" },
    { id: "a9", title: "Hard Wired", artist: "SOLO", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000", year: 2023, spotifyAlbumId: "4m2880jivSbbyEGAKfITCa" },
    { id: "a10", title: "After Hours", artist: "IRIS", cover: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?q=80&w=1000", year: 2024, spotifyAlbumId: "4yP0hdKOZPNshxUOjY0cZj" }
  ]
};
