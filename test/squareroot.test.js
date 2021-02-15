const squareroot=require('../src/operations/squareroot')

test('properly squareroot two numbers', ()=>{
    expect(squareroot(4)).toBe(2)
})