export type RamenShop = {
  id: string;
  name: string;
  genreId: string;
  googleMapUrl: string;
};

export const ramenShops: RamenShop[] = [
  {
    id: "ramen-hayashida-shinjuku",
    name: "らぁ麺 はやし田 新宿本店",
    genreId: "shoyu",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E3%82%89%E3%81%81%E9%BA%BA+%E3%81%AF%E3%82%84%E3%81%97%E7%94%B0+%E6%96%B0%E5%AE%BF%E6%9C%AC%E5%BA%97",
  },
  {
    id: "japanese-soba-noodles-tsuta",
    name: "Japanese Soba Noodles 蔦",
    genreId: "shoyu",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Japanese+Soba+Noodles+%E8%94%A6",
  },
  {
    id: "chuka-soba-ginza-hachigou",
    name: "中華そば 銀座 八五",
    genreId: "shoyu",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E4%B8%AD%E8%8F%AF%E3%81%9D%E3%81%B0+%E9%8A%80%E5%BA%A7+%E5%85%AB%E4%BA%94",
  },
  {
    id: "menya-shono",
    name: "麺や 庄の",
    genreId: "shio",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E9%BA%BA%E3%82%84+%E5%BA%84%E3%81%AE",
  },
  {
    id: "ramen-yamaguchi",
    name: "らぁ麺 やまぐち",
    genreId: "shio",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E3%82%89%E3%81%81%E9%BA%BA+%E3%82%84%E3%81%BE%E3%81%90%E3%81%A1",
  },
  {
    id: "soranoiro-nippon",
    name: "ソラノイロ NIPPON",
    genreId: "shio",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E3%82%BD%E3%83%A9%E3%83%8E%E3%82%A4%E3%83%AD+NIPPON",
  },
  {
    id: "sumire-sapporo",
    name: "すみれ 札幌すすきの店",
    genreId: "miso",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E3%81%99%E3%81%BF%E3%82%8C+%E6%9C%AD%E5%B9%8C%E3%81%99%E3%81%99%E3%81%8D%E3%81%AE%E5%BA%97",
  },
  {
    id: "do-miso",
    name: "東京スタイルみそらーめん ど・みそ",
    genreId: "miso",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%BF%E3%81%9D%E3%82%89%E3%83%BC%E3%82%81%E3%82%93+%E3%81%A9%E3%83%BB%E3%81%BF%E3%81%9D",
  },
  {
    id: "hanamichi",
    name: "味噌麺処 花道庵",
    genreId: "miso",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E5%91%B3%E5%99%8C%E9%BA%BA%E5%87%A6+%E8%8A%B1%E9%81%93%E5%BA%B5",
  },
  {
    id: "ichiran-shibuya",
    name: "一蘭 渋谷店",
    genreId: "tonkotsu",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E4%B8%80%E8%98%AD+%E6%B8%8B%E8%B0%B7%E5%BA%97",
  },
  {
    id: "hakata-furyu-akihabara",
    name: "博多風龍 秋葉原総本店",
    genreId: "tonkotsu",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E5%8D%9A%E5%A4%9A%E9%A2%A8%E9%BE%8D+%E7%A7%8B%E8%91%89%E5%8E%9F%E7%B7%8F%E6%9C%AC%E5%BA%97",
  },
  {
    id: "tanaka-shoten",
    name: "田中商店",
    genreId: "tonkotsu",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E7%94%B0%E4%B8%AD%E5%95%86%E5%BA%97+%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3",
  },
  {
    id: "rokurinsha-tokyo",
    name: "六厘舎",
    genreId: "tsukemen",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E5%85%AD%E5%8E%98%E8%88%8E",
  },
  {
    id: "fuunji-shinjuku",
    name: "風雲児 新宿本店",
    genreId: "tsukemen",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E9%A2%A8%E9%9B%B2%E5%85%90+%E6%96%B0%E5%AE%BF%E6%9C%AC%E5%BA%97",
  },
  {
    id: "menya-itto",
    name: "麺屋 一燈",
    genreId: "tsukemen",
    googleMapUrl:
      "https://www.google.com/maps/search/?api=1&query=%E9%BA%BA%E5%B1%8B+%E4%B8%80%E7%87%88",
  },
];
