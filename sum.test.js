const { exportAllDeclaration } = require("@babel/types")
//const { default: test } = require("node:test")

const sum = require('./sum')

test("Adds two numbers properly", () => {
    expect(sum(1, 2)).toBe(3)
})           // adds 2 no.s properly -> displayed in console