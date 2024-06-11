//* Normal fs module
// const fs = require("node:fs");

// console.log("first")
// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// console.log("second")

// fs.readFile("./file.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log("third")

// fs.writeFileSync("./greet.txt", "Hello World!");

// fs.writeFile("./greet.txt", " Hello Nishan!", { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File written sucessfully");
//   }
// });

//* Promise based fs

const fs = require("node:fs/promises");
// const check = fs.readFile("file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

async function readFile(){
    try {
        const data = await fs.readFile("./file.txt","utf-8")
        console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }
}
readFile()
