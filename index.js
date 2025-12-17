//HOTEL
function toggleReview(id, btn) {
	const section = document.getElementById(id);

	if (!section) return;

	if (section.style.display === "none" || section.style.display === "") {
		section.style.display = "block";
		btn.textContent = "Read Less";
	} else {
		section.style.display = "none";
		btn.textContent = "Read More";
	}
}

//FOOD
document.addEventListener("DOMContentLoaded", function () {
	const accordions = document.querySelectorAll(".btb-accordion");

	accordions.forEach((acc) => {
		acc.addEventListener("click", function () {
			const panel = this.nextElementSibling;

			this.classList.toggle("active");

			if (panel.style.maxHeight) {
			// Close
				panel.style.maxHeight = null;
				panel.classList.remove("open");
			} else {
			// Open
				panel.style.maxHeight = panel.scrollHeight + "px";
				panel.classList.add("open");
			}
		});
	});
});