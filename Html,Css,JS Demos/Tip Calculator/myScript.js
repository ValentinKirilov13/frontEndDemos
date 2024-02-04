function takeValue() {

    let billAmount = parseFloat(document.getElementById('bill').value);
    let percentage = parseFloat(document.getElementById('percentage').value);

    if(billAmount <= 0 || document.getElementById('bill').value.length == 0){

        let error = document.getElementById('result')
        error.style.color = "red";
        let box = document.getElementById('bill');
        box.style.borderColor = "red";
        return error.innerHTML = " " + "Enter valid bill!"; 
    }
    else if(percentage <= 0 || document.getElementById('percentage').value.length == 0){

        let error = document.getElementById('result')
        error.style.color = "red";
        let box = document.getElementById('percentage');
        box.style.borderColor = "red";
        return error.innerHTML = " " + "Enter valid percentage!";

    }
    else
    {
        let result = billAmount + ((billAmount * percentage) / 100);
        document.getElementById('result').innerHTML = "$" + result.toFixed(2);
    }
}

function reset1(){

    let output = document.getElementById('result')

    if(output.textContent.length > 0){

        output.innerHTML = "";
        output.style.color = "black";
        let box = document.getElementById('bill');
        box.style.borderColor = "#e7e7e7";
        let box2 = document.getElementById('percentage');
        box2.style.borderColor = "#e7e7e7";
    }

}