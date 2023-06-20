document.write("Área de Formulário Seguro!");
alert("Voltar ao formulário!");

//função para validar formulário
function validarForms() {
    var nome = document.forms[0].nome.value;
    if (!nome) {
        alert("falta preencher o Nome!");
    }

    else {
        document.forms[0].submit();
    }
}
/*
function validarForms() {
    var cpf = document.forms[1].cpf.value;
    if (!cpf) {
        alert("falta preencher o cpf!");
    }
    else {
        document.forms[0].submit();
    }

}
function validarForms() {
    var email = document.forms[2].email.value;
    if (!email) {
        alert("falta preencher o Email!");
    }
    else {
        document.forms[0].submit();
    }
}
*/