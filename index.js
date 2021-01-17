const chalk=require('chalk');

var readlineSync=require('readline-sync');
var score=0;

var player1={
  name:"Raj",
  score:10,
}
var player2={
  name:"Riya",
  score:9,
}

function quiz(que,ans){
  var userAns=readlineSync.question(chalk.blueBright(que));
  if(userAns.toLowerCase()===ans){
    console.log(chalk.green("You're right! "))
    score+=2;
  }
  else{
    console.log(chalk.red("Oops! Incorrect.Taking a point back from you. "));
    score-=1;
  }
}

quiz("what is my name?\n A. Vrushabh\n B. Alex\n C. Sean\n D. Alpesh\n","a");
console.log(chalk.magentaBright("**************************************"))

quiz("who is my favourite hero?\n A. Dwayne Johnson\n B. LeoD\n C. Johnny Depp\n D. Tom Cruise\n","b");
console.log(chalk.magentaBright("**************************************"))

quiz("what is my favourite shoe brand?\n A. Nike\n B. Puma\n C. Sketchers\n D. Asics\n","a");
console.log(chalk.magentaBright("**************************************"))

quiz("where do i live\n A. Nagpur?\n B. Pune\n C. Wardha\n D. Aurangabad\n","c");
console.log(chalk.magentaBright("**************************************"))

quiz("what do i like cars/bikes?\n A. Cars\n B. Bikes\n","b");
console.log(chalk.magentaBright("**************************************"))

console.log(chalk.cyan("Generating your score......"))

console.log(chalk.cyan("You're score is: "+score));
console.log(chalk.magentaBright("**************************************"))


var superheroes=[player1,player2];
for(i=0;i<superheroes.length;i++){
  var currentPlayer=superheroes[i];
  // console.log(currentPlayer.name +": "+currentPlayer.score);
  if(currentPlayer.score<=score){
    console.log("you're the top scorer")
    break;
  }
  else {
    console.log("You're closer to top scorer! ");
    break;
  }
}


