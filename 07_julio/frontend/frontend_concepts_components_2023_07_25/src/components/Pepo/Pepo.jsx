import "./Pepo.css";

const pepos = [
  "https://i.pinimg.com/originals/99/22/ec/9922ecceb1bc3bbb731e47294453b5af.png",
  "https://assets.stickpng.com/images/5845cd230b2a3b54fdbaecf7.png",
  "https://img-16.stickers.cloud/packs/f06dcde3-89d1-4cfb-ba6f-d494c218e42d/webp/9d77dcbc-821e-4d1c-9ec4-9d5d5ee04b89.webp",
  "https://www.nicepng.com/png/full/444-4442058_pepe-hands-up-gif-pepo-emotes.png",
  "https://emoji.discadia.com/emojis/9c8f3ce5-1530-4f03-b138-88ae1f5ec881.PNG",
  "https://i.pinimg.com/originals/e6/b3/2e/e6b32e98eaf8c23157bd6c4e27224ef3.png",
  "https://usagif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif",
];

const Pepo = ({ size }) => {

    // lo que quiero que haga mi componente es que cuando lo llame me aparezca por la pantalla un nuevo pepo aleatorio con el tamaño que yo elija

  return <img style={{width: size, position: "absolute", top: Math.random() * innerHeight - 100, left: Math.random() * innerWidth - 100}} src={pepos[Math.floor(Math.random() * pepos.length)]}/>;
};

export default Pepo;
