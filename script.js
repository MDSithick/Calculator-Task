let output = document.getElementById('result')
function display(num){
 output.value += num;
}
window.addEventListener("keypress",(e)=>{
  parent = document.querySelector(".screen")
  operator = ['+','-','*','/','%']
  key = e.key
  code = e.code
  if(code.includes("Digit") || operator.includes(key)){
   
    parent.value += key
  }else{
   console.log("Only numbers are allowed")
  }

});

function calculate(){
    try{
      output.value = eval(output.value);
    }
    catch(err){
        alert("Only numbers are allowed");

    }
}
function Clear(){
    output.value = "";
}
function del(){
    output.value = output.value.slice(0,-1);
}
