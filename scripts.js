const form = document.querySelector("#form");
const solicitanteInput = document.querySelector("#solicitante");
const empresaInput = document.querySelector("#empresa");
const cargoInput = document.querySelector("#cargo");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#telefone");
const segmentoInput = document.querySelector("#segmento");

const dificuldadesInput = document.querySelector("#dificuldades");
const objetivoInput = document.querySelector("#objetivo");

const dataInput = document.querySelector("#data");
const janelaSelect = document.querySelector("#janela");
const mensagemTextarea = document.querySelector("#mensagem");

console.log(form)


form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Estao dentro, porque caso fiquem fora e JS roda pela primeira vez, nenhum item ainda está selecionado, então selecionadosSelect.length vai ser 0 para sempre.
    const selecionadosSelect = document.querySelectorAll('input[name="canais"]:checked');
    const origemSelect = document.querySelectorAll('input[name="origem"]:checked');
    const demoSelect = document.querySelector('input[name="demo"]:checked');

    //valida o nome
    if(solicitanteInput.value === "") {
        alert("Por favor, preencha o seu nome");
    return;
    }

    if(empresaInput.value === "") {
        alert("Por favor, preencha o nome da sua empresa ou marca");
    return;
    }

    if(cargoInput.value === "") {
        alert("Por favor, preencha o seu cargo");
    return;
     }                  

    if(emailInput.value === "") {
        alert("Por favor, preencha o e-mail");
    return;
    }

    if(telefoneInput.value === "") {
        alert("Por favor, preencha o seu telefone ou WhatsApp para que possamos entrar em contato.");
    return;
    }

    if(segmentoInput.value === "") {
        alert("Por favor, preencha o segmento da empresa");
    return;
    }

   if (selecionadosSelect.length === 0) {
        alert("Por favor, escolha uma das opções abaixo");
        return;
    }

    if(dificuldadesInput.value === "") {
        alert("Por favor, descreva as principais dificuldades enfrentadas no atendimento atual.");
    return;
    }

    if(objetivoInput.value === "") {
        alert("Conte pra gente qual é o principal objetivo que você deseja alcançar com a automação da M1.");
    return;
    }

    if (origemSelect.length === 0) {
        alert("Por favor, selecione como conheceu a Menos1.");
        return;
    }  

    if (!demoSelect) {  // aqui não tem .length, pois é um único radio
        alert("Por favor, escolha uma das opções de demonstração.");
        return;
    }


    if(dataInput.value === "") {
        alert("Por favor, escolha uma data para contato ou demonstração.");
    return;
    }

    if(janelaSelect.value === "") {
        alert("Por favor, selecione um horário válido para o contato.");
    return;
    }   

    if(mensagemTextarea.value === "") {
        alert("Por favor, adicione uma mensagem ou uma breve descrição do seu projeto.");
    return;
    }

})


