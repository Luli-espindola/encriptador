
function encryptText() {
    const inputText = document.getElementById('inputText').value;

    if (/[^a-z\s]/.test(inputText)) { // Validación de solo minúsculas y espacios
        alert('No se permiten mayúsculas ni caracteres especiales.');
        document.getElementById('outputText').value = '';
    } else {
        const encryptedText = inputText
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.getElementById('outputText').value = encryptedText;
    }
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;

    if (/[^a-z\s]/.test(inputText)) { // Validación de solo minúsculas y espacios
        alert('No se permiten mayúsculas ni caracteres especiales.');
        document.getElementById('outputText').value = '';
    } else {
        const decryptedText = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.getElementById('outputText').value = decryptedText;
    }
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}


