export type RamenShop = {
  id: number;
  name: string;
  genreId: number;
  googleMapUrl: string;
  description?: string;
  imageUrl?: string;
};

export type Genre = {
  id: number;
  name: string;
};
