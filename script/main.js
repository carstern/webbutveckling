// --------- PROJECT CARD MODAL ---------
// Modal funktionalitet på förstasidan
// Gör en koppling till varje ruta/bild
// Ta bort länkningen från dessa rutor mot aboutsidan
// Gör hela bilden klickbar istället för endast textrutan
// Skapa modal som popar upp
// Gör det möjligt att stänga modalen och återgå till förstasidan

const popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add("open-popup");
    // Check if the text element already exists
    const existingTextElement = document.querySelector('.open-popup p');
    
    if (!existingTextElement) {
        const textElement = document.createElement('p');
        textElement.innerHTML = "New textinfo";
        popup.appendChild(textElement);
    }
}
function closePopup(){
    popup.classList.remove("open-popup");
}




