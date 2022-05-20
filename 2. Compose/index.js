var f1=function(square,double,x){console.log(square(double(x)))};
var f2=function(double,square,x){console.log(double(square(x)))};

function square(x){
    return x*x;
}
function double(x){
    return x*2;
}
f1(square,double,5);
f1(square,double,10);
f2(double,square,5);
f2(double,square,10);
