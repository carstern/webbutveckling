const cvIntroductionLocation = document.getElementById(
  "cvIntroduction-location"
);

async function addCVJson() {
  const response = await fetch("../about/about.json");

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
