import { printPost } from "../components/Post/Post";
import { BASE_URL } from "../utils/var";

export const getPost = async (num, className) => {
  //!                    pido algo a un servidor - PROCESO ASÍNCRONO
  const response = await fetch(BASE_URL + num);

  //!                transformo la respuesta - PROCESO ASÍNCRONO
  const post = await response.json();

  printPost(post, className);
};
