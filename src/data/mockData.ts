export interface Artist {
  id: string;
  name: string;
  role: string;
  image: string;
  images: string[]; // Multiple images for gallery
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
// Real NDL Artists
export const NDL_DATA: { artists: Artist[]; albums: Album[]; } = {
  artists: [
    { 
      id: "1", 
      name: "TAISHIR", 
      role: "Rapper / Artist", 
      image: "/images/artists/Taishir-1.jpg",
      images: [
        "/images/artists/Taishir-1.jpg",
        "/images/artists/Taishir-2.jpg",
        "/images/artists/Taishir-3.jpg"
      ],
      bio: "NDL-ийн гол реппер. Хурц үг, өвөрмөц стиль, бүх зүйлийг хар өнгөөр илэрхийлдэг.", 
      spotifyArtistId: "58fEFg0gqiKm3WRmohv8Sx" 
    },
    { 
      id: "2", 
      name: "TUTU", 
      role: "Rapper / Artist", 
      image: "/images/artists/Tutu-1.jpg",
      images: [
        "/images/artists/Tutu-1.jpg",
        "/images/artists/Tutu-2.jpg",
        "/images/artists/Tutu-3.jpg"
      ],
      bio: "Өөрийн гэсэн өнгө төрхтэй, dreads үстэй залуу. Trap болон drill хөгжмийн мастер.", 
      spotifyArtistId: "70FOxVMJ7YxAYWJhDAfcMJ" 
    },
    { 
      id: "3", 
      name: "OCH", 
      role: "Rapper / Artist", 
      image: "/images/artists/Och-1.jpg",
      images: [
        "/images/artists/Och-1.jpg",
        "/images/artists/Och-2.jpg",
        "/images/artists/Och-3.jpg"
      ],
      bio: "NDL chain-тэй, durag-тай залуу. Гүн утга агуулгатай дуунуудаараа алдартай.", 
      spotifyArtistId: "5mirDU9yp0ZZwKt2FbxMF6" 
    },
    { 
      id: "4", 
      name: "TUSHIG5AM", 
      role: "Rapper / Artist", 
      image: "/images/artists/5AM-1.jpg",
      images: [
        "/images/artists/5AM-1.jpg",
        "/images/artists/5AM-2.jpg",
      ],
      bio: "Ногоон scarf-тай, NDL chain-тай. Cinematic visual-тай дуунуудаараа танигддаг.", 
      spotifyArtistId: "344zam9hm6bZHwWKnv2PAf" 
    },
    { 
        id: "5", 
        name: "SHUWU", 
        role: "CEO / Producer / Artist", 
        image: "/images/artists/Wushu-1.jpg",
        images: [
          "/images/artists/Wushu-1.jpg",
          "/images/artists/Wushu-2.jpg",
        ],
        bio: "Ногоон scarf-тай, NDL chain-тай. Cinematic visual-тай дуунуудаараа танигддаг.", 
        spotifyArtistId: "37IySaGyvAuDFZ4DlWvhd8" 
      }
  ],
  albums: [
    { id: "a1", title: "ENDLESS", artist: "NDL", cover: "/images/NDL-1.jpg", year: 2024, spotifyAlbumId: "4aawyAB9vmqN3uQ7FjRGTy" },
    { id: "a2", title: "24", artist: "SHUWU", cover: "/images/albums/shuwu/24Shuwu.jpg", year: 2024, spotifyAlbumId: "2ODvWsOgouMbaA5xf0RkJe" },
    { id: "a3", title: "Pain is Money", artist: "SHUWU", cover: "/images/albums/shuwu/Pain-is-money.jpg", year: 2024, spotifyAlbumId: "3mH6qwIy9crq0I9YQbOuDf" },
    { id: "a4", title: "5AM", artist: "Tushig5AM", cover: "/images/albums/5am/tushig-tsomog.webp", year: 2024, spotifyAlbumId: "3mH6qwIy9crq0I9YQbOuDf" },
    { id: "a5", title: "Och", artist: "NDL OCH", cover: "/images/albums/och/och-tsomog.jpg", year: 2024, spotifyAlbumId: "3mH6qwIy9crq0I9YQbOuDf" },
  ],
};
