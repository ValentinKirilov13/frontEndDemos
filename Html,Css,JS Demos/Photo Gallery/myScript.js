

function getPhotos(){

    let num = parseInt(document.getElementById("num").value);

    if (num <= 0 || num >= 11) {
        return document.getElementById('error').style.visibility = "visible";
    }
    else{
        document.getElementById('error').style.visibility = "hidden";
        document.getElementById("container").innerHTML = "";
    }
    
    let passed = [];

    for (let i = 1; i <= num; i++) {
        
        let randomIndex = Math.floor(Math.random() * 22) + 1;
        
        while (passed.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * 22) + 1;
        }

        const randomImageSrc = `Pictures/image${randomIndex}.jpg`;

        let newImg = document.createElement("img");
        newImg.src = randomImageSrc;

        document.getElementById("container").appendChild(newImg);

        passed.push(randomIndex);
    } 
}

  
  
  
  