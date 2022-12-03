document.getElementById('btn-deposit').addEventListener('click', function(){
    // step2: get the depoit ammount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;   
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    
   // step: get the current deposit total

   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepoitTotalString = depositTotalElement.innerText;
   // change the string for valu or number is parseFloat
   const previousDepoitTotal = parseFloat(previousDepoitTotalString);

   const currentDepositTotal = previousDepoitTotal + newDepositAmmount; 
   depositTotalElement.innerText = currentDepositTotal;

   // get total doposit add total blance
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString =balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   // culculate current balance total
   const currentBalanceTotal = previousBalanceTotal + newDepositAmmount;

   balanceTotalElement.innerText = currentBalanceTotal;

    // step: 7 clear the deposit field
   depositField.value = '';

})