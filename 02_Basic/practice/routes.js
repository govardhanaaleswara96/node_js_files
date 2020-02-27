const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(url);
  console.log(method);
  if (url === "/") {
    res.write(`
      <html>
      <head>
      <title>Node Js</title>
      </head>
      <body>
          <form action="/msg"  method="POST">
              <input type="text" name="msg">
              <button>Send Request</button>
          </form>
      </body>
     </html>
      `);
    return res.end();
  }
  if (url === "/msg" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const text = parseBody.split("=")[1];
      console.log(parseBody);
      console.log(text);
      fs.writeFileSync("Msg.txt", text);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
     <html>
      <head>
      <title>Node Js</title>
      </head>
      <body>
      <h1>NODE JS SERVER RESPONSE</h1>
      </body>
     </html>
    `);
  res.end();
};

module.exports = requestHandler;
