//Calling all buttons and forms

let inputFieldValue=document.getElementById('input-value');
let inputPerson=document.getElementById('input-person');
let btnFive=document.getElementById('btn-five');
let btnTen=document.getElementById('btn-ten');
let btnFifteen=document.getElementById('btn-fifteen');
let btnTwentyFive=document.getElementById('btn-twenty-five');
let btnFifty=document.getElementById('btn-fifty');
let inputCustom=document.getElementById('input-custom');
let btnReset=document.getElementById('btn-reset');
let discountRate= document.getElementById('discount-rate');
let discountTotal=document.getElementById('total-pay');
let totalAmountPaid=document.getElementById('total-amount');
let validBill=document.getElementById('valid-bill');
let customDiscountTimer

btnFive.addEventListener('click',function(){
    applyDiscount(5)
});
btnTen.addEventListener('click',function(){
    applyDiscount(10)
})
btnFifteen.addEventListener('click',function(){
    applyDiscount(15)
})
btnTwentyFive.addEventListener('click',function(){
    applyDiscount(25)
})
btnFifty.addEventListener('click',function(){
    applyDiscount(50)
})

inputCustom.addEventListener('input',function(){
    clearTimeout(customDiscountTimer)
    customDiscountTimer=setTimeout(function(){
        applyDiscount(parseFloat(inputCustom.value))
    },2000)
   
})

btnReset.addEventListener('click',function(){
    resetCalculator()
})

function applyDiscount(discountPercentage){

    let paidAmount=parseFloat(inputFieldValue.value);
    let numberOfPeople=parseInt(inputPerson.value);
    if(!isNaN(paidAmount) &&  !isNaN(numberOfPeople) && numberOfPeople>=1 ){
        let discount= paidAmount * (discountPercentage/100);
        let discountPerPerson= discount/numberOfPeople;
        let totalAmount=paidAmount-discount;
        let totalAmountPerPerson= (paidAmount-discount)/numberOfPeople

        discountRate.innerHTML= '$' + discountPerPerson.toFixed(1);
        discountTotal.innerHTML = '$' + totalAmountPerPerson.toFixed(1); 
        totalAmountPaid.innerHTML='$'+ totalAmount.toFixed(1)
    }
    else{
        validBill.style.display="block";
        setTimeout(()=>{
            validBill.style.display="none";
        },3000
        )
        
    }
}

function resetCalculator(){
    inputFieldValue.value="";
    inputPerson.value="";
    inputCustom.value="";
    discountRate.innerHTML="$4.27";
    discountTotal.innerHTML="$32.79"
    totalAmountPaid.innerHTML="$00.00"


}