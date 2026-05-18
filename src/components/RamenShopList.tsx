import RamenShopCard from "@/src/components/RamenShopCard";
import type { Genre, RamenShop } from "@/src/types/ramen";

type RamenShopListProps = {
  shops: RamenShop[];
  genres: Genre[];
};

export default function RamenShopList({ shops, genres }: RamenShopListProps) {
  if (shops.length === 0) {
    return (
      <div className="border-border text-muted-foreground rounded-lg border p-6 text-sm">
        該当するラーメン店はまだ登録されていません。
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {shops.map((shop) => (
        <RamenShopCard
          key={shop.id}
          shop={shop}
          genre={genres.find((genre) => genre.id === shop.genreId)}
        />
      ))}
    </div>
  );
}
