const http = require("http");
const fs = require("fs");


let app = http.createServer((req, res) => {
    if (req.url === "/textsync") {
        if (req.method === "GET") {
            res.write(fs.readFileSync("./text.txt", { encoding: "utf-8" }))
            res.end();
        }
    }
    else if (req.url.startsWith("/textasync")) {
        if (req.method === "GET") {
            res.write(fs.readFile("./example.txt", "utf8", function (err, data) {
                console.log(data);
            }));
            res.end();
        }
    }
    else if (req.url === "/textstream") {
        if (req.method === "GET") {
            let readStream = fs.createReadStream("./stream.txt");
            res.write(readStream);
            res.end();
        }
    }
})



app.listen(8080, () => {
    console.log("started on : http://localhost:8080")
})