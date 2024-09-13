const iStatus=document.querySelector("h5");
const addFriend=document.getElementById("Add")
const removeFriend=document.getElementById("remove")

var check=0;

addFriend.addEventListener("click", function(){
    if(check==0){
        iStatus.innerHTML="Friends"
        iStatus.style.color="blue"
        check=1;
    }else{

        iStatus.innerHTML="Stranger"
        iStatus.style.color="Red"
        check=0;
    }

   
})


// removeFriend.addEventListener("click", function(){
//     iStatus.innerHTML="Bhag-Kutte"
//     iStatus.style.color="red"
// })