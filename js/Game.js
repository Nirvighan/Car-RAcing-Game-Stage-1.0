class Game 
{

constructor()
{


}
//read the gamestate from the database
getState()
{
  var gameStateRef = database.ref('gameState');
  gameStateRef.on("value" , function(data){
      gameState = data.val();
  });
}
//update the gamestate in the database
update(state)
{
database.ref('/').update({
    gameState:state
})
}
//start the game when four player inters
start()
{
if(gameState === 0)
{
player = new Player();
player.getCount();
 form = new Form();
 form.display();


}


}

};