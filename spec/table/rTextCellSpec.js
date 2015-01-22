var RTextCell = require('../../src/table/RTextCell'),
  TextCell = require('../../src/table/TextCell');

describe('RTextCell', function() {
  it('behaves almost like a TextCell', function() {
    var cell = new RTextCell('inner text');

    expect(cell.minWidth).toBeDefined();
    expect(cell.minHeight).toBeDefined();
    expect(cell.draw).toBeDefined();
  });

  it('draws text aligned to the right', function() {
    var cell = new RTextCell('42');

    expect(cell.draw(10, 1)).toEqual(['        42']);
  });
});
