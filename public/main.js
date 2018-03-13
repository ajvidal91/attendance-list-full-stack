document.getElementById("butt").onClick = showMe;


function showMe(){
  let students = document.querySelector(".students");
  let container = document.querySelector(".container");
  let block = "block";

if((students.style.display) === (block) && (container.style.display) === (block)){
  students.style.display  = "none"
  container.style.display = "none"
}else{
  students.style.display  = "block"
  container.style.display = "block"
}
}
