export function addItem() {
	const form = document.querySelector("form");
	const input = document.querySelector("input");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		let item = input.value.toString();

		let firstLetter = item[0];
		let remainingLetters = item.slice(1);

		item = firstLetter.toUpperCase() + remainingLetters.toLowerCase();

		console.log(item);
	});
}

addItem();
