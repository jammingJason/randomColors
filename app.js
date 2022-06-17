const h1 = document.querySelector('h1');
// h1.style.color = 'red';
const letters = document.querySelectorAll('.letter');
console.log(letters);

const intervalID = setInterval(function() {
	for (let letter of letters) {
		letter.style.color = randomRGB();
	}
}, 1000);

function randomRGB() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	return `rgb(${r}, ${g}, ${b})`;
}
// randomRGB();
