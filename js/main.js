function myFunction(x) {
    x.classList.toggle("change");
    var listDropdown = document.getElementById('hamburger-dropdown');
    console.log(listDropdown);
    if (listDropdown.style.display == "none") {
    	console.log('DISPLAY NONE')
    	listDropdown.style.display = "block";
    } else {
    	listDropdown.style.display = "none";
    }
}