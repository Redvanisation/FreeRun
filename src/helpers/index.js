export const formatPrice = price => (
  `$${(price * 0.1).toFixed(2)}`
);

export const totalPrice = items => {
  const result = items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
  return (result * 0.1).toFixed(2);
}

// export const fetchData = async (url, method) => {
//   const response = await axios.get(url);
//   method(response.data);
// }