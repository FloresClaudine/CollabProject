const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80);
});




function scrollToShop() {
    var shopSection = document.getElementById("shop");
    var offsetTop = shopSection.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
}



