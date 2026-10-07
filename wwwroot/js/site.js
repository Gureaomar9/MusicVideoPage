// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function startAnimation() {
    let elem = document.getElementById("animateBox");
    let pos = 0;
    elem.style.left = "0px";

    let containerWidth = document.getElementById("animationContainer").clientWidth - 50;
    let id = setInterval(frame, 10);

    function frame() {
        if (pos >= containerWidth) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
