// Toggle menu for navbar
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
	[menuToggle, navLinks].forEach((el) => el.classList.toggle("active"));
});

// loader
window.addEventListener("load", () => {
	const loader = document.getElementById("loader");
	// Wait 0.5 seconds before hiding loader
	setTimeout(() => {
		loader.classList.add("hidden");
	}, 500);
});
