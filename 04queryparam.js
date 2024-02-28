let http = require('http');
let url = require('url');

let server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    console.log(request.url);
    let myquery = request.url;
    console.log(url.parse(request.url).query);
    let parameter = url.parse(myquery, true).query;
    let id1 = parameter?.vid1;
    let id2 = parameter?.vid2;
    response.write(`<h1>Id:${id1} & ${id2}</h1>`);
    response.write(`<h2>Player</h2>`);
    response.write(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id1}?si=4C0h-N9V1n26JxCj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>`);
    response.write(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id2}?si=htbtqEEoU8vO5kmn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    response.end()
}).listen(1234, () => {
    console.log("Listening on port 1234");
})