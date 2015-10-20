					//run this then use macro, copy log :D
on("chat:message", function(msg) {
	
	var rollinfo = JSON.parse(msg.content);


												//gonna do stuff here
						
	if (msg.type == "rollresult") {
	log(rollinfo);
	}

	

	});
