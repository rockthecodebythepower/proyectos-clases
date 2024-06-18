export const submitRegister = async (e) => {
  e.preventDefault();
  const [userName, email, def, img, password] = e.target;

  const formData = new FormData();
  formData.append("userName", userName.value);
  formData.append("email", email.value);
  formData.append("def", def.value);
  formData.append("img", img.files[0]);
  formData.append("password", password.value);

  const res = await fetch("http://localhost:3000/api/v1/users/register", {
    method: "POST",
    body: formData,
  });

  const response = await res.json();
  console.log(response);
  e.target.reset();
};
