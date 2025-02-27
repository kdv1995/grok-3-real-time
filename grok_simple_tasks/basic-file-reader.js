//As we need to read a file we would use an fs module. We could use the fs modules with err/callback approach or we could use promise module of fs.
//I prefer to use err/callback approach to demonstrate the basic file reading and to show the that calllback approach is the simplest way to show the async nature of the fs module.
const fs = require("fs");

//1.as u can see this function takes several arguments and the first one is the actual path of the file
//2. The second argument is the encoding of the file. If we don't provide the encoding it will return the buffer.
//3. The third argument is the callback function which will be called when the file is read.
fs.readFile("./data/sample.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data.toString()); //As the data is in buffer we need to convert it to string
  //As u can see we path the file path and the second argument is a callback function that follows a common pater as err, data
  //Finally, I have successfully, implemented the simple file reader. So, you can use fs module for different purposes. With this approach you can read asyn any type of while, but you need to handle the error properly.
});
