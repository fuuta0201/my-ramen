import { notFound } from "next/navigation";
import GenreNav from "@/src/components/GenreNav";
import RamenShopList from "@/src/components/RamenShopList";
import SiteHeader from "@/src/components/SiteHeader";
import { genres } from "@/src/data/genres";
import { getGenreById, getShopsByGenreId } from "@/src/lib/ramen";

type GenrePageProps = {
  params: Promise<{
    genreId: string;
  }>;
};

export const generateStaticParams = () =>
  genres.map((genre) => ({
    genreId: genre.id.toString(),
  }));

export default async function GenrePage({ params }: GenrePageProps) {
  const { genreId } = await params;
  const selectedGenreId = Number(genreId);
  const selectedGenre = getGenreById(selectedGenreId);

  if (!selectedGenre) {
    notFound();
  }

  const shops = getShopsByGenreId(selectedGenre.id);

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-10 sm:px-6 sm:py-14">
        <div className="flex max-w-3xl flex-col gap-5">
          <p className="text-accent text-sm font-semibold tracking-normal">
            Selected genre
          </p>
          <h1 className="text-foreground text-4xl leading-tight font-semibold tracking-normal text-balance sm:text-5xl">
            {selectedGenre.name}のおすすめ店
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-8 text-pretty sm:text-lg">
            選択したジャンルに合うラーメン店を、店舗詳細とGoogle
            Mapへの導線つきで表示しています。
          </p>
        </div>

        <GenreNav genres={genres} selectedGenreId={selectedGenre.id} />

        <RamenShopList shops={shops} genres={genres} />
      </section>
    </main>
  );
}
