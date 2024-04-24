const add = require("./readContract");
const test =  require("jest")


test("test add function",()=>{
    expect(add(1,3)).toBe(4);
});