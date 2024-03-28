import { render, screen } from "@testing-library/react";
import RestaurantCard, { WithPromotedLabel } from "../RestaurantCard";
import MOCK_RESTAURANT_CARD from "../../components/mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with Props data",()=>{
    render(<RestaurantCard resObj={MOCK_RESTAURANT_CARD}/>);
    const restaurantName = screen.getByText("Bengaluru Bhavan");
    expect(restaurantName).toBeInTheDocument();
})
it("Should render Restaurant Card component with Promoted Label",()=>{
    const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard);
    render(<PromotedRestaurantCard resObj={MOCK_RESTAURANT_CARD} />);
    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();

})