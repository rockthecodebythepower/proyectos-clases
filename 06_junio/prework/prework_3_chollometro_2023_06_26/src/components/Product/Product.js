import { guardados } from "../../data/guardados";
import { productos } from "../../data/products";
import { Comments } from "../Comments/Comments";
import "./Product.css";

export const printProduct = (product) => {
  return `
    <div class="product">
        <div class="product_img">
            <img src="${product.img}"/>
        </div>
        <div>
            <p>${product.degrees}º</p>
            <h3>${product.name}</h3>
            <div class="prices">
                <p class="final_price">${
                  product.price - (product.price * product.discount) / 100
                }€</p>
                <p class="original_price">${product.price}€</p>
                <p class="discount">(${product.discount}%)</p>
            </div>
            <p class="description">${product.description}</p>
            <div class="info_user">
                <div>
                    <img src="${product.img_user}"/>
                </div>
              <p>${product.user}</p>
            </div>
            <div class="icons">
                <img src="${guardados.includes(product) ? "/assets/relleno.png" : "/assets/guardar.png"}" class="icon save" id="${productos.indexOf(product)}"/>
                <div>
                    <img src="/assets/comente.png" class="icon comments" id="${productos.indexOf(product)}"/>
                    <p>${product.comments.length}</p>
                </div>
            </div>
        </div>
    </div>
`;
};

export const addEvents = () => {

    const imgsSave$$ = document.querySelectorAll(".save");
    const imgsComments$$ = document.querySelectorAll(".comments");

    for (const img$$ of imgsSave$$) {
        
        img$$.addEventListener("click", (e) => save(e))

    }

    for (const img$$ of imgsComments$$) {
        
        img$$.addEventListener("click", (e) => comments(e))

    }

}


const save = (e) => {

    if (guardados.includes(productos[parseInt(e.target.id)])) {
        e.target.src = "/assets/guardar.png";
        guardados.splice(guardados.indexOf(productos[parseInt(e.target.id)]), 1);
    } else {
        guardados.push(productos[parseInt(e.target.id)]);
        e.target.src = "/assets/relleno.png";
    }

}

const comments = (e) => {

    Comments(productos[parseInt(e.target.id)].comments);

}
