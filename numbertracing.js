var a=Math.ceil(Math.random()*100);
console.log(a);
var c=0;
tro=()=>
{
   
    var b=parseInt(document.getElementById("n1").value);
    if(a==b&&c==0)
    document.getElementById("result").textContent="wow you guessed the correct answer at your first attempt";
    else if(a==b&&c!=0)
    document.getElementById("result").textContent="wow you guessed the correct answer at "+c+" times";
    else if(a>b){
    document.getElementById("result").textContent="try with greater number";c++;}
    else{
    document.getElementById("result").textContent="try with smaller number";c++}
}