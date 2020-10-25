let taskID="0";
let taskDesc="1";
let theDate="2";

document.getElementById("taskID").innerHTML = taskID;
document.getElementById("taskDesc").innerHTML = taskDesc;
document.getElementById("theDate").innerHTML = theDate;

function submit(){
    console.log(taskID);
    console.log(taskDesc);
    console.log(theDate);
}