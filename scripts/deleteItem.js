export function deleteItem() {
	const buttons = document.querySelectorAll(".delete");

	buttons.forEach((button) => {
		button.addEventListener("click", function () {
			let item = this.closest(".item-card");
			if (item) {
				item.remove();
			}
		});
	});
}
