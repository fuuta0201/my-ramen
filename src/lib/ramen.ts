import { genres } from "@/src/data/genres";
import { ramenShops } from "@/src/data/ramenShops";

export const getGenreById = (genreId: number) =>
  genres.find((genre) => genre.id === genreId);

export const getShopById = (shopId: number) =>
  ramenShops.find((shop) => shop.id === shopId);

export const getShopsByGenreId = (genreId: number) =>
  ramenShops.filter((shop) => shop.genreId === genreId);
