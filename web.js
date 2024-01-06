let faBarIcon = document.getElementById("faBar");
let navList = document.getElementById("navList");
let faxmark = document.getElementById("faBarXmark");

faxmark.style.visibility="hidden";

faBarIcon.onclick = function(){
    navList.style.paddingLeft="100%";
    faBarIcon.classList.remove("fa-bars");
    faBarIcon.classList.add("fa-times");
    faxmark.style.visibility="visible";
}

faxmark.onclick = function(){
    navList.style.paddingLeft="0%";
    faBarIcon.classList.remove("fa-times");
    faBarIcon.classList.add("fa-bars");
    faxmark.style.visibility="hidden";
}
