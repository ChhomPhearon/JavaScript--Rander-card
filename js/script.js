"use strict";

import {cardProducts} from "../components/cardProduct.js";
import { getData } from "../store/fetchApi.js";

const renderArea = document.querySelector("#render-area");

const product = await getData("products");
const producsdates = product.products;
console.log(producsdates)
const users = await getData("users");

producsdates.map((product) => {
    renderArea.innerHTML += cardProducts(product)
});