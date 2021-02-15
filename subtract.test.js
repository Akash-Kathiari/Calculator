const subtract=require('./subtract')

test('properly subtract two numbers', ()=>{
    expect(subtract(4,6)).toBe(-2)
})