let paymentButton=document.getElementById("btn-pay");
paymentButton.addEventListener("click",function(event){
    event.preventDefault()
    //accepting the inputted value and using trim to remove white space
    let cardHolderName=document.getElementById("card-holder").value.trim() ;
    //this wll remove spaces from the card
    let cardNumber=document.getElementById("Card-number").value.trim().trim().replace(/\s/g,'');
    let expirationDate=document.getElementById("expiration-date").value.trim();
    let Cvv=document.getElementById("cvv").value.trim()

    //conditional statement to check if the input fields or values are empty
    if( cardHolderName === ''|| cardNumber ==='' || expirationDate ==='' || Cvv ===''){
        alert('please fill up all required filled')
        return;

    }

    //validating the the Card Number and CVv
    if(cardNumber.length!==16 || isNaN(cardNumber) ){
        alert("card number should be 16 digit")
    }
    else if(Cvv.length !==3 || isNaN(Cvv)){
        alert(" the Cvv should be three digit")
    }else{
        alert("form validation is successfull");
        document.getElementById("payment-form").submit()
        
    }


});