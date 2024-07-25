function mainMenu(){
    while(true){
        const choose=prompt("Выберите режим игры:\n1. Угадай число\n2. Компьютер угадывает число\nВведите 1 или 2:");
        if(choose==1){
            game();
        }else if(choose==2){
            gameComputer();
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
    }else{
        return "угадал"
    }
}
function game(){
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
}
mainMenu();    