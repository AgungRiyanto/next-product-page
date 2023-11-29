export const getProducts = async() => {
  try {
   const res = await fetch('https://dummyjson.com/products');
   const resJson = await res.json();
   return resJson;
  } catch (e) {}
}

export const searchProduct = async(q: string) => {
  try {
   const res = await fetch('https://dummyjson.com/products/search?q='+q);
   const resJson = await res.json();
   return resJson;
  } catch (e) {}
}

export const productById = async(productId: number) => {
  try {
   const res = await fetch('https://dummyjson.com/products/'+ productId);
   const resJson = await res.json();
   return resJson;
  } catch (e) {}
}