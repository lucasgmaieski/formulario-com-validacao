const inputs = document.querySelectorAll(".input-field");
const containerDoInput = document.querySelectorAll(".inputs");
const enviar = document.querySelector(".btn");

inputs.forEach(function (item, indice) {
    item.addEventListener("input", function () {
        if(item.value != ''){
            containerDoInput[indice].classList.remove("naopreenchido");
            containerDoInput[indice].classList.add("preenchido");
        }
        else {
            containerDoInput[indice].classList.add("naopreenchido");
            containerDoInput[indice].classList.remove("preenchido");
        }
    })
})

enviar.addEventListener("click", function (e) {
    let resultado = faltouPreencher();
    if (resultado != 0) { 
        e.preventDefault(); 
        alert('Preencha todos os campos obrigatórios sinalizados em vermelho!');
    }
    else { 
        document.querySelector('form').reset();
        alert('Formulário enviado com sucesso!');
    }
})

function faltouPreencher() {
    let erros = 0;
    inputs.forEach(function (item, indice) {
        if (inputs[indice].value == '') {
            containerDoInput[indice].classList.add("naopreenchido");
            containerDoInput[indice].classList.remove("preenchido");
            erros++;
        }
    })
    return erros;
}