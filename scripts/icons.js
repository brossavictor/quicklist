export function icons() {
	fetch("../assets/arrow-left.svg")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("arrow-left").outerHTML = data;
			console.log(document.getElementById("back"));

			let paths = document.querySelector("#back svg").querySelectorAll("path");

			for (let path of paths) {
				path.setAttribute("stroke", "var(--color-brand)");
			}
		});
}
