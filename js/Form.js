class Form{
    constructor(){
        this.title=createElement("h2")
        this.button=createButton("click")
        this.input=createInput("name")
        this.greeting=createElement("h3")
    }
    display(){
       
        this.title.position(100,100)
        
        this.title.html("multiPlayer CarRacing Game")
        
        this.input.position(100,200)
        
        this.button.position(100,300)
        
        this.button.mousePressed( ()=>{
            this.input.hide();
            this.button.hide();
             player.name=this.input.value()
            playerCount=playerCount+1;
player.index=playerCount;
            player.update();
            player.updateCount(playerCount)
            this.greeting.html("hello"+player.name)
            this.greeting.position(100,200);
        })

    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }

}