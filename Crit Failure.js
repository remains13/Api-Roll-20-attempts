// a roll following this format is assumed: /r xdx "name of table rolling on"
// update: will also now read a table with 1 grouping of dice ie 1d4 or 2d100 NOT [[1d100]] [[1d100]] 

on("chat:message", function(msg) {
    
    var tableName;
    log(msg);
    log(msg.content);
    log(msg.type);
   
    if (msg.type == "general") {
        
        log("message is general");
        
        var x = msg.inlinerolls;
        log(x);
        


        
        if (msg.content.indexOf("Critical Success or Failure") !== -1 && msg.inlinerolls[0].results.rolls[0].results[0].v <= 50) {
        	log("got past the if");
       	    			        					          	//determining table name and if roll is crit check

			    if (msg.content.indexOf("Critical Fail with Melee Weapon") !== -1) { 
               
				    tableName = "CritFail-Melee-with-Weapon";
				
                    sendChat(msg.who, "&{template:5eDefault} {{title=Critical Fail with Melee Weapon}} {{subheader=" + msg.who + "}}} {{result=[[1t[" + tableName + "]]]}}");	
                
                
			}

			    else if (msg.content.indexOf("Critical Fail with Unarmed Strike or Natural Weapons") !== -1) {
                
				    tableName = "CritFail-Unarmed-or-Natural-Weapons";
				
                    sendChat(msg.who,"&{template:5eDefault} {{title=Critical Fail with Unarmed Strike or Natural Weapons}} {{subheader=" + msg.who + "}}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
                    log("line 41");			
																		//other tables can go here 
		
		}
		

		
		
       

    }

     

    if (msg.type == "rollresult") {
        
        var rollinfo = JSON.parse(msg.content); 
        var i = msg.origRoll;
        
		log(rollinfo);
        
        if (i.indexOf("Critical Fail") !== -1 && rollinfo.rolls[0].results[0].v <= 50) {
            	        	
       	    			        					          	//determining table name and if roll is crit check
             
			if (rollinfo.rolls[1].text == " Critical Fail with Melee Weapon") { 
               
				tableName = "CritFail-Melee-with-Weapon";
				
                sendChat(msg.who, "&{template:5eDefault} {{title=Critical Fail with Melee Weapon}} {{subheader=" + msg.who + "}}} {{result=[[1t[" + tableName + "]]]}}");	
                
                
			}

			else if (rollinfo.rolls[1].text == "Critical Fail with Unarmed Strike or Natural Weapons") {
                
				tableName = "CritFail-Unarmed-or-Natural-Weapons";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Fail with Unarmed Strike or Natural Weapons}} {{subheader=" + msg.who + "}}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			
																		//other tables can go here 
		
		}
		

		
		}


	});
