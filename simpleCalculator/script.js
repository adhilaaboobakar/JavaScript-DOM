


function add(){

    let num1=+document.querySelector("#box1").value
    let num2=+document.querySelector("#box2").value

    result=num1+num2
    document.querySelector("#root").innerHTML=`addition result=${result}`
}


function sub(){

    let num1=+box1.value
    let num2=+box2.value

    result=num1-num2
    document.querySelector("#root").innerHTML=`subtraction result=${result}`
}

function evaluateExp(event){

    let operation=event.target.value

    let num1=+box1.value
    let num2=+box2.value
    
    let result=0

    if(operation=="/"){
        result=num1/num2
    }
    else if(operation=="*"){
        result=num1*num2
    }

    document.querySelector("#root").innerHTML=result
}