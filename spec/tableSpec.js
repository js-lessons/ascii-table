var Table = require('../src/table'),
  TextCell = require('../src/textCell'),
  UnderlinedCell = require('../src/underlinedCell');

describe('Table', function() {
  var drawn = [
    'name        height country ',
    '----------- ------ --------',
    'Kilimanjaro 5895   Tanzania',
    'Everest     8848   Nepal   ',
    'Mount Fuji  3776   Japan   '
  ].join('\n');

  var cells = [
    [
      new UnderlinedCell(new TextCell('name')),
      new UnderlinedCell(new TextCell('height')),
      new UnderlinedCell(new TextCell('country'))
    ],
    [new TextCell('Kilimanjaro'), new TextCell('5895'), new TextCell('Tanzania')],
    [new TextCell('Everest'), new TextCell('8848'), new TextCell('Nepal')],
    [new TextCell('Mount Fuji'), new TextCell('3776'), new TextCell('Japan')]
  ];

  it('should draw a table from povided cells', function() {
    var table = new Table(cells);
    expect(table.draw()).toEqual(drawn);
  });
});
