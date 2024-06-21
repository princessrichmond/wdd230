document.addEventListener('DOMContentLoaded', function(){
    var lastModifiedDate = document.lastModified;
    var lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent += " " + lastModifiedDate;
});