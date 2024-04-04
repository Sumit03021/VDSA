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
return big;
    }
    get(){
        return this.element;
    }

}

class smallBox extends bigBox{
    constructor(x,y,w,h,color){
        super(x,y,w,h,color);
    }
    makeArray(inpArr){
        let arr=[];
      for(let i=0;i<8;i++){
        let item=small1.create();
        item.innerHTML=inpArr[i];
        arr.push(item);
        this.x +=60;
      }
    //   console.log(arr);
    }
}
// this is the input array
let myArr=[];
let inputArr="";
let inp= document.getElementById("arr");
inp.addEventListener("input",(e)=>{
    inputArr="";
    console.log(e.target.value);
  inputArr+=e.target.value;
 
})

//this is to submit the array by done button
let done= document.getElementsByClassName("done");
done[0].addEventListener("click",()=>{
    console.log(inputArr);
    let s="";
    for(let i=0;i<inputArr.length;i++){
        s+=inputArr.charAt(i);
        if(inputArr.charAt(i)==' '){
          myArr.push(parseInt(s.trim()));
          s="";
        }
       
    }
    small1.makeArray(myArr);
   
})

let box1= new bigBox(300,200,500,100,'blue');
box1.create();

let small1= new smallBox(315,210,50,80,"pink");




let btn= document.getElementsByClassName("prev");
console.log(btn);
// small1.get().style.transition = "left 1s ease";
btn[0].addEventListener("click",()=>{

small1.get().style.left = parseInt(small1.get().style.left) + 50 + "px";

})