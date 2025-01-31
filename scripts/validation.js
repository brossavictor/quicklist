export function validation() {
	const button = document.getElementById("add-item");
	const input = document.getElementById("item");

	input.addEventListener("input", () => {
		if (input.value == "") {
			button.disabled = true;
		} else {
			button.disabled = false;
		}
	});
}
