import axios from "axios";

export function GetProductData(id) {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then((response) => response.data);
}

export function getProductsByIds(ids) {
  const commaSeparatedIds = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: { ids: commaSeparatedIds },
    })
    .then((response) => response.data);
}

export function GetProductList({ sortBy, search, page, sortType }) {
  let params = {};

  if (sortBy) params.sortBy = sortBy;
  if (sortType) params.sortType = sortType;
  if (search) params.search = search;
  if (page) params.page = page;

  return axios
    .get("https://myeasykart.codeyogi.io/products", { params })
    .then((response) => response.data);
}

export function saveCartToServer(cart) {
  const token = localStorage.getItem("token");
  if (!token) return Promise.reject("No token");

  const formattedCart = cart.map((item) => ({
    productId: item.product.id,
    quantity: item.quantity,
  }));

  return axios
    .post("https://myeasykart.codeyogi.io/carts", formattedCart, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
}

export function getCartFromServer() {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found, cannot fetch cart!");
    return Promise.resolve([]); // ✅ consistent with response.data
  }

  return axios
    .get("https://myeasykart.codeyogi.io/carts", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
}
