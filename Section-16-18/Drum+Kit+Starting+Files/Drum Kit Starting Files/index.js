var numDrums = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", function(){
    makeSound(event.key);
})

for(var i=0; i<numDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
            var key = this.innerText;    
            makeSound(key)     
        }
    );
}

function makeSound(key){
    buttonAnimation(key);
    switch (key) {
        case "w":                    
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":            
            var tom2 = new Audio("./sounds/tom-2.mp3");        
            tom2.play();
            break;

        case "s":                    
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":                    
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j": 
            var crash = new Audio("./sounds/crash.mp3");               
            crash.play();
            break;
        
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");                    
            kick.play();
            break;

        case "l":
            var snare = new Audio("./sounds/snare.mp3");                    
            snare.play();
            break;
        
        default:
            break;
    }
}

function buttonAnimation(key){
    var activeKey = document.querySelector("."+ key);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}