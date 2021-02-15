const divide=require('../src/operations/divide')

test('properly divide two numbers', ()=>{
    expect(divide(1,2)).toBe(.5)
})