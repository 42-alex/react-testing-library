const sum = (a, b) => a + b;


describe('test sum function', () => {
  it('sum returns number 11', () => {
    expect(sum(5,6)).toBe(11);
  });
  it('sum returns NaN', () => {
    expect(sum(5)).toBe(NaN);
  });
});

describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true)
  });
  test('false is falsy', () => {
    expect(false).toBe(false)
  });
})

