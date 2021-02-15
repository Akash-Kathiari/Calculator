const square=require('./square')

test('properly square two numbers', ()=>{
    expect(square(2)).toBe(4)
})