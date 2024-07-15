var Alert=document.getElementById('alert')
var mailAlert=document.getElementById('mailAlert')
var mailInput=document.getElementById('mailInput')
var passwordInput=document.getElementById('passwordInput')
var SignUp=document.getElementById('SignUp')
var nameInput=document.getElementById('nameInput')
var arrayOfInputs=[];

function creatAccount(){
    var info={
     nameValue:nameInput.value,
     mailValue:mailInput.value,
     passValue:passwordInput.value
    }
   
   arrayOfInputs.push(info);
   localStorage.setItem('person',JSON.stringify(arrayOfInputs))
   Alert.innerHTML='success'
   mailAlert.innerHTML='';
   Alert.classList.replace('text-danger','text-success')
}


function allReuied(){
    Alert.innerHTML='All inputs is required'
}
function mailValidation(){
    var valid=/^[A-Za-z]{3,}[@](gmail)[.](com)$/
    if(!valid.test(mailInput.value)){
       invalidMail();
    }else{
        creatAccount();
    }
}
function invalidMail(){
    mailAlert.innerHTML='invalid mail';
}

SignUp.addEventListener('click',function(){
   if(mailInput.value==''||passwordInput.value==''||nameInput.value=='')
   {
    allReuied();
   }else{
    mailValidation();
   }
 
})
