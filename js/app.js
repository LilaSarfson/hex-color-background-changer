function generarLetra() {
    var letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var numero = (Math.random() * 15).toFixed(0);
    return letras[numero];
}

function colorHEX() {
    var coolor = "";
    for (var i = 0; i < 6; i++) {
        coolor = coolor + generarLetra();
    }
    return "#" + coolor;
}
// let nombreColor = colorHEX.textContent;
let botonMagico = document.querySelector("#btn");
let fondo = document.querySelector("body");

botonMagico.addEventListener("click", function () {
    fondo.style.backgroundColor = colorHEX();
    document.querySelector(".text-uppercase").textContent = `hex color: ${colorHEX()}`;
})

console.log("nombreColor");