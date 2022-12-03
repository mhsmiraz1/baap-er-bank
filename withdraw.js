document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawField = document.getElementById('withdraw-field');
   const newWithdrawAmmountString = withdrawField.value;
   const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
   // connet to total withdraw field to withdraw total balance 

   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   
   // step 4:
   const currentWithDrawTotal = previousWithdrawTotal + newWithdrawAmmount;
   withdrawTotalElement.innerText = currentWithDrawTotal;

   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString =balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   // culculate current balance total
   const currentBalanceTotal = previousBalanceTotal - newWithdrawAmmount;

   balanceTotalElement.innerText = currentBalanceTotal;

   withdrawField.value = '';
})