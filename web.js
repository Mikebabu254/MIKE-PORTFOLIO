let faBarIcon = document.getElementById("faBar");
let navList = document.getElementById("navList");
let faxmark = document.getElementById("faBarXmark");

faxmark.style.visibility="hidden";

faBarIcon.onclick = function(){
    navList.style.visibility="visible";
    faBarIcon.classList.remove("fa-bars");
    faBarIcon.classList.add("fa-times");
    faxmark.style.visibility="visible";
}

faxmark.onclick = function(){
    navList.style.visibility="hidden";
    faBarIcon.classList.remove("fa-times");
    faBarIcon.classList.add("fa-bars");
    faxmark.style.visibility="hidden";
}
