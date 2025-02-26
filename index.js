var drumLength = document.querySelectorAll(".drum").length;

// Event called on click of buttons
for(var i = 0;i<drumLength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var input = this.innerHTML;
        makeSound(input);
        buttonAnimation(input);
    })
}

// Event called on input from keyboard
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(input){
    switch(input){
        case "w" : 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        case "a" : 
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
        case "s" : 
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
        case "d" : 
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
        case "j" : 
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
        case "k" : 
            var tom1 = new Audio("sounds/kick.mp3");
            tom1.play();
        case "l" : 
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
        default:
            console.log("Invalid Input");
    }
}

function buttonAnimation(input){
    var activeButton = document.querySelector("." + input);
    alert(activeButton);
    activeButton.classList.add(".pressed");
    setTimeout(function(){
        activeButton.classList.remove(".pressed");
    }, 100);
}