const hex=["A", "B", "C", "D", "E", 1, 2, 3, 4, 5]
const btn=document.getElementById("btn")
const code=document.getElementById('code')
const button=document.querySelector("button")

btn.addEventListener('click',()=>{
    let hexColor="#"
    for (let i = 0; i < 6; i++) {
         hexColor += hex[getrandomNumber()];  
    }
    document.body.style.background= hexColor
    code.style.color=hexColor
    code.textContent=hexColor
    button.style.background=hexColor

    
    
})
function getrandomNumber() {
    return Math.floor(Math.random()*hex.length)
    
}