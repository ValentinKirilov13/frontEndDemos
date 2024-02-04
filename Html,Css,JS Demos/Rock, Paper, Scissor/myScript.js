
const moves = ['rock', 'paper', 'sicssors'];


function chooseMove(button){
    
    let result = document.getElementById('result');

    let randomIndex = Math.floor(Math.random() * moves.length);

    let myMove = button.id;
    let comMove = moves[randomIndex];

    if (myMove === "rock") {

        if (comMove === "rock") {
            result.innerHTML = "It's tie!";
        }
        else if (comMove === "paper") {
            result.innerHTML = "You lose! paper beats rock";
            document.getElementById('comScore').textContent++;
        }
        else{
            result.innerHTML = "You win! rock beats sicssors";
            document.getElementById('myScore').textContent++;
        }
    }
    else if (myMove === "paper") {

        if (comMove === "rock") {
            result.innerHTML = "You win! paper beats rock";
            document.getElementById('myScore').textContent++;
        }
        else if (comMove === "paper") {
            result.innerHTML = "It's tie!";
        }
        else{
            result.innerHTML = "You lose! sicssors beats paper";
            document.getElementById('comScore').textContent++;
        }
    }
    else if (myMove === "sicssors") {

        if (comMove === "rock") {
            result.innerHTML = "You lose! rock beats sicssors";
            document.getElementById('comScore').textContent++;
        }
        else if (comMove === "paper") {
            result.innerHTML = "You win! sicssors beats paper";
            document.getElementById('myScore').textContent++;
        }
        else{
            result.innerHTML =  "It's tie!";
        }
    }
}