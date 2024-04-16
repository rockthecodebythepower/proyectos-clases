import "./Flex.css";

export const Flex = ({ children }) => {
  return `
        <div class="flex">
            ${children}
        </div>
    `;
};
