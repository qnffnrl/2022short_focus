function solution(arr){

    let eachCount = [];
    for(i = 0; i < arr.length; i++){
        let count = 0;
        for(k = 0; k < arr[i].length; k++){
            count += 1;
        }
        eachCount.push(count);
    }
    
    max = eachCount[0];
    for(j = 0; j < eachCount.length; j++){

        if(max < eachCount[j]){
            max = eachCount[j];
        }

    }

    let index = eachCount.indexOf(max);
    return arr[index];

}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));