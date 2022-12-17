import { render, screen } from "@testing-library/react";
import Home from "../pages";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Home page", () => {
  it("renders correctly without error", async () => {
    render(<Home />);
    const titleText = await screen.findByTestId("mainText");
    expect(titleText).toBeInTheDocument();
  });
});
