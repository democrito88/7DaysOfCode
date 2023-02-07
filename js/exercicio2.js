$(function(){
    $("form").submit(function(event){
        event.preventDefault();
        let frase = "";
        $("#resposta").html("");
        $("#resposta").append("<h4>Olá "+
        $("input[name='nome']").prop("value")+", você tem "+
        $("input[name='idade']").prop("value")+" anos e já está aprendendo "+
        $("input[name='linguagem']").prop("value")+"!</h4>");
        if($("input[name='gosta']:checked").prop("value") == "sim"){
            frase = "Muito bom! Continue estudando e você terá muito sucesso.";
        }else{
            frase = "Ahh que pena... Já tentou aprender outras linguagens?";
        }

        $("#resposta").append("<br><h6>"+frase+"</h6>");
    })
})