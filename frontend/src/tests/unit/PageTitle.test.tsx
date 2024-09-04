import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PageTitle from "../../components/header/PageTitle";

describe("Button component", () => {
  it("renders with the correct text", () => {
    render(<PageTitle>Page Title</PageTitle>);
    const buttonElement = screen.getByText("Page Title");
    expect(buttonElement).toBeInTheDocument();
  });
});
