const functions = require("./functions");


test("Return Two test", () => {
    expect(functions.returnTwo()).toBe(2)
})

test("Greeting test", () => {
    expect(functions.greeting("James")).toBe("Hello James.")
    expect(functions.greeting("Jill")).toBe("Hello Jill.")
})

test("addition test", () => {
    expect(functions.add(1, 2)).toBe(3)
    expect(functions.add(5, 9)).toBe(14)
})