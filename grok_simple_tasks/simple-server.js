const express = require("express");

const http = require("http");

//const app = express();

//app.route("/").get((req, res) => {
// This is how route endpoint is defined with the most popular node js framework express.
//As you can see we have the path which is "/" and we connect it tho the desired method as get in this case.
//Within the get method we have a callback function which takes two parameters req and res.
//req is the request object and res is the response object.

//  res.send("You are welcome. Our first server works fine");
//});

//Here is an example how to do the natively with node.js

const server = http.createServer((req, res) => {
  //by the way now all of the path are registered within the req object. Let's see autocomplete
  const currentReqPath = req.url;
  console.log(currentReqPath);
  //So if i will go to browser, you will see that each time i'm writing patter like this https://some_link/some_path
  //In this case some path will be equalt to req.url
  //Let's see how it works practically, because that's all about how js works and all of the concepts are easy if you try
  //to understand them in practice.
  //I forget to send a response to the client, otherwise server will be spinning without sending the request and we will not be able to see the result. let' do that stuff;
  //As u can see we have successfully got a response within the node js terminal that we tried to reach to server out, but we don't specify the specific path the response should be return. Let's fix it out;
  if (currentReqPath === "/") {
    //What the error how how send response back with the simple ndoe js server??
    //The error was so simple, the codebase needs to be updated each time. Parser doesnt' look inside the server to follow changes.
    //Ok, first task is done simple node js server works let's follow next task from grok
    //Now everything works fine. Sorry, this is the first time I'm streaming. Hope u enjoying music now. Let's keep the vibe
    //Let's move to the next interesting task with node js
    return res.setHeader("Content-Type", "text/html"), res.end("Hello World");
  }
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
