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
			let deleteIcon = document.createElement("img");

			newItemName.textContent = item;

			itemCard.classList.add("item-card");
			checkbox.type = "checkbox";
			deleteIcon.src = "assets/delete-small.svg";
			deleteIcon.classList.add("delete");

			itemCard.append(checkbox, newItemName, deleteIcon);
			list.prepend(itemCard);

			form.reset();
		} else throw new Error("Something went wrong!");
	});
}
