export function icons() {
	fetch("../assets/arrow-left.svg")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("arrow-left").outerHTML = data;

			let paths = document.querySelector("#back svg").querySelectorAll("path");

			for (let path of paths) {
				path.setAttribute("stroke", "var(--color-brand)");
			}
		});

	fetch("../assets/delete-small.svg")
		.then((response) => response.text())
		.then((data) => {
			let icons = document.querySelectorAll(".delete-icon");

			icons.forEach((icon) => {
				icon.outerHTML = data;
			});
		});
}

export function trashIcon(deleteIcon) {
	fetch("../assets/delete-small.svg")
		.then((response) => response.text())
		.then((data) => {
			deleteIcon.outerHTML = data;
		});
}
