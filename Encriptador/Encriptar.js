function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function mostrarResultado(texto) {
    document.getElementById("outputTexto").textContent = texto;
    document.getElementById("imagenPersona").style.display = 'none';
    document.getElementById("mensajePredeterminado").style.display = 'none';
    document.getElementById("outputTexto").style.display = 'block';
}

function encriptarTexto() {
    let inputTexto = document.getElementById("inputTexto").value;
    let textoEncriptado = encriptar(inputTexto);
    mostrarResultado(textoEncriptado);
}

function desencriptarTexto() {
    let inputTexto = document.getElementById("inputTexto").value;
    let textoDesencriptado = desencriptar(inputTexto);
    mostrarResultado(textoDesencriptado);
}

function copiarTexto() {
    let textoResultado = document.getElementById("outputTexto").textContent;
    navigator.clipboard.writeText(textoResultado).then(function() {
        alert("Texto copiado al portapapeles");
    }).catch(function(err) {
        alert("Error al copiar el texto: " + err);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.btnEncriptar').addEventListener('click', encriptarTexto);
    document.querySelector('.btnDesencriptar').addEventListener('click', desencriptarTexto);
    document.querySelector('.btnCopiar').addEventListener('click', copiarTexto);
});
