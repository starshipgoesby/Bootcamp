threeSteps = (text) => {
    let indexA = -1;
    let indexB = -1;


    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a') {
            indexA = i;
            if (indexB !== -1 && Math.abs(indexA - indexB) >= 3) {
                return true;
            }
        }
        else if (text[i] === 'b') {
            indexB = i;
            if (indexA !== -1 && Math.abs(indexB - indexA) >= 3) {
                return true;
            }
        }
    }

    return false;
}

console.log(threeSteps("lane borrowed")); // false
console.log(threeSteps("i am sick")); // true
console.log(threeSteps("you are boring")); // true