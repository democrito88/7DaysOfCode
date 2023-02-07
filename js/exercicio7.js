var expressao = "";
var num1 = 0;
var num2 = 0;
var operador = "";

$(function(){
    $("#igual").on("click", function(){
        expressao = $("input").prop("value");
        $("input").attr("value", "");
        expressionParse(expressao);
    });

    $(".input").on("click", function(){
        $("input").attr("value", $("input").prop("value")+$(this).html());
    });

    $(".clear").on("click", function(){
        $("input").attr("value", "");
    });
});

function expressionParse(expressao) {
    let numArray = [];
    if(expressao.includes("+")){
        operador = "+";
        numArray = expressao.split("+");
    }else if (expressao.includes("-")) {
        operador = "-";
        numArray = expressao.split("-");
    } else if (expressao.includes("x")) {
        operador = "x";
        numArray = expressao.split("x");
    } else if (expressao.includes("/")) {
        operador = "/";
        numArray = expressao.split("/");
    } else {
        numArray = [expressao, 0];
    }

    num1 = parseInt(numArray[0]);
    num2 = parseInt(numArray[1]);

    let resultado = 0;

    switch (operador) {
        case '+':
            resultado = soma(num1, num2);
            break;
        case '-':
            resultado = subtacao(num1, num2);
            break;
        case 'x':
            resultado = multiplicacao(num1, num2);
            break;
        case '/':
            resultado = divisao(num1, num2);
            break;
        default:
            break;
    }

    $("input").attr("value", resultado);
}

function soma(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 + num2;
}

function subtacao(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 * num2;
}

function divisao(num1, num2) {
    if(num2 != 0){
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        return num1 / num2;
    }else{
        return "Error!";
    }
}