
function tempCalculator(event){
    let temp=+box.value;

    var result;
    if(event.target.textContent == "C to F"){
        result=temp*(9/5)+32;
    }
    else if(event.target.textContent == "F to C"){
        result=(5/9)*(temp-32);
    }

    document.querySelector("#root .card-body").textContent=result;

}