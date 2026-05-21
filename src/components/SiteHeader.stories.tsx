import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import SiteHeader from "@/src/components/SiteHeader";

const meta = {
  title: "Components/SiteHeader",
  component: SiteHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SiteHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const homeLink = canvas.getByRole("link", { name: /My Ramen/ });
    const themeButton = canvas.getByRole("button", {
      name: "ライトモードとダークモードを切り替える",
    });

    await expect(homeLink).toHaveAttribute("href", "/");
    await expect(themeButton).toBeVisible();
    await userEvent.hover(homeLink);
    await expect(homeLink).toBeVisible();
  },
};
