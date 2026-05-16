import Link from "next/link";

import type { Genre } from "@/src/data/genres";

type GenreCardProps = {
  genre: Genre;
  shopCount: number;
};

export default function GenreCard({ genre, shopCount }: GenreCardProps) {
  return (
    <Link
      href={`/genres/${genre.id}`}
      className="group flex min-h-28 flex-col justify-between rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-zinc-950 hover:shadow-sm"
    >
      <span className="text-2xl font-semibold text-zinc-950">{genre.name}</span>
      <span className="mt-6 flex items-center justify-between text-sm text-zinc-500">
        <span>{shopCount} 件のおすすめ</span>
        <span className="text-zinc-950 transition group-hover:translate-x-1">
          選ぶ
        </span>
      </span>
    </Link>
  );
}
