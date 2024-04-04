let canvas= document.getElementsByClassName("canvas");
// console.log(canvas);


// ------------------------------bubble sort-----------------------------------------
let big=document.createElement("div");
big.style.backgroundColor="blue";
big.style.width='500px';
big.style.height='100px';
big.style.position="absolute";
big.style.top="200px";
big.style.left="300px"



document.body.children[0].appendChild(big);

let small= document.createElement("div");

small.style.backgroundColor="pink";
small.style.height="80px";
small.style.width="50px";
small.style.position="absolute";
small.style.top="200px";
small.style.left="300px";

document.body.children[0].appendChild(small);

let btn= document.createElement("button");
btn.innerHTML="button";
document.body.children[0].appendChild(btn);
small.style.transition = "left 1s ease,top 1s ease";
btn.addEventListener("click",()=>{
 // Transition property for left, duration: 1s, easing: ease
small.style.left = parseInt(small.style.left) + 50 + "px";
small.style.top=parseInt(small.style.top)+10+"px";
})

