document.addEventListener("click",change);

var form1=document.getElementById("form1");
var bd=document.getElementById("bd");
var form2=document.getElementById("form2")
function change(){
    form1.style.display="none";
   form2.style.display="block";
   form2.style.transition="transformTranslateX(500px) 1s ease";
}


function change2(){
       form1.style.display="block";
        form2.style.display="none";

}