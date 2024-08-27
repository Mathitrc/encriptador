// Función para encriptar el texto
function encriptar(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const textoCopiar = document.querySelector(".mensaje");
    textoCopiar.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

// Vinculando la lógica con los botones
document.querySelector(".btn_encriptar").onclick = function() {
    const texto = document.querySelector(".Text_area").value;
    const textoEncriptado = encriptar(texto);
    document.querySelector(".mensaje").value = textoEncriptado;
}

document.querySelector(".btn_desencriptar").onclick = function() {
    const texto = document.querySelector(".Text_area").value;
    const textoDesencriptado = desencriptar(texto);
    document.querySelector(".mensaje").value = textoDesencriptado;
}

document.querySelector(".btn_copiar").onclick = function() {
    copiarTexto();
}
