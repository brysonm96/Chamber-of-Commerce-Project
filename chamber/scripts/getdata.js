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
    let place = document.createElement("p");
    let num = document.createElement("p");
    let portrait = document.createElement("img");

    h2.textContent = `${business.name}`;
    date.innerHTML = `<span class="label">Address: </span> ${business.address}`;
    place.innerHTML = `<span class="label">Phone #: </span> ${business.phone}`;
    num.innerHTML = `<span class="label"></span> ${business.link}`;
    membership.innerHTML = `<span class="label">Membership Level: </span> ${business.membership}`;
    

    portrait.setAttribute("src", business.imageurl);
    portrait.setAttribute(
      "alt",
      `${business.name} - ${business.order} Business`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");
    stats.appendChild(date);
    stats.appendChild(place);
    stats.appendChild(num);
    stats.appendChild(membership);
    

    card.appendChild(h2);
    card.appendChild(stats);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

getBusinesses();