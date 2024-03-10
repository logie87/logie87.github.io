function myFunction(num) {
  var dropdownId = "myDropdown" + num;
  var dropdown = document.getElementById(dropdownId);
  
  // Get all dropdowns
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      // If a dropdown is open and it's not the one we're toggling, close it
      if (openDropdown.classList.contains('show') && openDropdown.id != dropdownId) {
          openDropdown.classList.remove('show');
      }
  }
  
  // Toggle the dropdown we clicked
  document.getElementById(dropdownId).classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
