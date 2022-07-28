function solution(str){

    count = 0;
    for(i = 0; i < str.length; i++){

        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            count += 1;
        }

    }
    return count;

}

console.log(solution('KoreaTimeGood'));