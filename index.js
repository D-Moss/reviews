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