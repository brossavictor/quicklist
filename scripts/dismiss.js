export function dismiss() {
	const button = document.getElementById("dismiss");
	const warning = document.getElementById("warning");

	button.addEventListener("click", () => {
		warning.style.visibility = "hidden";
	});
}
