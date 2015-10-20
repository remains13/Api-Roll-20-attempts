on("chat:message", function(msg) {
	
	var rollinfo = JSON.parse(msg.content);
	var tablename;
														//what table are we rolling?
	
	if (msg.content.indexOf("Critical Fail with Melee Weapon") !== -1) {
		tablename = "CritFail-Melee-with-Weapon";
	
	}

	else if (msg.content.indexOf("Critical Success or Failure") !== -1) {
		tablename = "CritFail-Unarmed-or-Natural-Weapons";
	
	}
														// other tables will go here
	
	
	
	if (msg.type == "rollresult" && rollinfo.content.total <= 50) {

	sendChat(msg.who, "[[1t[" + tablename + "]]]");		// gets sent to chat (reformat to suit)
	
	}							
	
	
	});
