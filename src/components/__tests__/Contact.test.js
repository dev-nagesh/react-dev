import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases",()=>{
    beforeAll(()=>{
        console.log("Before All");
    })
    afterAll(()=>{
        console.log("After All");
    })
    beforeEach(()=>{
        console.log("Before Each");
    })
    afterEach(()=>{
        console.log("After Each");
    })
    test("Should load contact us component",()=>{
        render(<Contact />);
        //Query
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    })
    it("Should load the button inside contact us component",()=>{
        render(<Contact />);
        //Query
        const button = screen.getByRole("button");
        //Assertion
        expect(button).toBeInTheDocument();
        //Query
        const txtButton = screen.getByText("Submit");
        //Assertion
        expect(txtButton).toBeInTheDocument();
    })
    describe("Input Test Cases",()=>{
        it("Should load the Input inside contact us component",()=>{
            render(<Contact />);
            //Query
            const inputElement = screen.getByPlaceholderText("name");
            //Assertion
            expect(inputElement).toBeInTheDocument();
        })
        test("Should load multiple Input boxes inside contact us component",()=>{
            render(<Contact />);
            //Query
            const inputElements = screen.getAllByRole("textbox");
            //console.log(inputElements[0]);
            //console.log(inputElements.length);
            expect(inputElements.length).toBe(2);
            expect(inputElements.length).not.toBe(3);
        })
    })
    
})
