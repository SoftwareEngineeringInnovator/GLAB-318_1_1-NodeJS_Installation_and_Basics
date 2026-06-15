// GLAB 318.1.1 - NodeJS Installation and Basics
const http = require("http");

const hostname = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {
        res.end(
            "Home Page\n" +
            "Hello World!\n" +
            "I am a Software Engineering Innovator!\n" +
            "I am learning Node.js."
        );

    } else if (req.url === "/about") {
        res.end(
            "About Page\n" +
            "This is my first Node.js server.\n" +
            "I am learning how backend routes work."
        );

    } else if (req.url === "/contact") {
        res.end(
            "Contact Page\n" +
            "GitHub: SoftwareEngineeringInnovator\n" +
            "Project: NodeJS Installation and Basics"
        );

    } else {
        res.statusCode = 404;
        res.end("404 Page Not Found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});