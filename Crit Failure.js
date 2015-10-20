// a roll following this format is assumed: /r xdx "name of table rolling on"

on("chat:message", function(msg) {

	var tablename;

	if (msg.type == "rollresult") {

		var rollinfo = JSON.parse(msg.content);

		
		if (rollinfo.rolls[0].results[0].v <= 50){
		
		var isCrit = function() {								//determining table name and if roll is crit check
			if (rollinfo.rolls[1].text.indexOf("Critical Fail with Melee Weapon") !== -1) {
			
				tablename = "CritFail-Melee-with-Weapon";
				
				return true;
				
			}
		
			else if (rollinfo.rolls[1].text.indexOf("Critical Success or Failure") !== -1) {
			
				tablename = "CritFail-Unarmed-or-Natural-Weapons";
				
				return true;
				
			}
			
			else {
			
				return false;
				
			}
																		//other tables can go here 
		};
		
		if (isCrit === true) {			
			sendChat(msg.who, "[[1t[" + tablename + "]]]");		
      
      // gets sent to chat (reformat to suit)
      
		}
		}
		
		
		
		}
	

    
	
	});
	
