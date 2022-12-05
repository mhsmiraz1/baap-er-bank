document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawField = document.getElementById('withdraw-field');
   const newWithdrawAmmountString = withdrawField.value;
   const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
   // connet to total withdraw field to withdraw total balance 

   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   withdrawField.value = '';
   
   if(newWithdrawAmmount > previousBalanceTotal){
      alert('baap er bank ato taka nai!')
      return;
   }
   // step 4:
   const currentWithDrawTotal = previousWithdrawTotal + newWithdrawAmmount;
   withdrawTotalElement.innerText = currentWithDrawTotal;

   // culculate current balance total
   const currentBalanceTotal = previousBalanceTotal - newWithdrawAmmount;

   balanceTotalElement.innerText = currentBalanceTotal;
   
})