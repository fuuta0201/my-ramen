import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import ThemeToggle from "@/src/components/ThemeToggle";

const meta = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: "ライトモードとダークモードを切り替える",
    });

    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");

    await expect(button).toBeVisible();
    await userEvent.click(button);
    await expect(document.documentElement).toHaveClass("dark");
    await expect(localStorage.getItem("theme")).toBe("dark");

    await userEvent.click(button);
    await expect(document.documentElement).not.toHaveClass("dark");
    await expect(localStorage.getItem("theme")).toBe("light");
  },
};
