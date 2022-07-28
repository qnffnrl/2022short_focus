function solution(str){

    let answer = "";
    for(i = 0; i < str.length; i++){

        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            answer += String.fromCharCode(str.charCodeAt(i)+32);
        }else{
            answer += String.fromCharCode(str.charCodeAt(i)-32);
        }

    }
    return answer;

}

console.log(solution('StuDY'));