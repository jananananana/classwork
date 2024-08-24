// Just for the sake of exercise,
// I'm writing a self invoking function to manipulate the html elements


(function main() {
    const getAnimalData = () => {
        return fetch('./Data.json')
        .then(response => response.json())
        .then(data => fillOutAnimals(data))
        .catch(error => console.log(error));
    }

    const fillOutAnimals = (data) => {
        createAnimalComponent(data);
        return console.log(data);
    }

    const appendElement = (elemNode, textNode, containerToAppend) => {
        let element = document.createElement(elemNode),
            text = document.createTextNode(textNode);
        
        element.appendChild(text);
        containerToAppend.appendChild(element);
        return element;
    }

    const createAnimalComponent = (animals) => {
        
        const elementToAttachTo = document.getElementById("animal-section");
        const animalArea = document.getElementById("animals-section");
 

        animals.forEach(animal => {
            // clone the section and insert it into main
            const section = animalArea.content.cloneNode(true);

            // grab the h2 and append the title text
            let h2 = section.querySelectorAll("h2");
            h2[0].textContent = animal.animal;

            // create the image
            let img = section.querySelectorAll("img");
            img[0].setAttribute("src", animal.imgurl);
            img[0].setAttribute("alt", animal.imgalt);


            // grab the li, clone it, and loop through names to append list items
            let ul = section.querySelectorAll("ul");

            // create the list items and pop the names of the animals in
            for (let i = 0; i < animal.names.length; i++) {
                ul[0].insertAdjacentHTML("beforeend", '<li class="animal-card__name">' + animal.names[i] + '</li>');
            }

            // add description
            let paragraph = section.querySelectorAll("p");
            paragraph[0].textContent = animal.desc;

            // fill in the link for more info
            let url = section.querySelectorAll("a");
            url[0].setAttribute("href", animal.linkurl);
            url[0].textContent = animal.linktext;

            elementToAttachTo.appendChild(section);
        });


        console.log(elementToAttachTo, animals);
    }

    getAnimalData();

    }



  )();
