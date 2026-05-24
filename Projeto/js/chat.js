function enviarMensagem() {

    let input =
    document.getElementById("input");

    let mensagem =
    input.value;

    if(mensagem == "") return;


    let chat =
    document.getElementById("chat");


    chat.innerHTML += `
        <div class="user">
            ${mensagem}
        </div>
    `;

    input.value = "";


    setTimeout(() => {

        let respostas = [

            "Excelente atitude sustentável!",

            "Você está ajudando o planeta 🌱",

            "Ótima escolha ecológica!",

            "Continue evoluindo seus EcoPoints!",

            "Sustentabilidade faz diferença!",

            "Parabéns pela ação consciente!"
        ];

        let respostaAleatoria =
        respostas[
            Math.floor(
                Math.random() * respostas.length
            )
        ];

        chat.innerHTML += `
            <div class="bot">
                ${respostaAleatoria}
            </div>
        `;

        chat.scrollTop =
        chat.scrollHeight;

    }, 1000);

}