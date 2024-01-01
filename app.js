const toggleBtn = document.getElementsByClassName("navbar-toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-items")[0];

toggleBtn.addEventListener("click", () => {
    console.log("clicked");
    navbarLinks.classList.toggle("active");
})

document.addEventListener("click", e => {
    const isDropdownButton = isDropwdown(e.target);
    console.log(isDropdownButton);

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        if (currentDropdown !== null) {
            currentDropdown.classList.toggle("active")
        }
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
      })
});

function isDropwdown(target) {
    if (target.matches("[data-dropdown-button]"))
        return true;

    if (target.hasChildNodes !== null && target.firstElementChild.matches("[data-dropdown-button]"))
        return true;

    return false;
}