// Get a reference to the form element
// const body = document.querySelector('section'),
//     calcScreen = body.querySelector(".calc-screen"),
//     button_AC =  body.querySelector(".btn .AC"),
//     button_Plus_minus =  body.querySelector(".btn .plus-minus"),
//     button_percent =  body.querySelector(".btn .percent"),
//     button_division =  body.querySelector(".btn .division"),
//     button_seven =  body.querySelector(".btn .seven"),
//     button_eight =  body.querySelector(".btn .eight"),
//     button_nine =  body.querySelector(".btn .nine"),
//     button_multiplication =  body.querySelector(".btn .multiplication"),
//     button_four =  body.querySelector(".btn .four"),
//     button_five =  body.querySelector(".btn .five"),
//     button_six =  body.querySelector(".btn .six"),
//     button_minus =  body.querySelector(".btn .minus"),
//     button_one =  calcScreen.querySelector(".btn .one"),
//     button_two =  body.querySelector(".btn .two"),
//     button_three =  body.querySelector(".btn .three"),
//     button_plus =  body.querySelector(".btn .plus"),
//     button_zero =  body.querySelector(".btn .zero"),
//     button_dot =  body.querySelector(".btn .dot"),
//     button_equal =  body.querySelector(".btn .equal");
// Get references to the screen and buttons
const screen = document.querySelector(".calc-screen");
const screenInput = document.querySelector('.calc-screen .start-input');
const buttons = document.querySelectorAll('.btn');

// Initialize the current input and result variables
let currentInput = '';
let result = ''






// Add event listeners to each button
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const buttonText = btn.innerText;

        // Handle number buttons
        if (!isNaN(parseInt(buttonText))) {
            currentInput += buttonText;
            updateScreen(currentInput);
        }
        else if(buttonText === '.') {
            currentInput += buttonText;
            updateScreen(currentInput);
        }

        // Handle operator buttons
        else if (buttonText === '+' || buttonText === '-' || buttonText === '×' || buttonText === '/' ) {
            currentInput += ` ${buttonText} `;
            updateScreen(currentInput);
        }
        else if( buttonText === '+/-' || buttonText === 'AC' || buttonText === '×'|| buttonText === '%'){
                 if (buttonText === 'AC') {
                     screenInput.style.fontSize = `3rem`;
                    currentInput='0';
                    updateScreen(currentInput);
                    currentInput='';
                 }
                 else if (buttonText === '+/-') {
                        currentInput = -eval(currentInput);
                        updateScreen(currentInput);
                 }
                 else if (buttonText === '×') {
                     currentInput += ` ${buttonText} `;
                     updateScreen(currentInput);
                 }
                 else if (buttonText === '%') {
                     currentInput = eval(currentInput)/100;
                     updateScreen(currentInput);
                 }
        }
        // Handle equals button
        else if (buttonText === '=') {
            currentInput = currentInput.replace('×', '*');
            if(Math.abs(eval(currentInput).toFixed(0)-eval(currentInput).toFixed(2)) > 0) {
                result = eval(currentInput).toFixed(2);
            }
            else
                result = eval(currentInput).toFixed(0);
            updateScreen(result);
            currentInput=result
        }
    });
});


// Function to update the screen with the provided value

function updateScreen(valueScreen) {
    if(screenInput.offsetHeight>=100 || screenInput.offsetWidth>=330){
        let fontSize = parseInt(window.getComputedStyle(screenInput).fontSize);
        while (screenInput.offsetHeight >= 100 || screenInput.offsetWidth >= 350) {
            fontSize -= 0.6;
            screenInput.style.fontSize = `${fontSize}rem`;
        }
    }
    else if (screenInput.offsetWidth < 270) {
        screenInput.style.fontSize = `3rem`;
    }

    screenInput.innerText = valueScreen;




}
