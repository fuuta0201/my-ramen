import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import type { Genre, RamenShop } from "@/src/types/ramen";
import { getPublicAssetPath } from "@/src/lib/publicAssetPath";

type RamenShopCardProps = {
  shop: RamenShop;
  genre?: Genre;
};

export default function RamenShopCard({ shop, genre }: RamenShopCardProps) {
  return (
    <article className="border-border bg-card group hover:border-accent/45 flex min-h-full flex-col overflow-hidden rounded-lg border shadow-sm transition-colors">
      <div className="bg-muted relative aspect-[4/3] overflow-hidden">
        {shop.imageUrl ? (
          <Image
            src={getPublicAssetPath(shop.imageUrl)}
            alt={`${shop.name}のラーメン`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 352px, (min-width: 640px) 50vw, calc(100vw - 40px)"
          />
        ) : (
          <div className="from-muted via-card to-muted flex size-full items-end bg-gradient-to-br p-5">
            <span className="text-muted-foreground text-sm font-semibold tracking-normal">
              RAMEN
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="flex flex-col gap-2">
          <p className="text-accent text-sm leading-none font-semibold">
            {genre?.name ?? "ジャンル未設定"}
          </p>
          <h3 className="text-xl leading-snug font-semibold tracking-normal text-balance">
            {shop.name}
          </h3>
          {shop.description && (
            <p className="text-muted-foreground line-clamp-2 text-sm leading-6 text-pretty">
              {shop.description}
            </p>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <Link
            href={`/shops/${shop.id}`}
            className="bg-foreground text-background hover:bg-foreground/85 focus-visible:outline-ring inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            詳細を見る
            <ChevronRight className="size-4" aria-hidden="true" />
          </Link>
          <a
            href={shop.googleMapUrl}
            target="_blank"
            rel="noreferrer"
            className="border-border bg-card hover:bg-muted focus-visible:outline-ring inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <MapPin className="size-4" aria-hidden="true" />
            Google Map
          </a>
        </div>
      </div>
    </article>
  );
}
