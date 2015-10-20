// a roll following this format is assumed: /r xdx "name of table rolling on"
// update: will also now read a table with 1 grouping of dice ie 1d4 or 2d100 NOT [[1d100]] [[1d100]] 


on("chat:message", function(msg) {
    
    var tableName;
    log(msg);
    log(msg.content);
    log(msg.type);
   
    if (msg.type == "general") {
        

    
       
                   		        					          	//determining table name and if roll is crit check

																
																
		if (msg.content.indexOf("Critical Fail") !== -1 && msg.inlinerolls[0].results.rolls[0].results[0].v <= 40) {

			if (msg.content.indexOf("Critical Fail with Melee Weapon") !== -1) {
			
               
				    tableName = "CritFail-Melee-with-Weapon";
				
                    sendChat(msg.who, "&{template:5eDefault} {{title=Critical Fail}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");	
                
                
			}

			else if (msg.content.indexOf("Critical Fail with Unarmed Strike or Natural Weapons") !== -1) {
                
				tableName = "CritFail-Unarmed-or-Natural-Weapons";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Fail}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Fail with Ranged Attack") !== -1) {
                
				tableName = "CritFail-Ranged-Attack";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Fail}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Fail with a Spell") !== -1) {
                
				tableName = "CritFail-with-Spell";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Fail}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			
			
			
																						//other tables could go here
		}
		
		//
		//
		//												Critical Success
		//
		//
		
		
		if (msg.content.indexOf("Critical Success") !== -1 && msg.inlinerolls[0].results.rolls[0].results[0].v <= 75) {	
			
			if (msg.content.indexOf("Critical Success with Slashing") !== -1) {
                
				tableName = "CritSuccess-Slashing";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Success!}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Success with Piercing") !== -1) {
                
				tableName = "CritSuccess-Piercing";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Success!}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Success with Fire") !== -1) { 	//note set before implemented in macro
                
				tableName = "CritSuccess-Fire";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Success!}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Success with Cold") !== -1) {
                
				tableName = "CritSuccess-Cold";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Success!}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Success with Lightning") !== -1) {
                
				tableName = "CritSuccess-Lightning";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Success!}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Success with Force") !== -1) {
                
				tableName = "CritSuccess-Force";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Success!}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Success with Necrotic") !== -1) {
                
				tableName = "CritSuccess-Necrotic";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Success!}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Success with Radiant") !== -1) {
                
				tableName = "CritSuccess-Radiant";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Success!}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Success with Acid") !== -1) {
                
				tableName = "CritSuccess-Acid";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Success!}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Success with Psychic") !== -1) {
                
				tableName = "CritSuccess-Psychic";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Success!}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			else if (msg.content.indexOf("Critical Success with Thunder") !== -1) {
                
				tableName = "CritSuccess-Thunder";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Success!}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
						
		
																		//other tables could go here 
		
		}
		

	}	
		
       

    

     //Basic Rollresult stuff for a simple /r 1d100 <text>
/*
    if (msg.type == "rollresult") {
        
        var rollinfo = JSON.parse(msg.content); 
        var i = msg.origRoll;
        
		log(rollinfo);
        
        if (i.indexOf("Critical Fail") !== -1 && rollinfo.rolls[0].results[0].v <= 50) {
            	        	
       	    			        					          	//determining table name and if roll is crit check
             
			if (rollinfo.rolls[1].text == " Critical Fail with Melee Weapon") { 
               
				tableName = "CritFail-Melee-with-Weapon";
				
                sendChat(msg.who, "&{template:5eDefault} {{title=Critical Fail with Melee Weapon}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");	
                
                
			}

			else if (rollinfo.rolls[1].text == "Critical Fail with Unarmed Strike or Natural Weapons") {
                
				tableName = "CritFail-Unarmed-or-Natural-Weapons";
				
                sendChat(msg.who,"&{template:5eDefault} {{title=Critical Fail with Unarmed Strike or Natural Weapons}} {{subheader=" + msg.who + "}} {{result=[[1t[" + tableName + "]]]}}");    
				
			}
			
																		//other tables can go here 
		
		}
		

		
	}
*/

});
