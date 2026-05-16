import Link from "next/link";
import { notFound } from "next/navigation";

import { genres } from "@/src/data/genres";
import { ramenShops } from "@/src/data/ramenShops";

export const dynamicParams = false;

type ShopPageProps = {
  params: Promise<{
    shopId: string;
  }>;
};

export const generateStaticParams = () => {
  return ramenShops.map((shop) => ({
    shopId: shop.id,
  }));
};

export const generateMetadata = async ({ params }: ShopPageProps) => {
  const { shopId } = await params;
  const shop = ramenShops.find((item) => item.id === shopId);

  if (!shop) {
    return {
      title: "店舗が見つかりません",
    };
  }

  return {
    title: `${shop.name} | ラーメン店詳細`,
    description: `${shop.name} の詳細と Google Maps リンクです。`,
  };
};

export default async function ShopPage({ params }: ShopPageProps) {
  const { shopId } = await params;
  const shop = ramenShops.find((item) => item.id === shopId);

  if (!shop) {
    notFound();
  }

  const genre = genres.find((item) => item.id === shop.genreId);

  if (!genre) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-8 text-zinc-950 sm:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <Link
          href={`/genres/${genre.id}`}
          className="text-sm font-medium text-zinc-500"
        >
          {genre.name}ラーメン一覧へ戻る
        </Link>

        <article className="rounded-lg border border-zinc-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-zinc-500">{genre.name}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
            {shop.name}
          </h1>
          <p className="mt-5 leading-7 text-zinc-600">
            {genre.name}
            ラーメンが食べたいときの候補店舗です。移動前に Google Maps
            で場所や営業状況を確認してください。
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={shop.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Google Maps で見る
            </a>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 px-5 text-sm font-medium text-zinc-950 transition hover:border-zinc-950"
            >
              ジャンルを選び直す
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
