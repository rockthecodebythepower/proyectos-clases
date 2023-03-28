import "./Mail.css";

export const Mail = (mail) => {
  return `
<a href="mailto@${mail}" target="_blank" class="mail">
${mail}
</a>
    `;
};
