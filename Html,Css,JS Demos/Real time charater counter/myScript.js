


function countChar(textarea){

    let lenght = textarea.value.length;

    document.getElementById('total-result').innerHTML = lenght;
    document.getElementById('remaining-result').innerHTML = 50-lenght;
}