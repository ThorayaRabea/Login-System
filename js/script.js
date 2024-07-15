var logIn=document.getElementById('logIn')
var Alert=document.getElementById('alert')
var mailInput=document.getElementById('mailInput')
var passwordInput=document.getElementById('passwordInput')
var arrayOfInputs=JSON.parse(localStorage.getItem('person'))
var secLogOut=document.getElementById('secLogOut')
var secInput=document.getElementById('secInput')
var Wlcome=document.getElementById('wlcome')
var logOutBtn=document.getElementById('logOutBtn')
function allReuied(){
    Alert.innerHTML='All inputs is required'
}
logIn.addEventListener('click',function(){
   if(mailInput.value==''||passwordInput.value=='')
   {
    allReuied();
   }else{
    for(var i=0;i<arrayOfInputs.length;i++)
    {
      if(arrayOfInputs[i].mailValue==mailInput.value&&arrayOfInputs[i].passValue==passwordInput.value){
        secInput.classList.add('d-none')
        secLogOut.classList.replace('d-none','d-block')
        Wlcome.innerHTML=`Welcome ${arrayOfInputs[i].nameValue}`
        Alert.innerHTML=''
      }else{
        Alert.innerHTML='invalid mail or password'
      }
    }

   }

})

logOutBtn.addEventListener('click',function(){
    secInput.classList.replace('d-none','d-block')
    secLogOut.classList.replace('d-block','d-none')
    passwordInput.value=''
    mailInput.value=''
})
