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
    game();