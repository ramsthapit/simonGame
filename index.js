$(".btn").on("click",function(event){
    makeSound(event.target.id);
    buttonAnimation(event.target.id);
    
});
function makeSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function buttonAnimation(currentKey){
    $("."+currentKey).addClass("pressed");
    setTimeout(function(){
        $("."+currentKey).removeClass("pressed");
    },100);
}