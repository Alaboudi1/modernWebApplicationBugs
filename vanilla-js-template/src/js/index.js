import '../css/global.css';
import '../scss/global.scss';

function handleClick() {
  console.log('Button clicked!');
}

const button = document.getElementById('myButton');

button.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);

