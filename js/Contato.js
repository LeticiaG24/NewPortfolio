function copiar() {
    const email = "leticia.furtado2406@gmail.com";

    navigator.clipboard.writeText(email)
        .then(() => {
            alert("Email copiado!");
        })
        .catch(err => {
            console.error("Erro ao copiar: ", err);
        });
}

function abrirModal() {
    document.getElementById("contatoModal").style.display = "block";
}
function fecharModal() {
  document.getElementById("contatoModal").style.display = "none";
}
document.getElementById('divEmail').addEventListener('click', function() {
  copiar();
});