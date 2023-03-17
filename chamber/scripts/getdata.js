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
  const cards = document.querySelector("div.cards");
  cards.innerHTML = "";

  businesses.forEach((business) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let stats = document.createElement("div");
    stats.classList.add("stats");
    let date = document.createElement("p");
    let membership = document.createElement("p");
    let number = document.createElement("p");
    let website = document.createElement("p");
    let logo = document.createElement("img");

    h2.textContent = `${business.name}`;
    date.innerHTML = `<span class="label">Address: </span> ${business.address}`;
    number.innerHTML = `<span class="label">Phone #: </span> ${business.phone}`;
    website.innerHTML = `<span class="label"></span> ${business.link}`;
    membership.innerHTML = `<span class="label">Membership Level: </span> ${business.membership}`;
    

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