import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import GenreNav from "@/src/components/GenreNav";
import { genres } from "@/src/data/genres";

const meta = {
  title: "Components/GenreNav",
  component: GenreNav,
  parameters: {
    layout: "padded",
  },
  args: {
    genres,
  },
} satisfies Meta<typeof GenreNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const allLink = canvas.getByRole("link", { name: "すべて" });
    const shoyuLink = canvas.getByRole("link", { name: "醤油" });

    await expect(allLink).toHaveAttribute("href", "/");
    await expect(shoyuLink).toHaveAttribute("href", "/genres/1");
    await userEvent.hover(shoyuLink);
    await expect(shoyuLink).toBeVisible();
  },
};

export const SelectedMiso: Story = {
  args: {
    selectedGenreId: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectedLink = canvas.getByRole("link", { name: "味噌" });

    await expect(selectedLink).toHaveAttribute("href", "/genres/2");
    await expect(selectedLink).toHaveClass("bg-foreground");
  },
};
