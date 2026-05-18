import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { ramenShops } from "@/src/data/ramenShops";
import { buttonVariants } from "@/src/components/ui/Button";
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
    <main className="bg-background min-h-screen">
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-12 sm:py-16">
        <Link
          href={genre ? `/genres/${genre.id}` : "/"}
          className="text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-2 text-sm font-medium"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          一覧へ戻る
        </Link>

        <article className="border-border flex flex-col gap-8 rounded-lg border p-6 sm:p-8">
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm font-medium">
              {genre?.name ?? "ジャンル未設定"}
            </p>
            <h1 className="text-4xl font-semibold tracking-normal">
              {shop.name}
            </h1>
            <p className="text-muted-foreground text-base leading-7">
              店舗の場所や営業時間の確認はGoogle Mapで行えます。
            </p>
          </div>

          <a
            href={shop.googleMapUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ className: "w-fit" })}
          >
            <MapPin className="size-4" aria-hidden="true" />
            Google Mapで開く
          </a>
        </article>
      </section>
    </main>
  );
}
