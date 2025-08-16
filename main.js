let names = ["Fatma", "Asmaa", "Abduallah", "Ahmed"]; // 0:3
let ages = ["23 Years Old", "17 Years Old", "15 Years Old", "30 Years Old"]; // 0:3

let container = document.createElement("div");
container.style.textAlign = "center";
container.style.backgroundColor = "lightblue";
container.style.width = "100%";

document.body.appendChild(container);

function element(personName, personAge) {
    // elements
    let card = document.createElement("div");
    let name = document.createElement("h2");
    let age = document.createElement("p");
    let image = document.createElement("img");

    // content
    let nameValue = document.createTextNode(personName);
    let ageValue = document.createTextNode(personAge);
    image.src = "/images/user.png";


    name.appendChild(nameValue);
    age.appendChild(ageValue);

    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(image);

    container.appendChild(card);

    card.style.width = '200px';
    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';
    image.style.width = '100%';
}

for (let i = 0; i < 4; i++) {
    element(names[i], ages[i]);
}

