let play = 'circle';
const clickButton = document.querySelectorAll('.add');
const img = document.querySelector('.is-img');

for (let i = 0; i < clickButton.length; i += 1) {
  clickButton[i].addEventListener('click', (evt) => {
    if (play === 'circle') {
      evt.target.classList.add('add__circle');
      img.src = 'img/cross.svg';
      evt.target.disabled = true;
      play += 'cross';
      if (isWinningMove(evt.target)) {
        return confirm('Vyhrálo kolečko!') && location.reload();
      }
    } else {
      evt.target.classList.add('add__cross');
      img.src = 'img/circle.svg';
      evt.target.disabled = true;
      play = 'circle';
      if (isWinningMove(evt.target)) {
        return confirm('Vyhrál křížek!') && location.reload();
      }
    }
  });
}

const getSymbol = (field) => {
  if (field.classList.contains('add__circle')) {
    return 'circle';
  } else if (field.classList.contains('add__cross')) {
    return 'cross';
  }
};
//console.log(getSymbol(document.querySelector('button')));

const boardSize = 10; // 10x10
const fields = document.querySelectorAll('.add');

const getField = (row, column) => {
  return fields[row * boardSize + column];
};
console.log(getField(8, 3));

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

//const matrixField = fields.filter((field) => field === getSymbol(getField))

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }
  /* Koukni diagonálně
  let inMatrix = 1;
  i = origin.matrix;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.matrix))) {
    inMatrix++;
    i--;
  }
  //Koukni diagonálně
  i = origin.matrix;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.matrix))
  ) {
    inMatrix++;
    i++;
  }
  if (inMatrix >= symbolsToWin) {
    return true;
  }*/

  return false;
};
//console.log(getPosition(document.querySelector('button')));
