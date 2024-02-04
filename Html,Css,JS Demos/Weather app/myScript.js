
const apiKey = "5e516dee2a850a96473d51b85223cbce";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";


async function checkWeather(){

    let city = document.getElementById('city').value;
    let responce;
    let data;
    let weather;
    let box = document.getElementById('container');

    try {
        responce = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
        data = await responce.json();
        weather = data.weather[0].main;
    } catch (error) {
        box.style.fontSize = "30px";
        box.style.marginTop = "30px";
        box.style.color = "red";
        return  box.innerHTML = "An error happaned, please try again later";
    }
   
    box.innerHTML = "";
    box.style.color = "black";
    box.style.fontSize = "0px";
    box.style.marginTop = "0px";

    let img = document.createElement('img');
    img.src = `Pictures/${weather}.png`;
    box.appendChild(img);

    let paragraph = document.createElement('p');
    paragraph.textContent = weather;
    paragraph.style.fontSize = "30px";
    paragraph.style.marginBottom = "20px";
    box.appendChild(paragraph);

    let temp = document.createElement('h1');
    temp.textContent = Math.round(data.main.temp) + " °C";
    temp.style.fontSize = "50px";
    temp.style.paddingLeft= "30px";
    box.appendChild(temp);

    let town = document.createElement('p');
    town.textContent = city;
    town.classList.add("town");
    town.style.fontSize = "40px";   
    town.style.marginTop = "20px";
    town.style.marginBottom = "20px";
    box.appendChild(town);

    let divContainer = document.createElement("div");
    divContainer.style.display = "grid";
    divContainer.style.gridTemplateColumns = "repeat(3,1fr)";
    divContainer.style.marginLeft = "30px";
    box.appendChild(divContainer);

    let firstDiv = document.createElement('div');
    firstDiv.textContent = "Feels like:"
    let firstP = document.createElement('p');
    firstP.textContent =  Math.round(data.main.feels_like) + " °C";
    firstP.style.fontSize = "30px";
    firstP.style.marginTop = "10px";
    firstDiv.appendChild(firstP);
    firstDiv.style.width = "130px";
    firstDiv.style.height = "85px";
    firstDiv.style.padding = "20px";
    firstDiv.style.backgroundColor = "#bebebe";
    firstDiv.style.fontSize = "20px";
    firstDiv.style.borderRadius = "10px";
    firstDiv.style.boxShadow = "2px 2px 10px 2px #66f2ed";
    divContainer.appendChild(firstDiv);

    let secondDiv = document.createElement('div');
    secondDiv.textContent = "Humidity: " + data.main.humidity + " %";
    secondDiv.style.width = "130px";
    secondDiv.style.height = "85px";
    secondDiv.style.padding = "20px";
    secondDiv.style.backgroundColor = "#bebebe";
    let seconImg = document.createElement('img');
    seconImg.src = `Pictures/humidity.png`;
    seconImg.style.width = "40px";
    seconImg.style.height = "40px";
    seconImg.style.marginTop = "20px";
    secondDiv.appendChild(seconImg);
    secondDiv.style.fontSize = "20px";
    secondDiv.style.borderRadius = "10px";
    secondDiv.style.boxShadow = "2px 2px 10px 2px #66f2ed";
    divContainer.appendChild(secondDiv);

    let thirdDiv = document.createElement('div');
    thirdDiv.textContent = "Wind speed: " + data.wind.speed + " m/s";
    thirdDiv.style.display = "inline-block";
    thirdDiv.style.width = "130px";
    thirdDiv.style.height = "85px";
    thirdDiv.style.padding = "20px";
    thirdDiv.style.backgroundColor = "#bebebe";
    thirdDiv.style.fontSize = "20px";
    let thirdImg = document.createElement('img');
    thirdImg.src = `Pictures/wind.png`;
    thirdImg.style.width = "40px";
    thirdImg.style.height = "40px";
    thirdImg.style.display = "block";
    thirdImg.style.margin= "auto";
    thirdImg.style.marginTop = "5px";
    thirdDiv.appendChild(thirdImg);
    thirdDiv.style.borderRadius = "10px";
    thirdDiv.style.boxShadow = "2px 2px 10px 2px #66f2ed";
    divContainer.appendChild(thirdDiv);
}

