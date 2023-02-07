$(function(){
    $("#linha").on("keypress", ".input", function(e){
        if ( e.originalEvent.key == "Enter" ) {
            let input = $(this).prop("value");
            switch(input){
                case 'front':
                    $("#linha").append(pergunta(1));
                    break;
                case 'back':
                    $("#linha").append(pergunta(2));
                    break;
                case 'react':
                case 'vue':
                case 'C#':
                case 'Java':
                    $("#linha").append(pergunta(3));
                    break;
                case '1':
                case '2':
                    perguntaTecnologia();
                    break;
                default:
                    $("#linha").append(pergunta(0));
                    break;
            }
        }
    });

    $("#linha").on("keypress", ".input-tecnologia", function(e){
        if ( e.originalEvent.key == "Enter" ) {
            let input = $(this).prop("value");
            if(input !== "não"){
                $("#linha").append(
                    "<div class=\"col-12\">"
                        +"<div class=\"form-group\">"
                            +"<label class=\"form-label\">Existe outra tecnologia que gostarias de estudar?</label>"
                            +"<div class=\"input-group mb-3\">"
                                +"<span class=\"input-group-text border border-0 bg-black text-success\">&gt;</span>"
                                +"<input class=\"form-control border border-0 bg-black text-success input-tecnologia\" type=\"text\">"
                            +"</div>"
                        +"</div>"
                    +"</div>"
                );
            }
        }
        
    });
})

function pergunta(i){
    return "<div class=\"col-12\">"
                +"<div class=\"form-group\">"
                    +"<label class=\"form-label\">"+perguntas[i]+"</label>"
                    +"<div class=\"input-group mb-3\">"
                        +"<span class=\"input-group-text border border-0 bg-black text-success\">&gt;</span>"
                        +"<input class=\"form-control border border-0 bg-black text-success input\" type=\"text\">"
                    +"</div>"
                +"</div>"
            +"</div>";
}

function perguntaTecnologia(){
    $("#linha").append( 
        "<div class=\"col-12\">"
            +"<div class=\"form-group\">"
                +"<label class=\"form-label\">Existe outra tecnologia que gostarias de estudar?</label>"
                +"<div class=\"input-group mb-3\">"
                    +"<span class=\"input-group-text border border-0 bg-black text-success\">&gt;</span>"
                    +"<input class=\"form-control border border-0 bg-black text-success input-tecnologia\" type=\"text\">"
                +"</div>"
            +"</div>"
        +"</div>");
}

var perguntas=[
    "Você quer seguir carreira na área de front-end ou back-end?",
    "Qual destas linguagens gostaria de aprender: React ou Vue?",
    "Qual destas linguagens gostaria de aprender: C# ou Java?",
    "O que você pretende fazer com a sua carreira nesta linguagem?<br> 1 - seguir se especializando na área escolhida<br> 2 - seguir se desenvolvendo para se tornar Fullstack"
];