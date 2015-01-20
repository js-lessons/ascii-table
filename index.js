var Table = require('./src/table.js'),
  TextCell = require('./src/textCell');

var rows = [];

for (var i = 0; i < 5; i++) {
   var row = [];
   for (var j = 0; j < 5; j++) {
     if ((j + i) % 2 == 0)
       row.push(new TextCell("##"));
     else
       row.push(new TextCell("  "));
   }
   rows.push(row);
}

console.log((new Table(rows)).draw());
