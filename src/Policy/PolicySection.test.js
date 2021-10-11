import React from "react";
import { render, screen } from "@testing-library/react";
import PolicySection from "./PolicySection";

describe("Policy section", () => {
  it("should render props", () => {
    render(<PolicySection label={"Policy reference:"} text={"Sample text"} />);
    expect(screen.getByText(/policy reference:/i)).toBeInTheDocument();
    expect(screen.getByText(/sample text/i)).toBeInTheDocument();
  });
});
