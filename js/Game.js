class Game{
    constructor(){

    }
    getState(){
        var  gameStateref=database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState=data.val();
            
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
        
    }
   async start(){
        if(gameState===0){
            player=new Player()
            var playerCountref=await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val();
                player.getCount()
            }

            
            
            form= new Form()
            form.display();

        }
    }
    play(){
        form.hide();
        text("The game has started",120,200)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            var y=250
            for(var p in allPlayers){
                if(p==="player"+player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                text(allPlayers[p].name+":"+allPlayers[p].distance,120,y);
                y=y+20
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+50;
            player.update();
            
        }
    }
    
}