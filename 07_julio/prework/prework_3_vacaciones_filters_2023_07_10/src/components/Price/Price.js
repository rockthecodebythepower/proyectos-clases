export const renderPrice = (price) => {

    let priceText = ``;

    for (let i = 0; i < price; i++) {
        
        priceText += `$`
        
    }

    return priceText;

}