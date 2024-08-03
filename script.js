const BASE_URL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_0QJfbRrko3jfjU8eOBbuy1iyRZkwUGcaOeuLdXUm";

let btn = document.querySelector(".btn");

const dropdowns = document.querySelectorAll(".dropdown select");
let from_curr = document.querySelector(".From select");
let to_curr = document.querySelector(".To select");
const msg = document.querySelector(".msg");

window.addEventListener("load", () => {
  updateExchangeRate();
});
for (let select of dropdowns) {
  for (let currcode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = currcode;
    newoption.value = currcode;
    if (select.name === "from" && currcode === "USD") {
      newoption.selected = "selected";
    } else if (select.name === "to" && currcode === "INR") {
      newoption.selected = "selected";
    }
    select.append(newoption);
  }

  select.addEventListener("change", (event) => {
    Flag(event.target);
  });
}

const Flag = (element) => {
  let currcode = element.value;
  let countrycode = countryList[currcode];
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

btn.addEventListener("click", (event) => {
  event.preventDefault();
  updateExchangeRate();
});

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtval = amount.value;
  if (amtval === "" || amtval <= 0) {
    amount.value = "1";
  }

  const URL = `${BASE_URL}&base_currency=${from_curr.value.toUpperCase()}&currencies=${to_curr.value.toUpperCase()}`;

  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    let rate = data.data[to_curr.value].value;
    let finalAmt = amtval * rate;
    msg.innerText = `${amtval}${from_curr.value} = ${finalAmt} ${to_curr.value}`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
