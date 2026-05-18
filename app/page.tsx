import GenreNav from "@/src/components/GenreNav";
import RamenShopList from "@/src/components/RamenShopList";
import { genres } from "@/src/data/genres";
import { ramenShops } from "@/src/data/ramenShops";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 sm:py-16">
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            Ramen selector
          </p>
          <div className="flex max-w-3xl flex-col gap-5">
            <h1 className="text-foreground text-4xl font-semibold tracking-normal sm:text-5xl">
              気分に合う一杯を、ジャンルから探す。
            </h1>
            <p className="text-muted-foreground text-base leading-7 sm:text-lg">
              好みのラーメンジャンルを選ぶと、おすすめの店舗一覧と詳細、Google
              Mapへの導線を確認できます。
            </p>
          </div>
        </div>

        <GenreNav genres={genres} />

        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-normal">
              すべてのおすすめ
            </h2>
            <p className="text-muted-foreground text-sm">
              まずは気になるジャンルを選んで、候補を絞り込んでください。
            </p>
          </div>
          <RamenShopList shops={ramenShops} genres={genres} />
        </section>
      </section>
    </main>
  );
}
