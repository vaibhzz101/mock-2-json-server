const jsonserver = require("json-server")
const cors = require('cors')
const path = require('path');
const server = jsonserver.create();
const route = jsonserver.router('db.json');
const middleware = jsonserver.defaults();

server.use(cors());
server.use(middleware);
server.use(route);
server.use(jsonserver.bodyParser);

const PORT = 7070;

server.listen(PORT, ()=> {
    console.log(`server is running at ${PORT}`)
})