
let totalItems = 0;
let offset = 0;
let limit = 10;
let loading = false;
async function fetchItems() {
  if (loading) return;
  loading = true;
  // const loadingDiv = document.getElementById("loading");
  // loadingDiv.style.display = "block";
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${offset}&select=title,price,images,dimensions`
  );
  const data = await response.json();
  const items = data.products;
  totalItems = data.total;
  offset += limit;
  const response1 = await fetch(
    `https://api.rechargeapps.com/subscriptions?limit=10&cursor=0`
  );
  
//   console.log("offset", offset);
  // loadingDiv.style.display = "none";
  loading = false;
  showItems(items);
}

const itemContainer = document.getElementById("items-container");

function getItem(item) {
  const {
    id,
    title,
    price,
    images,
    dimensions: { width, height },
  } = item;
  const itemDiv = document.createElement("div");
  itemDiv.setAttribute("id", id);
  itemDiv.className = "flex-class item padding-20";
  const titleDiv = document.createElement("div");
  titleDiv.textContent = title + ":";
  const priceDiv = document.createElement("div");
//   const imgDiv = document.createElement("img");
//   imgDiv.setAttribute("src", images[0]);
  //   imgDiv.style.width = width;
  //   imgDiv.style.height = height;
//   imgDiv.className = "productImg";
  priceDiv.textContent = price;
  priceDiv.className = "price";
  itemDiv.appendChild(titleDiv);
  itemDiv.appendChild(priceDiv);
//   itemDiv.appendChild(imgDiv);
  return itemDiv;
}

function showItems(items) {
  items.forEach((item) => {
    itemContainer.appendChild(getItem(item));
  });
}

function debounce(f) {
  let t;
  return function () {
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      f();
    }, 100);
  };
}

function throttle(f) {
  let t;
  return function () {
    if (t) return;
    t = setTimeout(() => {
      f();
      clearTimeout(t);
    }, 100);
  };
}

function checkScroll() {
    const output = document.querySelector("#output");
const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");
const output3 = document.querySelector("#output3");
const output4 = document.querySelector("#output4");
output.textContent = "scrollTop: " + itemContainer.scrollTop;
output1.textContent = "scrollHeight: " + itemContainer.scrollHeight;
output2.textContent = "clientHeight: " + itemContainer.clientHeight;
const scrollBarHeight = itemContainer.clientHeight - itemContainer.scrollTop
// output3.textContent = "scrollBarHeight: " + scrollBarHeight;
output4.textContent = "offsetHeight: " + itemContainer.offsetHeight;
if (
    itemContainer.scrollTop + itemContainer.clientHeight >=
      itemContainer.scrollHeight &&
    !loading &&
    offset < totalItems
  ) {
    fetchItems();
  }
}

fetchItems();
const debouncedScroll = debounce(checkScroll);
//   const throttledScroll = throttle(checkScroll)

document
  .getElementById("items-container")
  .addEventListener("scroll", debouncedScroll);


