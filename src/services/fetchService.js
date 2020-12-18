import httpService from "./httpService";
import config from "../config.json";
import { getUserData } from "./authService";

export function getProducts() {
  return httpService.get(config.getProducts);
}

export function addToCart(item) {
  let userId = getUserData();
  let itemData = {
    userId,
    item,
  };
  return httpService.post(config.addToCart, itemData);
}

export function removeFromCart(productid) {
  let userId = getUserData();
  let prodData = {
    userId,
    productid,
  };
  return httpService.post(config.removeFromCart, prodData);
}

export function getCartItems() {
  const userId = getUserData();
  let data = {
    userId,
  };
  return httpService.post(config.getCartItems, data);
}

export function getOrders() {
  const userId = getUserData();
  let data = {
    userId,
  };
  return httpService.post(config.getOrders, data);
}

export function addOrder(
  products,
  address,
  size,
  height,
  shoulders,
  bodyType,
  bodyFit
) {
  const userId = getUserData();
  let data = {
    userId,
    products,
    address,
    size,
    height,
    shoulders,
    bodyType,
    bodyFit,
  };
  return httpService.post(config.addOrder, data);
}

export function getCustomisations() {
  return httpService.get(config.getCustomisations);
}

export function getCouponByCode(code) {
  return httpService.post(config.getCouponByCode, { code });
}

export function login(data) {
  return httpService.post(config.login, data);
}

export function register(data) {
  return httpService.post(config.register, data);
}

export function getProfileDetails(dataConfig) {
  return httpService.get(config.getProfileDetails, dataConfig);
}

export function addProduct(product) {
  return httpService.post(config.addProduct, product);
}
