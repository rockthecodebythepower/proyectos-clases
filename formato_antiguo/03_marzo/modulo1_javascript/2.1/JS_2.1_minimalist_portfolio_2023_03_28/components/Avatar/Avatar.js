import "./Avatar.css";

export const Avatar = (item) => {
  return `
    <article class="avatar">
    <img src=${item.image} alt=${item.name}/>
    <h3>${item.name}</h3>
    </avatar>
    `;
};
