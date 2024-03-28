
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
// import Cart from "../Cart";
import DATA_RES_MENU from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(DATA_RES_MENU)
    })
})
it("Should Load Restaurant Menu Component", async ()=>{
    await act(async ()=> render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            {/* <Cart /> */}
        </Provider>
        </BrowserRouter>
    ))
    const accordianHeader = screen.getByText("Recommended (20)");
    //console.log(accordianHeader);
    fireEvent.click(accordianHeader);
    const foodItems = screen.getAllByTestId("foodItem");
    expect(foodItems.length).toBe(20);
    const addBtns = screen.getAllByRole("button",{name:"Add +"});
    expect(addBtns.length).toBe(20);
    fireEvent.click(addBtns[0]);
    const cartCountText = screen.getByText("cart (1 items)");
    expect(cartCountText).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    const cartCountTextTwo = screen.getByText("cart (2 items)");
    expect(cartCountTextTwo).toBeInTheDocument();
    // const cartItems = screen.getAllByTestId("foodItem");
    // console.log(cartItems.length);
    //expect(cartItems.length).toBe(22);
    // const clearBtn = screen.getByRole("button", {name:"Clear Cart"});
    // fireEvent.click(clearBtn);
    // expect(screen.getAllByTestId("foodItem").length).toBe(20);

})