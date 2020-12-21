var input1=document.querySelector("#inputtext1");
var output1=document.querySelector("#output1");
var inpbutton=document.querySelector("#inputbtn");

function play(){
    var value=input1.value;
    console.log(value);
}

inpbutton.addEventListener("click",play());