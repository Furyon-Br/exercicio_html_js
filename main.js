document.getElementById("form-deposito").addEventListener("submit", function(event){
    event.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const mensagem = document.getElementById("mensagem");

    if (campoA > campoB) {
        mensagem.textContent = "Formulário invalido, o campo A não pode ser maior que o campo B";
    } else {
        mensagem.textContent = "Formulário Válido, Parabens !!";
    }
});