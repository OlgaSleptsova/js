const p =document.getElementById('timer')

const intervalId=setInterval(()=>{ 
   
   
    if( p.textContent==0){
      clearInterval(intervalId);
      alert('Вы победили в конкурсе!')
    }
    else {p.textContent =Number(p.textContent)-1};
    },1000)



