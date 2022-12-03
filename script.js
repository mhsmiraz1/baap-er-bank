document.getElementById('btn-submit').addEventListener('click', function(){
   // step: 2 get the email address inside the email input field
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   // step: 3 : get password
   // 3.a: set id on the html element
   //3.b : get the element
   //3. c get the value from the element 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    // do no verify email or password on the client side
    //step: 4 verify email and password
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        console.log('tura diya kichu hoba na, jai caora basay dor khai');
    }
})