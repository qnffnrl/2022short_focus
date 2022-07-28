function solution(num){

    if(num % 12 == 0){
        return num / 12;
    }
    else{
        return Math.floor((num / 12) + 1);
    }

}

console.log(solution(25));
console.log(solution(178));

