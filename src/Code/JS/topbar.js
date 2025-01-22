// Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Open a dropdown menu
function OpenDropdownMenu(menu_id) {
    document.getElementById(menu_id).classList.toggle("show");
    // Close open dropdowns
    const dropdowns = document.getElementsByClassName("dropdown-links");
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].id !== menu_id && dropdowns[i].classList.contains("show")) {
            dropdowns[i].classList.remove("show");
        }
    }
}

// Fix alignment of the dropdown menus
document.querySelectorAll('.nav-links button').forEach(button => {
    button.addEventListener('click', function () {
        const dropdown = this.nextElementSibling;
        const rect = dropdown.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (rect.right > windowWidth) {
            dropdown.style.left = 'auto';
            dropdown.style.right = '0'; // Align to the right if it overflows
        }
    });
});

// Close the menu when clicking on anything else
window.onclick = function(event) {
    if (!event.target.matches('.nav-links button')) {
        const dropdowns = document.getElementsByClassName("dropdown-links");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}