function solution(date, carNums){

    let count = 0;
    carNums.forEach(el => {
        if(el%10 == date ) count += 1;
    });
    return count;

}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));