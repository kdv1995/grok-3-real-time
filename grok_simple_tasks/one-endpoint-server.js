const express = require("express");

//I guess now u understand that i'm using the express modules to create a simple http server. Just follow.

const app = express();
const simpleDataObject = {
  name: "John Doe",
  age: 25,
  isStudent: true,
  isDeveloper: true,
  isMale: true,
};

//we will register to endpoint to the server. First will be localohsto:3000 public root endpoint and the second will be /data to send back and stringified object version to the user within
//the browser.

app.get("/", (_, res) => {
  //It will show that our api server works fine;
  res.send("Restful API server is running");
});
app.get("/data", (_, res) => {
  res.send(JSON.stringify(simpleDataObject));
});

//By the way, every part of the app can be configured with .ENV file which is a good practice to keep the configuration in a seperate file. If you will follow this patter in programming, you will
//be able to build  a stable and easy-to-configure system with modules that are not tighly coupled

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
  //As u can see both of the endpoints work fine. Just, remember, we work with computer and they are super logical. So, if you have a problem with your code, it's your fault. So, don't blame the computer.
});

//Thx for watching. Tomorrow, I will continute to implement the medium part of the tasks and it would be interesting to see how the server will work with the database. So, stay tuned.
