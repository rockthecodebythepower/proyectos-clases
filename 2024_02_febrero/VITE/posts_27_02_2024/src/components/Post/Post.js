import "./Post.css";

export const printPost = (post, className = "") => {
  const divPosts = document.querySelector("#posts");
  divPosts.innerHTML = `
        <div class="post ${className}">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>
      `;
};
