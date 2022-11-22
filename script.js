let requis = document.querySelectorAll("input");
console.log(requis);

for(let i = 0; i < requis.length; i++){
    requis[i].style.color = "blue";
    requis[i].required;
    requis[i].setAttribute("required", "true");

}

let button = document.getElementById("switch");


function permute() {
    let text = document.getElementById("input1").value;
    document.getElementById("input1").value = document.getElementById("input2").value;
    document.getElementById("input2").value = text;
  /*  console.log("input1");
    console.log("input2");*/
}

button.addEventListener("click", function (){
    permute();
})