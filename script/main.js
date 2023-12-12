// --------- PROJECT CARD MODAL ---------
// Modal funktionalitet på förstasidan


//När jag fått modalen att fungera så la jag till en koppling till json för att minska kod i index. 
async function projectJson() {
    try {
      const response = await fetch('./json/projects.json');
      const jsonObjects = await response.json();
      //Skapa länk till modalen
      const popup = document.getElementById('popup');
        // Skapa element där min json data placeras
      function createPopupElements(data) {
        const titleElement = document.createElement("h2");
        titleElement.textContent = data.projects[0].project;
  
        const infoElement = document.createElement("p");
        infoElement.textContent = data.projects[0].information;
  // Appenda de skapade elementen
        popup.appendChild(titleElement);
        popup.appendChild(infoElement);
  // Stäng-knapp inuti modalen
        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.addEventListener("click", closePopup);
        popup.appendChild(closeButton);
      }
  // Öppna-knapp
  const openButton = document.getElementById('openBtn');
  openButton.addEventListener('click', openPopup);

//Funktion för att öppna modalen
      function openPopup() {
        popup.innerHTML = ''; 
        createPopupElements(jsonObjects[0]);
        popup.classList.add("open-popup");
      }
  //Funktion för att stänga modalen
      function closePopup() {
        popup.classList.remove("open-popup");
      }
  

      popup.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
          closePopup();
        }
      }); // Logga error
    } catch (error) {
      console.error('Something went wrong');
      console.error(error);
    }
  }
  
  projectJson();
  