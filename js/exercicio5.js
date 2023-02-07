$(function(){
    $("form").on("submit", function(event){
        event.preventDefault();

        let produto = $("#produto").prop("value");
        let categoria = $("#categoria").prop("value");
        if(produtos[categoria].includes(produto)){
            if($("#"+categoria).length === 0){
                $("#lista").append(
                    "<div id='"+categoria+"'>"
                    +"<h5>"+categoria+"</h5>"
                    +"<ul>"
                    +"</ul>"
                    +"</div>"
                    +"<hr>"
                );
            }
            $("#"+categoria).children("ul:nth-child(2)").append("<li>"+produto
            +"&nbsp;&nbsp;&nbsp;"
                +"<a class='a'>"
                    +"<i class=\"text-danger bi bi-x-circle-fill\"></i>"
                +"</a>"
            +"</li>");
            $("#produto").prop("value", "");
        }
    });

    $("#lista").on("click", ".a", function(){
        $(this).parent().remove();
    })
});

var produtos = {
    "hortifruti": [
        "maçã", 
        "mamão", 
        "pêra", 
        "uva", 
        "abacaxi", 
        "alface", 
        "tomate", 
        "chuchu", 
        "coentro", 
        "cebolinha", 
        "melão",
        "melancia",
        "manga",
        "jerimum",
        "macaxeira",
        "inhame",
        "cebola",
        "cenoura",
        "alho",
        "banana",
        "acelga",
        "batata inglesa",
        "batata doce"
    ],
    "frios": [
        "queijo",
        "presunto",
        "mortadela",
        "manteiga",
        "requeijão",
        "hambúrguer",
        "lasanha",
        "iogurte"
    ],
    "cereais": [
        "arroz",
        "feijão",
        "milho",
        "ervilha"
    ],
    "limpeza": [
        "sabão em barra",
        "sabão em pó",
        "água sanitária",
        "detergente",
        "desinfetante",
        "pano de chão",
        "flanela",
        "álcool",
        "vassoura",
        "rodo",
        "esfregão",
        "pá",
        "saco de lixo",
        "esponja"
    ],
    "higiene": [
        "sabonete",
        "xampú",
        "condicionador",
        "creme",
        "creme dental",
        "escova de dentes",
        "fio dental",
        "desodorante"
    ],
    "massas": [
        "pão francês",
        "macarrão",
        "bolo de fubá",
        "bolo de chocolate",
        "bolo de milho",
        "pão de queijo"
    ],
    "temperos": [
        "sal",
        "açúcar",
        "pimenta do reino",
        "cominho",
        "alecrim",
        "salsa"
    ],
    "bebidas": [
        "água",
        "leite",
        "vinho",
        "cerveja",
        "refrigerante",
        "suco",
        "água com gás",
        "chá",
        "café"
    ],
    "brebotes": [
        "chiclete",
        "bala de ursinho",
        "confeito",
        "pirulito",
        "chocolate",
        "jujuba"
    ]
}