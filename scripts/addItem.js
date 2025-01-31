export function addItem() {
	const form = document.querySelector("form");
	const input = document.querySelector("input");
	const list = document.getElementById("buy-list");

	let item = form.addEventListener("submit", (event) => {
		event.preventDefault();

		if (input.value) {
			item = input.value.toString();

			let firstLetter = item[0];
			let remainingLetters = item.slice(1);

			item = firstLetter.toUpperCase() + remainingLetters.toLowerCase();

			let itemCard = document.createElement("div");
			let checkbox = document.createElement("input");
			let newItemName = document.createElement("p");
			let deleteIcon = document.createElement("img");

			newItemName.textContent = item;

			itemCard.classList.add("item-card");
			checkbox.type = "checkbox";
			deleteIcon.src = "assets/delete-small.svg";

			itemCard.append(checkbox, newItemName, deleteIcon);
			list = list.prepend(itemCard);
		} else throw new Error("Something went wrong!");
	});
}
