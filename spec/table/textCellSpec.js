var TextCell = require('../../src/table/textCell');

describe('TextCell', function() {
  describe('text', function() {
    it('returns lines array', function() {
      var cell = new TextCell('this is text');
      expect(cell.text).toEqual(['this is text']);
    });

    it('returns lines splitted by newline character', function() {
      var cell = new TextCell('this \n is text');
      expect(cell.text).toEqual(['this ', ' is text']);
    });
  });

  describe('minWidth', function() {
    it('returns maximum line length', function() {
      var cell1 = new TextCell('this \nis text');
      var cell2 = new TextCell('this is text');

      expect(cell1.minWidth()).toEqual(7);
      expect(cell2.minWidth()).toEqual(12);
    })
  });

  describe('minHeight', function() {
    it('returns number of text lines', function() {
      var cell1 = new TextCell('this is text');
      var cell2 = new TextCell('this \nis text');

      expect(cell1.minHeight()).toEqual(1);
      expect(cell2.minHeight()).toEqual(2);
    })
  });

  describe('draw', function() {
    var cell;

    beforeEach(function() {
      cell = new TextCell('hey');
    });

    it('draws a cell', function() {
      var drawn = cell.draw(5, 2);
      expect(drawn).toEqual(['hey  ', '     ']);
    });

    it('draws a cell with provided width', function() {
      var drawn1 = cell.draw(10, 1);
      var drawn2 = cell.draw(3, 1);

      expect(drawn1[0].length).toEqual(10);
      expect(drawn2[0].length).toEqual(3);
    });

    it('fills empty space with spaces', function() {
      var drawn = cell.draw(10, 1);

      expect(drawn[0]).toEqual('hey       ');
    });

    it('draws a cell with provided height', function() {
      var drawn1 = cell.draw(10, 4);
      var drawn2 = cell.draw(3, 3);

      expect(drawn1.length).toEqual(4);
      expect(drawn2.length).toEqual(3);
    });

    it('fills empty lines with spaces', function() {
      var drawn = cell.draw(5, 2);

      expect(drawn[1]).toEqual('     ');
    });
  });
});
