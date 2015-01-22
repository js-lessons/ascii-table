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
       var value = row[name];

      if (typeof value == "number")
        return new RTextCell(String(value));
      else
        return new TextCell(String(value));
    });
  });

  return [headers].concat(body);
}

global.studentsTable = new Table(dataTable(STUDENTS)).draw();
