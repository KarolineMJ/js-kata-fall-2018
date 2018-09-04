"use strict";

function concatNPad(a, b) {
    // find the # in the a

    function indexOf(arr, search) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === search) {
                return i;
            }
        }
        return -1;
    }

    let identity = indexOf(a, "#");
    console.log(identity);

    //replace only # with b
    if (identity === 0) {
        let newA = b + a.slice(identity + 1);
        console.log(newA);
    } else {
        let newA = a.slice(0, identity) + b + a.slice(identity + 1);
        console.log(newA);
    }

}

concatNPad('myfile_backup.#', 3);

//make function which adds number to  the end of a image 
// ex. concatNPad("image#.jpg", 3), should return 'image03.jpg'

//replace # with number 
