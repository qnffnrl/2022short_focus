function solution(arr){

    let sum = 0;
    let halsu = [];

    
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
           sum += arr[i];
           halsu.push(arr[i]);
        }
    }

    let min = halsu[0];
    for(k = 0; k < halsu.length; k++){

        if(min > halsu[k]){
            min = halsu[k];
        }

    }
    
    console.log(sum + '\n');
    console.log(min);

}

solution([12, 77, 38, 41, 53, 92, 85]);