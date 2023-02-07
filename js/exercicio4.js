var sorteio = Math.floor(Math.random() * 10);
var tentativa = 0;
console.log(sorteio);
$(function(){
    $("form").on("submit", function(event){
        event.preventDefault();
        if(tentativa < 3){
            let numero = $("#numero").prop("value");
            if(sorteio == numero){
                $("#mensagem").html("");
                $("#mensagem").html("Parabéns! Você advinhou!");
                $("#mensagem").removeClass("text-warning");
                $("#mensagem").addClass("text-success");
                $("#robo").removeClass("border-warning");
                $("#robo").removeClass("border-info");
                $("#robo").addClass("border-success");
                $("input").attr("readonly", "");
                $("input").attr("disabled", "");
                tentativa = 4;
            }else{
                $("#mensagem").html("");
                $("#mensagem").html("Quase! Tente outra vez.");
                $("#mensagem").addClass("text-warning");
                $("#robo").removeClass("border-warning");
                $("#robo").removeClass("border-info");
                $("#robo").addClass("border-warning");
            }
            tentativa += 1;
        }else{
            $("#mensagem").html("");
            $("#mensagem").html("Tentativas esgotadas! Fica pra próxima!");
            $("#mensagem").removeClass("text-warning");
            $("#mensagem").addClass("text-danger");
            $("#robo").removeClass("border-warning");
            $("#robo").removeClass("border-info");
            $("#robo").addClass("border-danger");
            $("input").attr("readonly", "");
            $("input").attr("disabled", "");
        }
    });
})