var subcounter=0;

function SubmitHere()
{
    let newElement=document.querySelector("div");

       
    newElement.textContent="Submit "+ subcounter;
    subcounter++;

    let subElement=document.querySelector("#belowid");
    subElement.style.background="pink";
    subElement.style.color="blue";

    document.querySelector("#belowid").innerHTML.value;

    //clean value

    subElement=document.querySelector("#belowid").innerHTML.value="";



     






}