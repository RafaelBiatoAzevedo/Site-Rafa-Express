export const requestCategories = async () => {
  const requestFecth = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJSON = await requestFecth.json();
  return requestJSON;
}

export const requestProducts = async (category) => {
  const requestFecth = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`);
  const requestJSON = await requestFecth.json();
  return requestJSON;
}

export const requestProductsByName = async (name) => {
  const requestFecth = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${name}`);
  const requestJSON = await requestFecth.json();
  return requestJSON;
}
