export const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";
export let POST_NUM = 1;

export const sumPostNum = () => {
    POST_NUM++;
}

export const restPostNum = () => {
    POST_NUM--;
}