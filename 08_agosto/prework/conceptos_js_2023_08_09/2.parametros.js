function sayHello(firstName) {
  if (typeof firstName === "string") {
    console.log("Hello " + firstName);
  } else {
    console.log("Por favor, utiliza un string");
  }
}

/* const date = new Date();
const today = date.toLocaleDateString("JA-jp", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
})
console.log(today) */

function calculateAge(firstName, bornYear, currentYear = 2023) {
  const age = currentYear - bornYear;
  console.log(firstName + " tiene " + age + " años.");
}

calculateAge("Antonio", 1990);
calculateAge("Freddie Mercury", 1946, 1980);

function describeUser(
  user = {
    firstName: "Anonimo",
    lastName: "Anonimo",
    city: "Unknown",
    job: "Unknown",
  }
) {
  console.log(
    user.firstName +
      " " +
      user.lastName +
      " vive en " +
      user.city +
      " y trabaja cómo " +
      user.job
  );
}

const peterparker = {
  firstName: "Peter",
  lastName: "Parker",
  city: "New York",
  job: "Fotógrafo",
};

describeUser(peterparker);
describeUser()