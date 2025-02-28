
function cnt(){
    let count= document.getElementById("time");
for (let i=10;i>=0;i--){

    setTimeout(
        function gap() {
       count.innerHTML=i;
       if(i==0){
        count.textContent= "Time up!!!";
    }
    },(10-i)*1000);
   
}}