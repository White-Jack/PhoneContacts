var create = document.getElementsByClassName("button");
var main = document.getElementsByClassName("main");
create[0].addEventListener("click", init, false);
function init(){
  elem = document.createElement("div");
  elem.className="table";
  img = document.createElement("img");
  img.className="photo";
  img.alt="image";
  img.src="";
  Pname = document.createElement("div");
  Pname.className="Pname";
  Pname.innerHTML=document.getElementById("a1").value;
  mob = document.createElement("div");
  mob.className="mob";
  mob.innerHTML=document.getElementById("a2").value;
  elem.appendChild(img);
  elem.appendChild(Pname);
  elem.appendChild(mob);
  window.main[0].appendChild(elem);
}
name = document.getElementById("a1").value
serch =document.getElementById("serch");
serch.addEventListener("keyup", ser, false);
function ser(){
 
  var tab = document.getElementsByClassName("table");
  var names = document.getElementsByClassName("Pname");
  var serch = document.getElementById("serch");
  for(i=0;i<100;i++){
    tab[i].style.visibility='visible';
    tab[i].style.position='static';
  }
  for(i=0;i<100;i++){
    if(names[i].innerHTML==serch.value){                     tab[i].style.visibility='hidden';
tab[i].style.position='absolut';
}}}
