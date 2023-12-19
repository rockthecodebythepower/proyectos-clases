import axios from "axios";

const template = () => {
  return `
  <section>
    <ul id="albums"></ul>
  </section>
  <div class="form">
    <input type="text" id="titleInput"/ placeholder="Title">
    <input type="text" id="artistInput"/ placeholder="Artist">
    <input type="text" id="coverInput"/ placeholder="Cover">
    <button id="createbtn">Create</button>
  </div>
  `;
};

const deleteAlbum = (id) => {
  axios.delete(`http://localhost:8080/api/v1/albums/${id}`).then((res) => {
    console.log(res.data);
    location.reload();
  });
};

const printAlbums = () => {
  const albumsContainer = document.querySelector("#albums");
  axios.get("http://localhost:8080/api/v1/albums").then((res) => {
    for (const album of res.data) {
      albumsContainer.innerHTML += `
        <li>
          <img src=${album.cover} alt=${album.title}/>
          <h2>${album.artist}</h2>
          <h3>${album.title}</h3>
          <button class="deleteBtn">Delete</button>
        </li>
        `;

      document
        .querySelector(".deleteBtn")
        .addEventListener("click", () => deleteAlbum(album._id));
    }
  });
};

const createAlbums = () => {
  const titleInput = document.querySelector("#titleInput");
  const artistInput = document.querySelector("#artistInput");
  const coverInput = document.querySelector("#coverInput");
  const createBtn = document.querySelector("#createbtn");

  createBtn.addEventListener("click", () => {
    axios
      .post("http://localhost:8080/api/v1/albums", {
        title: titleInput.value,
        artist: artistInput.value,
        cover: coverInput.value,
      })
      .then((res) => {
        console.log(res.data);
        location.reload();
      });
  });
};

const Albums = () => {
  const container = document.querySelector("#app");
  container.innerHTML += template();
  printAlbums();
  createAlbums();
};

export default Albums;
