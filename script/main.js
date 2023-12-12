// --------- PROJECT CARD MODAL ---------
// Modal funktionalitet på förstasidan

/*När jag fick modalen att fungera på ett kort så 
la jag till en koppling till json för att minska kod i index. */
async function projectJson() {
  try {
    const response = await fetch("./json/projects.json");
    const jsonObjects = await response.json();
// Länka till popup-rutan
    const popup = document.getElementById("popup");
// Skapa text-elementen i popup
    function createPopupElements(data) {
      const titleElement = document.createElement("h2");
      titleElement.textContent = data.project;

      const infoElement = document.createElement("p");
      infoElement.textContent = data.information;
// Apenda elementen
      popup.appendChild(titleElement);
      popup.appendChild(infoElement);
// Skapa och apenda stäng-knapp
      const closeButton = document.createElement("button");
      closeButton.textContent = "Close";
      closeButton.addEventListener("click", closePopup);
      popup.appendChild(closeButton);
    }

    // Koppla knapparna jag lagt på korten
    const buttons = document.querySelectorAll(".project-links");
    /* Skrev en forEach för att kunna applicera functionerna på alla kort.
  Stötte på problem där varje kort öppnade nästa json-index, märkt kod är med hjälp av forum */
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const projectId = button.id.slice(-1); // Med hjälp av google korrigerade jag missmatch mellan index/knappar
        const selectedProject = jsonObjects[0].projects[projectId - 1]; // Justerade även index för att korrigera missmatch
        openPopup(selectedProject);
      });
    });

    // Öppna modal vid knapptryck
    function openPopup(data) {
      popup.innerHTML = "";
      createPopupElements(data);
      popup.classList.add("open-popup");
    }
    // Funktion för att stänga modal
    function closePopup() {
      popup.classList.remove("open-popup");
    }
    // Stäng modal vid knapptryck
    popup.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        closePopup();
      }
    }); // Logga eventuella fel
  } catch (error) {
    console.error("Something went wrong");
    console.error(error);
  }
}

projectJson();
