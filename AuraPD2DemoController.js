({
    "echo" : function(cmp) {
        // create a one-time use instance of the serverEcho action in the server-side controller 
        var action = cmp.get("c.serverEcho");
        action.setParams({firstName:cmp.get("v.firstName")});
        // create a callback that is executed after the serve-side action return 
        action.setCallback(this,function(response){
                           var state = response.getState();
        if(state === "SUCCESS"){
            alert("From Server:"+ response.getReturnValue());
       }
    });
       //  A client-side action could cause multiple events,
       //  which could trigger other events and other server-side action calls. 
       //  $A.enqueueAction adds the server-side action to the queue
       $A.enqueueAction(action);
        
        
	}
 })
