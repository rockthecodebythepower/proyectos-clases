function getHour () {
    const date = new Date();
    console.log(date.getSeconds());
}

document.querySelector("button").addEventListener("click", getHour);