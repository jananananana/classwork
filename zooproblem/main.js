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
        
        let elementToAttachTo = document.getElementById("animal-section");
        
        animals.forEach(animal => {
           if (!elementToAttachTo.hasChildNodes()) {
            // create section element
            // give it a class
            // add 
            // const newElement = document.createElement("section").setAttribute("class", "animal-area");
            // const newContent = document.createTextNode("Hi there and greetings!");
            // newElement.appendChild(newContent);

            elementToAttachTo = appendElement("section", animal.animal, elementToAttachTo);
            
            // elementToAttachTo.appendChild(newElement);
            // elementToAttachTo = newElement;
            
            
        } else {
            //    const currentDiv = document.getElementById("div1");
            //    document.body.insertBefore(newDiv, currentDiv);

           }




        });


        console.log(elementToAttachTo, animals);
    }

    getAnimalData();

    }



  )();
