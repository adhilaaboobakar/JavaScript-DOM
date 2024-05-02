


function displayNumber(event){

    let val = event.target.value; // string

    let opertaor =["+","-","*","/","."]

    let currentExpressionLastChar = result.value.slice(-1);

    if(opertaor.includes(currentExpressionLastChar) && opertaor.includes(val)){

        result.value=result.value.slice(0,-1)
        return result.value+=val
    
    }

    result.value += val;
}

function clearBox(){
    result.value= "";
}

function evalExp(){

    let currentExpression = result.value;

    let output=eval(currentExpression);

    result.value=output;
}

function backSpace(){
    let val=result.value.slice(0,-1);

    result.value=val;
}