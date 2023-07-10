import "./Price.css";

export const getPrice = (costo) => {

    let price = ``;

    for (let i = 0; i < costo; i++) {
        
        price += `$`
        
    }

    return price;

} 