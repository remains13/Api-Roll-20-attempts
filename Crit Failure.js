on("chat:message", function(msg){
	
	var rollinfo = JSON.parse(msg.content);
	var tablename;
														//what table are we rolling?
	
	if(msg.type == "general" && msg.content.indexOf("Critical Fail with Melee Weapon") === 0){
		tablename = "CritFail-Melee-with-Weapon";
	
	}

	else if(msg.type == "general" && msg.content.indexOf("Critical Success or Failure") === 0){
		tablename = "CritFail-Unarmed-or-Natural-Weapons";
	
	}
														// other tables will go here
	
	
	
	if(msg.type == "rollresult" && rollinfo.total <= 50){

	sendChat(msg.who, "[[1t[" + tablename + "]]]");		// gets sent to chat (reformat to suit)
	
	}							
	
	
	});
