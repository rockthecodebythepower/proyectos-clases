import emailjs from "@emailjs/browser";

export const sendEmail = async (e) => {
  e.preventDefault();
  const [email, subject, content] = e.target;

  const templateParams = {
    email: email.value,
    subject: subject.value,
    content: content.value,
  };

  e.target.classList.add("loading");

  try {
    await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      templateParams,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    );

    e.target.classList.add("success");
  } catch (error) {
    e.target.classList.add("error");
  }

  e.target.classList.remove("loading");
};
