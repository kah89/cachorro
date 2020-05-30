
/// keypress = invocado para cada caracterer que for inserido
$('#campo').keypress(function(){
  
	//alert('precionou o teclado')
 
});

/// keypress = invocado para cada tecla liberada
$('#campo').keyup(function(){
  
	//alert('tecla a liberada')
 
});



$('#voltar').click(function(){
    
    $('#cachorro').css({ 'margin-top': '400px',
	'margin-left': '100px'
	})
    
});


var a = 10;
var b = 10;
	
$('#campo').keydown(function(evento){
  
	//alert(evento.which);
	if(evento.which == 40)$('#cachorro').css("margin-top", b);
	if(evento.which == 39)$('#cachorro').css("margin-left", a);	
	if(evento.which == 38)$('#cachorro').css("margin-top", b);	
	if(evento.which == 37)$('#cachorro').css("margin-left", a);
	a = a + 10;
	b = b + 10;
	
 
});


$('#campo').keydown(function(evento){
  
	//alert(evento.which);
	if(b == 900)){alert('parabens você chegou"')}
	
});






/*KEY_DOWN = 40;
KEY_UP = 38;
KEY_LEFT = 37;
KEY_RIGHT = 39;*/

/* key press --> no momento da tecla pressionada
KEY_DOWN --> no momento da tecla ser liberada
KEY_UP --> no momento da tecla ser afundada */