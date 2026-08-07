function checkGrade(){

let marks = Number(document.getElementById("marks").value);

let grade="";
let status="";

if(marks>=90 && marks<=100){

grade="A+";
status="Pass";

}

else if(marks>=80){

grade="A";
status="Pass";

}

else if(marks>=70){

grade="B";
status="Pass";

}

else if(marks>=60){

grade="C";
status="Pass";

}

else if(marks>=50){

grade="D";
status="Pass";

}

else if(marks>=0){

grade="Fail";
status="Fail";

}

else{

document.getElementById("output").innerHTML="Invalid Marks";
return;

}

document.getElementById("output").innerHTML=
"Marks : "+marks+
"<br>Grade : "+grade+
"<br>Status : "+status;

}