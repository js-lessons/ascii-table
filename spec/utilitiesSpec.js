var repeat = require('../src/utilities').repeat;

describe('repeat', function() {
  it('repeats string provided number of times', function() {
    expect(repeat('1', 1)).toEqual('1');
    expect(repeat('1', 10)).toEqual('1111111111');
    expect(repeat('lol', 0)).toEqual('');
  });
});
