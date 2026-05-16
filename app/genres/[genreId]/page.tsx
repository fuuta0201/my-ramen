import Link from "next/link";
import { notFound } from "next/navigation";

import ShopCard from "@/src/components/ShopCard";
import { genres } from "@/src/data/genres";
import { ramenShops } from "@/src/data/ramenShops";

export const dynamicParams = false;

type GenrePageProps = {
  params: Promise<{
    genreId: string;
  }>;
};

export const generateStaticParams = () => {
  return genres.map((genre) => ({
    genreId: genre.id,
  }));
};

export const generateMetadata = async ({ params }: GenrePageProps) => {
  const { genreId } = await params;
  const genre = genres.find((item) => item.id === genreId);

  if (!genre) {
    return {
      title: "ジャンルが見つかりません",
    };
  }

  return {
    title: `${genre.name}ラーメンのおすすめ店`,
    description: `${genre.name}ラーメンのおすすめ店舗一覧です。`,
  };
};

export default async function GenrePage({ params }: GenrePageProps) {
  const { genreId } = await params;
  const genre = genres.find((item) => item.id === genreId);

  if (!genre) {
    notFound();
  }

  const shops = ramenShops.filter((shop) => shop.genreId === genre.id);

  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-8 text-zinc-950 sm:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <Link href="/" className="text-sm font-medium text-zinc-500">
          ジャンル選択へ戻る
        </Link>

        <header>
          <p className="text-sm font-medium text-zinc-500">Selected Genre</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">
            {genre.name}ラーメン
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
            このジャンルでおすすめの店舗です。詳細を確認するか、 Google Maps
            で場所を開けます。
          </p>
        </header>

        <section aria-label={`${genre.name}ラーメンのおすすめ店舗`}>
          <div className="grid gap-4">
            {shops.map((shop) => (
              <ShopCard key={shop.id} shop={shop} genreName={genre.name} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
