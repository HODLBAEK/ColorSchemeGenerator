// Dropdown menu config//
let options = [
	"Monochrome",
	"Monochrome-dark",
	"Monochrome-light",
	"Analogic",
	"Complement",
	"Analogic-complement",
	"Triad",
	"Quad"
];
const colorDropDown = document.querySelector("#color-drop-down");
options.map(
	(menu) =>
		(colorDropDown.innerHTML += `<option value="${menu}">${menu}</option>`)
);

// get color btn and API //
const btnColor = document.querySelector("#get-color-scheme");
btnColor.addEventListener("click", getColor);

function getColor() {
	const mode = colorDropDown.value.toLowerCase();
	const colorValue = document.getElementById("color-value").value;
	const hexColor = colorValue.replace("#", "");
	let count = 5;

	fetch(
		`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${mode}&count=${count}`
	)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			for (let i = 0; i < 5; i++) {
				if (i === 0) {
					document.getElementById(
						"color-one"
					).style.background = `${data.colors[i].hex.value}`;
					document.getElementById(
						"hex-one"
					).innerHTML = `<p>${data.colors[i].name.value} ${data.colors[i].hex.value}</p>`;
				} else if (i === 1) {
					document.getElementById(
						"color-two"
					).style.background = `${data.colors[i].hex.value}`;
					document.getElementById(
						"hex-two"
					).innerHTML = `<p>${data.colors[i].name.value} ${data.colors[i].hex.value}</p>`;
				} else if (i === 2) {
					document.getElementById(
						"color-three"
					).style.background = `${data.colors[i].hex.value}`;
					document.getElementById(
						"hex-three"
					).innerHTML = `<p>${data.colors[i].name.value} ${data.colors[i].hex.value}</p>`;
				} else if (i === 3) {
					document.getElementById(
						"color-four"
					).style.background = `${data.colors[i].hex.value}`;
					document.getElementById(
						"hex-four"
					).innerHTML = `<p>${data.colors[i].name.value} ${data.colors[i].hex.value}</p>`;
				} else if (i === 4) {
					document.getElementById(
						"color-five"
					).style.background = `${data.colors[i].hex.value}`;
					document.getElementById(
						"hex-five"
					).innerHTML = `<p>${data.colors[i].name.value} ${data.colors[i].hex.value}</p>`;
				}
			}
		});
}
