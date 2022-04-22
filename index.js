let play = 'circle';
const clickButton = document.querySelectorAll('.add');
const img = document.querySelector('.is-img');

for (let i = 0; i < clickButton.length; i += 1) {
  clickButton[i].addEventListener('click', (evt) => {
    if (play === 'circle') {
      evt.target.classList.add('add-circle');
      img.src = 'img/circle.svg';
      evt.target.disabled = true;
      play += 'cross';
    } else {
      evt.target.classList.add('add-cross');
      img.src = 'img/cross.svg';
      evt.target.disabled = true;
      play = 'circle';
    }
  });
}
