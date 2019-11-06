// assign a DOM operation to the button with id submitButton using the variable submitButton
let submitButton = document.getElementById('submitButton');

// create an event listener which calls the advancePalindrome function when the button with id submitButton is clicked
submitButton.addEventListener('click', advancedPalindrome);


function advancedPalindrome(inputData) {

    // advancedPalindrome function calls 3 other functions namely numberCheck, integerCheck and palindrome

    function numberCheck(inputData) {
        // checks to see if input is a number or not
        return !isNaN(inputData);

    };

    function integerCheck(inputData) {
        //checks to see if input is an integer or not 
        return /^[0-9]*$/.test(inputData);

    };

    function palindrome(inputData) {
        //performs palindrome operation on the input to determine if input is a palindrome or not

        inputData = inputData.replace(/[^a-z0-9]+/gi, "").toLowerCase();
        //uses regex to reduce and replace all characters into lowercase letters or numbers

        let outputData = inputData.toString().split("").reverse().join("");
        // converts input to string, splits individual elements of sentence into an array, reverses the array, 
        // joins to reform one word and assigns final output to outputData variable

        return inputData === outputData ? true : false;
        //compares input in inputData variable to output in outputData variable

    };

    let value = document.getElementById('wordCollector').value;
    //assign the DOM operation of collecting the value of the input and store it in the variable called value

    let notification = document.getElementById('displayPanel');
    //assign the DOM operation of replacing the text in the answer display area to the variable called notification


    if (numberCheck(value) === true && integerCheck(value) === true && palindrome(value) === true) {
        console.log('This is a number, an integer and a palindrome');
        notification.innerHTML = 'This is a number, an integer and a palindrome';
    } else if (numberCheck(value) === true && integerCheck(value) === true && palindrome(value) === false) {
        console.log('This is a number, an integer but not a palindrome');
        notification.innerHTML = 'This is a number, an integer but not a palindrome'
    } else if (numberCheck(value) === true && integerCheck(value) === false && palindrome(value) === true) {
        console.log('This is a number and a palindrome but not an integer');
        notification.innerHTML = 'This is a number and a palindrome but not an integer';
    } else if (numberCheck(value) === true && integerCheck(value) === false && palindrome(value) === false) {
        console.log('This is a number but not an integer or a palindrome');
        notification.innerHTML = 'This is a number but not an integer or a palindrome';
    } else if (numberCheck(value) === false && integerCheck(value) === false && palindrome(value) === true) {
        console.log('This is not a number or an integer but is a palindrome');
        notification.innerHTML = 'This is not a number or an integer but is a palindrome';
    } else {
        console.log('This is not a number, an integer or a palindrome');
        notification.innerHTML = 'This is not a number, an integer or a palindrome';
    }

    inputData.preventDefault(inputData);
    //prevents the default action by the DOM operation on clicking which is to disappear from the console or screen after clicking
}