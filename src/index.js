const http = require("http");
const fs = require("fs");


let app = http.createServer((req, res) => {
    if (req.url === "/textsync") {
        if (req.method === "GET") {
            res.write(fs.readFileSync("./text.txt", { encoding: "utf-8" }))
            res.end();
        }
    }
})



app.listen(8080, () => {
    console.log("started on : http://localhost:8080")
})