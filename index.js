function mainMenu(){
    while(true){
        const choose=prompt("Выберите режим игры:\n1. Компьютер угадывает число\n2. Пользователь угадывает число\n3. Игра по очереди\n Введите 1, 2 или 3:");
        if(choose==1){
            chooseDifficultyLevel();
        }else if(choose==2){
            gameUser()
        }else if(choose==3){
            round();
        }else{
            alert("Некорректный выбор. Пожалуйста, введите 1 или 2.");
            continue 
        }
        const playAgain=prompt("Хотите сыграть еще? (да/нет)");
        if(playAgain.toLowerCase()!="да"){
            break;
        }
    }
}
function chooseDifficultyLevel(){
    const difficulty=parseInt(prompt("Выберите уровень сложности:\n1. Легкий\n2. Сложный\nВведите 1 или 2:"), 10);
    if(difficulty===1){
        gameComputer("easy");
    } else if(difficulty===2){
        gameComputer("hard");
    } else {
        alert("Некорректный выбор. Пожалуйста, введите 1 или 2.");
        chooseDifficultyLevel(); 
    }
}
function goldenSectionGuess(low, high, target) {
    const goldenRatio = 0.618;
    let steps = 0;
    while (low <= high) {
        steps++;
        let x1 = Math.floor(low + goldenRatio * (high - low));
        let x2 = Math.floor(high - goldenRatio * (high - low));
        if (x1 === target || x2 === target) {
            return steps;
        } else if (target > x1) {
            low = x1;
        } else if (target < x2) {
            high = x2;
        } else {
            low = x2;
            high = x1;
        }
    }
    return steps;
}
function gameComputer(){
    alert("Загадайте число от 1 до 100");
    let min=1;
    let max=100;
    let count=0;
    let flag=false;
    while(!flag){
        const guess=Math.floor((min+max)/2);
        count++;
        const userFeedback=prompt(`Это ${guess}? (больше/меньше/угадал)`);
        if (userFeedback.toLowerCase()==="угадал") {
            flag=true;
            alert("Компьютер угадал!");
        } else if(userFeedback.toLowerCase()==="больше") {
            min=guess+1;
        } else if(userFeedback.toLowerCase()==="меньше") {
            max=guess-1;
        } else {
            alert("Некорректный ввод. Пожалуйста, введите 'больше', 'меньше' или 'угадал'.");
            count--;
        }
    }
    return count;
} 
function getUserInput(){
        let input;
        while(true){
            input=prompt("Введите число от 1 до 100");
            if(input!==null){
                input=parseInt(input,10);
                return input;
            }
            alert("Введите число от 1 до 100.")
        }
    }
function checkNum(userGuess,numberToGuess){
    if(userGuess>numberToGuess){
        return "меньше"
    }else if(userGuess<numberToGuess){
        return "больше"
    }else if(userGuess===numberToGuess){
        return "угадал"
    }
}
function gameUser(difficulty){
    const numberToGuess=Math.floor(Math.random()*100)+1;
    let count=0;
    let flag=true;
    while(flag){
        const userGuessNumber=getUserInput();
        count++;
        let result=checkNum(userGuessNumber,numberToGuess);
        alert(result);
        if(result==="угадал"){
            flag=false;
        }
    }
    alert(`Количество шагов ${count}`);
    return count;
}
function round(){
    let rounds=prompt("Количетсво раундов от 1 до 10: ");
    rounds=isNaN(rounds)?3:Math.max(3,Math.min(rounds,10));
    let userWins=0;
    let computerWins=0;
    for(let round=1;round<=rounds;round++){
        alert(`Количетсво раундов ${rounds}`);
        alert("Этап 1: Вы загадываете число, а компьютер попытается его угадать.");
        const computerSteps=gameComputer();
        alert("этап 2: Компьютер загадывает число, а вы попытаетесь его угадать.");
        const userSteps=gameUser();
        if(computerSteps>userSteps){
            userWins++;
        }else if(computerSteps<userSteps){
            computerWins++;
        }else if(computerSteps===userSteps){
            alert(`Раунд ${round} закончился вничью`);
        }
    }
    if(userWins>computerWins){
        alert(`Вы выиграли ${userWins}, компьютер выиграл ${computerWins}. Поздравлюям, вы победили!`)
    }else if(userWins<computerWins){
        alert(`Вы выиграли ${userWins}, компьютер выиграл ${computerWins}. Компьютер победил`)
    }
}
mainMenu();    