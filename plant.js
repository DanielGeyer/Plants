const plants = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1597055181300-e3633a917c9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    name: "Ficus elastica",
    dob: "12/2/43",
    dow: "15/5/21",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1596547612397-1432a7a7d37d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    name: "Ficus lyara",
    dob: "2/17/08",
    dow: "21/3/21",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1612517907461-246e6b416c39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    name: "Monstera deliciousa",
    dob: "12/9/83",
    dow: "31/5/21",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1611211232932-da3113c5b960?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    name: "sansevieria",
    dob: "13/5/20",
    dow: "21/4/21",
  },
];

const container = document.querySelector(".container");

function onAddPlantClick() {
  addNewPlant({
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/5e8730ccab347a2207df8e09/1601290378160-U8X9TAFWC2YLWKZH7L60/ke17ZwdGBToddI8pDm48kEPmVUHmL76Y80SJb-UU5ap7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmjw4y9jm25X_CplAKqpK2fl76RMfwxizvjM9WGtJNquzuaPvVSmxpW0ffUszJXv58/DSC_9860.jpg?format=1500w",
    name: "syngonium podophyllum",
    dob: "13/2/19",
    dow: "14/5/21",
  });
}

for (let i = 0; i < plants.length; i++) {
  const imgUrl = plants[i].imgUrl;
  const name = plants[i].name;
  const dob = plants[i].dob;
  const dow = plants[i].dow;

  addNewPlant({ imgUrl, name, dob, dow });
}

/**
 * PLANT: 
 * {
    imgUrl:
      "https://images.unsplash.com/photo-1597055181300-e3633a917c9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    name: "Name: Ficus elastica",
    dob: "D.O.B: 12/2/43",
    dow: "Last watered: 15/5/21",
  } 
 */
function addNewPlant(plant) {
  const plantContainer = document.createElement("li");

  const plantImage = document.createElement("img");
  plantImage.src = plant.imgUrl;
  plantContainer.appendChild(plantImage);

  const plantName = document.createElement("h3");
  plantName.textContent = "Name:" + " " + plant.name;
  plantContainer.appendChild(plantName);

  const plantDOB = document.createElement("h3");
  plantDOB.textContent = "DOB:" + " " + plant.dob;
  plantContainer.appendChild(plantDOB);

  const plantDOW = document.createElement("h3");
  plantDOW.textContent = "DOW:" + " " + plant.dow;
  plantContainer.appendChild(plantDOW);

  container.appendChild(plantContainer);
}

const addPlantButton = document.querySelector(".greenButton");
const popUpWindow = document.querySelector(".addPlantContent");
addPlantButton.addEventListener("click", function () {
  popUpWindow.style.display = "block";
});

const closeButton = document.querySelector(".closeBtn");
closeButton.addEventListener("click", function () {
  popUpWindow.style.display = "none";
});
function getInputValue() {
  const nameInputValue = document.getElementById("name").value;
  const urlInputValue = document.getElementById("url").value;
  const dobInputValue = document.getElementById("popUpDob").value;
  const dowInputValue = document.getElementById("popUpDow").value;
  // alert(nameInputValue + urlInputValue + dobInputValue + dowInputValue);
  return {
    imgUrl: urlInputValue,
    name: nameInputValue,
    dob: dobInputValue,
    dow: dowInputValue,
  };
}

const submit = document.querySelector(".confirm");

submit.addEventListener("click", function () {
  popUpWindow.style.display = "none";
  addNewPlant(getInputValue());
});
