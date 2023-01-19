document.querySelector("form").addEventListener("submit",store);
var arr=JSON.parse(localStorage.getItem("user_details")) || [];
function store(){
    var na=document.getElementById("name").value;
    var num=document.getElementById("number").value;
    var email=document.getElementById("mail").value;
    var pas=document.getElementById("pass").value;

    if(na==="" || num==="" || email==="" || pas===""){
        alert("fill all details");
    }else{
        var obj={
            name:na,
            number:num,
            mail:email,
            password:pas
        }
        arr.push(obj);
        localStorage.setItem("user_details",JSON.stringify(arr));
    }
   
   
   
}