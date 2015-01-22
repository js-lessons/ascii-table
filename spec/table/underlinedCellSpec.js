var UnderlinedCell = require('../../src/table/UnderlinedCell');

describe('UnderlinedCell', function() {
  describe('interface', function() {
    it('behaves almost like TextCell', function() {
      var cell = new UnderlinedCell({});

      expect(cell.minWidth).toBeDefined();
      expect(cell.minHeight).toBeDefined();
      expect(cell.draw).toBeDefined();
    });
  });

  describe('inner', function() {
    it('stores inner cell object', function() {
      var innerCell = {};
      var cell = new UnderlinedCell(innerCell);

      expect(cell.inner).toBe(innerCell);
    });
  });

  describe('minWidth', function() {
    it('takes inner cells minWidth', function() {
      var innerCell = { minWidth: function() { return 42; } };
      var cell = new UnderlinedCell(innerCell);

      expect(cell.minWidth()).toBe(42);
    });
  });

  describe('minHeight', function() {
    it('takes inner cells minHeight + 1', function() {
      var innerCell = { minHeight: function() { return 42; } };
      var cell = new UnderlinedCell(innerCell);

      expect(cell.minHeight()).toBe(43);
    });
  });

  describe('draw', function() {
    var innerCell;

    beforeEach(function() {
      innerCell = {
        draw: function() { return ['inner text']; }
      }

      spyOn(innerCell, 'draw').and.callThrough();
    });

    it('draws inner object without last line', function() {
      var cell = new UnderlinedCell(innerCell);

      cell.draw(10, 2);
      expect(innerCell.draw).toHaveBeenCalledWith(10, 1);
    });

    it('adds dashes to inner cell', function() {
      var cell = new UnderlinedCell(innerCell);

      expect(cell.draw(10, 2)).toEqual(['inner text', '----------']);
    });
  });
});
