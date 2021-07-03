const menuButton = document.querySelector(".menu");

menuButton.addEventListener("click", ()=>{
    menuButton.classList.toggle("menu--active");
});
//find the issue we write querySelectorALL instead of querySelector :-)//