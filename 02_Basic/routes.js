const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <form action="/msg" method="POST">
        <input type="text" name="msg" >
        <button>Submit</button>
      </form>
      `);
    return res.end();
  }
  if (url === "/msg" && method === "POST") {
    const body = [];
    // push data chunk
    req.on("data", chunk => {
      body.push(chunk);
      console.log(chunk);
    });
    //parse data
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
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title>My Node Js Response</title></head>");
  //   res.write("<body><h1>I AM FROM NODE JS SERVER RESPONSE </h1></body>");
  //   res.write("</html>");
  res.setHeader("Content-Type", "text/html");
  res.write(
    `<html> <head> <title>Node Js</title></head> <body><h1>Hello Node Js</h1></body> </html>`
  );
  res.end();
};

//module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   text: "I Am Import Text"
// };

module.exports.handler = requestHandler;
