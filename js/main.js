/*jslint browser: true*/
/*global $, jQuery, alert*/
'use strict';
//var userIcon = "";
//var aiIcon = "";
var gameOver = false;
//var board;
//var plays;
var john = '<img class="circularChico" src="https://lifeexaminations.files.wordpress.com/2010/12/20080524-lost-teoria-sobre-jacob-y-john-locke.jpg?w=600"/>', //o
    jack = '<img class="circularChico" src="http://images.nymag.com/images/2/daily/2010/01/20100129_matthewfox_190x190.jpg"/>'; //x


function Game () {
    //e=empty
    this.board = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
    this.aiIcon = '';
    this.userIcon = '';
    this.plays = 0;
}

Game.prototype = {
    
    constructor: Game, 
    
    setAiIcon: function (val) {
        this.aiIcon = val;
    },
    setUserIcon: function (val) {
        this.userIcon = val;
    },
    getUserIcon: function () {
	   return this.userIcon;
    },
    getAiIcon: function () {
	   return this.aiIcon;
    },
    updateBoard: function (pl, index){
	   this.board[index] = pl;
    },
    getBoard: function(){
	   return this.board;
    },
    incPlays: function(){
    	   this.plays += 1;
    },
    getPlays: function(){
	   return this.plays;
    },
    aiMove: function (){
	   // implement, switch?
	   // al final incPlays()
	    var pAi;
	    var pUser;
	    var th = this;
	    var icon = this.getAiIcon();
	    var board = this.getBoard();
	    var i = 0;
	    var keep = true;
	    /* while(i<board.length && keep){
		    if (th.checkEmpty(i)){
			    keep = false;
		    }
			i++;
	    }
	    i= i-1;*/
	    
	    //implement better AI
	    if(icon==jack){
		    pAi='jack';
		    pUser='john';
	    }else{
		    pAi='john';
		    pUser='jack';
	    }
	    
	    var i = th.evaluate(pUser,pAi); //implement
	    
	    
	    switch (i) {
      case 0: 
		 $("#0").append(icon);
		 if(icon==jack){
				th.updateBoard('jack',0);
			} else {
		    		th.updateBoard('john',0);
			}
			break;
	 
      case 1: 
		 $("#1").append(icon);
		 if(icon==jack){
				th.updateBoard('jack',1);
			} else {
		    		th.updateBoard('john',1);
			}
			break;
	 
      case 2: 
		 $("#2").append(icon);
		 if(icon==jack){
				th.updateBoard('jack',2);
			} else {
		    		th.updateBoard('john',2);
			}
			break;
	 
      case 3: 
		 $("#3").append(icon);
		 if(icon==jack){
				th.updateBoard('jack',3);
			} else {
		    		th.updateBoard('john',3);
			}
			break;
	 
      case 4: 
		 $("#4").append(icon);
		 if(icon==jack){
				th.updateBoard('jack',4);
			} else {
		    		th.updateBoard('john',4);
			}
			break;
	 
      case 5: 
		 $("#5").append(icon);
		 if(icon==jack){
				th.updateBoard('jack',5);
			} else {
		    		th.updateBoard('john',5);
			}
			break;
	 
      case 6: 
		 $("#6").append(icon);
		 if(icon==jack){
				th.updateBoard('jack',6);
			} else {
		    		th.updateBoard('john',6);
			}
			break;
	 
      case 7: 
		 $("#7").append(icon);
		 if(icon==jack){
				th.updateBoard('jack',7);
			} else {
		    		th.updateBoard('john',7);
			}
			break;
	 
      case 8: 
		 $("#8").append(icon);
		 if(icon==jack){
				th.updateBoard('jack',8);
			} else {
		    		th.updateBoard('john',8);
			}
			break;
	 
    }
	    this.incPlays();
	    var ret = this.checkWhoWon();
	    return ret;
	    
    },
    checkEmpty: function (index){
	   var b = this.getBoard();
	   return b[index]=='e';
    },
	checkWhoWon: function(){
		// implement
		//que retorne 1 si user gano, 0 si empate, -1 si ai gano
		var ret = 0;
		var th = this;
		var pUser = '';
		var pAi = '';
		if(th.getUserIcon()==jack){
				pUser='jack';
				pAi='john';
			} else {
		    		pUser='john';
				pAi='jack';
			}
		function columnWin(){
			var b = th.getBoard();
			for (var i=0; i<3; ++i){
				if (pUser === b[i] && pUser === b[i + 3] && pUser === b[i + 6]) {
					ret = 1;
			}
				if (pAi === b[i] && pAi === b[i + 3] && pAi === b[i + 6]) {
					ret = -1;
			}
		}
	}
		function rowWin(){
			var b = th.getBoard();
			for (var i = 0; i <= 6; i += 3) {
				if (pUser === b[i] && pUser === b[i + 1] && pUser === b[i + 2]) {
					ret = 1;
		}
			
				if (pAi === b[i] && pAi === b[i + 1] && pAi === b[i + 2]) {
					ret = -1;
		}
			}
			}
		
		function diagonalWin(){
			var b = th.getBoard();
			
			if(pUser === b[0] && pUser === b[4] && pUser == b[8] ||
		pUser === b[2] && pUser === b[4] && pUser == b[6]){
				ret = 1;
			}
			if(pAi === b[0] && pAi === b[4] && pAi == b[8] ||
		pAi === b[2] && pAi === b[4] && pAi == b[6]){
				ret = -1;
			}
		}
		
		columnWin();
		rowWin();
		diagonalWin();
		
		if (ret==1){
			$('#buttonContainer').delay(1600).hide();
			
			$('#win').fadeIn(500);
			$('#again').fadeIn(1000);
		}
		if (ret==-1){
			$('#buttonContainer').delay(1600).hide();
			
			$('#loose').fadeIn(500);
			$('#again').fadeIn(1000);
		}
		if (ret===0 && th.getPlays()>=9){
			$('#buttonContainer').delay(1600).hide();
			
			$('#tie').fadeIn(500);
			$('#again').fadeIn(1000);
		}
	
		
	},
	resetGame: function(){
		this.board = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
    		this.aiIcon = '';
    		this.userIcon = '';
    		this.plays = 0;
		
		$('#0').html('');
		$('#1').html('');
		$('#2').html('');
		$('#3').html('');
		$('#4').html('');
		$('#5').html('');
		$('#6').html('');
		$('#7').html('');
		$('#8').html('');
		$('#sides').fadeIn(500);
		//location.reload();
	},
	evaluate: function(user,ai){
		var ret;
		var b = this.getBoard();
		//ruled based strategy
		
		//if ai can win
		
		if(b[0] == 'e' &&((b[1]==ai && b[2]==ai) || (b[3]==ai && b[6]==ai) || (b[4]==ai && b[8]==ai))){
			ret = 0;
		}else if (b[1] == 'e' &&((b[0]==ai && b[2]==ai) || (b[4]==ai && b[7]==ai) )){
			ret = 1;
		}else if(b[2] == 'e' &&((b[0]==ai && b[1]==ai) || (b[5]==ai && b[8]==ai) || (b[4]==ai && b[6]==ai))){
			ret = 2;
		}else if(b[3] == 'e' &&((b[0]==ai && b[6]==ai) || (b[4]==ai && b[5]==ai))){
			ret = 3;
		}else if(b[4] == 'e' &&((b[0]==ai && b[8]==ai) || (b[2]==ai && b[6]==ai) || (b[1]==ai && b[7]==ai) || (b[3]==ai && b[5]==ai) )){
			ret = 4;
		}else if(b[5] == 'e' &&((b[3]==ai && b[4]==ai) || (b[2]==ai && b[8]==ai))){
			ret = 5;
		}else if(b[6] == 'e' &&((b[0]==ai && b[3]==ai) || (b[7]==ai && b[8]==ai) || (b[4]==ai && b[2]==ai))){
			ret = 6;
		}else if(b[7] == 'e' &&((b[1]==ai && b[4]==ai) || (b[6]==ai && b[8]==ai))){
			ret = 7;
		}else if(b[8] == 'e' &&((b[0]==ai && b[4]==ai) || (b[2]==ai && b[5]==ai) || (b[6]==ai && b[7]==ai))){
			ret = 8;
		}
		//if ai can stop user from winning
		else if(b[0] == 'e' &&((b[1]==user && b[2]==user) || (b[3]==user && b[6]==user) || (b[4]==user && b[8]==user))){
			ret = 0;
		}else if (b[1] == 'e' &&((b[0]==user && b[2]==user) || (b[4]==user && b[7]==user) )){
			ret = 1;
		}else if(b[2] == 'e' &&((b[0]==user && b[1]==user) || (b[5]==user && b[8]==user) || (b[4]==user && b[6]==user))){
			ret = 2;
		}else if(b[3] == 'e' &&((b[0]==user && b[6]==user) || (b[4]==user && b[5]==user))){
			ret = 3;
		}else if(b[4] == 'e' &&((b[0]==user && b[8]==user) || (b[2]==user && b[6]==user) || (b[1]==user && b[7]==user) || (b[3]==user && b[5]==user) )){
			ret = 4;
		}else if(b[5] == 'e' &&((b[3]==user && b[4]==user) || (b[2]==user && b[8]==user))){
			ret = 5;
		}else if(b[6] == 'e' &&((b[0]==user && b[3]==user) || (b[7]==user && b[8]==user) || (b[4]==user && b[2]==user))){
			ret = 6;
		}else if(b[7] == 'e' &&((b[1]==user && b[4]==user) || (b[6]==user && b[8]==user))){
			ret = 7;
		}else if(b[8] == 'e' &&((b[0]==user && b[4]==user) || (b[2]==user && b[5]==user) || (b[6]==user && b[7]==user))){
			ret = 8;
		}
		//center
		else if(b[4]=='e'){
			ret=4;
		}
		//opposite corner
		else if(b[0]=='e' && b[8]==user){
			ret=0;
		}else if(b[2]=='e' && b[6]==user){
			ret=2;
		}else if(b[6]=='e' && b[2]==user){
			ret=6;
		}else if(b[8]=='e' && b[0]==user){
			ret=8;
		}
		// any corner
		else if(b[0]=='e' ){
			ret=0;
		}else if(b[2]=='e' ){
			ret=2;
		}else if(b[6]=='e' ){
			ret=6;
		}else if(b[8]=='e'){
			ret=8;
		}
		//any side
		else if(b[1]=='e' ){
			ret=1;
		}else if(b[3]=='e' ){
			ret=3;
		}else if(b[5]=='e' ){
			ret=5;
		}else if(b[7]=='e'){
			ret=7;
		}
		return ret;
	}
    
};




$(document).ready(function () {
    
    
    
    var newGame = new Game();
    
    $('#namaste').fadeIn(500);
    
    //var winnerArr = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]]; //probablemente no necesario, chequeo con ifs para row, column y diagonal
    
    $('.choose').on('click', function () {
        $('#namaste').hide();
        $('#sides').fadeIn(500);
    });
    
    $('#jack').on('click', function () { //x, go first
        $('#sides').hide();
        $('#buttonContainer').fadeIn(500);
        //userIcon = jack;
        //aiIcon = john;
        newGame.setAiIcon(john);
        newGame.setUserIcon(jack);
	    
    });
    
    $('#john').on('click', function () { //o, second
        $('#sides').hide();
        $('#buttonContainer').fadeIn(500);
       // userIcon = john; // esto o lo de abajo, ver que conviene
        //aiIcon = jack;
        newGame.setAiIcon(jack);
        newGame.setUserIcon(john);
	    newGame.aiMove();
    });
	
	$('#yes').on('click', function(){
		$('#loose').hide();
		$('#win').hide();
		$('#tie').hide();
		$('#again').hide();
		
		newGame.resetGame();
	});
	
	$('#no').on('click', function(){
		$('#loose').hide();
		$('#win').hide();
		$('#tie').hide();
		$('#again').hide();
		$('#seeyou').fadeIn(500);
	});
	
	
    
    /*
    		check if game isnt ended.
		put icon on the board
    */
    
    $('#0').on('click', function () {
	   
	   
	   // check if cell is empty
	   if(newGame.checkEmpty(0)){  
		  	$(this).append(newGame.getUserIcon());
		   	newGame.incPlays();
	   		if(newGame.getUserIcon()==jack){
				newGame.updateBoard('jack',0);
			} else {
		    		newGame.updateBoard('john',0);
			}
		   newGame.checkWhoWon();
		
		   
		   
		   
		   
		   if(newGame.getPlays()<9){ // if game not ended
			   
			   	newGame.aiMove();
			     //chk again if game ended
			   	newGame.checkWhoWon();
		   }
	   }
	   
    });
	
	$('#1').on('click', function () {
	   
	   
	   // check if cell is empty
	   if(newGame.checkEmpty(1)){  
		  	$(this).append(newGame.getUserIcon());
		   	newGame.incPlays();
	   		if(newGame.getUserIcon()==jack){
				newGame.updateBoard('jack',1);
			} else {
		    		newGame.updateBoard('john',1);
			}
		   newGame.checkWhoWon();
		   
		   if(newGame.getPlays()<9){ // if game not ended
			   
			   	newGame.aiMove();
			     //chk again if game ended
			   	newGame.checkWhoWon();
		   }
	    
	    
	   }
	   
    });
	
	$('#2').on('click', function () {
	   
	   
	   // check if cell is empty
	   if(newGame.checkEmpty(2)){  
		  	$(this).append(newGame.getUserIcon());
		   	newGame.incPlays();
	   		if(newGame.getUserIcon()==jack){
				newGame.updateBoard('jack',2);
			} else {
		    		newGame.updateBoard('john',2);
			}
		   newGame.checkWhoWon();
		   
		  if(newGame.getPlays()<9){ // if game not ended
			   
			   	newGame.aiMove();
			     //chk again if game ended
			   	newGame.checkWhoWon();
		   }
	    
	    
	   }
	   
    });
	
	$('#3').on('click', function () {
	   
	   
	   // check if cell is empty
	   if(newGame.checkEmpty(3)){  
		  	$(this).append(newGame.getUserIcon());
		   	newGame.incPlays();
	   		if(newGame.getUserIcon()==jack){
				newGame.updateBoard('jack',3);
			} else {
		    		newGame.updateBoard('john',3);
			}
		   newGame.checkWhoWon();
		   
		 if(newGame.getPlays()<9){ // if game not ended
			   
			   	newGame.aiMove();
			     //chk again if game ended
			   	newGame.checkWhoWon();
		   }
	    
	    
	   }
	   
    });
	
	$('#4').on('click', function () {
	   
	   
	   // check if cell is empty
	   if(newGame.checkEmpty(4)){  
		  	$(this).append(newGame.getUserIcon());
		   	newGame.incPlays();
	   		if(newGame.getUserIcon()==jack){
				newGame.updateBoard('jack',4);
			} else {
		    		newGame.updateBoard('john',4);
			}
		   newGame.checkWhoWon();
		   
		  if(newGame.getPlays()<9){ // if game not ended
			   
			   	newGame.aiMove();
			     //chk again if game ended
			   	newGame.checkWhoWon();
		   }
	    
	    
	   }
	   
    });
	
	$('#5').on('click', function () {
	   
	   
	   // check if cell is empty
	   if(newGame.checkEmpty(5)){  
		  	$(this).append(newGame.getUserIcon());
		   	newGame.incPlays();
	   		if(newGame.getUserIcon()==jack){
				newGame.updateBoard('jack',5);
			} else {
		    		newGame.updateBoard('john',5);
			}
		   newGame.checkWhoWon();
		   
		  if(newGame.getPlays()<9){ // if game not ended
			   
			   	newGame.aiMove();
			     //chk again if game ended
			   	newGame.checkWhoWon();
		   }
	    
	    
	   }
	   
    });
	
	$('#6').on('click', function () {
	   
	   
	   // check if cell is empty
	   if(newGame.checkEmpty(6)){  
		  	$(this).append(newGame.getUserIcon());
		   	newGame.incPlays();
	   		if(newGame.getUserIcon()==jack){
				newGame.updateBoard('jack',6);
			} else {
		    		newGame.updateBoard('john',6);
			}
		   newGame.checkWhoWon();
		   
		 if(newGame.getPlays()<9){ // if game not ended
			   
			   	newGame.aiMove();
			     //chk again if game ended
			   	newGame.checkWhoWon();
		   }
	    
	    
	   }
	   
    });
	
	$('#7').on('click', function () {
	   
	   
	   // check if cell is empty
	   if(newGame.checkEmpty(7)){  
		  	$(this).append(newGame.getUserIcon());
		   	newGame.incPlays();
	   		if(newGame.getUserIcon()==jack){
				newGame.updateBoard('jack',7);
			} else {
		    		newGame.updateBoard('john',7);
			}
		   newGame.checkWhoWon();
		   
		  if(newGame.getPlays()<9){ // if game not ended
			   
			   	newGame.aiMove();
			     //chk again if game ended
			   	newGame.checkWhoWon();
		   }
	    
	    //console.log(newGame.checkWhoWon());
	    //console.log(newGame.getBoard());
	   }
	   
    });
	
	$('#8').on('click', function () {
	   
	   
	   // check if cell is empty
	   if(newGame.checkEmpty(8)){  
		  	$(this).append(newGame.getUserIcon());
		   	newGame.incPlays();
	   		if(newGame.getUserIcon()==jack){
				newGame.updateBoard('jack',8);
			} else {
		    		newGame.updateBoard('john',8);
			}
		   newGame.checkWhoWon();
		   
		 if(newGame.getPlays()<9){ // if game not ended
			   
			   	newGame.aiMove();
			     //chk again if game ended
			   	newGame.checkWhoWon();
		   }
	    
	    
	   }
	   
    });
    
     
    
});