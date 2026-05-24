function enviarFormulario(){

    let nome =
    document.getElementById("nome").value;

    let email =
    document.getElementById("email").value;

    let mensagem =
    document.getElementById("mensagem").value;

    if(
        nome == "" ||
        email == "" ||
        mensagem == ""
    ){

        alert(
            "Preencha todos os campos!"
        );

        return;
    }

    alert(
        "Mensagem enviada com sucesso!"
    );

    document
    .getElementById("formContato")
    .reset();
}