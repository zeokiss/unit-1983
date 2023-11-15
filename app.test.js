const sum = require('./app')

test("sum comunative a number (to be)", () => {
    expect(sum(5)).toBe(15)
})

test("sum comunative a number (not to be)", () => {
    expect(sum(1, 3)).not.toBe(3)
})