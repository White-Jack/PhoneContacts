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
  mob = document.createElement("div");
  mob.className="mob";
  elem.appendChild(img);
  elem.appendChild(Pname);
  elem.appendChild(mob);
  window.main[0].appendChild(elem);
}

