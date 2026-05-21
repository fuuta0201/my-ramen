import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { ramenShops } from "@/src/data/ramenShops";
import SiteHeader from "@/src/components/SiteHeader";
import { buttonVariants } from "@/src/components/ui/Button";
import { getPublicAssetPath } from "@/src/lib/publicAssetPath";
import { getGenreById, getShopById } from "@/src/lib/ramen";

type ShopPageProps = {
  params: Promise<{
    shopId: string;
  }>;
};

export const generateStaticParams = () =>
  ramenShops.map((shop) => ({
    shopId: shop.id.toString(),
  }));

export default async function ShopPage({ params }: ShopPageProps) {
  const { shopId } = await params;
  const shop = getShopById(Number(shopId));

  if (!shop) {
    notFound();
  }

  const genre = getGenreById(shop.genreId);

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 py-10 sm:px-6 sm:py-14">
        <Link
          href={genre ? `/genres/${genre.id}` : "/"}
          className="text-muted-foreground hover:text-foreground focus-visible:outline-ring inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          一覧へ戻る
        </Link>

        <article className="border-border bg-card overflow-hidden rounded-lg border shadow-sm">
          {shop.imageUrl && (
            <div className="bg-muted relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={getPublicAssetPath(shop.imageUrl)}
                alt={`${shop.name}のラーメン`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 896px, calc(100vw - 40px)"
                priority
              />
            </div>
          )}

          <div className="flex flex-col gap-7 p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <p className="text-accent text-sm leading-none font-semibold">
                {genre?.name ?? "ジャンル未設定"}
              </p>
              <h1 className="text-foreground text-4xl leading-tight font-semibold tracking-normal text-balance sm:text-5xl">
                {shop.name}
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-8 text-pretty">
                店舗の場所や営業時間の確認はGoogle Mapで行えます。
                気になる一杯があれば、現在地からの経路もあわせて確認してください。
              </p>
            </div>

            <a
              href={shop.googleMapUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "accent",
                className: "w-full sm:w-fit",
              })}
            >
              <MapPin className="size-4" aria-hidden="true" />
              Google Mapで開く
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
