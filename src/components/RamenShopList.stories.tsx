import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import RamenShopList from "@/src/components/RamenShopList";
import { genres } from "@/src/data/genres";
import { ramenShops } from "@/src/data/ramenShops";

const meta = {
  title: "Components/RamenShopList",
  component: RamenShopList,
  parameters: {
    layout: "padded",
  },
  args: {
    shops: ramenShops.slice(0, 4),
    genres,
  },
} satisfies Meta<typeof RamenShopList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const detailLinks = canvas.getAllByRole("link", { name: /詳細を見る/ });

    await expect(detailLinks).toHaveLength(4);
    await expect(canvas.getByText("味噌麺処 花道庵")).toBeVisible();
  },
};

export const Empty: Story = {
  args: {
    shops: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByText("該当するラーメン店はまだ登録されていません。"),
    ).toBeVisible();
  },
};
