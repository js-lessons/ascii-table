(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./students":2,"./table/table":3,"./table/textCell":4,"./table/underlinedCell":5}],2:[function(require,module,exports){
var STUDENTS = [
  { Name: 'Douglas Crockford', Github: 'douglascrockford' },
  { Name: 'Tony Morris', Github: 'tonymorris' },
  { Name: 'Slava Pestov', Github: 'slavapestov' },
  { Name: 'Graydon Hoare', Github: 'graydon' },
  { Name: 'Nikodemus Siivola', Github: 'nikodemus' },
  { Name: 'Max Bolingbroke', Github: 'batterseapower' },
  { Name: 'Daniel Spiewak', Github: 'djspiewak' },
  { Name: 'Rich Hickey', Github: 'richhickey' },
  { Name: 'David Nolen', Github: 'swannodette' }
]

module.exports = STUDENTS;

},{}],3:[function(require,module,exports){
function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function Table(rows) {
  this.rows = rows;
}

Table.prototype.draw = function() {
  var heights = rowHeights(this.rows);
  var widths = colWidths(this.rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });

    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return this.rows.map(drawRow).join("\n");
}

module.exports = Table;

},{}],4:[function(require,module,exports){
var repeat = require('../utilities').repeat;

function TextCell(text) {
  this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function() {
  return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

module.exports = TextCell;

},{"../utilities":6}],5:[function(require,module,exports){
var repeat = require('../utilities').repeat;

function UnderlinedCell(inner) {
  this.inner = inner;
};

UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
};

module.exports = UnderlinedCell;

},{"../utilities":6}],6:[function(require,module,exports){
function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

module.exports.repeat = repeat;

},{}]},{},[1]);
