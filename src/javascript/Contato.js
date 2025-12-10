function copiar() {
    const email = "leticia@gmail.com";

    navigator.clipboard.writeText(email)
        .then(() => {
            alert("Email copiado!");
        })
        .catch(err => {
            console.error("Erro ao copiar: ", err);
        });
}