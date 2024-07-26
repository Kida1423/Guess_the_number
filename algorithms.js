function generateRandomNumbers(count,low,high){
    let randomNumbers=[];
    for(let i=0;i<count;i++){
        randomNumbers.push(Math.floor(Math.random()*(high-low+1))+low);
    }    
    return randomNumbers
}

function binarySearchGuess(low, high, target) {
    let steps = 0;
    while (low <= high) {
        steps++;
        let guess = Math.floor((low + high) / 2);
        if (guess === target) {
            return steps;
        } else if (guess < target) {
            low = guess + 1;
        } else {
            high = guess - 1;
        }
    }
    return steps;
}
function interpolationSearchGuess(low, high, target) {
    let steps = 0;
    while (low <= high && target >= low && target <= high) {
        steps++;
        if (low === high) {
            return steps;
        }
        let guess = low + Math.floor(((target - low) * (high - low)) / (high - low));
        if (guess === target) {
            return steps;
        } else if (guess < target) {
            low = guess + 1;
        } else {
            high = guess - 1;
        }
    }
    return steps;
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
function linearSearchGuess(low, high, target) {
    let steps = 0;
    for (let guess = low; guess <= high; guess++) {
        steps++;
        if (guess === target) {
            return steps;
        }
    }
    return steps;
}
function testAlgorithms(numbers,low,high){
    let results={
        binary: [],
        interpolation: [],
        golden: [],
        linear: []
    }
    for(let number of numbers){
        results.binary.push(binarySearchGuess(low,high,number));
        results.interpolation.push(interpolationSearchGuess(low,high,number));
        results.golden.push(goldenSectionGuess(low,high,number));
        results.linear.push(linearSearchGuess(low,high,number));
    }
    return results;
}
function calculateAvg(stepsArray) {
    let totalSteps=stepsArray.reduce((sum,steps)=>sum+steps,0);
    return totalSteps/stepsArray.length;
}
function main(){
    const low=1;
    const high=100;
    const numbers=generateRandomNumbers(100,low,high);
    const results=testAlgorithms(numbers,low,high);

    console.log('Алгоритм: бинарный поиск');
    results.binary.forEach((steps, index) => {
        console.log(`Угадал ${numbers[index]} за ${steps} шагов`);
    });
    console.log(`Среднее количество шагов: ${calculateAvg(results.binary)}`);

    console.log('\n Алгоритм: интерполяционный поиск');
    results.interpolation.forEach((steps, index) => {
        console.log(`Угадал ${numbers[index]} за ${steps} шагов`);
    });
    console.log(`Среднее количество шагов: ${calculateAvg(results.interpolation)}`);

    console.log('\n Алгоритм: метод золотого сечения');
    results.golden.forEach((steps, index) => {
        console.log(`Угадал ${numbers[index]} за ${steps} шагов`);
    });
    console.log(`Среднее количество шагов: ${calculateAvg(results.golden)}`);

    console.log('\n Алгоритм: линейный поиск');
    results.linear.forEach((steps, index) => {
        console.log(`Угадал ${numbers[index]} за ${steps} шагов`);
    });
    console.log(`Среднее количество шагов: ${calculateAvg(results.linear)}`);
}

main();