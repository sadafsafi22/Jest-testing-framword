
const addition = require("../calc");

describe("Calculator", ()=> {
    describe("Addition fucntion", ()=> {
        test("should return 42 for 20 + 22", ()=> {
            expect(addition(20,22)).toBe(42);
        });
        test("should return 73 for 31 + 42", ()=> {
            expect(addition(42,31)).toBe(73);
        });
        test("should return 73 for 31 + 42", ()=> {
            expect(addition(42,31)).toBe(73);
        });
    });
    describe("Subtraction fucntion", ()=>{

    });
    describe("Multiply fucntion", ()=>{

    });
    describe("Division fucntion", ()=>{

    });
})