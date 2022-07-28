function solution(arr){

    for(i = 0; i < arr.length; i++){
        for(k = arr.length; k > i; k--){
            if(arr[i] == arr[k]){
                arr.splice(k, 1);
            }
        }
    }

    for(j = 0; j < arr.length; j++){
        console.log(arr[j]);
    }

}
solution(['good', 'time', 'good', 'time', 'student']);