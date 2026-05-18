import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import RamenShopCard from "@/src/components/RamenShopCard";
import { genres } from "@/src/data/genres";
import { ramenShops } from "@/src/data/ramenShops";

const meta = {
  title: "Components/RamenShopCard",
  component: RamenShopCard,
  parameters: {
    layout: "centered",
  },
  args: {
    shop: ramenShops[0],
    genre: genres[0],
  },
} satisfies Meta<typeof RamenShopCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const detailLink = canvas.getByRole("link", { name: /詳細を見る/ });
    const mapLink = canvas.getByRole("link", { name: "Map" });

    await expect(canvas.getByText("醤油")).toBeVisible();
    await expect(canvas.getByText("らぁ麺 はやし田 新宿本店")).toBeVisible();
    await expect(detailLink).toHaveAttribute("href", "/shops/1");
    await expect(mapLink).toHaveAttribute("target", "_blank");
    await userEvent.hover(mapLink);
    await expect(mapLink).toHaveAttribute("href", ramenShops[0].googleMapUrl);
  },
};

export const WithoutGenre: Story = {
  args: {
    genre: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("ジャンル未設定")).toBeVisible();
  },
};
