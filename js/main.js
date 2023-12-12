import countriesData from "./countriesData.js";

let inputField = document.getElementById("inputField");

let countryList = document.getElementById("countryList");

let icon = document.querySelector(".icon")



inputField.addEventListener("keyup", () => {

  let matchedcountry = countriesData.filter((matchedcountry) => matchedcountry.name.toLowerCase().includes(inputField.value.toLowerCase()))
  console.log(matchedcountry);

  const listItemsHTML = matchedcountry.map(country => `<li data-value="${country.name}"><img src='${country.url}'/> ${country.name}</li>`);
  
  countryList.innerHTML = `<ul class="list-unstyled" >${listItemsHTML.join('')}</ul>`;

  if(inputField.value.length == 0)
  {
    countryList.classList.remove("d-block");
    countryList.classList.add("d-none");
  }
  else
  {
    countryList.classList.remove("d-none");
    countryList.classList.add("d-block");
  }

  countryList.addEventListener("click" , (event) => {
    let specificCountry = event.target;

    inputField.value = specificCountry.dataset.value;
    countryList.classList.add("d-none");
  })
  
});

icon.addEventListener("click" , () =>{
  
  icon.classList.toggle("active");
  if(icon.classList.contains("active"))
  {
    document.querySelector("#inputField").classList.remove("w-100")
    document.querySelector("#inputField").classList.remove("maha")

  }
  else{
    document.querySelector("#inputField").classList.add("w-100")
    document.querySelector("#inputField").classList.add("maha")

  }
})



