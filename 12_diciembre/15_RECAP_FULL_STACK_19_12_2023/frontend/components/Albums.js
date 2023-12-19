import axios from "axios";

const template = () => {
  return `
  <section>
    <ul id="albums"></ul>
  </section>
  <div>
    <input type="text" id="titleInput" placeholder="Title"/>
    <input type="text" id="artistInput" placeholder="Artist"/>
    <input type="text" id="coverInput" placeholder="Cover URL"/>
    <button id="createBtn">Create</button>
  </div>
  `;
};

const deleteAlbum = (id) => {
  axios.delete(`http://localhost:8080/api/v1/albums/${id}`).then((res) => {
    location.reload();
    console.log(res.data);
  });
};

const printAlbums = () => {
  const albumsContainer = document.querySelector("#albums");
  axios.get("http://localhost:8080/api/v1/albums").then((res) => {
    for (const album of res.data) {
      const deleteBtn = document.createElement("button");
      deleteBtn.addEventListener("click", () => {
        deleteAlbum(album._id);
      });
      deleteBtn.innerText = "Delete";

      const li = document.createElement("li");
      li.innerHTML = `
      <img src=${album.cover} alt=${album.title}/>
      <h2>${album.artist}</h2>
      <h3>${album.title}</h3>
    `;
      li.appendChild(deleteBtn);
      albumsContainer.appendChild(li);
    }
  });
};

const createAlbums = () => {
  const titleInput = document.querySelector("#titleInput");
  const artistInput = document.querySelector("#artistInput");
  const coverInput = document.querySelector("#coverInput");
  const createBtn = document.querySelector("#createBtn");

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
  container.innerHTML = template();
  printAlbums();
  createAlbums()
};

export default Albums;
