const readMoreBtn = document.querySelector('.readMoreBtn');
const readText = document.querySelector('.readText');

readMoreBtn.addEventListener('click', (event) => {
  readText.classList.toggle('showMoreText');

    //Styling the button here.

  if (readMoreBtn.innerHTML === 'Read More') {
    readMoreBtn.innerHTML = 'Read Less';
    readMoreBtn.style.backgroundColor = 'red';
  } else {
    readMoreBtn.innerHTML = 'Read More';
    readMoreBtn.style.backgroundColor = 'rgb(134, 233, 233)';    
  }
});

