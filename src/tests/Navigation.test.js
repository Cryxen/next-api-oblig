/**
 * @jest-environment jsdom
 */
import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import Navigation from "@/app/components/Navigation";
import "@testing-library/jest-dom";

//Jest test
it("should work", () => {
  expect(true).toBe(true);
});

it("should render", () => {
    render(<Navigation />)
  expect(screen.getByText("Hjem")).toBeInTheDocument();
});
