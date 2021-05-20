var studentname=[];
function submit(){
    var name1=document.getElementById("box1").value;
    var name2=document.getElementById("box2").value;
    var name3=document.getElementById("box3").value;
    var name4=document.getElementById("box4").value;
    studentname.push(name1);
    studentname.push(name2);
    studentname.push(name3);
    studentname.push(name4);
    document.getElementById("displayoutput").innerHTML=studentname;
}