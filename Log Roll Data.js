					//run this then use macro, copy log :D
on("chat:message", function(msg){
	
	var rollinfo = JSON.parse(msg.content);


												//gonna do stuff here
						
	
	log(rollinfo.content);
	

	});
