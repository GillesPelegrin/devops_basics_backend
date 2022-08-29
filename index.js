const createServer = require("./src/create-server.js");

const app = createServer();

// app.listen(process.env.PORT, () => console.log(`Start server successfully on port ${process.env.PORT}`))
 app.listen(3001, () => console.log(`Start server successfully on port ${process.env.PORT}`))