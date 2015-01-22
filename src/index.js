var Table = require('./table/table'),
  TextCell = require('./table/textCell'),
  UnderlinedCell = require('./table/underlinedCell'),
  STUDENTS = require('./students');

function dataTable(data) {
  var keys = Object.keys(data[0]);

  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });

  var body = data.map(function(row) {
    return keys.map(function(name) {
      return new TextCell(String(row[name]));
    });
  });

  return [headers].concat(body);
}

global.studentsTable = new Table(dataTable(STUDENTS)).draw();
