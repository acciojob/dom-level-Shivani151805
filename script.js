//your JS code here. If required.
function getDOMLevel() {
    let element = document.getElementById("level");
    let level = 0;

    // Traverse up the DOM tree to count ancestors including <html>
    while (element) {
        level++;
        element = element.parentElement;
    }

    alert("The level of the element is: " + level);
}
