export async function loadProducts() {
  let response = await fetch('https://im-test-3b50f-default-rtdb.firebaseio.com/items.json');
  let products = await response.json();
  return products;
  
}