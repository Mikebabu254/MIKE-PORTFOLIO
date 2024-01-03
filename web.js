document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the fa-bars icon
    var faBarIcon = document.getElementById("faBar");
    var navList = document.getElementById("navList");
  
    faBarIcon.addEventListener("click", function() {
      // Change the color of the links
      var links = navList.getElementsByTagName("a");
      for (var i = 0; i < links.length; i++) {
        links[i].style.color = "blue";
      }
    });
  });
  