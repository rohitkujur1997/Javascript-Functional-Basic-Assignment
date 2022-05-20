function square(x){return x*x;}
function map(arr,square){
    let outp=[];
    for(i=0;i<arr.length;i++){
        outp.push(square(arr[i]));
    }
    console.log(outp)
}

const arr=[1,2,3,4,5];
map(arr,square);//-->[1,4,9,16,25]

function map1(arr,Math){
    let outp=[];
    for(i=0;i<arr.length;i++){
        outp.push(Math.sqrt(arr[i]));
    }
    console.log(outp)
}
map1([1,4,9,16,25],Math);//-->[1,2,3,4,5]