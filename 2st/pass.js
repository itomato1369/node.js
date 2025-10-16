// pass.js
//
const path = require("path");
const process = require("process");
const crypto = require("crypto");

// console.log(path);

// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.basename(__filename, ".js"));

// console.log(path.delimiter);

// console.log(process.env.PATH);
// console.log(process.env.PATH.split(path.delimiter));

// console.log(__filename);
// console.log(path.dirname(__filename));

// console.log(path.extname("index.html"));

// path.format({
//   root: "/ignored",
//   dir: "/home/user/dir",
//   base: "file.txt",
// });

// path.format({
//   root: "/",
//   name: "file",
//   ext: "ignored",
// });

// path.format({
//   root: "/",
//   name: "file",
//   ext: ".txt",
// });

// console.log(path.format);

// let ap1 = path.isAbsolute;
// console.log(ap1);

// let ap = path.join("/foo", "bar", "bazz/asdf");
// console.log(ap);

// let ap1 = path.parse("/home/user/dir/file.txt");
// console.log(ap1);

// console.log(path.sep);

// URL
// const myUrl = new URL("https://www.naver.com/");
// // console.log(myUrl.hash);

// myUrl.hash = "bas";
// console.log(myUrl.hash);

// WHATWG API
// const myUrl = new URL(
//   "https://www.google.com/search?q=d&oq=d&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDsyBggDEEUYOzIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEJMTA4NGowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8"
// );
// console.log(myUrl.searchParams.get("user"));
// console.log(myUrl.searchParams.has("user"));
// console.log(myUrl.searchParams.keys());
// console.log(myUrl.searchParams.values());
// myUrl.searchParams.append("user", "admin");
// console.log(myUrl.searchParams.getAll("user"));
// myUrl.searchParams.set("user", "admin");
// myUrl.searchParams.delete("user");
// console.log(myUrl.searchParams.toString());

// 레거시 API
// const url = require("url");
// console.log(
//   url.parse(
//     "https://www.google.com/search?q=d&oq=d&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDsyBggDEEUYOzIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEJMTA4NGowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8"
//   )
// );

// cryptno
crypto.createHash("yale12").update("pw12").digest("base64");

const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });
};
