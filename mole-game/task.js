const dead= document.getElementById('dead')
const lost = document.getElementById('lost')
const a = document.getElementsByClassName('hole')
for(let index = 0; index<a.length; index++){
    
a[index].onclick=()=>{
    if (a[index].className.includes('hole_has-mole'))
    {if(dead.textContent ==10){
    alert('Победа!')}
    else {dead.textContent = Number(dead.textContent)+1}}
    else{ 
        if (lost.textContent == 5){alert('Вы проиграли!')}
        else{lost.textContent = Number(lost.textContent)+1}}}
    }
