function isEven(num){return (num%2==0);}

function find(arr,isEven){
    for(i=0;i<arr.length;i++){
        if(isEven(arr[i])){
            console.log(arr[i]);
            break;
        }
    }
}

const arr=[1,3,5,4,2];
console.log(isEven(3));//-->false
console.log(isEven(4));//-->true
find(arr,isEven);//-->4