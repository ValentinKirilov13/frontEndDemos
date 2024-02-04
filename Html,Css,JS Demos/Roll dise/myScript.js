


function rollDice(){
    
    let result = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById("currDice").style. visibility = "hidden";
    document.getElementById("rolling").style. visibility = "visible";
    
    setTimeout(() => { 

        switch (result) {
            case 1:
                document.getElementById("currDice").src = "Pictures/one.png";
                break;

            case 2:
                document.getElementById("currDice").src = "Pictures/two.png";
                break;

            case 3:
                document.getElementById("currDice").src = "Pictures/three.png";
                break;

            case 4:
                document.getElementById("currDice").src = "Pictures/four.png";
                break;

            case 5:
                document.getElementById("currDice").src = "Pictures/five.png";
                break;

            case 6:
                document.getElementById("currDice").src = "Pictures/six.png";
                break;

            default:
                break;
        }

        document.getElementById("rolling").style. visibility = "hidden";
        document.getElementById("currDice").style.visibility = "visible";
        addDiv();   

    }, 2000);  
}

let count = 1;

function addDiv(){

    let newDiv = document.createElement("div");
    newDiv.classList.add("result");

    let newParagraph = document.createElement("p");
    
    let newImg = document.createElement("img");


    newParagraph.textContent = "Roll " + count + ":";

    newImg.src =  document.getElementById("currDice").src;


    newDiv.appendChild(newParagraph);
    newDiv.appendChild(newImg);

    document.getElementById("box").appendChild(newDiv);

    count++;
}