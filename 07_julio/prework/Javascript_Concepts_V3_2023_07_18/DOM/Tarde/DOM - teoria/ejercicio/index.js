const apps = [
  {
    nombre: "WhatsApp",
    icono:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
  },
  {
    nombre: "Instagram",
    icono:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png",
  },
  {
    nombre: "Facebook",
    icono: "https://www.facebook.com/images/fb_icon_325x325.png",
  },
  {
    nombre: "Twitter",
    icono:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png",
  },
  {
    nombre: "Spotify",
    icono: "https://m.media-amazon.com/images/I/51rttY7a+9L.png",
  },
  {
    nombre: "Netflix",
    icono:
      "https://cdn.icon-icons.com/icons2/3053/PNG/512/netflix_macos_bigsur_icon_189917.png",
  },
  {
    nombre: "YouTube",
    icono:
      "https://www.itespresso.es/wp-content/uploads/2018/06/YouTube.max-2800x2800.png",
  },
  {
    nombre: "Google Maps",
    icono:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png",
  },
  {
    nombre: "Airbnb",
    icono:
      "https://pbs.twimg.com/profile_images/1356350837283381248/I6Nm_yqh_400x400.png",
  },
];

const eliminar = (e) => {

    console.log(e);
    
    // lo que quiero eliminar
    // eliminar : remove()

    e.target.parentElement.remove()

}

for (const app of apps) {
    
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");

    p.textContent = "X";
    img.src = app.icono;

    p.addEventListener("click", eliminar)

    divImg.appendChild(p);
    divImg.appendChild(img);
    document.body.appendChild(divImg);

}