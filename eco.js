function bad_news(){
    window.location="bad_news.html";
}
function good_news(){
    window.location="good_news.html";
}
function howtohelp(){
    window.location="help.html";
}
function logout(){
    localStorage.removeItem("user_name", user);
    window.location="login.html";
}