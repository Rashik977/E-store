// src/Test/Unit/HomeHero.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeHero from "../../Layout/HomeHero";

describe("HomeHero Component", () => {
  test("renders HomeHero component with correct text", () => {
    render(<HomeHero />);

    expect(screen.getByText("Your Cozy Era")).toBeInTheDocument();
    expect(screen.getByText("Get peak comfy-chic")).toBeInTheDocument();
    expect(screen.getByText("with new winter essentials.")).toBeInTheDocument();
  });

  test("renders HomeHero component with correct button", () => {
    render(<HomeHero />);

    expect(screen.getByText("SHOP NOW")).toBeInTheDocument();
  });
});
