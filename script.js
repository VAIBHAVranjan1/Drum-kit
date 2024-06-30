handleKeydown = (event) => {
    let audio;
    switch(event.key){
        case "w":
            audio = new Audio('./sounds/crash.mp3');
            break;
        case "a":
            audio = new Audio('./sounds/kick-bass.mp3');
            break;
        case "s":
            audio = new Audio('./sounds/snare.mp3');
            break;
        case "d":
            audio = new Audio('./sounds/tom-1.mp3');
            break;
        case "j":
            audio = new Audio('./sounds/tom-2.mp3');
            break;
        case "k":
            audio = new Audio('./sounds/tom-3.mp3');
            break;
        case "l":
            audio = new Audio('./sounds/tom-4.mp3');
            break;
        default:
            console.log(`Other key was pressed: ${event.key}`);
            return; 
    }
    audio.playbackRate = 1.5; 
    audio.play()
}

document.addEventListener("keydown", handleKeydown);
