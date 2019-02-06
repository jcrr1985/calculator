$(document).ready(function () {

	var plus, arit, times, divide, newScreen;
	oldScreen = 0;
	oldOp = "";

	$("#screen").val(oldScreen)

	function calculate(){


		if(oldOp === ""){
	    	arit = true;
	    	oldScreen = parseInt($("#screen").val())
		
		}

		if(oldOp === "plus"){
			oldScreen = oldScreen + parseInt($("#screen").val());			
		}
		else if(oldOp === "minus"){
			oldScreen = oldScreen - parseInt($("#screen").val());			
		}
		else if(oldOp === "times"){
			oldScreen = oldScreen * parseInt($("#screen").val());			
		}
		else if(oldOp === "divide"){
			oldScreen = oldScreen / parseInt($("#screen").val());			
		}

		$("#screen").val(oldScreen)	
}


	$(".buttons").click(function () {

		if($("#screen").val() === "0"){
			console.log('zero')
			 $("#screen").val($(this).html())

		}

		else {

			if(arit){				
			
				$("#screen").val($(this).html());		
				 arit = false;	
				 console.log("hola1")
			}

			else {
				$("#screen").val($("#screen").val() + $(this).html());
				  console.log("hola3")
			}
		}

	})

	$(".operator").click(function (argument) {

		if( $(this).html() === "+"){

			calculate();
			arit = true;	
			oldOp = "plus";	
			console.log('arit habilitado')
		}


		else if( $(this).html() === "-"){	

			calculate();			 
			arit = true;
			oldOp = "minus"
		}

		else if( $(this).html() === "*"){
			calculate();
			arit = true;
			oldOp = "times"
		}


		else if( $(this).html() === "/"){
			calculate();
			arit = true;
			oldOp = "divide"
		}

		else if( $(this).html() === "="){
			calculate();
			arit = true;
			oldOp = "";

		}

	})
})