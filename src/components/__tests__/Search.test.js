import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_RES_LIST from "../mocks/resListDataMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_RES_LIST)
        }
    })
})

it("Should search restaurants list for burger search text input" , async()=>{
    
    await act(async ()=>{
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);
    const searchBtn = screen.getByRole("button",{name:"Search"});
    expect(searchBtn).toBeInTheDocument();
    const searchInput = screen.getByTestId("serachInput");
    //console.log(searchInput);
    fireEvent.change(searchInput, {target:{value: "burger"}});
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);
    
    //expect(searchBtn).toBeInTheDocument();

})
it("Should filter top rated restaurants" , async()=>{
    
    await act(async ()=>{
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    //console.log("Total Length:",cardsBeforeSearch.length);
    expect(cardsBeforeSearch.length).toBe(9);
    const topRatedBtn = screen.getByRole("button",{name:"Top Restaurants"});
    expect(topRatedBtn).toBeInTheDocument();
    fireEvent.click(topRatedBtn);
    const cards = screen.getAllByTestId("resCard");
    //console.log("Total Top Rated Length:",cards.length);
    expect(cards.length).toBe(6);

})