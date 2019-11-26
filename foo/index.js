let chatbot = document.getElementById("chatbot");
setInterval(function() {
    let now = new Date();
    let thisHour = now.getHours();
    if(thisHour >= 8 && thisHour <= 16) {
        chatbot.classList.remove("hide");
    }
    else{
        chatbot.classList.add("hide");
    }
}, 500)