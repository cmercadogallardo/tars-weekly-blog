/* TARS WEEKLY BLOG - HTML Include Engine */
/* Pattern: w3schools-style modular HTML includes */

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          } else if (this.status == 404) {
            elmnt.innerHTML = "<!-- Include not found: " + file + " -->";
          } else {
            elmnt.innerHTML = "<!-- Include error: " + this.status + " -->";
          }
          // Remove attribute after loading
          elmnt.removeAttribute("w3-include-html");
          
          // Recursively check for nested includes
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      
      // Exit until includes are loaded
      return;
    }
  }
}

// Auto-execute when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  includeHTML();
});
