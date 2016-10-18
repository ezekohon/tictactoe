/*jslint browser: true*/
/*global $, jQuery, alert*/



$(document).ready(function() {
    
    
   $('#namaste').fadeIn(500);

	
	var john = '<img class="circularChico" src="https://lifeexaminations.files.wordpress.com/2010/12/20080524-lost-teoria-sobre-jacob-y-john-locke.jpg?w=600"/>';
	
	var jack = '<img class="circularChico" src="http://images.nymag.com/images/2/daily/2010/01/20100129_matthewfox_190x190.jpg"/>';
	
	//var winnerArr = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]]; //probablemente no necesario, chequeo con ifs para row, column y diagonal
	
	$('.choose').on('click', function(){
		$('#namaste').hide();
		$('#sides').fadeIn(500);
	});
	
	$('#john').on('click', function(){
		$('#sides').hide();
		$('#buttonContainer').fadeIn(500);
		//add variable
		
	});
		
	$('#jack').on('click', function(){
		$('#sides').hide();
		$('#buttonContainer').fadeIn(500);
		//add variable
		
	});
	$('#0').on('click',function(){
		console.log('toco');
		//this.append(jack);
	});
	
	
	
	
	
	
});

