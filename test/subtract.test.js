const subtract=require('../src/operations/subtract')

test('properly subtract two numbers', ()=>{
    expect(subtract(4,6)).toBe(-2)
})