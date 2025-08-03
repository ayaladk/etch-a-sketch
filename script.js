const divsContainer = document.querySelector(".screen");
const width = divsContainer.offsetWidth;
const height = divsContainer.offsetHeight;

const button8x8 = document.getElementById("8divs");
const button10x10 = document.getElementById("10divs");
const button16x16 = document.getElementById("16divs");

// FIXME: Display breaks when function use bigger numbers.
// That's why this project uses only three options for display divs.

function createGrid(numberOfDivs) {
	let totalDivs = numberOfDivs * numberOfDivs;
	let cellWidth = Math.floor(width / numberOfDivs);
	let cellHeight = Math.floor(height / numberOfDivs);

	for (let i = 0; i < totalDivs; i++) {

		const div = document.createElement("div")
		div.classList.add("grid-square");
		div.style.width = `${cellWidth}px`;
		div.style.height = `${cellHeight}px`;
		div.addEventListener("mouseover", () => {
			let r = Math.floor(Math.random() * 256);
			let g = Math.floor(Math.random() * 256);
			let b = Math.floor(Math.random() * 256);
			div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
		});
		divsContainer.appendChild(div);
	}
};

createGrid(10);

button8x8.addEventListener("click", () => {
	divsContainer.innerHTML = "";
	createGrid(8);
});
button10x10.addEventListener("click", () => {
	divsContainer.innerHTML = "";
	createGrid(10);
});
button16x16.addEventListener("click", () => {
	divsContainer.innerHTML = "";
	createGrid(16);
});
