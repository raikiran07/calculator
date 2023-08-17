//selecting all buttons
const buttons = document.querySelectorAll("button")

//selecting the display box
const display = document.querySelector('.display')

let output = ''

const special = ['+','-','*','/','%','AC','DEL','=']




const calculate = (btnValue) => {
   if(btnValue==='=' && output !== ''){
    output = eval(output.replace('%','/100'))
   }
   else if(btnValue==='AC'){
    
    output = ''
    
   }
   else if(btnValue==='DEL'){
    output = output.toString().slice(0,-1)
    
   }
   else{
    if(output === '' && special.includes(btnValue))return;
    output += btnValue;
   }

   display.innerText = output

   
}


buttons.forEach(btn=>{
    btn.addEventListener("click",(e)=>calculate(e.target.dataset.value))
})