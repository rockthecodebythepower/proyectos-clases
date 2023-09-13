export const getJson = async (endpoint) => {
    const res = await fetch("https://harry-potter-api.onrender.com/" + endpoint);
    const response = await res.json();
    return response;
}