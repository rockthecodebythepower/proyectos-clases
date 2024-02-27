import { getPost } from "../services/API";
import { POST_NUM, restPostNum, sumPostNum } from "./var";

export const changePost = (operation, num) => {
  const post = document.querySelector(".post");

  post.classList.remove("fade-in-right");
  post.classList.remove("fade-in-left");
  post.classList.remove("fade-out-right");
  post.classList.remove("fade-out-left");

  if (operation === "-") {
    if (POST_NUM > 1) {
      restPostNum();
      post.classList.add("fade-out-right");
      setTimeout(() => {
        getPost(POST_NUM, "fade-in-left");
        num.textContent = POST_NUM;
      }, 500);
    }
  } else {
    if (POST_NUM < 99) {
      sumPostNum();
      post.classList.add("fade-out-left");
      setTimeout(() => {
        getPost(POST_NUM, "fade-in-right");
        num.textContent = POST_NUM;
      }, 500);
    }
  }
};
