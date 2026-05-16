import Link from "next/link";

import type { RamenShop } from "@/src/data/ramenShops";

type ShopCardProps = {
  genreName: string;
  shop: RamenShop;
};

export default function ShopCard({ genreName, shop }: ShopCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5">
      <p className="text-sm font-medium text-zinc-500">{genreName}</p>
      <h2 className="mt-2 text-xl font-semibold text-zinc-950">{shop.name}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Link
          href={`/shops/${shop.id}`}
          className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-200 px-4 text-sm font-medium text-zinc-950 transition hover:border-zinc-950"
        >
          詳細を見る
        </Link>
        <a
          href={shop.googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-medium text-white transition hover:bg-zinc-700"
        >
          Google Maps
        </a>
      </div>
    </article>
  );
}
