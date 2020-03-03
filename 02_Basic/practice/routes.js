const fs = require("fs");

const reqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  //console.log(url);
  //console.log(method);
  //console.log(req.headers);
  if (url === "/") {
    // res.setHeader("Content_type", "text/html");
    res.write(`
          <html>
          <body>
          <form action="/msg" method="POST"  >
            <input type="text" name="msg">
            <button>Submit</button>
          </form>
          </body>
          </html>
      `);
    return res.end();
  }
  if (url === "/msg" && method === "POST") {
    console.log("hii");
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const msg = parseBody.split("=")[1];
      console.log(parseBody);
      console.log(msg);
      //   fs.writeFileSync("Msg.txt", msg);
      fs.writeFile("Msg.txt", msg, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content_type", "text/html");
  res.write(`
      <html>
      <body>
          <h1>I AM NODE JS SERVER</h1>
      </body>
      </html>
    `);
  res.end();
};
module.exports = reqHandler;
