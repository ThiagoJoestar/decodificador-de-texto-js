function criptografar() {
    
    var textoOriginal = document.getElementById('inputText').value;
    
    var textoEncriptado = criptografarTexto(textoOriginal);

    document.getElementById('outputText').innerText = textoEncriptado;
    
    document.getElementById('copiarBotao').style.display = 'block';
}

function descriptografar() {
    
    var textoEncriptado = document.getElementById('inputText').value;
    
    var textoOriginal = descriptografarTexto(textoEncriptado);

    document.getElementById('outputText').innerText = textoOriginal;
    
    document.getElementById('copiarBotao').style.display = 'none';
}

function copiarTexto() {
    
    var textoEncriptado = document.getElementById('outputText').innerText;
    
    var inputTemporario = document.createElement('textarea');
    inputTemporario.value = textoEncriptado;
    
    document.body.appendChild(inputTemporario);

    inputTemporario.select();
    inputTemporario.setSelectionRange(0, 99999); // Para dispositivos móveis
    
    document.execCommand('copy');

    document.body.removeChild(inputTemporario);

    alert('Texto copiado para a área de transferência!');
}

function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
