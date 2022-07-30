function solution(str, s){

    count = 0;
    for(let c of str){
        count += (c == s) ? 1 : 0;
    }
    return count;

}

console.log(solution('COMPUTERPROGRAMMING', 'R'));