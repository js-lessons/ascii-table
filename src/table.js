function Table(rows) {
  this.rows = rows;
}

Table.prototype.rowHeights = function() {
  return this.rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

Table.prototype.colWidths = function() {
  var _this = this;
  return this.rows[0].map(function(_, i) {
    return _this.rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

Table.prototype.draw = function() {
  var heights = this.rowHeights();
  var widths = this.colWidths();

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
