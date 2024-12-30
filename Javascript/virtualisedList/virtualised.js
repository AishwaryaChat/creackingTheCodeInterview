const items = []

const itemHeight = 60;
const batchSize = 8;
let itemCount = items.length;
let totalItemCount = 0;
let offset = 0;
const container = document.getElementById("items-container");

const placeholder = document.createElement("div");
placeholder.style.height = `${itemCount * itemHeight}px`;
container.appendChild(placeholder);

const poolSize = Math.ceil(container.clientHeight / itemHeight)
const itemElements = [];
for (let i = 0; i < poolSize; i++) {
  const item = document.createElement("div");
  item.className = "list-item";
  container.appendChild(item);
  itemElements.push(item);
}

const renderItems = () => {
  const scrollTop = container.scrollTop;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(itemCount - 1, startIndex + poolSize - 1);
  for (let i = 0; i < poolSize; i++) {
      const itemIndex = startIndex + i;
    if (itemIndex <= endIndex) {
      const item = itemElements[i];
      const {title, price} = items[itemIndex]
      item.textContent = `${title}: ${price}`;
      item.style.top = `${itemIndex * itemHeight}px`;
    } else {
    //   itemElements[i].style.top = "-9999px";
    }
  }
  if(container.scrollTop + container.clientHeight >= container.scrollHeight && !loading && offset<totalItemCount) {
    fetchItems()
    
  }
};

let loading = false;
async function fetchItems() {
  if (loading) return;
  itemCount = items.length
  placeholder.style.height = `${itemCount * itemHeight}px`;
  loading = true;
  const response = await fetch(
    `https://dummyjson.com/products?limit=${batchSize}&skip=${offset}&select=title,price,images,dimensions`
  );
  const data = await response.json();
  items.push(...data.products)
  totalItemCount = data.total;
  offset += batchSize;
  loading = false;
  renderItems()
}



container.addEventListener("scroll", renderItems);
fetchItems()
