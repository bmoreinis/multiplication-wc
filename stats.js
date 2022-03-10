// Stats Function: Counts the errors and says "You got [errors] out of 10 wrong."
function stats() {
    let errors = localStorage.getItem("errors");
    let numErrors = errors.length;
    if (numErrors == 0) {
        let OK = confirm("No errors! Let\'s study some tables anyhow. OK?");
        if (OK == true) {
            document.location = 'tables.html';
        }
        else {
            document.location = 'https://www.youtube.com/watch?v=b9434BoGkNQ';
        }
    }
    else {
        let questions = localStorage.getItem("questions");
        numErrors -= 2;
        alert("You got "+ numErrors + " out of " + questions + " questions wrong.");
        let min = localStorage.getItem("min");
        let max = localStorage.getItem("max");
        let highFactor = [min,0];
        // sample errors array data
        let errorDist = [];
        // fill errorDist with zeros
        for (let i = 0; i <= max; i++){
            errorDist[i]=0;
        }
        // add error factors to dist
        for (i = 0; i < errors.length; i++){
            errorDist[errors[i][0]]++;
            errorDist[errors[i][1]]++;
        }
        // find greatest number
        for (let i = max; i > 0; i--){
            if (errorDist[i] > highFactor[1]) {
                highFactor = [i,errorDist[i]];
            }
        }
        alert("Your biggest problem factor was "+ highFactor[0]);
        tables(highFactor[0]);
    }
}