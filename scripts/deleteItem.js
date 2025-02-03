export function deleteItem() {
	const buttons = document.querySelectorAll(".delete");
	const warning = document.getElementById("warning");

	buttons.forEach((button) => {
		button.addEventListener("click", function () {
			let item = this.closest(".item-card");
			if (item) {
				item.remove();
				warning.style.visibility = "visible";
			}
		});
	});
}
