const toggleNav = () => {
    document.getElementById("main-items").classList.toggle("hidden");
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
}