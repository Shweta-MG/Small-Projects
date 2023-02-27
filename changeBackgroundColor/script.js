const body = document.querySelector('body');
const button = document.querySelector('button');
const para = document.querySelector('p');

const chngColor = () => {
    let backColor = '';
    backColor += '#' + Math.random().toString(16).slice(2,8).toUpperCase();
    body.style.background = backColor;
    para.innerText = backColor;

}

button.addEventListener('click' , chngColor);