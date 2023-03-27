//6ª función -> almacenamos cambios en el localStorage
export const setLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
