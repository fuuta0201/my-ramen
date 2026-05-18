import Link from "next/link";
import type { Genre } from "@/src/types/ramen";
import { cn } from "@/src/lib/utils";

type GenreNavProps = {
  genres: Genre[];
  selectedGenreId?: number;
};

export default function GenreNav({ genres, selectedGenreId }: GenreNavProps) {
  return (
    <nav aria-label="ラーメンジャンル" className="flex flex-wrap gap-2">
      <Link
        href="/"
        className={cn(
          "border-border hover:bg-muted rounded-md border px-4 py-2 text-sm font-medium transition-colors",
          !selectedGenreId &&
            "bg-foreground text-background hover:bg-foreground",
        )}
      >
        すべて
      </Link>
      {genres.map((genre) => (
        <Link
          key={genre.id}
          href={`/genres/${genre.id}`}
          className={cn(
            "border-border hover:bg-muted rounded-md border px-4 py-2 text-sm font-medium transition-colors",
            selectedGenreId === genre.id &&
              "bg-foreground text-background hover:bg-foreground",
          )}
        >
          {genre.name}
        </Link>
      ))}
    </nav>
  );
}
