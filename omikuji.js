let username;


username = prompt("お名前を教えてください。");
if(!username){
    username="名無し";
}
document.getElementById("name").innerHTML = username;



let rand = Math.floor(Math.random() *5);

if(rand==0){
    userresutl="大吉";
}
if(rand==1){
    userresult="中吉";
}
if(rand==2){
    userresutl="小吉";
}
if(rand==3){
    userresult="吉";
}
else{
    userresutl="凶";
}

document.getElementById("result").innerHTML = userresult;