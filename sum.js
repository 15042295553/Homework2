function Sum(arg1, arg2) { 
var sarg1 = new String(arg1); 
var sarg2 = new String(arg2); 
if( (sarg1=="")||(sarg2=="") ) 
{
    var e0 = new Error(); 
e0.Serial = 1000001; 
if( sarg1=="" ) 
{
e0.message = "The first number is empty！"; 
}
else
{
e0.message = "The second number is empty！";
}
throw e0; 
}
for(i=0;i<sarg1.length;i++){
for( j=0;j<10;j++){ 
if(sarg1.charAt(i)==j) 
{
break; 
}
else
{
if(j==9) 
{
var e1 = new Error(); 
e1.Serial = 1000001; 
e1.message = "Sum：" + sarg1 + " error"; 
throw e1;
}
}
}
}
for( k=0;k<sarg2.length;k++ ) 
{
for(l=0;l<10;l++){ 
if(sarg2.charAt(k)==l) 
{
break;
}
else
{
if(l==9) 
{
var e2 = new Error(); 
e2.Serial = 1000001; 
e2.message = "Sum：" + sarg2 + " error！";
throw e2;
}
}
}
}
return Number(arg1) + Number(arg2); 
} 
function Button1_onclick(){ 
try{
var Text1 = document.getElementById("Text1");
var Text2 = document.getElementById("Text2");
var Text3 = document.getElementById("Text3");
var sum = Sum(Text1.value,Text2.value); 
 
Text3.value = sum; 
}
catch(e){ 
alert(e.message); 
if(e.Serail == 1000001) 
{
alert(e.message); 
e = null;
}
}
}