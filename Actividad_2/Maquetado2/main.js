
function cambiarColor(elemento) 
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var color = "rgb(" + r + ", " + g + ", " + b +")";

    document.getElementById(elemento).style.backgroundColor = color;


}

cambiarColor("banner");
cambiarColor("logo");
cambiarColor("article");
cambiarColor("aside");
cambiarColor("foot");
cambiarColor("navegation");

