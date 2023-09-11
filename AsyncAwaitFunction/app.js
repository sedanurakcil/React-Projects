import getData from "./getData.js";

getData(1)
  .then((userData) => console.log(userData))
  .catch((error) => console.log("User Info request error", error))


