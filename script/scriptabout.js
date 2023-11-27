//Toggle arbetsplatser
//Skapad med inspiration och hjälp av W3Schools
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

const toggleWorkspaces = document.getElementById("toggle-workspace");
toggleWorkspaces.addEventListener("click", function(){
 if (workspacesDiv.style.display === 'none') {
  workspacesDiv.style.display = "block";
 } else { 
    workspacesDiv.style.display ="none";
  }
 }
);

//Toggle utbildning
const toggleEducation = document.getElementById("toggle-education");
toggleEducation.addEventListener("click", function(){
 if (educationsDiv.style.display === 'none') {
  educationsDiv.style.display = "block";
 } else { 
  educationsDiv.style.display ="none";
  }
 }
);

//Fetch CV info från json
const cvIntroductionLocation = document.getElementById(
  "cvIntroduction-location"
);

async function addCVJson() {
  const response = await fetch("../json/about.json");

  if (response.ok) {
    const cvInfo = await response.json();
    const workplaces = cvInfo[1].workplaces; 
    const workplacesList = document.getElementById('workplacesList');
    const educations = cvInfo[1].educations; 
    const educationsList = document.getElementById('educationsList');
const cvIntroductionElement = document.getElementById("cvIntroduction-location");
const cvInformationElement = document.getElementById("cvInformation-location");
cvIntroductionElement.textContent = cvInfo[0].cvIntroduction;
cvInformationElement.textContent = cvInfo[0].cvInformation;

    workplaces.forEach(workplace => {
        const listItem = document.createElement('li');
        // listItem.classList = "workplaces";
        listItem.innerHTML = `<div class ="workplaces"><h3>${workplace.title}</h3>
                              <p><strong>${workplace.workplace}</strong></p>
                              <p>${workplace.information}</p></div>`;
        workplacesList.appendChild(listItem);
      });

      educations.forEach(education => {
        const listItem = document.createElement('li');
        // listItem.classList = "educations";
        listItem.innerHTML = `<div class="educations"><h3>${education.school}</h3>
                              <p><strong>${education.education}</strong></p>
                              <p>${education.information}</p></div>`;
        educationsList.appendChild(listItem);
      });
    
  }
}
addCVJson();
