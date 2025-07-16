//your JS code here. If required.
function getDOMLevel() {
    let element = document.getElementById("level");
    let level = 0;

    
    while (element) {
        level++;
        element = element.parentElement;
    }

    console.log("DOM Level:", level);
    alert("DOM Level: " + level);
