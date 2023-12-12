// --------- PROJECT CARD MODAL ---------
// Modal funktionalitet på förstasidan
// Gör en koppling till ruta/bild
// Skapa modal som popar upp

//När jag fått modalen att fungera så la jag till en koppling till json för att minska kod i index. 
fetch('./json/projects.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObjects) {
    const popup = document.getElementById('popup');

    function createPopupElements(data) {
      const titleElement = document.createElement("h2");
      titleElement.textContent = data.projects[0].project;

      const infoElement = document.createElement("p");
      infoElement.textContent = data.projects[0].information; // Accessing project information

      popup.appendChild(titleElement);
      popup.appendChild(infoElement);

      const closeButton = document.createElement("button");
      closeButton.textContent = "Close";
      closeButton.addEventListener("click", closePopup);
      popup.appendChild(closeButton);
    }

    function openPopup() {
      popup.innerHTML = '';
      createPopupElements(jsonObjects[0]); // Passing the fetched data to createPopupElements
      popup.classList.add("open-popup");
    }

    function closePopup() {
      popup.classList.remove("open-popup");
    }

    const openButton = document.getElementById('openBtn');
    openButton.addEventListener('click', openPopup);

    popup.addEventListener("click", function(event) {
      if (event.target.tagName === "BUTTON") {
        closePopup();
      }
    });
  })
  .catch(function(error) {
    console.error('Something went wrong');
    console.error(error);
  });
