
import functions from './account.js'

test('Check balance', () => {
    expect(functions.balance(25)).toEqual(25)
    expect(functions.balance(35)).toEqual(35)
});

