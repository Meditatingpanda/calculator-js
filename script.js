var one=document.getElementById("num-1");
var two=document.getElementById("num-2");
var three=document.getElementById("num-3");
var four=document.getElementById("num-4");
var five=document.getElementById("num-5");
var  sixth=document.getElementById("num-6");
var seventh=document.getElementById("num-7");
var eight=document.getElementById("num-8");
var nine=document.getElementById("num-9");
var zero=document.getElementById("zero");
var display=document.getElementById("show");
var divide=document.getElementById("divide");
var multiply=document.getElementById("multiply");
var minus=document.getElementById("subtract");
var add=document.getElementById("plus");
var equalTo=document.getElementById("equal");
var allClear=document.getElementById("all-clear");
var clear=document.getElementById("clear");
var sign=document.getElementById("sign");
var input="";
var op=null;
var temp;
one.addEventListener("click",function(){
    input+="1";
    display.innerHTML=input;
});
two.addEventListener("click",function(){
    input+="2";
    display.innerHTML=input;
});
three.addEventListener("click",function(){
    input+="3";
    display.innerHTML=input;
});
four.addEventListener("click",function(){
    input+="4";
    display.innerHTML=input;
});
five.addEventListener("click",function(){
    input+="5";
    display.innerHTML=input;
});
sixth.addEventListener("click",function(){
    input+="6";
    display.innerHTML=input;
});
seventh.addEventListener("click",function(){
    input+="7";
    display.innerHTML=input;
});
eight.addEventListener("click",function(){
    input+="8";
    display.innerHTML=input;
});
nine.addEventListener("click",function(){
    input+="9";
    display.innerHTML=input;
});
zero.addEventListener("click",function(){
    input+="0";
    display.innerHTML=input;
});
divide.addEventListener("click",function(){
     op="/";
     temp=input;
     input="";
     display.innerHTML=input;
})
add.addEventListener("click",function(){
    op="+";
    temp=input;
    input="";
    display.innerHTML=input;
})
multiply.addEventListener("click",function(){
    op="*";
    temp=input;
    input="";
    display.innerHTML=input;
})
minus.addEventListener("click",function(){
    op="-";
    temp=input;
    input="";
    display.innerHTML=input;
})
allClear.addEventListener("click",function(){
   input="";
   display.innerHTML=input;
})
// Clear.addEventListener("click",function(){
//     input=input.slice(0,input.length);
//     display.innerHTML=input;
//  })
sign.addEventListener("click",function(){
    input=-input;
    display.innerHTML=input;
 })

equalTo.addEventListener("click",function(){
    display.innerHTML=eval(temp+op+input);
    temp="";
    input="";
})
