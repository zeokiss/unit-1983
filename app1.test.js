const smallBig = require("./app1.js")

test("add to", () => {
    expect(smallBig([])).toEqual([ Infinity, -Infinity])
    expect(smallBig([0, 0, 0, 0])).not.toEqual([1,1])
    expect(smallBig([0, 0, 0, 0])).toEqual([0,0])
    expect(smallBig([23, 112, 22, 11, 1])).toEqual([1,112])
    expect(smallBig([-0.473, -0.683, 1223, 23])).toEqual([-0.683, 1223])

})