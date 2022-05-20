function composedValue(x){
    var doubleresult=double(x);
    var squareresult=square(doubleresult);
    console.log(squareresult);
}
function square(x){
    return x*x;
}
function double(x){
    return x*2;
}

composedValue(5);