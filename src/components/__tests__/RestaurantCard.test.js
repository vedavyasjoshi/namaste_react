import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestuarantCard";
import MOCK_DATA from "../mock/RestaurantCard.json";
import "@testing-library/jest-dom";

it("should render restaurantCard comp with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});

