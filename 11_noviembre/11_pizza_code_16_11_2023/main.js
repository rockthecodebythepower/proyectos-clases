import { createFoodImage } from "./src/components/FoodImage/FoodImage";
import { Header } from "./src/components/Header/Header";
import { foodImageArray } from "./src/data/foodImage";
import { Pizzas } from "./src/pages/Pizzas/Pizzas";
import "./style.css";

// esto es lo primero que ocurre en nuestra página al renderizarse
Header();
Pizzas();

createFoodImage(foodImageArray);