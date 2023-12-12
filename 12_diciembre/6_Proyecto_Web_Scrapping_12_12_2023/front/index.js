const button = document.querySelector("button");

const getImages = async () => {

    const input = document.querySelector(".buscar");

    pintarLoading();

    const res = await fetch(`http://localhost:3000/api/v1/${input.value}`);

    const imgs = await res.json();

    pintarImgs(imgs);

}

const pintarLoading = () => {

    const divImgs = document.querySelector(".imgs");

    divImgs.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        divImgs.innerHTML += `
            <div class="skeleton">

            </div>
        `
    }
}

const pintarImgs = (imgs) => {

    const divImgs = document.querySelector(".imgs");

    divImgs.innerHTML = "";

    for (const img of imgs) {
        divImgs.innerHTML += `
            <div class="img-wrp">
                <img src="${img}">
            </div>
        `
    }
}

button.addEventListener("click", getImages);