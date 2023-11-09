fetch("https://thronesapi.com/api/v2/Characters")
  .then((res) => res.json())
  .catch((error) => console.log(error))
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

const funcionAsync = async () => {
  try {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const res = await response.json();
    for (const c of res) {
        const img = document.createElement("img");
        img.src = c.imageUrl;
        document.body.appendChild(img);
    }
  } catch (error) {
    console.log(error);
  }
};

funcionAsync();

async function nombreFuncion() {}