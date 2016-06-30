$(document).ready(function(){
    $("button").click(function () {
    $("figure").show("slow")
    });
});
var newsrc = "images/windows.jpg";
function changeImage() {

    if (newsrc == "images/broken-windows.jpg")
    {
        document.getElementById("img1").src = "images/broken-windows.jpg";
        document.getElementById("figcap1").innerHTML = "You have broken the screen. Now touch it again to fix it.";
        newsrc = "images/windows.jpg";
    }
    else
    {
        document.getElementById("img1").src = "images/windows.jpg";
        document.getElementById("figcap1").innerHTML = "Don't touch the screen, you may break it!";
        newsrc = "images/broken-windows.jpg";
    }
}