import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name:"Login"}); // When we want to get the specific button if there are multiple buttons
    //const loginButton = screen.getByRole("button");
    //const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
})
it("Should render Header Component with a cart items 0",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cart = screen.getByText("cart (0 items)");
    expect(cart).toBeInTheDocument();
})
it("Should render Header Component with a cart",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cart = screen.getByText(/cart/);
    expect(cart).toBeInTheDocument();
})
it("Should change Login button to Logout button on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
})