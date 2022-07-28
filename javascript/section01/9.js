function solution(banana){
    
    let answer = "";
    for(let s of banana){
        if(s == "A") answer += "#";
        else answer += s;
    }
    return answer;
}
console.log(solution("BANANA"));