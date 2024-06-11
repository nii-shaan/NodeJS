const fs = require("node:fs");

const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readAbleStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

readAbleStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writAbleStream = fs.createWriteStream("./file2.txt");
// readAbleStream.pipe(writAbleStream);

// readAbleStream.on("data", (chunk) => {
//   console.log(chunk);
//   writAbleStream.write(chunk)
// });
