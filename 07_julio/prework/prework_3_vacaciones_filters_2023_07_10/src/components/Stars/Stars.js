export const renderStars = (rate) => {

    let stars = ``;

    for (let i = 1; i <= 5; i++) {
        
        if (i <= rate) {
            stars += `
                <img src="/estrella.png"/>
            `
        } else {
            stars += `
                <img src="/estrella-blanca.png"/>
            `
        }
        
    }

    return stars;

}