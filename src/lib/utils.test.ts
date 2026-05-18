import { describe, expect, test } from "vitest";
import { cn } from "@/src/lib/utils";

describe("cn", () => {
  test("joins conditional class names", () => {
    expect(cn("rounded-md", false && "hidden", "border")).toBe(
      "rounded-md border",
    );
  });

  test("merges conflicting Tailwind classes", () => {
    expect(cn("px-2 text-sm", "px-4 text-lg")).toBe("px-4 text-lg");
  });
});
