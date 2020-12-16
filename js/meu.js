$(document).ready(function (){
     
    // chamando as funções
 
 
    validaForm();
    scrollSuave() ;
    InicioPagina(); 
    animacaoImgSobre();
   
    
  
    
});


  function animacaoImgSobre(){
       // animacao simples pra surgir imagem da sessao sobre
    $('#animacao').click(function(){
          $('#img-sobre').addClass('animacao-img-sobre');
    });
   
  } 


function validaForm() {
    
     // simulaçao simples pode ser melhor
    // submetendo form
    $('#formulario').submit(function (event) {
    
    // salvando todos os input que são obrigatorios em uma variavel    
    var inputs = $('input').attr('required', 'required') 



        // condição para verificar se os campos forma preenchidos
        if (inputs.val() != "") {
            
             // condicao sendo true gif animado é exibo
            $('#loading').show('slow');
            
            // metodo jquery pra fazer gif sumir após 4seg
            setTimeout(function () {
                $('#loading').hide('slow');
            }, 3000);

               // metodo jquery pra exibir e esconder alerta de succeso, por ultimo limpar os campos
            setTimeout(function () {

                setTimeout(function () {
                    $('#alerta').hide('slow');
                    $("input,textarea").val("");

                }, 3000);
                $('#alerta').show('slow');


            }, 5000);





        }


        event.preventDefault();
    })
}


function scrollSuave() {
    
    // iniciando evento através do clique
    $(".scroll").click(function (event) {
        // mudando comportamento padrão do evento
        event.preventDefault();
        0
        // realizando animação através do metodo scroll
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);


    });

}



function InicioPagina() {
	// Faz animação para subir
	$('.voltar-ao-topo').click(function (event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		},300);
	});

}