let canvas = document.getElementsByClassName("canvas");
// console.log(canvas);


// ------------------------------big box----------------------------------------
class bigBox {

    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.element
    }
    create() {
        let big = document.createElement("div");
        this.element = big;
        big.style.backgroundColor = `${this.color}`;
        big.style.width = `${this.w}px`;
        big.style.height = `${this.h}px`;
        big.style.position = "absolute";
        big.style.top = `${this.y}px`;
        big.style.left = `${this.x}px`
        big.style.border = "1px solid black"
        big.style.display = "flex"
        big.style.justifyContent = "center"
        big.style.alignItems = "center"
        big.style.fontSize ="20px"
        big.style.fontWeight = "700"
        canvas[0].appendChild(big);
        return big;
    }
    get() {
        return this.element;
    }

}
//--------------------------------small box-----------------------
class smallBox extends bigBox {
    constructor(x, y, w, h, color) {
        super(x, y, w, h, color);
        this.ans = false;
        this.arr = [];
    }
    makeArray(inpArr) {

        for (let i = 0; i < 8; i++) {
            let item = small1.create();
            // console.log(item)
            item.innerHTML = inpArr[i];
            this.arr.push(item);
            this.x += 50;
        }
        this.ans = true;
    }
    moveLeft(item, x) {
        item.style.transition = "left 1s ease";
        setTimeout(() => {
            item.style.left = `${parseInt(item.style.left) - 50}px`;
        }, 0);
    }
    moveRight(item, x) {
        item.style.transition = "left 1s ease";
        setTimeout(() => {
            item.style.left = `${parseInt(item.style.left) + 50}px`;
        }, 0);
    }
    moveUp(item, y) {
        item.style.transition = "top 1s ease";
        setTimeout(() => {
            item.style.top = `${parseInt(item.style.top) - 100}px`;
        }, 0);

    }
    moveDown(item, y) {
        item.style.transition = "top 1s ease";
        setTimeout(() => {
            item.style.top = `${parseInt(item.style.top) + 100}px`;
        }, 0);
    }
    swap(item1, item2) {
        item1.style.transition = "left 1s ease";
        item2.style.transition = "left 1s ease";
        setTimeout(() => {
            let left1 = parseInt(item1.style.left);
            let left2 = parseInt(item2.style.left);

            item1.style.left = `${left2}px`;
            item2.style.left = `${left1}px`;
        }, 1000);

    }
    get() {
        return this.arr;
    }
}
//-------------------------------------this is the input array-------------------------------------
// this is the input array
let myArr = [];
let inputArr = "";
let inp = document.getElementById("arr");
inp.addEventListener("input", (e) => {
    inputArr = "";
    inputArr += e.target.value;

})
//-------------------------------------submit the array --------------------------------------
//this is to submit the array by done button
let done = document.getElementsByClassName("done");
done[0].addEventListener("click", () => {

    let s = "";
    for (let i = 0; i < inputArr.length; i++) {
        s += inputArr.charAt(i);
        if (inputArr.charAt(i) == ' ') {
            myArr.push(parseInt(s.trim()));
            s = "";
        }

    }
    if (small1.ans == false) {
        small1.makeArray(myArr);
        let itemArr = small1.get();
        small1.moveUp

    }


})
// --------------------------made instances of small and big boxes---------------------
let box1 = new bigBox(300, 200,400, 100, 'blue');
box1.create();

let small1 = new smallBox(300, 200, 50,100, "pink");




let btn = document.getElementsByClassName("sort");
// small1.get().style.transition = "left 1s ease";
btn[0].addEventListener("click", () => {
    let arr = small1.get();
    bubbleSort(myArr);
})


//----------------------------------bubble sort algorithemic function---------------------

function bubbleSort(arr) {
    console.log(arr);
    console.log("sort is pressed")
    let arrItem1 = [];
    let arrItem2 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let item1 = arr[j];
            let item2 = arr[j + 1];
            if (item1 > item2) {
                //    small1.swap(arr[j],arr[j+1]);
                arrItem1.push(j);
                arrItem2.push(j + 1);
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    window.sessionStorage.setItem("item1", JSON.stringify(arrItem1));
    window.sessionStorage.setItem("item2", JSON.stringify(arrItem2))
    //   console.log(arr);
}
//----------------------------------------------------------------------------------------
let nextbtn = document.getElementsByClassName("next");
let i = 0
let item1 = JSON.parse(window.sessionStorage.getItem("item1"));
let item2 = JSON.parse(window.sessionStorage.getItem("item2"));
let arr = small1.get();
// if(i<arr.length){

nextbtn[0].addEventListener("click", () => {
    console.log(item1);
    console.log(item2);

    console.log(arr)

    console.log(item1[i], item2[i]);
    console.log(arr[item1[i]], arr[item2[i]]);
    small1.swap(arr[item1[i]], arr[item2[i]]);
    let temp = arr[item1[i]];
    arr[item1[i]] = arr[item2[i]];
    arr[item2[i]] = temp;
    if (i == item1.length) {
        alert("finally sorted")
    }
    i++;

})

// }


// 80 -7 -6 66 27 31 100 55 3