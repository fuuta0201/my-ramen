import GenreNav from "@/src/components/GenreNav";
import RamenShopList from "@/src/components/RamenShopList";
import SiteHeader from "@/src/components/SiteHeader";
import { genres } from "@/src/data/genres";
import { ramenShops } from "@/src/data/ramenShops";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-10 sm:px-6 sm:py-14 lg:gap-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="flex max-w-3xl flex-col gap-6">
            <p className="text-accent text-sm font-semibold tracking-normal">
              Ramen selector
            </p>
            <div className="flex flex-col gap-5">
              <h1 className="text-foreground max-w-3xl text-4xl leading-tight font-semibold tracking-normal text-balance sm:text-5xl lg:text-6xl">
                気分に合う一杯を、ジャンルから探す。
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-8 text-pretty sm:text-lg">
                好みのジャンルを選ぶだけで、おすすめの店舗と詳細、Google
                Mapへの導線をすぐに確認できます。
              </p>
            </div>
          </div>

          <div className="border-border bg-card/85 grid gap-4 rounded-lg border p-5 shadow-sm sm:grid-cols-3 lg:grid-cols-1">
            <div>
              <p className="text-3xl font-semibold tracking-normal">
                {genres.length}
              </p>
              <p className="text-muted-foreground mt-1 text-sm leading-6">
                ジャンルから選択
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-normal">
                {ramenShops.length}
              </p>
              <p className="text-muted-foreground mt-1 text-sm leading-6">
                掲載店舗
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-normal">Map</p>
              <p className="text-muted-foreground mt-1 text-sm leading-6">
                現地までの導線
              </p>
            </div>
          </div>
        </div>

        <GenreNav genres={genres} />

        <section className="flex flex-col gap-6">
          <div className="flex max-w-2xl flex-col gap-2">
            <h2 className="text-2xl leading-tight font-semibold tracking-normal text-balance">
              すべてのおすすめ
            </h2>
            <p className="text-muted-foreground text-sm leading-6 text-pretty">
              まずは気になるジャンルを選んで、候補を絞り込んでください。
            </p>
          </div>
          <RamenShopList shops={ramenShops} genres={genres} />
        </section>
      </section>
    </main>
  );
}
