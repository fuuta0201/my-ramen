import GenreCard from "@/src/components/GenreCard";
import { genres } from "@/src/data/genres";
import { ramenShops } from "@/src/data/ramenShops";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-8 text-zinc-950 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <section className="pt-6">
          <p className="text-sm font-medium text-zinc-500">Ramen Finder</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-zinc-950 sm:text-6xl">
            好きなジャンルから、次に行きたいラーメン店を選ぶ。
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            気分に合うジャンルを選ぶと、おすすめ店舗の一覧と詳細、 Google Maps
            へのリンクをすぐ確認できます。
          </p>
        </section>

        <section aria-labelledby="genre-heading" className="pb-12">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 id="genre-heading" className="text-xl font-semibold">
                ジャンルを選択
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                迷ったら今の気分に近い味から選んでください。
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {genres.map((genre) => (
              <GenreCard
                key={genre.id}
                genre={genre}
                shopCount={
                  ramenShops.filter((shop) => shop.genreId === genre.id).length
                }
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
