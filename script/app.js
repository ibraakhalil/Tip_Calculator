
let input1 = document.querySelector(".tip-intput")
let input2 = document.querySelector(".tip-intput-2")
let select = document.querySelector(".select")
let buttton = document.querySelector(".btn")
let output = document.querySelector(".output span")
let SetTime;
let tip = {
    "Great - 20%": 20,
    "Good - 10%": 10,
    "Bad - 2%": 2
}
for (let x in tip) {
    select.options[select.options.length] = new Option(x,x)
}
function getTipCalc(){
    let x = Number(input1.value)
    let y = tip[select.value]*x/100;
    let sum = x + y;
    let share =sum/input2.value; 
    return share.toFixed(2)   
}


input1.value = 0 ;
input2.value = 0 ;


buttton.addEventListener("click",function(){
    output.innerHTML="";
    clearTimeout(SetTime);

    if(input2.value <= 0 || input1.value <= 0 || select.value === "0"){

        output.innerHTML = "Enter Valid Data!"
        buttton.style.backgroundColor = "red"

    } else {

        let img = document.querySelector(".output img")
        img.classList.add("loader")
        buttton.style.backgroundColor = "green"

        SetTime = setTimeout(() => {
            buttton.style.backgroundColor = "";
            img.classList.remove("loader")
            output.innerHTML ="Per People Paying : "+     getTipCalc() +"$";            
        }, 1500);        
    }
})



console.log(input1);

