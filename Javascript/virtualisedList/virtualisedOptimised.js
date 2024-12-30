const items = new Map(); // Use a Map to store items by their index

const itemHeight = 60;
const batchSize = 8;
let totalItemCount = 0;
let offset = 0;
const cacheSize = 50; // Number of items to keep in memory
const container = document.getElementById("items-container");

const placeholder = document.createElement("div");
placeholder.style.height = `${offset * itemHeight}px`;
container.appendChild(placeholder);

const poolSize = Math.ceil(container.clientHeight / itemHeight) + batchSize;
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
  const endIndex = Math.min(totalItemCount - 1, startIndex + poolSize - 1);

  for (let i = 0; i < poolSize; i++) {
    const itemIndex = startIndex + i;
    const item = itemElements[i];

    if (itemIndex <= endIndex) {
      if (items.has(itemIndex)) {
        const { title, price } = items.get(itemIndex);
        item.textContent = `${title}: ${price}`;
      } else {
        item.textContent = "Loading...";
        fetchItem(itemIndex);
      }
      item.style.top = `${itemIndex * itemHeight}px`;
    } else {
      item.textContent = "";
      item.style.top = "-9999px"; // Hide the item
    }
  }

  if (container.scrollTop + container.clientHeight >= container.scrollHeight && !loading && offset < totalItemCount) {
    fetchItems();
  }
};

let loading = false;
async function fetchItems() {
  if (loading) return;
  loading = true;
  const response = await fetch(
    `https://dummyjson.com/products?limit=${batchSize}&skip=${offset}&select=title,price`
  );
  const data = await response.json();
  totalItemCount = data.total;
  offset += batchSize;

  data.products.forEach((product, index) => {
    items.set(offset + index - batchSize, product);
  });

  // Adjust the height of the placeholder dynamically
  placeholder.style.height = `${totalItemCount * itemHeight}px`;

  // Remove items that are outside of the cache range
  const currentStartIndex = Math.floor(container.scrollTop / itemHeight);
  for (let [key] of items) {
    if (key < currentStartIndex - cacheSize || key > currentStartIndex + cacheSize + poolSize) {
      items.delete(key);
    }
  }

  loading = false;
  renderItems();
}

async function fetchItem(index) {
  if (items.has(index)) return;

  const response = await fetch(
    `https://dummyjson.com/products?limit=1&skip=${index}&select=title,price`
  );
  const data = await response.json();

  items.set(index, data.products[0]);
  renderItems();
}

container.addEventListener("scroll", renderItems);
fetchItems();
