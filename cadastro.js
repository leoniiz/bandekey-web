function valida_form (){
    console.log("nome testado");
    if(document.getElementById("nome").value.length <= 2){
        alert('Por favor, preencha o campo nome');
        document.getElementById("nome").focus();
    }

    console.log("sobrenome testado");
    if(document.getElementById("sobrenome").value.length <= 2){
        alert('Por favor, preencha o campo sobrenome');
        document.getElementById("sobrenome").focus();
    }

    /*console.log("email testado");
    var usuario = document.getElementById("email").value.substring(0, field.value.indexOf("@"));
    var dominio = document.getElementById("email").value.substring(field.value.indexOf("@")+ 1, field.value.length);

    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        }
        else {
            alert('Por favor, preencha o campo email');
            document.getElementById("email").focus();
        } */

        console.log("telefone testado");
        if(document.getElementById("nome").value.length <= 10 && isNaN("telefone") == true){
        alert('Por favor, preencha o campo telefone');
        document.getElementById("telefone").focus();
        }

        console.log("RA testado");
        if(document.getElementById("ra").value.length == 6){
        alert('Por favor, preencha o campo RA');
        document.getElementById("ra").focus();
        }
        }