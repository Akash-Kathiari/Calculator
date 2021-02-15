const add = require('../src/operations/add')

test('properly adds two numbers', ()=>{
    expect(add(1,2)).toBe(3)
})