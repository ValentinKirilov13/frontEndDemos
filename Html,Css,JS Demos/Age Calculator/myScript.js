function takeValues(){

    let inputDate = document.getElementById('date').value;

    if(inputDate === ""){
        document.getElementById('result').style.color = "red";
        document.getElementById('date').style.borderColor = "red";
        return document.getElementById('result').innerHTML = "Enter valid date !";
    }

    let myDate = new Date(inputDate);
    let currDate = new Date();
     
    let yearsOld = currDate.getFullYear() - myDate.getFullYear();

    if (currDate.getMonth() + 1 == myDate.getMonth() + 1){
        
        if (currDate.getDate() < myDate.getDate()) {
            yearsOld--;
        }
    }
    else if(currDate.getMonth() + 1 < myDate.getMonth() + 1){
        yearsOld--;
    }

    document.getElementById('result').innerHTML = "You are " + yearsOld + " years old!";
}

function reset1(){

    let output = document.getElementById('result');

    if (output.textContent.length > 0) {
        output.innerHTML = "";
        document.getElementById('result').style.color = "black";
        document.getElementById('date').style.borderColor = "black";
        document.getElementById('date').value = "";
    }
}
