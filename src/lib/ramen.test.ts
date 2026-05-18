import { describe, expect, test } from "vitest";
import { genres } from "@/src/data/genres";
import { ramenShops } from "@/src/data/ramenShops";
import { getGenreById, getShopById, getShopsByGenreId } from "@/src/lib/ramen";

describe("ramen utilities", () => {
  test("getGenreById returns the matching genre", () => {
    expect(getGenreById(1)).toEqual(genres[0]);
  });

  test("getGenreById returns undefined for an unknown genre", () => {
    expect(getGenreById(999)).toBeUndefined();
  });

  test("getShopById returns the matching shop", () => {
    expect(getShopById(1)).toEqual(ramenShops[0]);
  });

  test("getShopById returns undefined for an unknown shop", () => {
    expect(getShopById(999)).toBeUndefined();
  });

  test("getShopsByGenreId returns only shops in the requested genre", () => {
    const shops = getShopsByGenreId(2);

    expect(shops).toHaveLength(2);
    expect(shops.every((shop) => shop.genreId === 2)).toBe(true);
  });

  test("getShopsByGenreId returns an empty array for an unknown genre", () => {
    expect(getShopsByGenreId(999)).toEqual([]);
  });
});
