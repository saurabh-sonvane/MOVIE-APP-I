var details=JSON.parse(localStorage.getItem("user_details")) || [];

document.querySelector("form").addEventListener("submit",loginfun);

function loginfun(){
    var username=document.getElementById("mail").value;
    var pass=document.getElementById("pass").value;
    if(username==="" || pass===""){
        alert("invalid Credentials");
    }else{
        var flag=true;
        details.map(function(elem){
            if(elem.mail===username && elem.password===pass){
                alert("login successful!");
                window.open("../index.html");
                flag=false;
            }
        });
        if(flag===true){
            alert("invalid Credentials");
        }    
     
    }
}