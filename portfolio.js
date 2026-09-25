let detailsButton = document.getElementById("detailsButton");
let projDetails = document.getElementById("projDetails");

detailsButton.addEventListener("click", function(){
    projDetails.removeAttribute("hidden");
    detailsButton.textContent = "More Details Showing";
})

let detailsButton2 = document.getElementById("detailsButton2");
let projDetails2 = document.getElementById("projDetails2");

detailsButton2.addEventListener("click", function(){
    projDetails2.removeAttribute("hidden");
    detailsButton2.textContent = "More Details Showing";
})