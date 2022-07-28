function solution(arr){

    let arrSum = 0;

    for(let i = 0; i < arr.length; i++){
        arrSum += arr[i];
    }
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arrSum - (arr[i]+arr[j]) === 100){
                arr.splice(j, 1);
                arr.splice(i, 1);
            }
        }
    }
    console.log(arr);
    
}

solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);