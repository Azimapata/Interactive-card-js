const cardholderNameInput = document.getElementById('cardholderName'); // Getting the Id of the cardholdername using Dom
const cardNumberInput = document.getElementById('cardNumber');  // Getting the Id of the cardnumber using Dom
const expMonthInput = document.getElementById('expMonth');    // Getting the Id of the Month using Dom
const expYearInput = document.getElementById('expYear');    // Getting the Id of the year using Dom
const cvcInput = document.getElementById('cvc');     // Getting the Id of the cvc number using Dom
const cardNumberDisplay = document.getElementById('cardNumberDisplay')
const  cardholderNameDisplay = document.getElementById('cardholderNameDisplay')
const  expiryDateDisplay = document.getElementById('expiryDateDisplay')
const cvcnumberDisplay = document.getElementById('cvcnumberDisplay')
const confirmbutton = document.getElementById('confirmbutton')
const thank = document.getElementById('thank')
const myForm = document.getElementById('myForm')


document.getElementById("myForm").addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();
});

function validateForm()
  

{   // function to validate the form if the user press confirm without filling the input
    const nameError = document.getElementById('nameError'); // Getting the id of the error to be displayed on the cardholdername using Dom
    const numberError = document.getElementById('numberError'); // Getting the id of the error to be displayed on the cardnumber using Dom
    const dateError = document.getElementById('dateError') // Getting the id of the error to be displayed on the  date  (month and year ) using Dom


   


    let isValid = true;

        if (cardholderName.value.trim() === '') {  // condition on when the cardholdername input is empty
            cardholderName.classList.add('border-red-500');   // Adds a red border color
            nameError.classList.remove('hidden');
            isValid = false;
        } else {
            cardholderName.classList.remove('border-red-500');  // if the user input a value remove the red border
            nameError.classList.add('hidden');
        }

        if (cardNumber.value.trim() === '') {  // condition on when the card number input is empty
            cardNumber.classList.add('border-red-500'); // Add a red border color
            numberError.classList.remove('hidden');
            isValid = false;
        } else {
            cardNumber.classList.remove('border-red-500');  // if the user input a value remove the red border
            numberError.classList.add('hidden');
        }

        if (expMonth.value.trim() === '' || expYear.value.trim() === '' || cvc.value.trim() === '') {  // condition on when the date and the cvc number is empty
            expMonth.classList.add('border-red-500');  // Adds a red border color
            expYear.classList.add('border-red-500');  // Adds a red border color
            cvc.classList.add('border-red-500');  // Adds a red border color
            dateError.classList.remove('hidden');
            isValid = false;
        } else {
            expMonth.classList.remove('border-red-500'); // if the user input a value remove the red border
            expYear.classList.remove('border-red-500'); // if the user input a value remove the red border
            cvc.classList.remove('border-red-500'); // if the user input a value remove the red border
            dateError.classList.add('hidden');
        }

        if (isValid) {

        }

        
            // formatCardNumber(cardNumberInput);
   
            confirmbutton.addEventListener('click', () => {
                thank.style.display = 'block';
                myForm.style.display = 'none';
                // cardNumberDisplay.textContent =  cardNumber.replace(/(\d{6})(\d{6})(\d+)/, '$1******$3');
                cardNumberDisplay.textContent  = cardNumber.replace(/(\d{6})(\d{6})(\d+)/, '$1******$3');
              });
              
            // confirmbutton.addEventListener('click', () => {
             
            //     cardNumberDisplay.textContent  = cardNumber.replace(/(\d{6})(\d{6})(\d+)/, '$1******$3');
     
            //     // cardNumberDisplay.textContent =  cardNumber.replace(/(\d{6})(\d{6})(\d+)/, '$1******$3');
            //   });
              
        
}

function cardNumbervalidation(cardNumberInput){  // function to make sure that if the user input card number it should not be more than 16 digits and it should have white space after every 4 digits 
    let value = cardNumberInput.value.replace(/\D/g, '');
            
    // Limit the input to 16 digits
    if (value.length > 16) value = value.substring(0, 16);
    
    // Format the input by adding a space after every 4 digits
    cardNumberInput.value = value.replace(/(.{4})/g, '$1 ').trim();
}

function yearvalidation( expYearInput){  // function to make sure that if the user input the year it should be only digits and not more that 2 
    let value = expYearInput.value; // Get the current value of the input field
    if (value.length > 2) {
        expYearInput.value = value.substring(0, 2); // Limit the length to 2 characters
    }

    
}
function monthvalidation( expMonthInput){   // function to make sure that if the user input the month it should be only digits and not more that 2 and the digit enterd should not be more than 12
    let value = expMonthInput.value; // Get the current value of the input field
    if (value.length > 2) {  // condition on when the length of the month is greater than 2
        expMonthInput.value = value.substring(0, 2); // Limit the length to 2 characters
    }

   
    if (parseInt(value) > 12) { //parseInt(value) converts the string value (the current input value of the month field) into an integer.
        expMonthInput.value = '12';
    }

}

function cvcvalidation( cvcInput){  // function to make sure that if the user input the year it should be only digits and not more that 2 
    let value = cvcInput.value; // Get the current value of the input field
    if (value.length > 3) {
        cvcInput.value = value.substring(0, 3); // Limit the length to 3 characters
    }
}

    
    cardNumberInput.addEventListener('input', () => {  // The input event is fired whenever the value of an <input>, <textarea>, or <select> element changes. This event is useful for responding to user input in real time as they type or change the value.
      cardNumberDisplay.textContent = cardNumberInput.value; // the card number will diplay the card number input value inputed
    });
  

    cardholderNameInput.addEventListener('input', () => { // the event listener is for input so it is used to change user input in real time
        cardholderNameDisplay.textContent = cardholderNameInput.value; // the cardholdername  will diplay the cardholder name input value inputed
      });

      cvcInput.addEventListener('input', () => { // the event listener is for input so it is used to change user input in real time
        cvcnumberDisplay.textContent = cvcInput.value;  // the cvc number will diplay the cvc number input value inputed
      });

      
      const updateExpiryDateDisplay = () => {  // this function is to diplay the inputed month and year value inputed
        const month = expMonthInput.value; // declaring a constant with variable name Month holdng expmonthinput value
        const year = expYearInput.value; // declaring a constant with variable name Month holdng expmonthinput value
        expiryDateDisplay.textContent = `${month} / ${year}`;  // since the expiry date has a slash between them it will be written like this
      };
      
      expMonthInput.addEventListener('input', updateExpiryDateDisplay);   // this is the event listener for the month to change the month value in real time
      expYearInput.addEventListener('input', updateExpiryDateDisplay);   // this is the event listener for the year to change the year value in real time


    //   const updateCardNumberDisplay = () => {
    //     const cardNumber = cardNumberInput.value;
    //     const maskedCardNumber = cardNumber.replace(/(\d{6})(\d{6})(\d+)/, '$1******$3');
    //     cardNumberDisplay.textContent = maskedCardNumber;
    //   };


    

     
      

  