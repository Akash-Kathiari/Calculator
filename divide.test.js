const divide=require('./divide')

test('properly divide two numbers', ()=>{
    expect(divide(1,2)).toBe(.5)
})