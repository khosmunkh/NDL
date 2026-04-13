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

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  artist?: string;
}

// Real NDL Artists
export const NDL_DATA: { artists: Artist[]; albums: Album[]; gallery: GalleryImage[] } = {
  artists: [
    { 
      id: "1", 
      name: "TAISHIR", 
      role: "Rapper / Artist", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657708932_17893312407441109_8488993535156448598_n-1xdlCpTzQUrRpy050xoSKNUIhEMuLB.jpg",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657708932_17893312407441109_8488993535156448598_n-1xdlCpTzQUrRpy050xoSKNUIhEMuLB.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/659637021_17893312038441109_8419072171245440273_n-T6Vklegg1LihfHIZ4ObPH7cMtWaIP5.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/656681842_17893312029441109_7510141054947726821_n-JEXRHlVxFaDuvOlAe9QDSn0XluFwXA.jpg"
      ],
      bio: "NDL-ийн гол реппер. Хурц үг, өвөрмөц стиль, бүх зүйлийг хар өнгөөр илэрхийлдэг.", 
      spotifyArtistId: "0Y5tJX1MQlPlqiwlOH1tJY" 
    },
    { 
      id: "2", 
      name: "TUTU", 
      role: "Rapper / Artist", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657890449_17893310787441109_4716624589671358943_n-ojEEzhlRNTXF9KGdGkInpGnaYfUxvu.jpg",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657301270_17893311228441109_2157851705760579903_n-pITzyT7j7VS7rEuU9YHbd5FDlEySlB.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657890449_17893310787441109_4716624589671358943_n-ojEEzhlRNTXF9KGdGkInpGnaYfUxvu.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657218955_17893312392441109_7903124590073057457_n-yeCHP3IPIHvrAS3g7QwHArXWTbElpE.jpg"
      ],
      bio: "Өөрийн гэсэн өнгө төрхтэй, dreads үстэй залуу. Trap болон drill хөгжмийн мастер.", 
      spotifyArtistId: "1Xyo4u8uXC1ZmMpatF05PJ" 
    },
    { 
      id: "3", 
      name: "OCH", 
      role: "Rapper / Artist", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/658076042_17893311957441109_7865372133373513390_n-sb4SMuYcsCkwBfvEcUU9M4sgsBMGDD.jpg",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/658076042_17893311957441109_7865372133373513390_n-sb4SMuYcsCkwBfvEcUU9M4sgsBMGDD.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/660457451_17893311480441109_2923454487688879942_n-OKZswW21EMNSHNct1aHyqHlNGxZHiO.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/658358273_17893310775441109_2671235748652116820_n-1Xntl1xD9HSfmwU6WyEW6pXycl9qay.jpg"
      ],
      bio: "NDL chain-тэй, durag-тай залуу. Гүн утга агуулгатай дуунуудаараа алдартай.", 
      spotifyArtistId: "6qqNVTkY8uBg9cP3Jd7DAH" 
    },
    { 
      id: "4", 
      name: "TUSHIG5AM", 
      role: "Rapper / Artist", 
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657772427_17893312329441109_6617448740255138181_n-KQ8jzek4wrY0BH3kYWelviNcsuRujx.jpg",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657772427_17893312329441109_6617448740255138181_n-KQ8jzek4wrY0BH3kYWelviNcsuRujx.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/656628314_17893311498441109_4781006818922168269_n-oeCdSWBhmOmMon5DynQARq9WLMRbpU.jpg"
      ],
      bio: "Ногоон scarf-тай, NDL chain-тай. Cinematic visual-тай дуунуудаараа танигддаг.", 
      spotifyArtistId: "4dpARuHxo51G3z768sgnrY" 
    }
  ],
  albums: [
    { id: "a1", title: "Nomadic Dreams", artist: "NDL", cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/659560418_17893311471441109_7305446662145199682_n-Tkkg2ZKobYVOvhHsmHQ3wB94XJwkAX.jpg", year: 2024, spotifyAlbumId: "4aawyAB9vmqN3uQ7FjRGTy" },
    { id: "a2", title: "Dark Mode", artist: "TAISHIR", cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657218955_17893312392441109_7903124590073057457_n-yeCHP3IPIHvrAS3g7QwHArXWTbElpE.jpg", year: 2024, spotifyAlbumId: "2ODvWsOgouMbaA5xf0RkJe" },
    { id: "a3", title: "Drill Season", artist: "TUTU", cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/658358273_17893310775441109_2671235748652116820_n-1Xntl1xD9HSfmwU6WyEW6pXycl9qay.jpg", year: 2024, spotifyAlbumId: "3mH6qwIy9crq0I9YQbOuDf" },
    { id: "a4", title: "Chain Gang", artist: "OCH", cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/660457451_17893311480441109_2923454487688879942_n-OKZswW21EMNSHNct1aHyqHlNGxZHiO.jpg", year: 2024, spotifyAlbumId: "1A2GTWGtFfWp7KSQTwWOyo" },
    { id: "a5", title: "5AM Vibes", artist: "TUSHIG5AM", cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/656628314_17893311498441109_4781006818922168269_n-oeCdSWBhmOmMon5DynQARq9WLMRbpU.jpg", year: 2023, spotifyAlbumId: "0ETFjACtuP2ADo6LFhL6HN" },
    { id: "a6", title: "NDL Mixtape Vol. 1", artist: "NDL", cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/659637021_17893312038441109_8419072171245440273_n-T6Vklegg1LihfHIZ4ObPH7cMtWaIP5.jpg", year: 2023, spotifyAlbumId: "7ycBtnsMtyVbbwTfJwRjSP" },
    { id: "a7", title: "Mask On", artist: "TAISHIR", cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657708932_17893312407441109_8488993535156448598_n-1xdlCpTzQUrRpy050xoSKNUIhEMuLB.jpg", year: 2023, spotifyAlbumId: "0JGOiO34nwfUdDrD612dOp" },
    { id: "a8", title: "Blue World", artist: "TUTU", cover: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657301270_17893311228441109_2157851705760579903_n-pITzyT7j7VS7rEuU9YHbd5FDlEySlB.jpg", year: 2023, spotifyAlbumId: "6JWc4iAiJ9FjyK0B59ABb4" }
  ],
  gallery: [
    { id: "g1", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657708932_17893312407441109_8488993535156448598_n-1xdlCpTzQUrRpy050xoSKNUIhEMuLB.jpg", alt: "TAISHIR - Studio Shot", artist: "TAISHIR" },
    { id: "g2", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/659637021_17893312038441109_8419072171245440273_n-T6Vklegg1LihfHIZ4ObPH7cMtWaIP5.jpg", alt: "TAISHIR - Portrait", artist: "TAISHIR" },
    { id: "g3", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/656681842_17893312029441109_7510141054947726821_n-JEXRHlVxFaDuvOlAe9QDSn0XluFwXA.jpg", alt: "TAISHIR - Profile", artist: "TAISHIR" },
    { id: "g4", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657301270_17893311228441109_2157851705760579903_n-pITzyT7j7VS7rEuU9YHbd5FDlEySlB.jpg", alt: "TUTU - Blue Fit", artist: "TUTU" },
    { id: "g5", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657890449_17893310787441109_4716624589671358943_n-ojEEzhlRNTXF9KGdGkInpGnaYfUxvu.jpg", alt: "TUTU - Dreads", artist: "TUTU" },
    { id: "g6", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657218955_17893312392441109_7903124590073057457_n-yeCHP3IPIHvrAS3g7QwHArXWTbElpE.jpg", alt: "TUTU - Balaclava", artist: "TUTU" },
    { id: "g7", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/658076042_17893311957441109_7865372133373513390_n-sb4SMuYcsCkwBfvEcUU9M4sgsBMGDD.jpg", alt: "OCH - Chain", artist: "OCH" },
    { id: "g8", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/660457451_17893311480441109_2923454487688879942_n-OKZswW21EMNSHNct1aHyqHlNGxZHiO.jpg", alt: "OCH - Moody", artist: "OCH" },
    { id: "g9", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/658358273_17893310775441109_2671235748652116820_n-1Xntl1xD9HSfmwU6WyEW6pXycl9qay.jpg", alt: "OCH - Hands", artist: "OCH" },
    { id: "g10", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657772427_17893312329441109_6617448740255138181_n-KQ8jzek4wrY0BH3kYWelviNcsuRujx.jpg", alt: "TUSHIG5AM - Green Scarf", artist: "TUSHIG5AM" },
    { id: "g11", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/656628314_17893311498441109_4781006818922168269_n-oeCdSWBhmOmMon5DynQARq9WLMRbpU.jpg", alt: "TUSHIG5AM - Silhouette", artist: "TUSHIG5AM" },
    { id: "g12", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/659908054_17893311171441109_2361360470813628084_n-kWT2l4s8kGqMguHSCjDHPxwmflAyM1.jpg", alt: "NDL - Stone Island", artist: "NDL" },
    { id: "g13", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/659560418_17893311471441109_7305446662145199682_n-Tkkg2ZKobYVOvhHsmHQ3wB94XJwkAX.jpg", alt: "NDL - Chains", artist: "NDL" }
  ]
};
