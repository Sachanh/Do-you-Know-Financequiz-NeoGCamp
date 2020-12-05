const chalk = require('chalk');
console.log(chalk.green("Test your financial Knowledge?"));
console.log(chalk.redBright("There are total 10 question"));
var readlineSync = require('readline-sync');
var score=0;
var i;
var j;
var highScore = ["Butcher Aditya:10", "Aditya:10"];
var userName = readlineSync.question(chalk.bgGray('May I have your name? '));
console.log(chalk.bgGreen(chalk.black('Hi ' + userName + '!')));
console.log(chalk.green("Lets Begin with the Quiz"));
console.log(chalk.black("-------------------------"));
function quiz(question,option,answer){
  console.log(chalk.green(question));
  console.log(chalk.yellow(option));
  const userAnswerLower= readlineSync.question("your answer: ");
  const userAnswer = userAnswerLower.toUpperCase();
  if(userAnswer===answer){
    console.log(chalk.green("Yay! Right answer! "));
    score=score+1
  }
  else{
    console.log(chalk.red("Sorry ! Wrong answer! "));
    score=score-1
  }
}
var question = [
  {ques: "What is full form SIP ?", options: "A:Systematic investment plan \nB:System investment plan \nc:Super investment plan", answer:"A"},
  
   {ques:"What is full form CAGR ?",options:"A:Compounded annual Growth rate \nB:Compounded annual growth rise \nC:Compounded annual Group rate",answer:"A"},
   
   {ques:"Ideally, how many months of living expenses should you keep in an emergency fund??",options:"A:1 month \nB:1-3 month \nC:3-6 month",answer:"C"},
   
   {ques:"How much life insurance should you purchase if your annual income is $50,000???",options:"A:$250000 \nB:$500000 \nC:$600000",answer:"B"},
   
   {ques:"If you needed to borrow $100 and agreed to pay it all back the following month, which would be the lower amount to pay back: $105 or $100 plus 3% interest???",options:"A:$105 \nB:$100+3% \nC:$108",answer:"B"},
   
   {ques:" Imagine you have $50,000 to invest and you want a relatively low risk option. Which of the following options would generally present the lowest risk???",options:"A:Putting all of the money into one stock \nB:Putting all of the money into two stocks \nC:Putting all of the money into a fund that tracks the performance of a major stock market index, such as the S&P 500 or the Dow Jones?",answer:"C"},
   
   {ques:"In general, investments that are riskier tend to provide higher returns over time than investments with less risk. Is this statement true or false???",options:"A:True \nB:False ",answer:"A"},
   
   {ques:"Suppose you invest $1,000 in an account providing 5% return each year, so at the end of Year 1, you will earn $50. If you don’t add to that investment and you do not withdraw anything, approximately how much will you earn in interest at the end of Year 5???",options:"A:Less than $50  \nB:$50  \nC:More than $50",answer:"C"},
   
   {ques:"If you invest $10,000 today and earn 8% interest annually, assuming you do not withdraw from or add to the investment, how long will it take for the original investment amount to double in value???",options:"A:1-5 years  \nB:5-15 years  \nC:15-30 years ",answer:"B"},
   
   {ques:"Imagine that the interest rate on your savings account is 1% per year and the inflation rate is 2% per year. After one year, how much would you be able to buy with the money in this account???",options:"A:Less than today  \nB:Same as today  \nC:More than today ",answer:"A"}];

for(i=0;i<question.length;i++){
  console.log(chalk.cyan("Question no: " + (i+1)));
  quiz(question[i].ques, question[i].options, question[i].answer);
  console.log(chalk.green("Score : " +score));
  console.log(chalk.blue("---------------------"))
}
 console.log(chalk.green('Thanks for playing: ' + userName + '!'));
 console.log(chalk.blue("Your Total score: " +score));
 console.log(chalk.yellow("High Scores : "));
 for(j=0; j<highScore.length;j++){
   console.log(highScore[j]);
 }
console.log(chalk.green("If you scored high send me the screenshot of this. I will update your score! "));



