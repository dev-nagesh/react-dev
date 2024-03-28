import sum from "../sum"

test("Sum function should calculate the sum of two numbers",()=>{
    const total = sum(4,5);
    
    //Assertion
    expect(total).toBe(9);
})