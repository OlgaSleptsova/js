
const img = document.getElementById('img')
const clicker = document.getElementById('clicker__counter')
img.onclick= () =>{
    clicker.textContent = Number(clicker.textContent)+1;
    if(clicker.textContent % 2 != 0){
    img.width += 20
    img.height +=20}
    else {
    img.width -= 20
    img.height -=20}
    
}
   