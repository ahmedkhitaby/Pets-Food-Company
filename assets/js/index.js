// Copyrights year
const yearEl = document.getElementById('year');
const date = new Date();
const currentYear = date.getFullYear();
yearEl.innerText = currentYear;

// Drawer
const navigatior = document.getElementById('navigator');
const drawerBtn = document.getElementById('drawer-btn');

drawerBtn.addEventListener('click', drawerHandler, false);
function drawerHandler(event) {
	event.currentTarget.classList.toggle('drawer-btn-active');
	navigatior.classList.toggle('drawer');
	navigatior.classList.toggle('toolbar__nav-list');
}
