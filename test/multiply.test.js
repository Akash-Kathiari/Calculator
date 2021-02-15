const multiply=require('../src/operations/multiply')

test('properly nultiply two numbers', ()=>{
    expect(multiply(1,2)).toBe(2)
})