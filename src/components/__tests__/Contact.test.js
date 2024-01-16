import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
  // beforeAll(() => {
  //   console.log("beforeAll");
  // });

  // beforeEach(() => {
  //   console.log("beforeEach");
  // });

  // afterAll(() => {
  //   console.log("AfterAll");
  // });

  // afterEach(() => {
  //   console.log("AfterEach");
  // });

  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  test("Should load two input boxes inside contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes).toHaveLength(2);
  });
});
