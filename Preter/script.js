const text = "Cyber Security Student & Web Development Enthusiast";
const typingElement = document.getElementById("typing");

if(typingElement){

let i = 0;

function typing(){
    if(i < text.length){
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}

typing();

}