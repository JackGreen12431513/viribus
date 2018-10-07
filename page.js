http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Playing on ${client.guilds.size} guilds with ${client.users.size} users!\n\nSwarley's Stats: \nCoins: ${userData['497878336530415616'].coins}\nPickaxe: ${userData['497878336530415616'].pickaxe}\nValue: ${userData['497878336530415616'].userValue}`);
}).listen(8080);