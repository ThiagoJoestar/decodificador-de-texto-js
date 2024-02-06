// JavaScript (criptografia.js)

function criptografar() {
    // Obtém o valor do texto digitado
    var textoOriginal = document.getElementById('inputText').value;

    // Lógica de criptografia
    var textoEncriptado = criptografarTexto(textoOriginal);

    // Exibe o texto criptografado na segunda div
    document.getElementById('outputText').innerText = textoEncriptado;

    // Mostra o botão "Copiar" na segunda div
    document.getElementById('copiarBotao').style.display = 'block';
}

function descriptografar() {
    // Obtém o valor do texto criptografado
    var textoEncriptado = document.getElementById('inputText').value;

    // Lógica de descriptografia
    var textoOriginal = descriptografarTexto(textoEncriptado);

    // Exibe o texto descriptografado na segunda div
    document.getElementById('outputText').innerText = textoOriginal;

    // Esconde o botão "Copiar" na segunda div
    document.getElementById('copiarBotao').style.display = 'none';
}

function copiarTexto() {
    // Obtém o conteúdo da segunda div
    var textoEncriptado = document.getElementById('outputText').innerText;

    // Cria um elemento de texto temporário
    var inputTemporario = document.createElement('textarea');
    inputTemporario.value = textoEncriptado;

    // Adiciona o elemento temporário ao documento
    document.body.appendChild(inputTemporario);

    // Seleciona o texto no elemento temporário
    inputTemporario.select();
    inputTemporario.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Remove o elemento temporário do documento
    document.body.removeChild(inputTemporario);

    // Mensagem ou lógica adicional conforme necessário
    alert('Texto copiado para a área de transferência!');
}

function criptografarTexto(texto) {
    // Lógica de criptografia
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografarTexto(texto) {
    // Lógica de descriptografia
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
