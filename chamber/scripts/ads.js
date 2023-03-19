const url = "https://raw.githubusercontent.com/brysonm96/WDD230/main/chamber/data.json";

const getBusinesses = async () => {
  let businessData = await jsonFetch(url);
  displayBusinesses(businessData);
};

async function jsonFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.businessData;
}

const displayBusinesses = (businessData) => {
  const cards = document.querySelector("div.spotlight");
  const chosenAds = [];
  cards.innerHTML = "";

  for (let i = 0; i < 3; i++ ){

}


  //Create the card
  businessData.forEach((business) => {
    let card = document.createElement("section");
    card.setAttribute("id", "ad");
    let h2 = document.createElement("h2");
    let stats = document.createElement("div");
    stats.classList.add("stats");
    let date = document.createElement("p");
    let membership = document.createElement("p");
    let number = document.createElement("p");
    let website = document.createElement("p");
    let logo = document.createElement("img");

    //What is Displayed
    h2.textContent = `${business.name}`;
    date.innerHTML = `<span class="label">Address: </span> ${business.address}`;
    number.innerHTML = `<span class="label">Phone #: </span> ${business.phone}`;
    website.innerHTML = `<span class="label"></span> ${business.link}`;
    
    

    logo.setAttribute("src", business.imageurl);
    logo.setAttribute(
      "alt",
      `${business.name} - ${business.order} Business`
    );
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "200");
    logo.setAttribute("height", "200");
    stats.appendChild(date);
    stats.appendChild(number);
    stats.appendChild(website);
    stats.appendChild(membership);
    

    card.appendChild(h2);
    card.appendChild(stats);
    card.appendChild(logo);

    cards.appendChild(card);
  });
};

getBusinesses();