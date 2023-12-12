//Fetch CV info från json
const cvIntroductionLocation = document.getElementById(
  "cvIntroduction-location"
);

async function addCVJson() {
  const response = await fetch("../json/about.json");

  if (response.ok) {
    const cvInfo = await response.json();
    const workplaces = cvInfo[1].workplaces;
    const workplacesList = document.getElementById("workplacesList");
    const educations = cvInfo[1].educations;
    const educationsList = document.getElementById("educationsList");
    const cvIntroductionElement = document.getElementById("cvIntroduction-location");
    const cvInformationElement = document.getElementById("cvInformation-location");
    cvIntroductionElement.textContent = cvInfo[0].cvIntroduction;
    cvInformationElement.textContent = cvInfo[0].cvInformation;

    workplaces.forEach((workplace) => {
      const listItem = document.createElement("li");
      // listItem.classList = "workplaces";
      listItem.innerHTML = `<div class ="workplaces"><h3>${workplace.title}</h3>
                              <p><strong>${workplace.workplace}</strong></p>
                              <p>${workplace.information}</p></div>`;
      workplacesList.appendChild(listItem);
    });

    educations.forEach((education) => {
      const listItem = document.createElement("li");
      // listItem.classList = "educations";
      listItem.innerHTML = `<div class="educations"><h3>${education.school}</h3>
                              <p><strong>${education.education}</strong></p>
                              <p>${education.information}</p></div>`;
      educationsList.appendChild(listItem);
    });
  }
}
addCVJson();

//Toggle arbetsplatser
//Skapad med inspiration och hjälp av W3Schools
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
// Dold per default var inte en del av guiden, löste detta med hjälp
// av google och skapade en klass som jag la på/tog bort i funktionen.

/* ------ Kommenterat ut denna delen av koden då jag gjorde om den utifrån feedback ------

const toggleWorkspaces = document.getElementById("toggle-workspace");
toggleWorkspaces.addEventListener("click", function(){
  if (workspacesDiv.classList.contains("hidden")) {
    workspacesDiv.classList.remove("hidden");
    workspacesDiv.style.display = "block"; // Ensure inline display is updated
  } else {
    workspacesDiv.classList.add("hidden");
    workspacesDiv.style.display = "none"; // Ensure inline display is updated
  }
});

Toggle visa/dölj utbildning
const toggleEducation = document.getElementById("toggle-education");
toggleEducation.addEventListener("click", function(){
  if (educationsDiv.classList.contains("hidden")) {
    educationsDiv.classList.remove("hidden");
    educationsDiv.style.display = "block";
  } else {
    educationsDiv.classList.add("hidden");
    educationsDiv.style.display = "none";
  }
});*/


// Gjort om denna kod då stylingen redan fanns i main.css, förenklat med samma funktionalitet

const toggleEducation = document.getElementById("toggle-education");
const educationsDiv = document.getElementById("educationsDiv");

toggleEducation.addEventListener("click", function () {
  educationsDiv.classList.toggle("hidden");
});
const toggleWorkspaces = document.getElementById("toggle-workspace");
const workspacesDiv = document.getElementById("workspacesDiv");

toggleWorkspaces.addEventListener("click", function () {
  workspacesDiv.classList.toggle("hidden");
});
