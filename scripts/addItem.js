import { trashIcon } from "./icons.js";

export function addItem() {
	const form = document.getElementById("add-bar");
	const input = document.getElementById("item");
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
			let deleteButton = document.createElement("button");
			let deleteIcon = document.createElement("svg");

			trashIcon(deleteIcon);

			itemCard.classList.add("item-card");
			checkbox.type = "checkbox";
			newItemName.textContent = item;
			deleteButton.type = "button";
			deleteButton.class = "delete";

			deleteButton.append(deleteIcon);
			itemCard.append(checkbox, newItemName, deleteButton);

			list.prepend(itemCard);

			form.reset();
		} else throw new Error("Something went wrong!");
	});
}
