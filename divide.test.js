const { exportAllDeclaration } = require("@babel/types")

const sum = require('./divide')

test("Divides two numbers properly", () => {
    expect(sum(2, 1)).toBe(2)
})           // divides 2 no.s properly -> displayed in console

test("Divides two numbers properly", () => {
    expect(sum(2, 0)).toThrow("Divide by zero")})
// dvides 2 no.s properly -> displayed in console
