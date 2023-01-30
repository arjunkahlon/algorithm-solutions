/* eslint-disable no-unused-vars */

function chessBoardCellColor(cell1, cell2) {
  const cell1Row = parseInt(cell1[1]);
  const cell2Row = parseInt(cell2[1]);
  const cell1Col = cell1.charCodeAt(0);
  const cell2Col = cell2.charCodeAt(0);

  return (isDark(cell1Col, cell1Row) && isDark(cell2Col, cell2Row)) ||
    (isLight(cell1Col, cell1Row) && isLight(cell2Col, cell2Row));
}

function isDark(col, row) {
  if (col % 2 === 0) {
    if (row % 2 === 0) {
      return true;
    }
  } else {
    if (row % 2 !== 0) {
      return true;
    }
  }
  return false;
}

function isLight(col, row) {
  if (col % 2 === 0) {
    if (row % 2 !== 0) {
      return true;
    }
  } else {
    if (row % 2 === 0) {
      return true;
    }
  }
  return false;
}
