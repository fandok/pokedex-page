import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";
import Detail from "../pages/[id]";

mockRouter.useParser(createDynamicRouteParser(["/[id]"]));

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Detail page", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/7");
  });

  it("renders correctly without error", async () => {
    render(<Detail />);
    const pokemonName = await screen.findByText("squirtle");
    expect(pokemonName).toBeInTheDocument();
  });
});
