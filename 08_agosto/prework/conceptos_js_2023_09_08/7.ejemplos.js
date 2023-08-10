"antonio.rosales@antonio.com";

const isValidEmail = (email) => {
  if (typeof email === "string") {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");
    if (atIndex <= 0 || dotIndex <= atIndex || dotIndex === email.length - 1) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};

console.log(isValidEmail("antonio.rosales@antonio.com"));
