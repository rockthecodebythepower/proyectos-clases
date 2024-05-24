export const navigate = ({ e, page, text, path }) => {
  e.preventDefault();
  window.history.pushState("", "", path);
  page();
};
