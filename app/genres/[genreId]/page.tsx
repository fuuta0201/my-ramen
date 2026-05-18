import { notFound } from "next/navigation";
import GenreNav from "@/src/components/GenreNav";
import RamenShopList from "@/src/components/RamenShopList";
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
    <main className="bg-background min-h-screen">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 sm:py-16">
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            Selected genre
          </p>
          <div className="flex max-w-3xl flex-col gap-5">
            <h1 className="text-foreground text-4xl font-semibold tracking-normal sm:text-5xl">
              {selectedGenre.name}のおすすめ店
            </h1>
            <p className="text-muted-foreground text-base leading-7 sm:text-lg">
              選択したジャンルに合うラーメン店を静的データから表示しています。
            </p>
          </div>
        </div>

        <GenreNav genres={genres} selectedGenreId={selectedGenre.id} />

        <RamenShopList shops={shops} genres={genres} />
      </section>
    </main>
  );
}
