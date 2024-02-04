

function printButton(button){

    if (button.textContent === "+" || button.textContent === "-" || button.textContent === "/" || button.textContent === "*" ) {
        document.getElementById('result-text').innerHTML += " " + button.textContent + " ";
    }
    else{

        document.getElementById('result-text').innerHTML += button.textContent;
    }
}

function equal(){

    let screenText = document.getElementById('result-text').textContent.split(' ');

    let result;

    let firstNum = parseFloat(screenText[0]);
    let secondNum = parseFloat(screenText[2]);


    if (screenText[1] === "+") {

        result = firstNum + secondNum;

    }
    else if (screenText[1] === "-") {

        result = firstNum - secondNum;

    } 
    else if(screenText[1] === "*") {

        result = firstNum * secondNum;

    }
    else if(screenText[1] === "/"){

        result = firstNum / secondNum;

    }

    document.getElementById('result-text').innerHTML = result;

}

function clear1(){
    document.getElementById('result-text').innerHTML = "";
}