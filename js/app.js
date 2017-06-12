$(function(){

	var tornado = function(array){
		return Math.floor(Math.random()*array.length);
	};
	var indice;
	var tries=0;
	var displayPictures = function(sede, contenedor, array){
		indice = tornado(array);
		contenedorImg.attr("src","img/"+sede+"/"+array[indice].image);
		var puntos = $("#puntos");
		var error = 0;

		$("form").submit(function(e){
			tries++;
			e.preventDefault();
			var nombre = $("input:text");
			
			if(nombre.val().toLowerCase() === array[indice].name.toLowerCase()){
				tries=0;
				nombre.val("");
				puntos.text(eval(puntos.text())+5);
				$(".mensaje").text("Success");
				indice = tornado(array);													
				setTimeout(function(){
					contenedorImg.attr("src","img/"+sede+"/"+array[indice].image);
				},1000);

			}else{
				if(tries <= 4){
					nombre.val("");
				}else{
					tries=0;
					indice = tornado(array);													
						setTimeout(function(){
							contenedorImg.attr("src","img/"+sede+"/"+array[indice].image);
						},3000);					
					
					puntos.text(eval(puntos.text())-1);;
				}
				$("#alert").text("Sigue intentando");				
			}
		});

	};

	var contenedorImg = $("img");
	
	$("#sel1").on("change", function(){
		sede = $(this).val();
	
		if(sede === "peru"){
			displayPictures(sede, contenedorImg, peru);
		}else{
			displayPictures(sede, contenedorImg, mexico);
		}
	});
	
	
});
