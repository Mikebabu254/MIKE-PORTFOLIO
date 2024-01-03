document.addEventListener("DOMContentLoaded", function() {
    var faBarIcon = document.getElementById("faBar");
    var navList = document.getElementById("navList");

    faBarIcon.addEventListener("click", function() {
        // Toggle between 100% and 50% marginLeft
        var currentMargin = parseInt(navList.style.marginLeft) || 0;
        var newMargin = (currentMargin === 100) ? 0 : 100;
        navList.style.marginLeft = newMargin + "%";
    });
});
