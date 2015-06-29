$(document).ready(main);


    $(function () {
  	  $(".element-container").draggable({
        snap: ".dotted",
    	snapMode: "inner"
      });
	});

	var numCorrectas=0;
	var numIncorrectas=0;
	function main(){
  		establishProperties();
	}

	function establishProperties(){
		var atom = $(".element-container");
		atom.draggable();
		atom.mousedown(downResponse);
		$(".dotted").droppable({drop:dropQuestion});
	}

	function dropQuestion(event,ui){
		var contQuestion =$(this);
		var answer = ui.draggable;

		var correct = contQuestion.text().toLowerCase();
		correct = correct.trim();
		var pos = contQuestion.position();
		contQuestion.css("background","#BBB");
		contQuestion.css("box-shadow",".2px .2px .2em #000");
		contQuestion.css("border","1px dashed #333")
		answer.css("cursor","default");

		if(correct==answer.attr("alt")){
			contQuestion.addClass("resCorrect");
			// contQuestion.append("<img src='/assests/correcta.png'  class='ok' />" +"<img src='"+answer.attr("alt")+"' class='rDrop' />" );
			numCorrectas++;
		//	respuesta.remove();

		}else{
			contQuestion.addClass("resIncorrect");
			// contQuestion.append("<img src='img/inCorrecta.png' class='inco' />"+"<img src='"+respuesta.attr("src")+"' class='rDrop' />");
			numIncorrectas++;
		}
		// answer.draggable("destroy");
		// contQuestion.droppable("destroy");
		compareFinal();
		// answer.remove();
	}

	function compareResults(){
		$(".ok,.inco").fadeIn("slow");
		$("#results").html("Correct answers:     "+numCorrectas+"<br />"+"Incorrect answers:    "+numIncorrectas);
	}

	function compareFinal(){
		resul = numCorrectas+numIncorrectas;
		if(resul == 2){
		
			compareResults();
		}
	}

	function downResponse(){
		$(".answer").css("z-index","0");
		$(this).css("z-index","100");
	}