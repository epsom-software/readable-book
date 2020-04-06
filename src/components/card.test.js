import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./card";

it("renders the text", () => {
  const { getByText } = render(<Card text="hello" />);
  const element = getByText(/hello/i);
  expect(element).toBeInTheDocument();
});
