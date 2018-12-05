
function one() {
    var obj = document.getElementById('box-8');
    obj.style.display = "inline"; 
    var objname =  document.getElementById('one');
    objname.style.display = "inline"; 
 
}   
function sortinline() {
    let oil = document.getElementById('oil');
    oil.style.display = "inline";

}   
function sortflex() {
    let oil = document.getElementById('oil');
    oil.style.display = "flex";

}   

function sae() {
    let y = document.getElementById('sae2');
    if(sae2.style.display == "none")
        sae2.style.display = "block"; 
    else 
        sae2.style.display = "none";
}   
 function acea() {
    let y = document.getElementById('acea2');
    if(acea2.style.display == "none")
        acea2.style.display = "block"; 
    else 
        acea2.style.display = "none";
}   
function api() {
    let y = document.getElementById('api2');
    if(api2.style.display == "none")
        api2.style.display = "block"; 
    else 
        api2.style.display = "none";
}   

function S1(){
    var x=document.getElementById('vetind').value
    if (x <= 18) {
    x=document.getElementById('vetind').value = +document.getElementById('vetind').value + 1;
   
}
    el=document.getElementById('amount') = +document.getElementById('amount') + 1;
    
    
}

function S2(){
    var x=document.getElementById('vetind').value
    if (x > 0) {
    x=document.getElementById('vetind').value = +document.getElementById('vetind').value - 1;
}
    var el=document.getElementById('amount').value
    if (el > 0 & x>=0) {
        el=document.getElementById('amount').value = +document.getElementById('amount').value - 1;
    }
    
}

function S3(){
    var a=document.getElementById('vetind2').value
    if (a <= 20) {
    a=document.getElementById('vetind2').value = +document.getElementById('vetind2').value + 1;
    }
    
    el=document.getElementById('amount').value = +document.getElementById('amount').value + 1;
}

function S4(){
    let a=document.getElementById('vetind2').value
    if (a > 0) {
    a=document.getElementById('vetind2').value = +document.getElementById('vetind2').value - 1;
}
    var el=document.getElementById('amount').value
    if (el > 0 & a>=0) {
    el=document.getElementById('amount').value = +document.getElementById('amount').value - 1;
}
}     
function S6(){
    var b=document.getElementById('vetind3').value
    if (b <= 9) {
    b=document.getElementById('vetind3').value = +document.getElementById('vetind3').value + 1;
    }
    
    el=document.getElementById('amount').value = +document.getElementById('amount').value + 1;
}
function S5(){
    var b=document.getElementById('vetind3').value
    if (b > 0) {
    b=document.getElementById('vetind3').value = +document.getElementById('vetind3').value - 1;
}
    var el=document.getElementById('amount').value
    if (el > 0 & b>=0) {
    el=document.getElementById('amount').value = +document.getElementById('amount').value - 1;
}

}
var s=document.getElementById('sum').value=+document.getElementById('amount').value*423;

function checked() {
    var check=document.getElementsByTagName('input');
    for(var i=0;i<check.length;i++)
    {
     if(check[i].type=='checkbox')
     {
      check[i].checked=true;
     }
    }

} 
