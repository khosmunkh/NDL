"use client"

interface SpotifyEmbedProps {
  spotifyId: string;
  type: "artist" | "album" | "track";
  theme?: "dark" | "light";
  compact?: boolean;
}

export default function SpotifyEmbed({ 
  spotifyId, 
  type, 
  theme = "dark",
  compact = false 
}: SpotifyEmbedProps) {
  const height = compact ? 152 : type === "artist" ? 352 : 380;
  const embedUrl = `https://open.spotify.com/embed/${type}/${spotifyId}?utm_source=generator&theme=${theme === "dark" ? "0" : "1"}`;

  return (
    <div className="w-full overflow-hidden rounded-xl">
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-xl"
        title="Spotify Player"
      />
    </div>
  );
}
