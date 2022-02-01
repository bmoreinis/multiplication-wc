// Setup is where we change the values of globals
function getStats(){
    questions = document.getElementById("questions").value
    min = parseInt(document.getElementById("min").value)
    max = parseInt(document.getElementById("max").value)
    main();
}

function setup(){
    getStats();
}

/* Set Difficulty */
function setDifficulty(){
   return; 
}