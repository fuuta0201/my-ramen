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
    const mapLink = canvas.getByRole("link", { name: "Google Map" });

    await expect(canvas.getByText("醤油")).toBeVisible();
    await expect(canvas.getByRole("heading", { name: /ヒグマ/ })).toBeVisible();
    await expect(canvas.getByRole("img", { name: /ヒグマ/ })).toBeVisible();
    await expect(detailLink).toHaveAttribute("href", "/shops/1/");
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

export const WithoutImage: Story = {
  args: {
    shop: ramenShops[4],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("RAMEN")).toBeVisible();
    await expect(canvas.getByText("青島食堂 宮内駅前店")).toBeVisible();
  },
};

export const WithDescription: Story = {
  args: {
    shop: {
      ...ramenShops[0],
      description:
        "生姜の香りと醤油のキレを楽しめる、長岡らしい一杯を探しているときにおすすめです。",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText(/生姜の香りと醤油のキレ/)).toBeVisible();
  },
};
