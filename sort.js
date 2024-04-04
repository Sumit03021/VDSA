let canvas= document.getElementsByClassName("canvas");
// console.log(canvas);


// ------------------------------bubble sort----------------------------------------
class bigBox {
    
    constructor(x,y,w,h,color){
     this.x=x;
     this.y=y;
     this.w=w;
     this.h=h;
     this.color=color;
     this.element
    }
    create(){
        let big=document.createElement("div");
        this.element=big;
big.style.backgroundColor=`${this.color}`;
big.style.width=`${this.w}px`;
big.style.height=`${this.h}px`;
big.style.position="absolute";
big.style.top=`${this.y}px`;
big.style.left=`${this.x}px`
document.body.children[0].appendChild(big);
    }
    get(){
        return this.element;
    }

}

class smallBox extends bigBox{
    constructor(x,y,w,h,color){
        super(x,y,w,h,color);
    }
}

let box1= new bigBox(300,200,500,100,'blue');
box1.create();
let small1= new smallBox(310,210,50,80,"pink");
small1.create();



let btn= document.getElementsByClassName("prev");
console.log(btn);
// btn.innerHTML="button";
// document.body.children[0].appendChild(btn);
small1.get().style.transition = "left 1s ease";
btn[0].addEventListener("click",()=>{

small1.get().style.left = parseInt(small1.get().style.left) + 50 + "px";

})