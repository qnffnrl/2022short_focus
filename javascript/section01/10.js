function solution(str, s){

    count = 0;
    for(i = 0; i < str.length; i++){
        if(str[i] == 'R'){
            count += 1;
        }
    }
    return count;

}

console.log(solution('COMPUTERPROGRAMMING', 'R'));