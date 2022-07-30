function solution(arr){

    let eachCount = [];
    for(let i of arr){
        let count = 0;
        for(let k of i){
            count += 1;
        }
        eachCount.push(count);
    }

    max = eachCount[0];
    for(let j of eachCount){
        if(max < j) max = j;
    }

    let index = eachCount.indexOf(max);
    return arr[index];

}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));