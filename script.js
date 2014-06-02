$(document).ready(function(){
	var turn = 0;
	var checkVictory = function(){
		if (turn % 2 == 0) {
			var test = "X";
		} else {
			var test = "O";
		}
		if ($("#r1c1").hasClass(test) && $("#r1c2").hasClass(test) && $("#r1c3").hasClass(test)){
			return true
		} else if ($("#r2c1").hasClass(test) && $("#r2c2").hasClass(test) && $("#r2c3").hasClass(test)){
			return true
		} else if ($("#r3c1").hasClass(test) && $("#r3c2").hasClass(test) && $("#r3c3").hasClass(test)){
			return true
		} else if ($("#r1c1").hasClass(test) && $("#r2c1").hasClass(test) && $("#r3c1").hasClass(test)){
			return true
		} else if ($("#r1c2").hasClass(test) && $("#r2c2").hasClass(test) && $("#r3c2").hasClass(test)){
			return true
		} else if ($("#r1c3").hasClass(test) && $("#r2c3").hasClass(test) && $("#r3c3").hasClass(test)){
			return true
		} else if ($("#r1c1").hasClass(test) && $("#r2c2").hasClass(test) && $("#r3c3").hasClass(test)){
			return true
		} else if ($("#r3c1").hasClass(test) && $("#r2c2").hasClass(test) && $("#r1c3").hasClass(test)){
			return true
		}
	};
	
	$('td').click(function(){
		if ($(this).html().indexOf("div") == -1){ 
			if (turn % 2 == 0){
				$(this).append('<div class = "piece X">X</div>');
				$(this).addClass('X');
			} else {
				$(this).append('<div class = "piece O">O</div>');
				$(this).addClass('O');
			}
			if (checkVictory()){
				var newGame = confirm("Game over! Start a new game?");
				if (newGame){
					$("#board td").empty();
					$("#board td").removeClass("X O");
					turn = 1;
				}
			} 	
			turn += 1;
			
		}
	});
});