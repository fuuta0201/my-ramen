import Link from "next/link";
import type { Genre } from "@/src/types/ramen";
import { cn } from "@/src/lib/utils";

type GenreNavProps = {
  genres: Genre[];
  selectedGenreId?: number;
};

export default function GenreNav({ genres, selectedGenreId }: GenreNavProps) {
  return (
    <nav
      aria-label="ラーメンジャンル"
      className="border-border bg-card/80 flex flex-wrap gap-2 rounded-lg border p-2 shadow-sm"
    >
      <Link
        href="/"
        className={cn(
          "text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-ring rounded-md px-4 py-2.5 text-sm leading-none font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
          !selectedGenreId &&
            "bg-foreground text-background hover:bg-foreground/90 hover:text-background shadow-sm",
        )}
      >
        すべて
      </Link>
      {genres.map((genre) => (
        <Link
          key={genre.id}
          href={`/genres/${genre.id}`}
          className={cn(
            "text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-ring rounded-md px-4 py-2.5 text-sm leading-none font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
            selectedGenreId === genre.id &&
              "bg-foreground text-background hover:bg-foreground/90 hover:text-background shadow-sm",
          )}
        >
          {genre.name}
        </Link>
      ))}
    </nav>
  );
}
