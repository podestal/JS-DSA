var expect = function(val) {
    return {
        toBe: (innerVal) => innerVal === val ? true : new Error('Not Equal'),
        notToBe: (innerVal) => innerVal !== val ? true : new Error('Equal')
    }
};

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"

