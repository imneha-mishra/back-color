const button=document.getElementById('btn');
const colorText=document.querySelector('.color');

const hex=['0','1','2','3','4','5','6','7','8','9','A',"B,''c",'D','E','F']
button.addEventListener('click',()=>{
    const hexcolor=generateHexcolr();
    document.body.style.backgroundColor=hexcolor;
    colorText.textContent=hexcolor;
})

//
const generateHexcolr=()=>{
let hexcolor="#"

for(let i=0;i<6;i++){
    hexcolor += hex[generateRandomNumber()]
}
return hexcolor;
}
const generateRandomNumber=()=>{
    return Math.floor(Math.random()*hex.length)
}