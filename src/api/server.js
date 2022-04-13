export async function loadProducts() {
  const response = await fetch('https://im-test-3b50f-default-rtdb.firebaseio.com/items.json');
  const products = await response.json();
  return products;
}
