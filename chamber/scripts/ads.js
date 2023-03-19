const url = "https://raw.githubusercontent.com/brysonm96/WDD230/main/chamber/data.json";

const getBusinesses = async () => {
  let businesses = await jsonFetch(url);
  displayBusinesses(businesses);
};

async function jsonFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.businesses;
}

const displayBusinesses = (businesses) => {
  const spotlight = document.querySelector("div.spotlight");
  spotlight.innerHTML = "";

  const filteredBusinesses = businesses.filter(
    (business) => business.membership === "Silver" || business.membership === "Gold"
  );

  const selectedBusinesses = [];
  while (selectedBusinesses.length < 3 && filteredBusinesses.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredBusinesses.length);
    selectedBusinesses.push(filteredBusinesses[randomIndex]);
    filteredBusinesses.splice(randomIndex, 1);
  }

  //Create the ads
  selectedBusinesses.forEach((business, index) => {
    let card = document.createElement("section");
    // Assign an id to each business named ad1, ad2, ad3
    card.setAttribute("id", `ad${index + 1}`);
    let h2 = document.createElement("h2");
    let stats = document.createElement("div");
    stats.classList.add("stats");
    let website = document.createElement("p");
    let logo = document.createElement("img");
    //What is Displayed
    h2.textContent = `${business.name}`;
    website.innerHTML = `<span class="label"></span><a href="${business.link}">${business.link}</a>`;
    

    logo.setAttribute("src", business.imageurl);
    logo.setAttribute(
      "alt",
      `${business.name} - ${business.order} Business`
    );
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "200");
    logo.setAttribute("height", "200");
    
    stats.appendChild(website);
    card.appendChild(h2);
    card.appendChild(stats);
    card.appendChild(logo);

    spotlight.appendChild(card);
  });
};

//Call function
getBusinesses();