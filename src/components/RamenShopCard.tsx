import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import type { Genre, RamenShop } from "@/src/types/ramen";

type RamenShopCardProps = {
  shop: RamenShop;
  genre?: Genre;
};

export default function RamenShopCard({ shop, genre }: RamenShopCardProps) {
  return (
    <article className="border-border flex flex-col gap-5 rounded-lg border p-5">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-sm font-medium">
          {genre?.name ?? "ジャンル未設定"}
        </p>
        <h3 className="text-xl font-semibold tracking-normal">{shop.name}</h3>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/shops/${shop.id}`}
          className="bg-foreground text-background hover:bg-foreground/85 inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-colors"
        >
          詳細を見る
          <ChevronRight className="size-4" aria-hidden="true" />
        </Link>
        <a
          href={shop.googleMapUrl}
          target="_blank"
          rel="noreferrer"
          className="border-border hover:bg-muted inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors"
        >
          <MapPin className="size-4" aria-hidden="true" />
          Map
        </a>
      </div>
    </article>
  );
}
