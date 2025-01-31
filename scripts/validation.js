export function validation() {
	const button = document.getElementById("add-item");
	const input = document.querySelector("input");

	input.addEventListener("input", () => {
		if (input.value == "") {
			button.disabled = true;
		} else {
			button.disabled = false;
		}
	});
}
