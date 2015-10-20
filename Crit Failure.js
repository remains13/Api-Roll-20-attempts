// a roll following this format is assumed: /r xdx "name of table rolling on"

on("chat:message", function(msg) {



    if (msg.type == "rollresult") {
        
        var rollinfo = JSON.parse(msg.content); 
        var i = msg.origRoll;
		log(rollinfo);
        log(i);
        
        if (i.indexOf("Critical Fail") !== -1 && rollinfo.rolls[0].results[0].v <= 50) {
            	        	
           var tableName;       	    			        					          	//determining table name and if roll is crit check
             
			if (rollinfo.rolls[1].text == " Critical Fail with Melee Weapon") { 
               
				tableName = "CritFail-Melee-with-Weapon";
				
               sendChat(msg.who, "&{template:5eDefault} {{character_name=@{" + msg.who + "|character_name}}} @{" + msg.who + "|show_character_name} {{title=Critical Success or Failure}} {{subheader=" + msg.who + "}} {{rollname=Effect}} {{roll=[[1t[" + tableName + "]]]}}");    
  
                
                
			}

			else if (rollinfo.rolls[1].text == "Critical Fail with Unarmed Strike or Natural Weapons") {
                
				tableName = "CritFail-Unarmed-or-Natural-Weapons";
				
                sendChat(msg.who, "&{template:5eDefault} {{character_name=@{" + msg.who + "|character_name}}} @{" + msg.who + "|show_character_name} {{title=Critical Success or Failure}} {{subheader=" + msg.who + "}} {{rollname=Effect}} {{roll=[[1t[" + tableName + "]]]}}");    

            
			}
			
																		//other tables can go here 
		
		}
		

		
		}


	});
