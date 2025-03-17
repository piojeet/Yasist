let menu_btns = document.querySelectorAll(".toggle-menu");
let nav_lists = document.querySelectorAll(".nav-links");
let close_btns = document.querySelectorAll(".toggle-close");

menu_btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        nav_lists[index].classList.add("active"); // Show the corresponding menu
    });
});

close_btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        nav_lists[index].classList.remove("active"); // Hide the corresponding menu
    });
});
