"set strict";
let show =  document.querySelector("#show");
let inputs = document.querySelectorAll("input");
for (let input of Array.from(inputs)) {
    console.log("test");
    input.addEventListener("focus", event => {
        let text = event.target.getAttribute("show-hint");
        show.textContent = text;
    })
    input.addEventListener("blur", event => {
        show.textContent="";
       
    }
)
    
}
const Cridentials = document.querySelector("button");
Cridentials.addEventListener('click',function(){
    alert("Commentary has been submitted");
}
)
